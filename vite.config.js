import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/higoramaral/', // Define o caminho base do projeto
  plugins: [vue()]
});