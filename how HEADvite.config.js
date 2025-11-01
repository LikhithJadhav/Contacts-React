warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vite.config.js', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/package.json b/package.json[m
[1mindex 6315a27..77d8867 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -7,7 +7,9 @@[m
     "dev": "vite",[m
     "build": "vite build",[m
     "lint": "eslint .",[m
[31m-    "preview": "vite preview"[m
[32m+[m[32m    "preview": "vite preview",[m
[32m+[m[32m    "predeploy": "npm run build",[m
[32m+[m[32m    "deploy": "gh-pages -d dist"[m
   },[m
   "dependencies": {[m
     "lucide-react": "^0.552.0",[m
[36m@@ -24,6 +26,7 @@[m
     "eslint": "^9.36.0",[m
     "eslint-plugin-react-hooks": "^5.2.0",[m
     "eslint-plugin-react-refresh": "^0.4.22",[m
[32m+[m[32m    "gh-pages": "^6.3.0",[m
     "globals": "^16.4.0",[m
     "postcss": "^8.5.6",[m
     "tailwindcss": "^4.1.16",[m
[1mdiff --git a/vite.config.js b/vite.config.js[m
[1mindex 8b0f57b..58fb2ca 100644[m
[1m--- a/vite.config.js[m
[1m+++ b/vite.config.js[m
[36m@@ -3,5 +3,6 @@[m [mimport react from '@vitejs/plugin-react'[m
 [m
 // https://vite.dev/config/[m
 export default defineConfig({[m
[32m+[m[32m  base: '/Contacts-React/',[m
   plugins: [react()],[m
 })[m
