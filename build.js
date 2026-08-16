// Tiny build script for the demo project.
const API_KEY = process.env.API_KEY;

function buildManifest() {
  if (!API_KEY) {
    throw new Error("API_KEY is not defined");
  }
  return { name: "ci-demo", key: API_KEY.slice(0, 4) + "***" };
}

console.log("Building…");
console.log(JSON.stringify(buildManifest()));
console.log("Build OK");
