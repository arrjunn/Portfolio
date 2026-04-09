// ========================================
// PORTFOLIO DATA — Edit this file to update content
// ========================================

export const siteConfig = {
  name: "Arjun Varshney",
  title: "Product & Strategy | Pre-Final Year @ IIIT Nagpur",
  tagline: "Turning user insights into products that matter.",
  status: "Open to PM internships",
  location: "Nagpur, India",
  email: "arjunvarshney13@gmail.com",
  url: "https://arjunvarshney.dev",
  calendarUrl: "https://cal.com/arjun-varshney-mpgq5l/30min", // Update with your real Cal.com link
  socials: {
    github: "https://github.com/arrjunn",
    linkedin: "https://www.linkedin.com/in/arjun-varshney-/",
    twitter: "https://x.com/Arjun86616602",
    instagram: "https://www.instagram.com/arjunium_/",
  },
  microIntro:
    "Pre-final year CSE undergrad who loves understanding user behavior and turning insights into products. Experience spans merchant research for a food-delivery startup, retention analysis, and building full-stack SaaS from scratch.",
};

export const recentAchievement = {
  title: "1st Prize — StratQuest, IIT Kharagpur",
  description:
    "Won the AI/ML & Business Hackathon at Spring Fest'26, IIT Kharagpur. Combined product strategy with AI to solve a real business problem.",
  date: "January 2026",
  link: "/work",
};

export const projects = [
  // ---- Featured (shown on homepage bento) ----
  {
    slug: "backlog",
    title: "Backlog — AI-Powered Feature Prioritization SaaS",
    description:
      "Built an AI auto-triage system that classifies, prioritizes, and clusters incoming feature requests using a RAG pipeline and K-means++ clustering. Deployed across 48 production instances.",
    tags: ["AI", "RAG", "SaaS", "Product"],
    year: "2026",
    thumbnail: "/projects/backlog.jpg",
    featured: true,
  },
  {
    slug: "post-event-retention",
    title: "Post-Event Retention Automation",
    description:
      "Designed an A/B testing pipeline with automated content generation for 50+ users via n8n, Twilio & Llama3 AI. Built a VIP alert system that reduced response latency by 95%.",
    tags: ["n8n", "Twilio", "Llama3", "A/B Testing"],
    year: "2026",
    thumbnail: "/projects/retention.jpg",
    featured: true,
  },
  {
    slug: "splitwise-teardown",
    title: "Splitwise Product Teardown",
    description:
      "Focused on transforming Splitwise from a one-time settlement tool into a household-first shared-finance companion. D30 retention drops by 60% once a group becomes inactive — proposed Household Continuity Rate as the new North Star.",
    tags: ["Product Strategy", "Retention", "Teardown"],
    year: "2025",
    thumbnail: "/projects/splitwise.jpg",
    featured: true,
    competition: "IIM Calcutta",
  },
  {
    slug: "rapidrasoi-gtm",
    title: "RapidRasoi — Go-to-Market Strategy",
    description:
      "Conducted user research with 40+ restaurant owners to identify merchant pain points. Synthesized findings into a PRD that achieved a 20-25% conversion rate for the founding team.",
    tags: ["GTM", "User Research", "PRD"],
    year: "2025",
    thumbnail: "/projects/rapidrasoi.jpg",
    featured: true,
  },
  // ---- Competition Projects (from hackathons) ----
  {
    slug: "assistly",
    title: "Assistly — AI Productivity App",
    description:
      "Led user research and problem discovery to design an AI productivity assistant that helps users prioritize tasks and reduce cognitive overload. Defined personas, mapped workflows, and structured an MVP balancing personalization with simplicity.",
    tags: ["AI", "UX Research", "MVP Design"],
    year: "2025",
    thumbnail: "/projects/assistly.jpg",
    featured: false,
    competition: "IIT Roorkee E-Summit",
  },
  {
    slug: "caro",
    title: "Caro — HealthTech Elder Care",
    description:
      "Contributed to product strategy and human-centered design for a non-intrusive elder care solution focused on dignity, privacy, and trust. Shaped the product vision around both caregivers and seniors, emphasizing accessibility and ethical design.",
    tags: ["HealthTech", "Product Strategy", "Accessibility"],
    year: "2025",
    thumbnail: "/projects/caro.jpg",
    featured: false,
    competition: "IIT Roorkee E-Summit",
  },
  {
    slug: "hatk",
    title: "Hatk — Experiential Photobooth Startup",
    description:
      "Worked on market research, consumer insights, and product strategy to transform photobooths from a rental service into an experience-driven product. Designed monetization models across B2C and B2B focused on Gen Z virality and emotional engagement.",
    tags: ["Market Research", "B2C/B2B", "Growth Strategy"],
    year: "2025",
    thumbnail: "/projects/hatk.jpg",
    featured: false,
    competition: "IIT Guwahati E-Summit",
  },
  {
    slug: "hiresight",
    title: "HireSight — AI Hiring & Retention Platform",
    description:
      "Defined core hiring and attrition problems faced by startups and SMEs, translating them into data-driven product features: employee archetypes, attrition prediction, and intelligent hiring workflows. Prioritized features aligned with measurable business outcomes.",
    tags: ["AI", "HR Tech", "Data-Driven PM"],
    year: "2025",
    thumbnail: "/projects/hiresight.jpg",
    featured: false,
    competition: "IIITDM Jabalpur TechFest",
  },
  {
    slug: "phulkari",
    title: "Phulkari — Cultural & Luxury Brand Strategy",
    description:
      "Worked on market repositioning and product narrative strategy to transform Phulkari from a declining craft into a premium, scalable luxury ecosystem. Designed a creator-first model integrating storytelling, authenticity, and global market expansion.",
    tags: ["Brand Strategy", "Luxury", "Social Impact"],
    year: "2025",
    thumbnail: "/projects/phulkari.jpg",
    featured: false,
    competition: "IIM Bangalore Fest",
  },
  {
    slug: "nocaps",
    title: "NoCaps — Consumer Brand Strategy",
    description:
      "Worked on consumer psychology, positioning, and go-to-market strategy to reframe a traditionally functional product into a confidence-led, youth-oriented brand. Defined USP, target segments, and messaging strategy for a commoditized category.",
    tags: ["Consumer Psychology", "GTM", "Brand Positioning"],
    year: "2025",
    thumbnail: "/projects/nocaps.jpg",
    featured: false,
    competition: "IIT Delhi E-Summit",
  },
];

