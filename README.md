# SkillChain — Career Passport (Demo Build)

**QuizCred BuildFest Hackathon — Project Submission**

SkillChain is a gamified skill-verification platform where learners take quizzes, earn verified digital badges, and build a tamper-proof Career Passport.

This repository contains the **functional demo build** submitted for the Project Submission round. It implements the core user loop end-to-end in React.

## What's implemented in this demo

- Learner onboarding (name entry, then passport opens)
- Topic selection across 3 categories (Web Development, Blockchain Basics, Career Readiness)
- Timed quiz flow with instant per-question feedback
- Score screen with a pass/fail threshold (60%+ to earn a badge)
- Animated "badge minting" moment with a generated token ID and transaction hash
- Career Passport page aggregating all earned badges, with a verification code

## What's simulated (and why)

The full product vision (see our pitch deck) includes real blockchain minting on Polygon, IPFS storage, and an AI-adaptive quiz engine. For this hackathon build, within the round's timeframe, we simulated the blockchain layer:

- **Badge minting** generates a realistic-looking transaction hash and token ID client-side, instead of calling a deployed Solidity smart contract.
- **Quiz questions** are hardcoded per topic instead of AI-generated.
- **QR verification code** is a deterministic hash for demo purposes, not a live on-chain lookup.

This was a deliberate scoping decision to deliver a working, demoable product within the round's deadline rather than a partially-working blockchain integration. The architecture (see `src/lib/chain.js`) is written so the simulated functions can be swapped for real Web3 calls (ethers.js / a Hardhat-deployed contract) without changing the UI layer.

## Tech stack

- React 19 + Vite
- Tailwind CSS v4
- No backend required for this demo build — all state lives in React state

## Running locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`).

## Project structure

```
src/
  components/      UI screens (Cover, TopicSelect, Quiz, ResultStamp, Passport)
  data/quizzes.js   Quiz question bank
  lib/chain.js      Simulated blockchain mint + verification code logic
  App.jsx           Screen state machine
```

## Roadmap beyond this demo

See the full project roadmap and architecture in our pitch deck. Next steps include real Solidity smart contracts on Polygon, an AI-adaptive quiz engine, and an employer-facing verification portal.

---

Team SkillChain — QuizCred BuildFest
