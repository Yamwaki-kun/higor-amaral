import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  
    //server:{
    //  proxy:{
    //    '/api':{
    //  target: "http://localhost:80/proxy.php?url=",
    //  changeOrigin: true,
    //  rewrite: (path) => path.replace(/^\/api/, ''),
    //},
    //  }
    //},
    
  base: '/', 
  plugins: [vue()]
});