export const changelog = [
  {
    date: "Now",
    text: "Interning at a stealth startup — writing PRDs, owning the product roadmap, and shipping features end-to-end.",
    tags: ["Product", "Startup", "PRDs"],
    active: true,
  },
  {
    date: "Feb 2026",
    text: "Shipped Backlog — an AI-powered feature prioritization SaaS. Deployed across 48 production instances.",
    tags: ["AI", "SaaS", "Launch"],
  },
  {
    date: "Jan 2026",
    text: "Won 1st Prize at StratQuest, IIT Kharagpur. AI/ML & Business Hackathon at Spring Fest'26.",
    tags: ["Hackathon", "Win"],
  },
  {
    date: "Jan 2026",
    text: "Built post-event retention automation with n8n + Llama3. Reduced response latency by 95%.",
    tags: ["AI", "Automation", "n8n"],
    link: "/work",
  },
  {
    date: "Dec 2025",
    text: "Completed Splitwise product teardown. Identified 60% post-settlement usage drop and proposed new North Star metric.",
    tags: ["Product Strategy", "Analysis"],
  },
];

export const skills = {
  skills: [
    "User Research",
    "Product Strategy",
    "Product Discovery",
    "Product Design",
    "Product Roadmap",
    "Feature Prioritization",
    "Stakeholder Management",
    "Success Metrics Definition",
    "Go-to-Market (GTM)",
    "Sprint Planning",
    "Backlog Refinement",
    "Competitive Analysis",
    "Cross-functional Collaboration",
    "User Journey Mapping",
    "Wireframing & Usability Testing",
  ],
  tools: [
    "Notion",
    "Figma",
    "JIRA",
    "Cursor",
    "n8n",
    "Lovable",
    "Aha!",
    "Canva",
    "Miro",
    "AntiGravity",
    "VisilyAI",
    "Power BI",
    "Google Colab",
  ],
  languages: [
    { name: "C++", level: 80 },
    { name: "Python", level: 60 },
    { name: "SQL", level: 60 },
    { name: "JavaScript", level: 40 },
  ],
};

