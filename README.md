# sonia sheeps

During an improv lesson, Sonia said:

> Whenever I want to sleep, rather than counting sheeps I play this impro game: I give my self 2 words and have to find 2 others words related in the second.

So let's play with [OpenAI](https://beta.openai.com/) to build her a digital twin :)

## Feature

The website is straightforward:

1. You give as an input words or sentences in any language.
2. The website repond by showing you 2 words selected from the OpenAI response.
3. (LOOP) You can continue this game indefinitely to explore AI's mind.


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
