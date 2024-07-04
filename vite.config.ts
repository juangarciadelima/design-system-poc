import { defineConfig } from 'vite'
import Unfonts from 'unplugin-fonts/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import * as path from 'path'
import tailwindcss from 'tailwindcss'

import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  build: {
    emptyOutDir: false,
    outDir: 'dist',
    sourcemap: true,
    lib: {
      fileName: 'design-system-poc',
      entry: path.resolve(__dirname, 'src/main.ts'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    react(),
    dts(),
    tsconfigPaths(),
    Unfonts({
      google: {
        families: ['Montserrat'],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
