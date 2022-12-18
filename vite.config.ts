import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint' //导入包

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 增加下面的配置项,这样在运行时就能检查eslint规范
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true
  }
})
