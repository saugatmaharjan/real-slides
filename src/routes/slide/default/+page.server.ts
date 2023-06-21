import type { Load } from '@sveltejs/kit';
import { compile } from 'mdsvex';

const MOCK_RESPONSE_FROM_API = `
### Lorem

Lorem is currently extended with the following plugins.
Instructions on how to use them in your application are linked below.

- [ ] one
- [ ] two

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md](Link) |
| Medium | [plugins/medium/README.md](Link) |
| Google Analytics | [plugins/googleanalytics/README.md](Link) |
`;

const SLIDES = [
	{
		order: 1,
		title: 'Svelte',
		content: `
    ### Svelte
    
    Lorem is currently extended with the following plugins.
    Instructions on how to use them in your application are linked below.
    
    - [ ] one
    - [ ] two
    
    `
	},
	{
		order: 2,
		title: 'React',
		content: `
    ### React
    
    | Plugin | README |
    | ------ | ------ |
    | Dropbox | [plugins/dropbox/README.md](Link) |
    | Medium | [plugins/medium/README.md](Link) |
    | Google Analytics | [plugins/googleanalytics/README.md](Link) |
    `
	}
];

export const load: Load = async () => {
	const response = SLIDES; // Get data with eg. `fetch`
	const allSlides = await Promise.all(
		response.map(async (slide) => {
			const parsedMdx = await compile(slide.content);
			return {
				...slide,
				content: parsedMdx?.code
			};
		})
	);

	return {
		slides: allSlides
	};
};
