// vite.config.ts
import { normalizePath } from "file:///C:/Development/Personal/source/microfront-vite-react/node_modules/.pnpm/vite@4.1.3_sass@1.58.3/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Development/Personal/source/microfront-vite-react/node_modules/.pnpm/@vitejs+plugin-react-swc@3.2.0_vite@4.1.3/node_modules/@vitejs/plugin-react-swc/index.mjs";
import css from "file:///C:/Development/Personal/source/microfront-vite-react/node_modules/.pnpm/unocss@0.49.7_vite@4.1.3/node_modules/unocss/dist/vite.mjs";
import { checker } from "file:///C:/Development/Personal/source/microfront-vite-react/node_modules/.pnpm/vite-plugin-checker@0.5.6_eslint@8.34.0_typescript@4.9.5_vite@4.1.3/node_modules/vite-plugin-checker/dist/esm/main.js";
import svg from "file:///C:/Development/Personal/source/microfront-vite-react/node_modules/.pnpm/vite-plugin-svgr@2.4.0_vite@4.1.3/node_modules/vite-plugin-svgr/dist/index.mjs";
import { createHtmlPlugin as html } from "file:///C:/Development/Personal/source/microfront-vite-react/node_modules/.pnpm/vite-plugin-html@3.2.0_vite@4.1.3/node_modules/vite-plugin-html/dist/index.mjs";
import federation from "file:///C:/Development/Personal/source/microfront-vite-react/node_modules/.pnpm/@originjs+vite-plugin-federation@1.2.1/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";

// package.json
var dependencies = {
  "@libs/router": "workspace:*",
  "@shared/store": "workspace:*",
  "@shared/ui": "workspace:*",
  react: "^18.2.0",
  "react-dom": "^18.2.0"
};

