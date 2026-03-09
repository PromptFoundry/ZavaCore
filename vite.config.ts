import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE = '/ZavaCore/';

// https://vite.dev/config/
export default defineConfig(({ command: _command }) => ({
  publicDir: 'public',
  plugins: [
    react(),
    {
      name: 'transform-asset-paths',
      transform(code: string, id: string) {
        if (!id.includes('node_modules') && /\.(tsx?|jsx?)$/.test(id)) {
          const result = code
            // handles: "/assets/  '/assets/  `/assets/
            .replace(/(['"`])\/assets\//g, `$1${BASE}assets/`)
            // handles: url(/assets/  without quotes
            .replace(/url\(\/assets\//g, `url(${BASE}assets/`);
          return { code: result, map: null };
        }
        return null;
      }
    }
  ],
  base: BASE,
}));
