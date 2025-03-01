import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { handler } from "./dist/server/entry.mjs"; // your server entry point from the node adapter

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static assets from the "client" folder.
// This ensures that requests to /_astro/* return the actual CSS/JS files.
app.use(express.static(path.join(__dirname, "dist", "client")));

// Use Astro’s SSR handler for all other routes.
app.use(handler);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
