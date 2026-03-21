import fs from "fs";
import path from "path";

const truthPath = path.join(process.cwd(), "src", "resources", "truths.ts");

const newQuote = process.argv[2];

if (!newQuote) {
  console.error("Usage: bun run scripts/add-truth.ts \"En vérité en vérité, votre citation...\"");
  process.exit(1);
}

const formatQuote = newQuote.startsWith("En vérité en vérité") 
  ? newQuote 
  : `En vérité en vérité, ${newQuote}`;

const rawContent = fs.readFileSync(truthPath, "utf-8");

const truthsMatch = rawContent.match(/export const truths: Truth\[] = \[(.*)\];/s);

if (!truthsMatch) {
  console.error("Could not find truths array in truths.ts");
  process.exit(1);
}

const truthsArray = truthsMatch[1].trim();
const lastIdMatch = truthsArray.match(/id: "(\d+)"/g);
const nextId = lastIdMatch ? Math.max(...lastIdMatch.map(m => parseInt(m.match(/\d+/)![0]))) + 1 : 1;

const newEntry = `
  {
    id: "${nextId}",
    quote: "${formatQuote}",
    author: "Audrey Senou",
    date: "${new Date().toISOString().split('T')[0]}",
  },`;

const newContent = rawContent.replace(
  /export const truths: Truth\[] = \[(.*)\];/s,
  `export const truths: Truth[] = [$1${newEntry}\n];`
);

fs.writeFileSync(truthPath, newContent);

console.log(`✅ Added new truth: "${formatQuote}"`);
