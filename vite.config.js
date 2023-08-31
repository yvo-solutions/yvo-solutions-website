import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        fr: resolve(__dirname, 'src/fr/index.html'),
        frLegal: resolve(__dirname, 'src/fr/mentions-legales/index.html'),
        en: resolve(__dirname, 'src/en/index.html'),
        enLegal: resolve(__dirname, 'src/en/legal-notices/index.html'),
        notFound: resolve(__dirname, 'src/404.html')
      }
    }
  },
  server: {
    port: 8080
  }
})
