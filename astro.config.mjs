import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';
import { typesetDist } from './scripts/typeset.mjs';

// Runs on the built HTML: binds proper nouns so they never break across a line,
// then joins the words either side of each sentence break. See scripts/typeset.mjs.
const typeset = {
  name: 'typeset',
  hooks: {
    'astro:build:done': ({ dir, logger }) => {
      const n = typesetDist(fileURLToPath(dir));
      logger.info(`Typeset running text in ${n} pages`);
    }
  }
};

export default defineConfig({
  site: 'https://solanotowing.com',
  integrations: [sitemap(), typeset],
  build: { inlineStylesheets: 'always' }
});