export const education = [
  {
    institution: "Indian Institute of Information Technology, Nagpur",
    degree: "B.Tech in Computer Science Engineering",
    year: "2023 – 2027",
    details:
      "Pre-final year. Head of DevTalks @ GDG IIIT Nagpur. Reliance Foundation Scholar. McKinsey Forward Programme alumnus.",
  },
];

export const certifications: string[] = [];

export const showerThoughts = [
  {
    text: "AI won't replace PMs, but PMs who use AI will replace those who don't.",
    tag: "#product",
    date: "Mar 2026",
  },
  {
    text: "The best PRD is a conversation, not a document.",
    tag: "#philosophy",
    date: "Mar 2026",
  },
  {
    text: "Stop building features. Start solving problems.",
    tag: "#product",
    date: "Feb 2026",
  },
  {
    text: "Most AI products are just fancy search bars. The real magic is in the workflow.",
    tag: "#AI",
    date: "Feb 2026",
  },
  {
    text: "User research with 40 restaurant owners taught me more than any product course ever could.",
    tag: "#userresearch",
    date: "Jan 2026",
  },
  {
    text: "The best product is the one you almost didn't build.",
    tag: "#philosophy",
    date: "Jan 2026",
  },
  {
    text: "If your roadmap never changes, you're not listening to your users.",
    tag: "#product",
    date: "Dec 2025",
  },
  {
    text: "Retention isn't a feature problem — it's a context problem. Ask Splitwise.",
    tag: "#strategy",
    date: "Dec 2025",
  },
];

export const labEntries = [
  {
    slug: "backlog-rag-pipeline",
    title: "RAG pipeline for auto-classifying feature requests",
    status: "concluded" as const,
    date: "Feb 2026",
    excerpt:
      "Built a retrieval-augmented generation pipeline with K-means++ clustering that auto-classifies user stories by theme and urgency. Shipped in Backlog SaaS across 48 instances.",
    tags: ["RAG", "K-means++", "AI", "SaaS"],
  },
  {
    slug: "retention-automation",
    title: "Can AI-generated outreach match human copywriters?",
    status: "concluded" as const,
    date: "Jan 2026",
    excerpt:
      "A/B tested Llama3-generated personalized outreach against manual copy for 50+ users. AI eliminated 100% manual effort while enabling real-time engagement tracking.",
    tags: ["Llama3", "A/B Testing", "Automation"],
  },
  {
    slug: "splitwise-north-star",
    title: "Redefining retention metrics for peer-to-peer apps",
    status: "hypothesis" as const,
    date: "Dec 2025",
    excerpt:
      "Splitwise loses 60% of users post-settlement because the product lifecycle ends at transactions. What if the North Star was group continuity, not settlement frequency?",
    tags: ["Product Strategy", "Metrics", "Retention"],
  },
  {
    slug: "vip-alert-system",
    title: "VIP lead routing with latency < 5 min",
    status: "concluded" as const,
    date: "Jan 2026",
    excerpt:
      "High-value leads were getting lost due to slow routing. Prioritized a VIP alert system that reduced response latency by 95%, directly improving event-to-sales conversion.",
    tags: ["Product", "Sales", "Automation"],
  },
];

export const principles = [
  {
    number: "01",
    title: "BUILD IN PUBLIC",
    description: "The best feedback comes from shipping, not planning.",
  },
  {
    number: "02",
    title: "USERS OVER FEATURES",
    description: "Every feature without a user need is technical debt.",
  },
  {
    number: "03",
    title: "TALK TO USERS, NOT SPREADSHEETS",
    description: "40 merchant interviews taught me more than any analytics dashboard.",
  },
  {
    number: "04",
    title: "STRONG OPINIONS, WEAKLY HELD",
    description: "Conviction to act, humility to change when evidence says otherwise.",
  },
  {
    number: "05",
    title: "FAIL FAST, LEARN FASTER",
    description: "Every failed experiment is just a data point for the next one.",
  },
];

