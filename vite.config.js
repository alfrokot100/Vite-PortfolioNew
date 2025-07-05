import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Gör det möjligt att göra import direkt med ett @ ist för referera till en massa folders
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
