import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  vite: {
    base: '/vocs-github-pages/',
  },
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
})
