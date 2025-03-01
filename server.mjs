// server.js (using middleware mode)
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { handler } from "./dist/server/entry.mjs"; // In middleware mode, the adapter exports a handler

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static assets from the 'dist' folder
app.use(express.static(path.join(__dirname, "dist")));

// Use Astro's SSR handler for all other routes
app.use(handler);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
