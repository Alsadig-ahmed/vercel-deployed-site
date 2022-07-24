import preprocess from "svelte-preprocess";
// import adapter from "@sveltejs/adapter-auto";
import vercel from "@sveltejs/adapter-vercel";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md", ".svelte.md"],
  preprocess: [
    mdsvex({ extensions: [".svelte.md", ".md", ".svx"] }),
    preprocess({ postcss: true }),
  ],
  kit: {
    // adapter: adapter(),
    // default options for vercel
    adapter: vercel({
      // if true, will deploy the app using edge functions
      // (https://vercel.com/docs/concepts/functions/edge-functions)
      // rather than serverless functions
      edge: false,

      // an array of dependencies that esbuild should treat
      // as external when bundling functions
      external: [],

      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app
      split: false,
    }),
  },
	alias: {
		$components: 'src/components',
		$utils: 'src/utils'
	  }
};

export default config;
