This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

npm install prisma@6.2.1
npm install @prisma/client@6.2.1

npx prisma init
npx prisma migrate dev

npm install -D ts-node@10.9.2

no package.json
"prisma": {
"seed": "ts-node ./prisma/seed.ts"
},
npx prisma db seed

npm install tailwindcss @tailwindcss/postcss postcss

Create a postcss.config.mjs file in the root of your project and add the @tailwindcss/postcss plugin to your PostCSS configuration.

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;

Add an @import to ./src/app/globals.css that imports Tailwind CSS.

@import "tailwindcss";


npx shadcn@latest init
-> default
-> neutral
-> yes para css variables
-> Use --legacy-peer-deps

npx shadcn@latest add button
npx shadcn@latest add card
-> Use --legacy-peer-deps

liberar o dominio em next.config.ts

images: {
    remotePatterns: [{ hostname: "u9a6wmr3as.ufs.sh" }],
},