// 루트의 웹앱 파일을 Capacitor용 www/ 폴더로 복사합니다.
// (GitHub Pages는 루트에서, 안드로이드 앱은 www/에서 같은 소스를 사용)
import { mkdirSync, copyFileSync, rmSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const www = join(root, "www");

const FILES = [
  "index.html",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "icon-maskable.png",
  "apple-touch-icon.png"
];

if (existsSync(www)) rmSync(www, { recursive: true, force: true });
mkdirSync(www, { recursive: true });

for (const f of FILES) {
  copyFileSync(join(root, f), join(www, f));
}
console.log(`copied ${FILES.length} files -> www/`);