export const changedMindItems = [
  {
    before: "No-code tools are toys",
    after: "No-code is the fastest path to validation",
    why: "After using Lovable, n8n, and VisilyAI to ship real products faster than traditional dev cycles, I realized the best tool is the one that gets you to users first.",
    date: "Jan 2026",
  },
  {
    before: "You need an MBA to be a PM",
    after: "The best PMs are builders who deeply understand users",
    why: "Working at RapidRasoi and a stealth startup showed me that hands-on building + user empathy beats any degree.",
    date: "Nov 2025",
  },
  {
    before: "Retention is a feature problem",
    after: "Retention is a context problem",
    why: "My Splitwise teardown revealed that users don't leave because of missing features — they leave because the product loses relevance after the core job is done.",
    date: "Dec 2025",
  },
];

export const funFacts = [
  { emoji: "🎓", text: "Reliance Foundation Scholar (60K+ applicants)" },
  { emoji: "🌏", text: "HPAIR Delegate — Harvard, Boston" },
  { emoji: "🇯🇵", text: "Learning Japanese (elementary)" },
  { emoji: "🎨", text: "Former graphic designer at IIITN Design Club" },
  { emoji: "🏆", text: "4 hackathon wins across IITs & IIITs" },
  { emoji: "📊", text: "McKinsey Forward Programme alumnus" },
];

export const workExperience = [
  {
    role: "Product Intern",
    company: "Stealth Startup",
    period: "Mar 2026 – Present",
    bullets: [
      {
        text: "Writing PRDs, owning the product roadmap, and working hands-on with engineering to ship features",
        annotation:
          "My first time owning a roadmap end-to-end. The hardest part isn't deciding what to build — it's deciding what NOT to build.",
      },
      {
        text: "Handling end-to-end product cycles from user research and spec writing to testing and iteration",
        annotation:
          "Going from research to shipped feature in the same week taught me that speed and quality aren't opposites — they're complementary when you have clear user signal.",
      },
      {
        text: "Managing stakeholder alignment and sprint planning across engineering and design",
        annotation:
          "Cross-functional alignment is 80% communication, 20% frameworks. I learned to over-communicate early to avoid re-work later.",
      },
    ],
  },
  {
    role: "Strategy & Growth Intern",
    company: "RapidRasoi",
    period: "Jan 2025 – Mar 2025",
    bullets: [
      {
        text: "Conducted user research with 40+ restaurant owners to identify merchant pain points around onboarding and commission structures",
        annotation:
          "Talking to 40 merchants in person changed everything. The pain points they articulated were completely different from what we assumed in the office.",
      },
      {
        text: "Synthesized findings into a PRD that informed the founding team's go-to-market strategy, achieving a 20-25% conversion rate",
        annotation:
          "This PRD was the first document I wrote that directly led to business outcomes. The conversion rate validated that user research → PRD → execution works.",
      },
    ],
  },
  {
    role: "Startup Catalyst Fellow",
    company: "Proofr",
    period: "Jun 2025 – Aug 2025",
    bullets: [
      {
        text: "Selected as a Startup Catalyst Fellow, working on early-stage product strategy and validation",
        annotation:
          "The fellowship gave me structured exposure to the 0-to-1 phase of startups. Learned to validate ideas before writing a single line of code.",
      },
    ],
  },
  {
    role: "Head of DevTalks",
    company: "Google Developer Group, IIIT Nagpur",
    period: "Sep 2025 – Present",
    bullets: [
      {
        text: "Leading DevTalks — organizing technical talks, workshops, and community events for the GDG chapter",
        annotation:
          "Running a developer community is product management in disguise — you're building for an audience, iterating on feedback, and measuring engagement.",
      },
    ],
  },
];

export const resumeSummary =
  "Pre-final year CSE undergrad who loves understanding user behavior and turning insights into products. Experience spans merchant research for a food-delivery startup, retention analysis for consumer fintech, and building full-stack SaaS from scratch. Looking for a PM internship to learn, contribute, and grow.";

