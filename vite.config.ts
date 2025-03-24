import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "@svgr/rollup"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(new URL("./src", import.meta.url).pathname),
    },
  },
})
