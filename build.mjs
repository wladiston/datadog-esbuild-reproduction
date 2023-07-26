import * as esbuild from 'esbuild'
import { execSync } from 'child_process'

// import ddPlugin from 'dd-trace/esbuild.js'

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  sourcemap: true,
  outfile: 'dist/index.js',
  plugins: [
    // ddPlugin,
  ],
  external: [
    // 'dd-trace',
    'graphql/language/visitor',
    'graphql/language/printer',
    'graphql/utilities',
  ],
})