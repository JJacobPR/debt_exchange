import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components"),
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, "./src/hooks"),
      },
      {
        find: "@partials",
        replacement: path.resolve(__dirname, "./src/assets/partials/partials.scss"),
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "./src/assets"),
      },
      {
        find: "@ui",
        replacement: path.resolve(__dirname, "./src/ui"),
      },
      {
        find: "@store",
        replacement: path.resolve(__dirname, "./src/store"),
      },
    ],
  },
});
