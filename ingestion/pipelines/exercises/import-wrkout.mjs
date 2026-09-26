#!/usr/bin/env node
/**
 * MyTrainX — wrkout/exercises.json importer
 *
 * Source: https://github.com/wrkout/exercises.json
 * License: Unlicense (verified 2026-09-25)
 *
 * Purpose:
 * - discover every upstream exercise.json from the repository tree;
 * - fetch all records from raw.githubusercontent.com;
 * - normalize them into MyTrainX exercise seed records;
 * - preserve source provenance;
 * - DO NOT mark them publish-ready: localization and exercise review remain required.
 *
 * Usage:
 *   node ingestion/pipelines/exercises/import-wrkout.mjs
 *
 * Output:
 *   manifests/exercises/wrkout-unlicense.en.v1.jsonl
 */

import fs from "node:fs/promises";
import path from "node:path";

const OWNER = "wrkout";
const REPO = "exercises.json";
const REF = "master";
const OUT = "manifests/exercises/wrkout-unlicense.en.v1.jsonl";
const CONCURRENCY = 12;

const headers = {
  "User-Agent": "mytrainx-data-ingestion",
  Accept: "application/vnd.github+json",
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function mapType(category) {
  const value = String(category || "").toLowerCase();
  if (value === "strength") return "strength";
  if (value === "cardio") return "conditioning";
  if (value === "stretching") return "flexibility";
  if (value === "plyometrics") return "conditioning";
  if (value === "strongman") return "strength";
  if (value === "powerlifting") return "strength";
  if (value === "olympic weightlifting") return "strength";
  return "other";
}

function mapDifficulty(level) {
  const value = String(level || "").toLowerCase();
  if (["beginner", "intermediate", "advanced"].includes(value)) return value;
  return "all_levels";
}

async function getJson(url) {
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  }
  return response.json();
}

async function mapConcurrent(items, limit, fn) {
  const results = new Array(items.length);
  let cursor = 0;

  async function worker() {
    while (true) {
      const index = cursor++;
      if (index >= items.length) return;
      results[index] = await fn(items[index], index);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

async function main() {
  const repo = await getJson(`https://api.github.com/repos/${OWNER}/${REPO}`);
  const tree = await getJson(
    `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${REF}?recursive=1`,
  );

  if (tree.truncated) {
    throw new Error("GitHub returned a truncated tree. Use a repository archive fallback.");
  }

  const files = tree.tree
    .filter((entry) => entry.type === "blob" && /^exercises\/[^/]+\/exercise\.json$/.test(entry.path))
    .map((entry) => entry.path)
    .sort();

  console.log(`Found ${files.length} exercise records at upstream commit ${repo.pushed_at || "unknown"}.`);

  const normalized = await mapConcurrent(files, CONCURRENCY, async (filePath, index) => {
    const rawUrl = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${REF}/${filePath}`;
    const source = await getJson(rawUrl);

    if ((index + 1) % 50 === 0) {
      console.log(`Fetched ${index + 1}/${files.length}`);
    }

    return {
      slug: slugify(source.name),
      name: source.name,
      canonical_name: source.name,
      locale: "en",
      aliases: [],
      exercise_type: mapType(source.category),
      difficulty: mapDifficulty(source.level),
      equipment: source.equipment ? [String(source.equipment)] : [],
      primary_muscles: Array.isArray(source.primaryMuscles) ? source.primaryMuscles : [],
      secondary_muscles: Array.isArray(source.secondaryMuscles) ? source.secondaryMuscles : [],
      movement_patterns: [],
      body_regions: [],
      instructions: Array.isArray(source.instructions) ? source.instructions : [],
      coaching_cues: [],
      common_mistakes: [],
      safety_notes: [],
      source: {
        provider: "github",
        repository: `${OWNER}/${REPO}`,
        ref: REF,
        path: filePath,
        url: rawUrl,
        license: "Unlicense",
        license_url: `https://github.com/${OWNER}/${REPO}/blob/${REF}/LICENSE.md`,
      },
      status: "draft",
      review_status: "pending",
      metadata: {
        upstream_force: source.force ?? null,
        upstream_mechanic: source.mechanic ?? null,
        upstream_category: source.category ?? null,
        localization_status: "pending",
        visual_status: "needs_mytrainx_media",
        imported_at: new Date().toISOString(),
      },
    };
  });

  const seen = new Map();
  for (const item of normalized) {
    const count = seen.get(item.slug) || 0;
    seen.set(item.slug, count + 1);
    if (count > 0) item.slug = `${item.slug}-${count + 1}`;
  }

  await fs.mkdir(path.dirname(OUT), { recursive: true });
  await fs.writeFile(OUT, normalized.map((x) => JSON.stringify(x)).join("\n") + "\n", "utf8");

  const report = {
    source: `${OWNER}/${REPO}`,
    license: "Unlicense",
    imported_records: normalized.length,
    output: OUT,
    publication_status: "NOT publish-ready; localization and exercise review required",
  };
  console.log(JSON.stringify(report, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