export const achievements = [
  "1st Prize, StratQuest — AI/ML & Business Hackathon, Spring Fest'26, IIT Kharagpur",
  "1st Prize, ReBranding Wars — UI/UX Hackathon, E-Summit'25 & '26, IIIT Nagpur",
  "3rd Runner Up, Business Strategy Hackathon, E-Summit'25, IIITDM Jabalpur",
  "3rd Prize, BrandStorm UI/UX Hackathon, Hi-Res Design Convergence, IIT Roorkee",
  "Reliance Foundation Scholarship Holder — Selected from 60,000+ students",
];

export const bookshelf = [
  {
    title: "Inspired",
    author: "Marty Cagan",
    cover: "/books/inspired.jpg",
    review: "The PM bible. Changed how I think about product discovery.",
    rating: 5,
    category: "Product",
    currentlyReading: false,
  },
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    cover: "/books/design-everyday.jpg",
    review: "Made me see bad design everywhere. You can't unsee it.",
    rating: 5,
    category: "Design",
    currentlyReading: false,
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover: "/books/thinking.jpg",
    review: "Understanding cognitive biases is a PM superpower.",
    rating: 4,
    category: "Psychology",
    currentlyReading: false,
  },
  {
    title: "Build",
    author: "Tony Fadell",
    cover: "/books/build.jpg",
    review: "Real talk from someone who actually built iconic products.",
    rating: 4,
    category: "Product",
    currentlyReading: true,
  },
];

// ========================================
// CASE STUDIES
// ========================================

export interface CaseStudySection {
  id: string;
  type: "problem" | "research" | "decisions" | "solution" | "impact" | "reflections";
  title: string;
  subtitle?: string;
  content: string;
  bullets?: string[];
  metrics?: { label: string; value: string }[];
}

export interface CaseStudy {
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  tldr: string;
  role: string;
  timeline: string;
  team: string;
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "backlog",
    heroTitle: "Backlog",
    heroSubtitle: "AI-Powered Feature Prioritization SaaS",
    tldr: "Identified that PMs spend 5+ hours/week manually triaging feature requests. Built an AI auto-triage system using RAG + K-means++ clustering, deployed across 48 production instances.",
    role: "Solo Builder & PM",
    timeline: "Dec 2025 – Feb 2026",
    team: "Solo",
    sections: [
      {
        id: "problem",
        type: "problem",
        title: "The Problem",
        subtitle: "Feature requests were drowning product teams",
        content: "Product managers spend 5+ hours every week manually reading, classifying, and prioritizing incoming feature requests. The process is slow, inconsistent, and biased toward whoever shouts the loudest.",
        bullets: [
          "5+ hours/week lost to manual triage",
          "No consistent prioritization framework applied",
          "High-impact requests buried under noise",
          "Sprint planning delayed by unrefined backlogs",
        ],
      },
      {
        id: "research",
        type: "research",
        title: "The Research",
        subtitle: "Understanding how PMs actually triage",
        content: "I studied how PMs at different companies handle incoming requests — from Slack messages to formal Jira tickets. The pattern was clear: most teams lacked a systematic way to classify urgency and theme.",
        bullets: [
          "Analyzed triage workflows across 10+ PM workflows",
          "Identified that classification by theme + urgency was the core bottleneck",
          "Found that clustering similar requests could eliminate 60% of duplicate work",
        ],
      },
      {
        id: "decisions",
        type: "decisions",
        title: "Key Decisions",
        subtitle: "Why RAG + K-means++ over simpler approaches",
        content: "I considered three approaches: rule-based classification, pure LLM generation, and RAG with clustering. Rule-based was too rigid. Pure LLM hallucinated priority scores. RAG grounded in real backlog data + K-means++ for semantic clustering gave the best results.",
        bullets: [
          "Chose RAG pipeline to ground AI in real product context",
          "K-means++ for clustering: 10 adjustable semantic clusters",
          "Auto-tagging by theme and urgency instead of manual labels",
          "Designed for PM review — AI suggests, human decides",
        ],
      },
      {
        id: "solution",
        type: "solution",
        title: "The Solution",
        subtitle: "An AI-driven backlog refinement system",
        content: "Built a SaaS tool that ingests feature requests, auto-classifies them by theme and urgency using a RAG pipeline, clusters similar requests using K-means++, and surfaces the highest-impact items for sprint planning.",
        bullets: [
          "RAG pipeline for contextual classification",
          "K-means++ clustering across 10 adjustable semantic groups",
          "Priority scoring based on theme, urgency, and request frequency",
          "Dashboard showing clustered backlog with one-click sprint import",
        ],
      },
      {
        id: "impact",
        type: "impact",
        title: "The Impact",
        subtitle: "Deployed across 48 production instances",
        content: "Backlog was deployed across 48 production instances. PMs reported faster sprint planning and better alignment between user needs and shipped features.",
        metrics: [
          { label: "Production Instances", value: "48" },
          { label: "Semantic Clusters", value: "10" },
          { label: "Auto-classified Requests", value: "1000+" },
        ],
      },
      {
        id: "reflections",
        type: "reflections",
        title: "Reflections",
        subtitle: "What I learned and what I'd do differently",
        content: "This project taught me that AI tools for PMs need to augment judgment, not replace it. The biggest insight: PMs don't want AI to decide for them — they want AI to reduce the noise so they can make better decisions faster.",
        bullets: [
          "AI should suggest, humans should decide",
          "Clustering similar requests was more valuable than scoring them",
          "The 'adjustable clusters' feature was the most requested — PMs want control",
          "Next iteration: integrate directly with Jira/Linear APIs",
        ],
      },
    ],
  },
];

