import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'wzis',
  title: 'WZIS Content Manager',
  projectId: '1ai4bk4u',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
