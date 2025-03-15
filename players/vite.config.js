import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import federation from "@originjs/vite-plugin-federation"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "players",
      filename: "remoteEntry.js",
      exposes: {
        "./Players": "./src/Players"
      },
      shared: ["react", "react-dom"]
    })
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  },
  preview: {
    host: "localhost",
    port: 5002,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }
})