// vite.config.ts
var isDev = process.env.MODE === "development";
var vite_config_default = {
  base: normalizePath(`/${process.env.BASE_URL}`),
  server: {
    open: true,
    https: process.env.HTTPS === "true",
    port: +process.env.PORT
  },
  preview: {
    open: true,
    port: +process.env.PORT,
    cors: true
  },
  build: {
    sourcemap: process.env.GENERATE_SOURCEMAP === "true",
    emptyOutDir: true,
    minify: true,
    target: process.env.TARGET
  },
  plugins: [
    react(),
    css(),
    svg(),
    checker({
      typescript: true,
      enableBuild: true,
      eslint: {
        lintCommand: "eslint src/**/*.{ts,tsx}",
        dev: { logLevel: ["error"] }
      }
    }),
    html({
      entry: isDev ? "src/main.tsx" : void 0,
      template: isDev ? "index.html" : void 0,
      inject: {
        data: process.env
      },
      minify: true
    }),
    federation({
      name: process.env.VITE_APP_TITLE,
      filename: `${process.env.VITE_APP_NAME}.js`,
      exposes: {
        MainPage: "./src/pages/Main.page.tsx"
      },
      shared: dependencies
    })
  ]
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcRGV2ZWxvcG1lbnRcXFxcUGVyc29uYWxcXFxcc291cmNlXFxcXG1pY3JvZnJvbnQtdml0ZS1yZWFjdFxcXFxzcmNcXFxcYXBwc1xcXFxob21lXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxEZXZlbG9wbWVudFxcXFxQZXJzb25hbFxcXFxzb3VyY2VcXFxcbWljcm9mcm9udC12aXRlLXJlYWN0XFxcXHNyY1xcXFxhcHBzXFxcXGhvbWVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L0RldmVsb3BtZW50L1BlcnNvbmFsL3NvdXJjZS9taWNyb2Zyb250LXZpdGUtcmVhY3Qvc3JjL2FwcHMvaG9tZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IG5vcm1hbGl6ZVBhdGgsIFVzZXJDb25maWdFeHBvcnQgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3Yyc7XHJcbmltcG9ydCBjc3MgZnJvbSAndW5vY3NzL3ZpdGUnO1xyXG5pbXBvcnQgeyBjaGVja2VyIH0gZnJvbSAndml0ZS1wbHVnaW4tY2hlY2tlcic7XHJcbmltcG9ydCBzdmcgZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gYXMgaHRtbCB9IGZyb20gJ3ZpdGUtcGx1Z2luLWh0bWwnO1xyXG5pbXBvcnQgZmVkZXJhdGlvbiBmcm9tICdAb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbic7XHJcbmltcG9ydCB7IGRlcGVuZGVuY2llcyB9IGZyb20gJy4vcGFja2FnZS5qc29uJztcclxuXHJcbmNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTU9ERSA9PT0gJ2RldmVsb3BtZW50JztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRiYXNlOiBub3JtYWxpemVQYXRoKGAvJHtwcm9jZXNzLmVudi5CQVNFX1VSTH1gKSxcclxuXHRzZXJ2ZXI6IHtcclxuXHRcdG9wZW46IHRydWUsXHJcblx0XHRodHRwczogcHJvY2Vzcy5lbnYuSFRUUFMgPT09ICd0cnVlJyxcclxuXHRcdHBvcnQ6ICtwcm9jZXNzLmVudi5QT1JUIVxyXG5cdH0sXHJcblx0cHJldmlldzoge1xyXG5cdFx0b3BlbjogdHJ1ZSxcclxuXHRcdHBvcnQ6ICtwcm9jZXNzLmVudi5QT1JUISxcclxuXHRcdGNvcnM6IHRydWVcclxuXHR9LFxyXG5cdGJ1aWxkOiB7XHJcblx0XHRzb3VyY2VtYXA6IHByb2Nlc3MuZW52LkdFTkVSQVRFX1NPVVJDRU1BUCA9PT0gJ3RydWUnLFxyXG5cdFx0ZW1wdHlPdXREaXI6IHRydWUsXHJcblx0XHRtaW5pZnk6IHRydWUsXHJcblx0XHR0YXJnZXQ6IHByb2Nlc3MuZW52LlRBUkdFVFxyXG5cdH0sXHJcblx0cGx1Z2luczogW1xyXG5cdFx0cmVhY3QoKSxcclxuXHRcdGNzcygpLFxyXG5cdFx0c3ZnKCksXHJcblx0XHRjaGVja2VyKHtcclxuXHRcdFx0dHlwZXNjcmlwdDogdHJ1ZSxcclxuXHRcdFx0ZW5hYmxlQnVpbGQ6IHRydWUsXHJcblx0XHRcdGVzbGludDoge1xyXG5cdFx0XHRcdGxpbnRDb21tYW5kOiAnZXNsaW50IHNyYy8qKi8qLnt0cyx0c3h9JyxcclxuXHRcdFx0XHRkZXY6IHsgbG9nTGV2ZWw6IFsnZXJyb3InXSB9XHJcblx0XHRcdH1cclxuXHRcdH0pLFxyXG5cdFx0aHRtbCh7XHJcblx0XHRcdGVudHJ5OiBpc0RldiA/ICdzcmMvbWFpbi50c3gnIDogdW5kZWZpbmVkLFxyXG5cdFx0XHR0ZW1wbGF0ZTogaXNEZXYgPyAnaW5kZXguaHRtbCcgOiB1bmRlZmluZWQsXHJcblx0XHRcdGluamVjdDoge1xyXG5cdFx0XHRcdGRhdGE6IHByb2Nlc3MuZW52XHJcblx0XHRcdH0sXHJcblx0XHRcdG1pbmlmeTogdHJ1ZVxyXG5cdFx0fSksXHJcblx0XHRmZWRlcmF0aW9uKHtcclxuXHRcdFx0bmFtZTogcHJvY2Vzcy5lbnYuVklURV9BUFBfVElUTEUsXHJcblx0XHRcdGZpbGVuYW1lOiBgJHtwcm9jZXNzLmVudi5WSVRFX0FQUF9OQU1FfS5qc2AsXHJcblx0XHRcdGV4cG9zZXM6IHtcclxuXHRcdFx0XHRNYWluUGFnZTogJy4vc3JjL3BhZ2VzL01haW4ucGFnZS50c3gnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNoYXJlZDogZGVwZW5kZW5jaWVzXHJcblx0XHR9KVxyXG5cdF1cclxufSBzYXRpc2ZpZXMgVXNlckNvbmZpZ0V4cG9ydDtcclxuIiwgIntcclxuXHRcInZlcnNpb25cIjogXCIwLjAuMVwiLFxyXG5cdFwibmFtZVwiOiBcIkBhcHBzL2hvbWVcIixcclxuXHRcInNjcmlwdHNcIjoge1xyXG5cdFx0XCJzdGFydFwiOiBcInZpdGVcIixcclxuXHRcdFwiYnVpbGRcIjogXCJ2aXRlIGJ1aWxkXCIsXHJcblx0XHRcInByZXZpZXdcIjogXCJ2aXRlIGJ1aWxkICYmIHZpdGUgcHJldmlld1wiXHJcblx0fSxcclxuXHRcInR5cGVcIjogXCJtb2R1bGVcIixcclxuXHRcImRlcGVuZGVuY2llc1wiOiB7XHJcblx0XHRcIkBsaWJzL3JvdXRlclwiOiBcIndvcmtzcGFjZToqXCIsXHJcblx0XHRcIkBzaGFyZWQvc3RvcmVcIjogXCJ3b3Jrc3BhY2U6KlwiLFxyXG5cdFx0XCJAc2hhcmVkL3VpXCI6IFwid29ya3NwYWNlOipcIixcclxuXHRcdFwicmVhY3RcIjogXCJeMTguMi4wXCIsXHJcblx0XHRcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIlxyXG5cdH1cclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdZLFNBQVMscUJBQXVDO0FBQ3hiLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUNoQixTQUFTLG9CQUFvQixZQUFZO0FBQ3pDLE9BQU8sZ0JBQWdCOzs7QUNHdEIsbUJBQWdCO0FBQUEsRUFDZixnQkFBZ0I7QUFBQSxFQUNoQixpQkFBaUI7QUFBQSxFQUNqQixjQUFjO0FBQUEsRUFDZCxPQUFTO0FBQUEsRUFDVCxhQUFhO0FBQ2Q7OztBRE5ELElBQU0sUUFBUSxRQUFRLElBQUksU0FBUztBQUduQyxJQUFPLHNCQUFRO0FBQUEsRUFDZCxNQUFNLGNBQWMsSUFBSSxRQUFRLElBQUksVUFBVTtBQUFBLEVBQzlDLFFBQVE7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE9BQU8sUUFBUSxJQUFJLFVBQVU7QUFBQSxJQUM3QixNQUFNLENBQUMsUUFBUSxJQUFJO0FBQUEsRUFDcEI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLE1BQU0sQ0FBQyxRQUFRLElBQUk7QUFBQSxJQUNuQixNQUFNO0FBQUEsRUFDUDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ04sV0FBVyxRQUFRLElBQUksdUJBQXVCO0FBQUEsSUFDOUMsYUFBYTtBQUFBLElBQ2IsUUFBUTtBQUFBLElBQ1IsUUFBUSxRQUFRLElBQUk7QUFBQSxFQUNyQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLElBQ0osUUFBUTtBQUFBLE1BQ1AsWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ1AsYUFBYTtBQUFBLFFBQ2IsS0FBSyxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUU7QUFBQSxNQUM1QjtBQUFBLElBQ0QsQ0FBQztBQUFBLElBQ0QsS0FBSztBQUFBLE1BQ0osT0FBTyxRQUFRLGlCQUFpQjtBQUFBLE1BQ2hDLFVBQVUsUUFBUSxlQUFlO0FBQUEsTUFDakMsUUFBUTtBQUFBLFFBQ1AsTUFBTSxRQUFRO0FBQUEsTUFDZjtBQUFBLE1BQ0EsUUFBUTtBQUFBLElBQ1QsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1YsTUFBTSxRQUFRLElBQUk7QUFBQSxNQUNsQixVQUFVLEdBQUcsUUFBUSxJQUFJO0FBQUEsTUFDekIsU0FBUztBQUFBLFFBQ1IsVUFBVTtBQUFBLE1BQ1g7QUFBQSxNQUNBLFFBQVE7QUFBQSxJQUNULENBQUM7QUFBQSxFQUNGO0FBQ0Q7IiwKICAibmFtZXMiOiBbXQp9Cg==
