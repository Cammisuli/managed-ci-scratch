// Prints each expression from sources.json next to the value this runner gave it.
const fs = require("fs");
const path = require("path");

const sources = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "expressions", "sources.json"), "utf8")
);
const width = Math.max(...Object.values(sources).map((e) => e.length));

console.log("Evaluated by: " + (process.env.GITHUB_ACTIONS ? "GitHub Actions" : "Nx Cloud managed CI"));
for (const [key, expr] of Object.entries(sources)) {
  const value = key in process.env ? JSON.stringify(process.env[key]) : "(unset)";
  console.log(`${key}  ${expr.padEnd(width)}  =>  ${value}`);
}
