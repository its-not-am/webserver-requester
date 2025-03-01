import express from "express";
import { handler } from "./dist/server/entry.mjs"; // Adjust if your adapter exports a handler

const app = express();
const port = process.env.PORT || 3000;

app.use(handler);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
