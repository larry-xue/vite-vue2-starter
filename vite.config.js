import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    },
    extensions: ['.js', '.json', '.vue']
  },
  server: {
    port: 5173,
    proxy: {
      '/foo': {
        // check https://cn.vitejs.dev/config/server-options.html#server-proxy for details
        target: 'http://localhost:5174',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/foo/, '')
      }
    }
  }
})
