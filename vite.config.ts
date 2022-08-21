import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#4377FE',//设置antd主题色
        },
      }
    }
  },
  resolve: {
    alias: [{
      find: '@',
      replacement: path.resolve(__dirname, 'src')
    },
    {
      find: '@/pages',
      replacement: path.resolve(__dirname, 'src/pages')
    }
    ]
  },
  server: {
    host: 'localhost',
    port: 3000,
    cors: true,
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: false,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})

