import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "dqvw443m",
  dataset: "production",
  apiVersion: "2026-06-07",
  useCdn: false,
});