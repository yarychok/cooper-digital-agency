import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [{ find: "@", replacement: path.resolve(__dirname, "src")}],
//   },
// })

export default ({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return defineConfig({
    plugins: [
      react(),
    ],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src")}],
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  })
}