This is a [Vocs](https://vocs.dev) project bootstrapped with the Vocs CLI.

## Deploying to GitHub Pages

1. Ensure GitHub Pages is enabled:

    Settings > Pages > Build and deployment > Source > GitHub Actions

2. Configure Workflow permissions:

    Settings > Actions > General > Workflow permissions > Contents > Read and write

3. Setup `base` and `basePath` in [vocs.config.ts](vocs.config.ts)

    ```ts
    export default defineConfig({
      // ...
      basePath: '/vocs-github-pages/',
      vite: {
        base: '/vocs-github-pages/',
      },
      // ...
    })
    ```

4. 
