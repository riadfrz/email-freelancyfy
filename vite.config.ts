import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@shared-ui/index', replacement: path.resolve(__dirname, '../Freelancyfy/shared-ui/index.ts') },
      { find: '@shared-ui', replacement: path.resolve(__dirname, '../Freelancyfy/shared-ui') },
      { find: '@shared', replacement: path.resolve(__dirname, '../Freelancyfy/shared') },
      { find: /^@\//, replacement: `${path.resolve(__dirname, './src')}/` },
    ],
  },
})
