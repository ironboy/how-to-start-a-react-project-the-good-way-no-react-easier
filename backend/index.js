import express from 'express';

// some internal Node modules used to
// get the absolute path to the folder 
// the folder this script is in
import { read, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// port for the web server to listen on
const port = 5001;
// Create a web server
const app = express();

// Make it possible for our web server
// to read request bodies
app.use(express.json({ limit: '1MB' }));

// start up the web server
app.listen(port, () =>
  console.log(`http://localhost:${port}`)
);

// test setting up an api route - that answers with json
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello world!' });
});

// 'simulate'/mock a rest route with some data 
// (before we have addded a real db)
const products = JSON.parse(readFileSync(
  join(__dirname, 'products.json'), 'utf-8'
));;
app.get('/api/products', (req, res) => {
  res.json(products);
});

// serve the dist folder (the production code for our frontend)
// that you generate by writing "npm run build"
const distFolder = join(__dirname, '../', 'dist');
app.use(express.static(distFolder));
// also (for hard page reloads to work serve index.html if no file found)
app.get('*', (req, res) => {
  res.sendFile(join(distFolder, 'index.html'))
});

// test

