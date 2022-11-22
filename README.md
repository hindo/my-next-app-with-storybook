# Example NextJS app with Storybook and TailwindCSS

## Run App (in development mode)

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Run Storybook

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
```

## Build Static Storybook

```bash
npm run build-storybook
# or
yarn build-storybook
# or
pnpm build-storybook
```

You can use [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) to deploy Storybook. Specify `storybook-static` as the output directory.

## Notes

To make TailwindCSS work within Storybook there was a need to change configuration in both .storybook folder files.
