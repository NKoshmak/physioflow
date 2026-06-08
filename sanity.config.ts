import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { homepage } from "./src/sanity/schemas/homepage";

export default defineConfig({
  name: "default",
  title: "PhysioFlow",

  projectId: "dqvw443m",
  dataset: "production",

  plugins: [structureTool()],

  schema: {
    types: [homepage],
  },
});