import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { connectDB } from "./config";
import resourceRoutes from "./routes/resource.route";
import { cors } from "hono/cors";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const app = new Hono();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS

// Test route
app.get("/", (c) => c.text(" Welcome to CSK Learning Resource Hub API"));

// Resource Routes
app.route("/resource", resourceRoutes);

// Start Server
connectDB().then(() => {
  serve({ fetch: app.fetch, port: Number(port) }, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
});