// ========================================
// IMPACT METRICS
// ========================================

export interface ImpactMetric {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  project: string;
  category: "scale" | "efficiency" | "research" | "growth" | "retention";
}

export const impactMetrics: ImpactMetric[] = [
  { label: "Production Instances", value: 48, project: "backlog", category: "scale" },
  { label: "Latency Reduction", value: 95, suffix: "%", project: "post-event-retention", category: "efficiency" },
  { label: "User Interviews", value: 40, suffix: "+", project: "rapidrasoi-gtm", category: "research" },
  { label: "Conversion Rate", value: 25, prefix: "~", suffix: "%", project: "rapidrasoi-gtm", category: "growth" },
  { label: "Retention Drop Found", value: 60, suffix: "%", project: "splitwise-teardown", category: "retention" },
  { label: "Manual Effort Eliminated", value: 100, suffix: "%", project: "post-event-retention", category: "efficiency" },
];

// ========================================
// DECISIONS
// ========================================

export interface Decision {
  id: string;
  project: string;
  title: string;
  date: string;
  context: string;
  options: { name: string; pros: string[]; cons: string[] }[];
  framework: string;
  chosen: string;
  outcome: string;
  learned: string;
}

export const decisions: Decision[] = [
  {
    id: "backlog-arch",
    project: "backlog",
    title: "RAG + Clustering vs Pure LLM for feature classification",
    date: "Jan 2026",
    context: "Needed to auto-classify incoming feature requests by theme and urgency. Had to choose between rule-based, pure LLM, or RAG approaches.",
    options: [
      { name: "Rule-based classification", pros: ["Simple to implement", "Predictable"], cons: ["Too rigid for varied request formats", "Requires constant rule updates"] },
      { name: "Pure LLM generation", pros: ["Handles varied formats well", "No manual rules"], cons: ["Hallucinated priority scores", "No grounding in real product context"] },
      { name: "RAG + K-means++", pros: ["Grounded in real backlog data", "Semantic clustering reduces noise", "Adjustable"], cons: ["More complex to build", "Requires embeddings infrastructure"] },
    ],
    framework: "Data-Driven",
    chosen: "RAG + K-means++",
    outcome: "Deployed across 48 instances. Classification accuracy was significantly higher than pure LLM approach.",
    learned: "Grounding AI in real product data is always worth the extra complexity. Without RAG, the LLM was just guessing.",
  },
  {
    id: "rapidrasoi-gtm",
    project: "rapidrasoi-gtm",
    title: "Interview-first vs Survey-first for merchant research",
    date: "Jan 2025",
    context: "Starting RapidRasoi merchant research with limited time (8 weeks). Needed to decide between in-person interviews or scaled surveys.",
    options: [
      { name: "Online surveys", pros: ["Scale to 200+ merchants quickly", "Quantitative data"], cons: ["Low response rate in target demographic", "Surface-level insights"] },
      { name: "In-person interviews", pros: ["Deep qualitative insights", "Build merchant trust", "Observe non-verbal cues"], cons: ["Time-intensive (40+ one-on-one sessions)", "Smaller sample size"] },
    ],
    framework: "User Signal",
    chosen: "In-person interviews",
    outcome: "40+ merchant interviews revealed pain points completely different from our assumptions. PRD informed by real user data achieved 20-25% conversion.",
    learned: "At the 0-1 stage, depth beats breadth. The merchants told us things no survey would have captured.",
  },
  {
    id: "splitwise-metric",
    project: "splitwise-teardown",
    title: "Redefining the North Star metric for Splitwise",
    date: "Dec 2025",
    context: "Analyzing Splitwise's 60% post-settlement usage drop. The existing North Star (settlement frequency) didn't capture the retention problem.",
    options: [
      { name: "Keep settlement frequency", pros: ["Existing metric, easy to track"], cons: ["Doesn't capture post-settlement engagement", "Misses group continuity value"] },
      { name: "Household Continuity Rate", pros: ["Captures ongoing group value", "Addresses the retention gap directly"], cons: ["New metric, needs baseline", "Harder to influence with features"] },
    ],
    framework: "RICE",
    chosen: "Household Continuity Rate",
    outcome: "Proposed metric shift from transactions to group continuity. Identified that users leave not because of missing features, but because the product loses context after settlement.",
    learned: "Sometimes the biggest product insight isn't a feature idea — it's realizing you're measuring the wrong thing.",
  },
];

