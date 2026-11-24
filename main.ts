import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I promise to love you through every firmware update, every low-battery warning, and every surprise reboot, until our uptime finally runs out.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
