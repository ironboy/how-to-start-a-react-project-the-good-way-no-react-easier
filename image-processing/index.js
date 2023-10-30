import {
  mkdirSync, rmSync, existsSync,
  readdirSync, statSync
} from 'fs';
import sharp from 'sharp';
import { dirname, join as pathJoin, basename } from 'path';
import { fileURLToPath } from 'url';
import { writeFile } from 'fs/promises';

// Settings
const settings = {
  jpgQuality: 70,
  widths: [250, 500, 1000, 1500, 2000]
}

// The path to the directory this script is in
const __dirname = dirname(fileURLToPath(import.meta.url));

// Paths to the source and destination folders for images
const srcFolder = pathJoin(__dirname, '..', 'public', 'images', 'sources');
const destFolder = pathJoin(__dirname, '..', 'public', 'images', 'scaled');

// Delete, if exists, and then (re)create the destination folder
existsSync(destFolder) && rmSync(destFolder, { recursive: true, force: true });
mkdirSync(destFolder);

// Get the jpg files to process
let files = readDirRecursive(srcFolder)
  .filter(x => x.slice(-4) === '.jpg');


// Process files
for (let file of files) {
  let destPath = file.replace(srcFolder, destFolder);
  let destFolderPath = dirname(destPath);
  // create folder if not exists
  !existsSync(destFolderPath) && mkdirSync(destFolderPath);
  // scale image
  for (let width of settings.widths) {
    console.log('Scaling ' + basename(file), 'to width', width);
    await sharp(file)
      .resize({ width, quality: settings.jpgQuality })
      .toFile(destPath.slice(0, -4) + '-' + width + 'w.jpg');
  }
}


// read all files in a folder and its sub folders
// (from StackOverflow)
function readDirRecursive(dir) {
  var results = [];
  var list = readdirSync(dir);
  list.forEach(function (file) {
    file = dir + '/' + file;
    var stat = statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(readDirRecursive(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

