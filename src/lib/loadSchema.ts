import fs from "fs";
import path from "path";

// Helper function to load schema JSON files
export function loadSchema(slug: string): any {
  try {
    const filePath = path.join(process.cwd(), "src", "schema", "face", `${slug}.json`);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading schema:", error);
    return null;
  }
}