// ========================================
// TEARDOWNS
// ========================================

export interface Teardown {
  slug: string;
  product: string;
  tagline: string;
  date: string;
  verdict: string;
  sections: { title: string; content: string; type: "overview" | "strength" | "weakness" | "opportunity" | "recommendation" }[];
}

export const teardowns: Teardown[] = [
  {
    slug: "splitwise-teardown",
    product: "Splitwise",
    tagline: "Retention & Life-Cycle Strategy",
    date: "Dec 2025",
    verdict: "Great at the core job (splitting bills), but loses users by ending the relationship at settlement. The opportunity is in group continuity.",
    sections: [
      { title: "Overview", content: "Splitwise dominates expense splitting among friend groups. But the product lifecycle effectively ends when debts are settled — there's no reason to come back.", type: "overview" },
      { title: "Strength", content: "Dead-simple core loop: add expense → split → settle. Lowest friction in the category. Strong network effects within friend groups.", type: "strength" },
      { title: "Weakness", content: "60% post-settlement usage drop. The product has zero group continuity features. Once debts are cleared, the app becomes invisible.", type: "weakness" },
      { title: "Opportunity", content: "Shift from transactional to relational: shared budgets, recurring expense tracking, group financial goals. Keep groups engaged between settlements.", type: "opportunity" },
      { title: "Proposed North Star", content: "Household Continuity Rate — measuring how many groups stay active beyond settlement cycles. This metric captures the retention opportunity that settlement frequency misses.", type: "recommendation" },
    ],
  },
];

// ========================================
// PM FRAMEWORKS
// ========================================

export interface PMFramework {
  id: string;
  name: string;
  description: string;
  whenToUse: string;
  steps?: string[];
  relatedProject?: string;
}

