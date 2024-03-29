/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-static';
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
