// generate-streak.js
const fs = require("fs");
const path = require("path");
// require directly from the vendored folder
const { renderStreakStats } = require("./streak-src/src/streak-card");

async function main() {
  const svg = await renderStreakStats({
    user: "rafi983",
    theme: "vision-friendly-dark",
  });
  fs.writeFileSync(path.join(__dirname, "streak.svg"), svg);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