export const frameworks: PMFramework[] = [
  { id: "rice", name: "RICE", description: "Reach, Impact, Confidence, Effort — quantitative scoring model for prioritization", whenToUse: "When prioritizing a backlog of feature requests with limited resources", steps: ["Estimate Reach (users/quarter)", "Rate Impact (0.25–3x)", "Set Confidence (%)", "Estimate Effort (person-months)", "Score = (R × I × C) / E"], relatedProject: "backlog" },
  { id: "jtbd", name: "Jobs-to-be-Done", description: "Understanding the job users hire your product to do", whenToUse: "When defining product strategy or exploring new market opportunities", steps: ["Identify the job", "Map the job steps", "Find unmet needs", "Define value proposition"], relatedProject: "splitwise-teardown" },
  { id: "moscow", name: "MoSCoW", description: "Must have, Should have, Could have, Won't have — scope prioritization", whenToUse: "When scoping an MVP or defining release boundaries", steps: ["List all requirements", "Classify: Must / Should / Could / Won't", "Validate with stakeholders", "Build Must-haves first"] },
  { id: "user-story-mapping", name: "User Story Mapping", description: "Visual map of user activities, steps, and stories to plan releases", whenToUse: "When planning sprints or organizing a product backlog", steps: ["Map user activities (horizontal)", "Break into steps", "Write stories per step", "Slice horizontally for releases"] },
  { id: "north-star", name: "North Star Framework", description: "Single metric that captures the core value your product delivers", whenToUse: "When aligning teams around what matters most", steps: ["Identify core value exchange", "Define the metric", "Map input metrics", "Align teams to inputs"], relatedProject: "splitwise-teardown" },
];

// ========================================
// RESUME AS PRODUCT SPEC
// ========================================

export const resumeAsSpec = {
  productName: "Arjun Varshney v2026.1",
  userStories: [
    { persona: "Hiring Manager", need: "a PM intern who can own product cycles end-to-end", benefit: "the team ships faster with clear specs and user signal" },
    { persona: "Engineering Lead", need: "a product partner who understands technical tradeoffs", benefit: "PRDs are implementable and don't require constant clarification" },
    { persona: "Founder", need: "a builder who talks to users and turns insights into action", benefit: "product decisions are grounded in real user data, not assumptions" },
  ],
};

// ========================================
// KNOWLEDGE GRAPH EDGES
// ========================================

export const knowledgeEdges: { from: string; to: string; label?: string }[] = [
  { from: "principle:users-over-features", to: "project:rapidrasoi-gtm", label: "Applied" },
  { from: "principle:build-in-public", to: "project:backlog", label: "Shipped" },
  { from: "principle:talk-to-users", to: "project:rapidrasoi-gtm", label: "40+ interviews" },
  { from: "project:splitwise-teardown", to: "thought:retention-context", label: "Inspired" },
  { from: "project:backlog", to: "framework:rice", label: "Used" },
  { from: "project:splitwise-teardown", to: "framework:jtbd", label: "Applied" },
  { from: "project:splitwise-teardown", to: "framework:north-star", label: "Proposed" },
  { from: "project:post-event-retention", to: "principle:fail-fast", label: "A/B tested" },
  { from: "thought:ai-workflow", to: "project:backlog", label: "Built it" },
  { from: "changed:retention-context", to: "project:splitwise-teardown", label: "Learned from" },
];

// ========================================
// COLOPHON
// ========================================

export const colophon = {
  title: "How I Built This Portfolio",
  intro: "This portfolio is itself a product — designed, built, and iterated on with the same product thinking I apply to everything else.",
  stack: [
    { name: "Next.js 16", why: "App Router for SSG, API routes, and zero-config deployment" },
    { name: "TypeScript", why: "Type safety for data-driven content — catches broken links at build time" },
    { name: "Tailwind CSS v4", why: "Design tokens via CSS custom properties, zero runtime overhead" },
    { name: "Framer Motion", why: "Declarative animations, scroll-driven effects, layout transitions" },
  ],
  tradeoffs: [
    { decision: "All content in data.ts, no CMS", reasoning: "Fast iteration, type-safe, no API latency. Trade-off: harder for non-developers to update." },
    { decision: "No chart library for metrics", reasoning: "SVG + CSS animations keep the bundle under 200KB. Every KB matters for first impressions." },
    { decision: "Dark-first design", reasoning: "Matches the developer/PM audience. Light mode is a courtesy, dark mode is the experience." },
    { decision: "Boot screen on first visit", reasoning: "Sets the tone immediately. Skippable and session-stored so it never annoys." },
  ],
  wouldChange: [
    "Add MDX for case study content — long-form text in TypeScript objects is not ideal",
    "Implement real-time analytics dashboard showing portfolio visitor data",
    "Add internationalization for Japanese (I'm learning it)",
  ],
};
