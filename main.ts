import * as fs from "node:fs";

const line =
  "Our office fridge has a yoghurt from 2023 with a Post-it that says 'DO NOT EAT', and honestly, at this point the yoghurt has more seniority than I do.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line, "utf8");
