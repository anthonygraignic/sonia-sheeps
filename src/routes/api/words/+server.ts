import { error, json } from '@sveltejs/kit';
import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';

export async function POST({ request }) {
	const { words } = await request.json();

	if (words.length < 300) {
		const configuration = new Configuration({
			apiKey: OPENAI_API_KEY
		});
		// https://beta.openai.com/playground/
		const openai = new OpenAIApi(configuration);
		const completion = await openai.createCompletion({
			model: 'text-curie-001',
			prompt: words,
			temperature: 0.85,
			max_tokens: 50,
			top_p: 1,
			frequency_penalty: 0.5
			// presence_penalty: 0
			// stop: ['\n']
		});
		return json({ text: completion.data.choices[0].text });
	} else {
		return error(400);
	}
}
