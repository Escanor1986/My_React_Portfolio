import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [react()],
  // root: './', optionnel car il prend le répertoire courant, sinon erreur 404 vu que vite ne trouve pas le fichier racine
});
