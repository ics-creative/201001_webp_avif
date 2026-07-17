import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, parse } from "node:path";
import sharp from "sharp";

/**
 * public/img 内の JPEG/PNG から WebP/AVIF を dist/img に生成する Vite プラグイン
 */
export function generateFormats(options = {}) {
  const {
    srcDir = "public/img",
    destDir = "img",
    webp = { quality: 80 },
    avif = { quality: 70 },
  } = options;

  return {
    name: "generate-formats",
    apply: "build",
    async closeBundle() {
      const inputDir = join(process.cwd(), srcDir);
      const outputDir = join(process.cwd(), "dist", destDir);
      mkdirSync(outputDir, { recursive: true });

      const files = readdirSync(inputDir).filter((file) =>
        /\.(jpe?g|png)$/i.test(file),
      );

      await Promise.all(
        files.map(async (file) => {
          const inputPath = join(inputDir, file);
          const { name, ext } = parse(file);
          const buffer = readFileSync(inputPath);

          writeFileSync(join(outputDir, file), buffer);

          await sharp(buffer)
            .webp(webp)
            .toFile(join(outputDir, `${name}.webp`));

          await sharp(buffer)
            .avif(avif)
            .toFile(join(outputDir, `${name}.avif`));
        }),
      );
    },
  };
}
