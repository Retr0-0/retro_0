// convert-to-webp.js
// Usage: node scripts/convert-to-webp.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const PUBLIC_DIR = path.join(__dirname, '../public');

function getAllImageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImageFiles(filePath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (IMAGE_EXTENSIONS.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  return results;
}

async function convertToWebp(filePath) {
  const webpPath = filePath.replace(/\.(png|jpe?g)$/i, '.webp');
  if (fs.existsSync(webpPath)) {
    console.log(`Skipping (already exists): ${webpPath}`);
    return;
  }
  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(webpPath);
    console.log(`Converted: ${filePath} -> ${webpPath}`);
  } catch (err) {
    console.error(`Error converting ${filePath}:`, err);
  }
}

async function main() {
  const images = getAllImageFiles(PUBLIC_DIR);
  for (const img of images) {
    await convertToWebp(img);
  }
  console.log('WebP conversion complete.');
}

main(); 