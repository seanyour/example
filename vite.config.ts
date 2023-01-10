import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

function pathResolve (dir:string){
  return resolve(__dirname, dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  base: '/example/',
  plugins: [
      vue(),
      AutoImport({
        resolvers: [
            AntDesignVueResolver()
        ]
      }),
      Components({
        resolvers: [
            AntDesignVueResolver()
        ]
      })
  ],
  resolve: {
    extensions: ['.js','.ts','.vue'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'assets': pathResolve('./src/assets'),
      'components': pathResolve('./src/components'),
      'router': pathResolve('./src/router'),
      'stores': pathResolve('./src/stores'),
      'views': pathResolve('./src/views')
    }
  }
})
