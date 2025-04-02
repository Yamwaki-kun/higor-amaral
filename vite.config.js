import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  
    server:{
      proxy:{
        '/api':{
      target: "https://www.artstation.com",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
      }
    },
    
  base: '/', 
  plugins: [vue()]
});