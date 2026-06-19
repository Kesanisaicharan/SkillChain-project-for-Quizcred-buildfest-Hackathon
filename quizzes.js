// Quiz content — hardcoded for demo purposes.
// In production this would be served by the AI Quiz Engine (see PPT slide 5).

export const TOPICS = [
  {
    id: "webdev",
    label: "Web Development",
    icon: "code",
    accent: "cyan",
    questions: [
      {
        q: "Which hook lets a React component remember a value between renders?",
        options: ["useEffect", "useState", "useRef", "useMemo"],
        answer: 1,
      },
      {
        q: "What does CSS 'flexbox' primarily control?",
        options: ["Database queries", "One-dimensional layout", "Color palettes", "HTTP headers"],
        answer: 1,
      },
      {
        q: "Which HTTP method is idempotent and used to fully replace a resource?",
        options: ["POST", "PATCH", "PUT", "DELETE"],
        answer: 2,
      },
      {
        q: "What is the purpose of a 'key' prop in a React list?",
        options: [
          "To encrypt list data",
          "To help React identify which items changed",
          "To style the list",
          "To sort the list alphabetically",
        ],
        answer: 1,
      },
      {
        q: "Which of these is NOT a JavaScript primitive type?",
        options: ["string", "boolean", "object", "number"],
        answer: 2,
      },
    ],
  },
  {
    id: "blockchain",
    label: "Blockchain Basics",
    icon: "link",
    accent: "gold",
    questions: [
      {
        q: "What makes a blockchain 'tamper-proof'?",
        options: [
          "Data is encrypted with a password",
          "Each block is cryptographically linked to the previous one",
          "Only admins can edit it",
          "It is stored on one central server",
        ],
        answer: 1,
      },
      {
        q: "An NFT primarily proves...",
        options: [
          "That an asset is valuable",
          "Unique, verifiable ownership of a digital asset",
          "That a transaction was free",
          "That a file is virus-free",
        ],
        answer: 1,
      },
      {
        q: "What is a 'smart contract'?",
        options: [
          "A legal PDF stored online",
          "Self-executing code that runs when conditions are met",
          "An insurance policy",
          "A type of cryptocurrency wallet",
        ],
        answer: 1,
      },
      {
        q: "Why use a Layer-2 network like Polygon instead of Ethereum mainnet directly?",
        options: [
          "It's more decentralized",
          "Lower fees and faster transactions",
          "It doesn't need wallets",
          "It removes the need for smart contracts",
        ],
        answer: 1,
      },
      {
        q: "What does IPFS stand for?",
        options: [
          "Internet Protocol File System",
          "InterPlanetary File System",
          "Internal Private File Server",
          "Indexed Public File Standard",
        ],
        answer: 1,
      },
    ],
  },
  {
    id: "career",
    label: "Career Readiness",
    icon: "briefcase",
    accent: "mint",
    questions: [
      {
        q: "What is the main purpose of a 'skill passport'?",
        options: [
          "To replace a resume entirely",
          "To give a single, verifiable record of someone's skills",
          "To track travel history",
          "To issue visas",
        ],
        answer: 1,
      },
      {
        q: "Why do employers value verified credentials over self-reported skills?",
        options: [
          "They look nicer",
          "They reduce the risk of hiring based on false claims",
          "They are required by law everywhere",
          "They are always free",
        ],
        answer: 1,
      },
      {
        q: "What is a 'skill gap' in a learning analytics context?",
        options: [
          "A scheduling conflict",
          "The difference between current ability and a target skill level",
          "A type of certificate",
          "A break between job roles",
        ],
        answer: 1,
      },
      {
        q: "Which is the best practice when listing skills publicly online?",
        options: [
          "List every skill you've ever heard of",
          "Only list skills you can back up with evidence",
          "Copy a friend's skill list",
          "List as many as possible regardless of accuracy",
        ],
        answer: 1,
      },
      {
        q: "What does 'gamification' add to a learning platform?",
        options: [
          "Random difficulty for no reason",
          "Engagement mechanics like streaks and badges to motivate learners",
          "Hidden paywalls",
          "Slower load times",
        ],
        answer: 1,
      },
    ],
  },
];
