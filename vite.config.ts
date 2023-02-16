import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

function pathResolve (dir:string){
  return resolve(__dirname, dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  base: '/example/',
  plugins: [
      vue({
          reactivityTransform: true
      }),
      AutoImport({
        resolvers: [
            ElementPlusResolver()
        ]
      }),
      Components({
        resolvers: [
            ElementPlusResolver(),
            IconsResolver(),
        ]
      }),
      Unocss({
          presets: [
              presetUno(),
              presetAttributify(),
              presetIcons()
          ]
      }),
      Icons({autoInstall: true}),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'assets': pathResolve('./src/assets'),
      'lang': pathResolve('./src/lang'),
      'components': pathResolve('./src/components'),
      'router': pathResolve('./src/router'),
      'stores': pathResolve('./src/stores'),
      'views': pathResolve('./src/views')
    }
  }
})
