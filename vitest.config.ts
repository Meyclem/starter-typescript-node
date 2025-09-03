import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'node',
    globals: true,
    setupFiles: [],
    typecheck: {
      tsconfig: './tsconfig.vitest.json'
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: [
        'node_modules/**',
        'dist/**',
        'src/types/**',
        '**/*.d.ts',
        '**/*.config.*',
        '**/index.ts'
      ]
    }
  }
});
