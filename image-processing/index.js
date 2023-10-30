import { mkdirSync, rmSync, existsSync } from 'fs';
import { dirname, join as pathJoin } from 'path';
import { fileURLToPath } from 'url';

// The path to the directory this script is in
const __dirname = dirname(fileURLToPath(import.meta.url));

// Paths to the source and destination folders for images
const srcFolder = pathJoin(__dirname, '..', 'public', 'images', 'sources');
const destFolder = pathJoin(__dirname, '..', 'public', 'images', 'scaled');

// Delete, if exists, and then (re)create the destination folder
existsSync(destFolder) && rmSync(destFolder, { recursive: true, force: true });

// Get a file listing of all files in the 
