import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import federation from "@originjs/vite-plugin-federation"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container_app",
      remotes: {
        players: "http://localhost:5002/assets/remoteEntry.js"
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.0.0"
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.0.0"
        }
      }
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
})
