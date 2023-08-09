// vite.config.js
import { defineConfig } from "file:///C:/servis/htdocs/php/proyect-laravel-react/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/servis/htdocs/php/proyect-laravel-react/node_modules/laravel-vite-plugin/dist/index.mjs";
import react from "file:///C:/servis/htdocs/php/proyect-laravel-react/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    laravel(["resources/js/app.jsx"]),
    react()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxzZXJ2aXNcXFxcaHRkb2NzXFxcXHBocFxcXFxwcm95ZWN0LWxhcmF2ZWwtcmVhY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHNlcnZpc1xcXFxodGRvY3NcXFxccGhwXFxcXHByb3llY3QtbGFyYXZlbC1yZWFjdFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovc2VydmlzL2h0ZG9jcy9waHAvcHJveWVjdC1sYXJhdmVsLXJlYWN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgbGFyYXZlbCBmcm9tICdsYXJhdmVsLXZpdGUtcGx1Z2luJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG4gXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAgIHBsdWdpbnM6IFtcbiAgICAgICAgbGFyYXZlbChbJ3Jlc291cmNlcy9qcy9hcHAuanN4J10pLFxuICAgICAgICByZWFjdCgpLFxuICAgIF0sXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQTBULFNBQVMsb0JBQW9CO0FBQ3ZWLE9BQU8sYUFBYTtBQUNwQixPQUFPLFdBQVc7QUFFbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDeEIsU0FBUztBQUFBLElBQ0wsUUFBUSxDQUFDLHNCQUFzQixDQUFDO0FBQUEsSUFDaEMsTUFBTTtBQUFBLEVBQ1Y7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=