This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.








# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
<!-- Deployment Details -->


----------------------------------------------------
Deploying CowriesToken and waiting for confirmations...
reusing "CowriesToken" at 0x77b292020981C0e9D2052DE5bbE2868709e3F19e
CowriesToken at 0x77b292020981C0e9D2052DE5bbE2868709e3F19e
Verifying contract...
The contract 0x77b292020981C0e9D2052DE5bbE2868709e3F19e has already been verified
Delegating to 0xd6658b718B0AE012B62997b5eF9E4DA7Bd3Aa66E
Checkpoints: 1
Delegated!
----------------------------------------------------
Deploying LockController and waiting for confirmations...
reusing "LockController" at 0x2D93640DA262e5A2A07df2eF1C20836D367cB414
TimeLock at 0x2D93640DA262e5A2A07df2eF1C20836D367cB414
Verifying contract...
The contract 0x2D93640DA262e5A2A07df2eF1C20836D367cB414 has already been verified
----------------------------------------------------
Deploying VillageSquare and waiting for confirmations...
reusing "VillageSquare" at 0xf2cb8E86bAC83362b564722b3E26a412C261728e
Village Square at 0xf2cb8E86bAC83362b564722b3E26a412C261728e
Verifying contract...
The contract 0xf2cb8E86bAC83362b564722b3E26a412C261728e has already been verified
----------------------------------------------------
Deploying Fisch and waiting for confirmations...
reusing "Fisch" at 0x916aD713Feeb9ACadA68722b246c93b01dEBcca2
Current owner: 0xd6658b718B0AE012B62997b5eF9E4DA7Bd3Aa66E, probable owner: 0xd6658b718B0AE012B62997b5eF9E4DA7Bd3Aa66E contract address: 0x916aD713Feeb9ACadA68722b246c93b01dEBcca2 new Contract: 0x916aD713Feeb9ACadA68722b246c93b01dEBcca2
LockController at 0x2D93640DA262e5A2A07df2eF1C20836D367cB414, 0xd6658b718B0AE012B62997b5eF9E4DA7Bd3Aa66E
Verifying contract...
The contract 0x916aD713Feeb9ACadA68722b246c93b01dEBcca2 has already been verified
----------------------------------------------------
Verifying contract...
The contract 0xd39fa85E38664eFD43ec1F7d5B2b71CD12DC6ce1 has already been verified
----------------------------------------------------
Deploying Loan and waiting for confirmations... 0x916aD713Feeb9ACadA68722b246c93b01dEBcca2
reusing "Loan" at 0xf96066c652406793da5b6eF86d505c9f46078a5a
Loan at 0xf96066c652406793da5b6eF86d505c9f46078a5a
Verifying contract...
The contract 0xf96066c652406793da5b6eF86d505c9f46078a5a has already been verified
----------------------------------------------------
Setting up contracts for roles...
Done in 49.80s.