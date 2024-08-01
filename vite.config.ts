import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@assets", replacement: "/src/assets" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@layout", replacement: "/src/layout" },
      { find: "@components", replacement: "/src/components" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@store", replacement: "/src/store" },
      { find: "@routes", replacement: "/src/routes" },
      { find: "@config", replacement: "/src/config" },
      { find: "@interfaces", replacement: "/src/types" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@helpers", replacement: "/src/helpers" },
      { find: "@sections", replacement: "/src/sections" },
      { find: "@services", replacement: "/src/services" },
      { find: "@utils", replacement: "/src/utils" },
    ],
  },
});
