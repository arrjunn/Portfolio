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
    thumbnail: "/projects/backlog.jpg", // Data analytics dashboard
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
  { text: "Reliance Foundation Scholar (60K+ applicants)" },
  { text: "HPAIR Delegate — Harvard, Boston" },
  { text: "Learning Japanese (elementary)" },
  { text: "Former graphic designer at IIITN Design Club" },
  { text: "4 hackathon wins across IITs & IIITs" },
  { text: "McKinsey Forward Programme alumnus" },
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

export const contentIConsume = [
  {
    name: "The Swag Wala PM",
    description: "PM fundamentals, interview prep, and career transitions with humor",
    url: "https://www.youtube.com/@TheSwagWalaPM",
    avatar: "/content/swagwalapm.svg",
    category: "Product Management",
    subs: "40K+",
  },
  {
    name: "Aishwarya Srinivasan",
    description: "AI, data science, LLMs, GenAI, and career advice from an ex-Google data scientist",
    url: "https://www.youtube.com/@aishwaryasrinivasan",
    avatar: "/content/aishwarya.svg",
    category: "AI & Data Science",
    subs: "100K+",
  },
  {
    name: "Varun Mayya",
    description: "Tech, entrepreneurship, software building, and emerging trends",
    url: "https://www.youtube.com/@VarunMayya",
    avatar: "/content/varunmayya.svg",
    category: "Tech & Startups",
    subs: "1M+",
  },
  {
    name: "Exponent",
    description: "Tech interview prep — PM, engineering, system design mock interviews",
    url: "https://www.youtube.com/@tryexponent",
    avatar: "/content/exponent.svg",
    category: "Interview Prep",
    subs: "470K+",
  },
  {
    name: "TechnoManagers",
    description: "PM and consulting interview prep from IIM Bangalore & IIT Kanpur alumni",
    url: "https://www.youtube.com/@technomanagers",
    avatar: "/content/technomanagers.svg",
    category: "PM & Consulting",
    subs: "14K+",
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
  // ---- Post-Event Retention Automation ----
  {
    slug: "post-event-retention",
    heroTitle: "Post-Event Retention",
    heroSubtitle: "AI-Powered Outreach Automation",
    tldr: "Designed an A/B testing pipeline with Llama3 AI-generated content for 50+ users. Built a VIP alert system that reduced response latency by 95%, eliminating 100% manual outreach effort.",
    role: "Product & Growth",
    timeline: "Jan 2026",
    team: "Cross-functional (Marketing + Engineering)",
    sections: [
      { id: "problem", type: "problem", title: "The Problem", subtitle: "High-value leads were getting lost", content: "After events, the follow-up process was entirely manual. Marketing teams were copy-pasting personalized emails, leads went cold within hours, and high-value VIP leads were buried in the same queue as everyone else.", bullets: ["Manual outreach taking 5+ hours per event", "VIP leads lost due to slow routing", "No personalization at scale — same template for everyone", "Zero real-time engagement tracking"] },
      { id: "research", type: "research", title: "The Research", subtitle: "Understanding the post-event funnel", content: "I mapped the entire post-event lifecycle from attendance to sales conversion. The critical insight: response time was the #1 predictor of conversion, not content quality. VIP leads that got a response within 5 minutes converted 4x more than those contacted after 24 hours.", bullets: ["Mapped event attendance → follow-up → conversion funnel", "Identified response latency as the key conversion driver", "Found that 80% of manual effort was on low-value leads", "VIP leads (top 10%) generated 60% of revenue"] },
      { id: "decisions", type: "decisions", title: "Key Decisions", subtitle: "Why Llama3 + n8n + Twilio", content: "I evaluated three approaches: manual-with-templates, fully automated generic outreach, and AI-personalized automation. The winning approach used Llama3 for content generation, n8n for workflow orchestration, and Twilio for delivery — keeping humans in the loop for VIP approval.", bullets: ["Llama3 for personalized content generation (not GPT — cost and latency)", "n8n for no-code workflow automation (faster iteration than custom code)", "Twilio for multi-channel delivery (SMS + email)", "VIP alert system with priority routing — separate fast-track for high-value leads"] },
      { id: "solution", type: "solution", title: "The Solution", subtitle: "Automated, personalized, and prioritized", content: "Built an end-to-end pipeline: event data flows into n8n, Llama3 generates personalized outreach per attendee, VIP leads trigger an instant alert to sales, and Twilio delivers across SMS and email. A/B testing baked in to compare AI-generated vs manual copy.", bullets: ["Automated content generation for 50+ users per event", "VIP priority alert system with <5 min response time", "A/B testing pipeline comparing AI vs human copy", "Real-time engagement tracking dashboard"] },
      { id: "impact", type: "impact", title: "The Impact", subtitle: "95% faster, 100% less manual work", content: "The system eliminated all manual outreach effort while improving response times by 95%. VIP leads now get contacted within minutes instead of hours.", metrics: [{ label: "Response Latency Reduction", value: "95%" }, { label: "Manual Effort Eliminated", value: "100%" }, { label: "Users Reached", value: "50+" }] },
      { id: "reflections", type: "reflections", title: "Reflections", content: "The biggest lesson: automation quality matters less than automation speed. A slightly imperfect AI-generated email sent in 2 minutes beats a perfect human email sent in 24 hours. But always keep human review for VIP — the stakes are too high to fully automate.", bullets: ["Speed beats perfection in outreach", "VIP segmentation was the highest-leverage decision", "n8n's no-code approach let us iterate 5x faster than custom code", "Next: integrate CRM data for even better personalization"] },
    ],
  },
  // ---- Splitwise Teardown ----
  {
    slug: "splitwise-teardown",
    heroTitle: "Splitwise Teardown",
    heroSubtitle: "Retention & Life-Cycle Strategy",
    tldr: "Performed competitive analysis of Splitwise's retention funnel. Found that D30 retention drops by 60% once a group becomes inactive. Proposed shifting the North Star from settlement frequency to Household Continuity Rate.",
    role: "Product Analyst",
    timeline: "Dec 2025",
    team: "Solo (IIM Calcutta competition)",
    sections: [
      { id: "problem", type: "problem", title: "The Problem", subtitle: "Splitwise loses users after they settle up", content: "Splitwise dominates expense splitting, but the product lifecycle effectively ends when debts are settled. There's no reason to come back. D30 retention drops by 60% once a group becomes inactive.", bullets: ["60% D30 retention drop post-settlement", "Product lifecycle ends at transaction completion", "No group continuity features exist", "Users see Splitwise as a 'utility' not a 'companion'"] },
      { id: "research", type: "research", title: "The Research", subtitle: "Mapping the full user journey", content: "I mapped the complete user journey from group creation to settlement and beyond. The critical gap: Splitwise captures the 'splitting' job perfectly but completely abandons users after the core job is done. The group context — the most valuable asset — is discarded.", bullets: ["Mapped group creation → expense → settlement → churn funnel", "Identified that group context (who owes whom, shared history) is the real asset", "Benchmarked against Venmo, PayPal, and shared finance tools", "Found that 'household' groups have 3x higher lifetime value than one-off groups"] },
      { id: "decisions", type: "decisions", title: "Key Decisions", subtitle: "Reframing the North Star", content: "The existing North Star (settlement frequency) was measuring the wrong thing — it optimized for closing transactions, not retaining relationships. I proposed Household Continuity Rate: the percentage of groups that remain active beyond settlement cycles.", bullets: ["Rejected settlement frequency as the North Star — it measures endings, not engagement", "Proposed Household Continuity Rate — measures ongoing group value", "Recommended shared budgets and recurring expense tracking as retention features", "Designed a 'group memory' concept — expenses become shared financial history"] },
      { id: "solution", type: "solution", title: "The Proposal", subtitle: "From transactional to relational", content: "Shift Splitwise from a settlement tool to a household-first shared-finance companion. Key features: shared budgets, recurring expense tracking, group financial goals, and a 'group memory' that keeps context alive between settlements.", bullets: ["Shared budgets for ongoing group expenses (rent, groceries)", "Recurring expense tracking with automatic splitting", "Group financial goals ('save for trip', 'monthly budget')", "'Group memory' — expenses become shared financial history, not just debts"] },
      { id: "impact", type: "impact", title: "Projected Impact", subtitle: "Retention-first metrics", content: "The proposal targets the 60% D30 retention drop directly by giving users a reason to return beyond settlement. Household Continuity Rate replaces settlement frequency as the metric that drives product decisions.", metrics: [{ label: "Retention Drop Addressed", value: "60%" }, { label: "Household LTV Multiplier", value: "3x" }] },
      { id: "reflections", type: "reflections", title: "Reflections", content: "The biggest insight wasn't a feature idea — it was realizing Splitwise was measuring the wrong thing. Sometimes the most impactful PM work is redefining what success means, not building more features.", bullets: ["Sometimes the best product insight is 'you're measuring the wrong thing'", "Retention is a context problem, not a feature problem", "Group context is the most underutilized asset in P2P finance", "This teardown changed how I think about North Star metrics forever"] },
    ],
  },
  // ---- RapidRasoi GTM ----
  {
    slug: "rapidrasoi-gtm",
    heroTitle: "RapidRasoi",
    heroSubtitle: "Go-to-Market Strategy for Food Delivery",
    tldr: "Conducted user research with 40+ restaurant owners. Synthesized findings into a PRD that informed the founding team's GTM strategy, achieving a 20-25% conversion rate.",
    role: "Strategy & Growth Intern",
    timeline: "Jan 2025 – Mar 2025",
    team: "Founding team (3 members)",
    sections: [
      { id: "problem", type: "problem", title: "The Problem", subtitle: "No product-market signal for campus food delivery", content: "RapidRasoi was a new food-delivery startup targeting the IIIT Nagpur campus. The founding team had a product idea but zero user signal — no validation of merchant pain points, no understanding of commission sensitivity, and no GTM strategy.", bullets: ["Zero merchant validation before building", "Unknown pain points around onboarding and commissions", "No competitive analysis against existing campus food options", "No phased rollout plan for limited resources"] },
      { id: "research", type: "research", title: "The Research", subtitle: "40+ in-person merchant interviews", content: "I conducted in-person interviews with 40+ restaurant owners near campus. This was not a survey — it was sitting in their kitchens, understanding their daily operations, and hearing their real frustrations. The pain points they articulated were completely different from what we assumed.", bullets: ["40+ in-person interviews with restaurant owners", "Discovered onboarding friction was the #1 concern (not commission rates)", "Found that trust and reliability mattered more than pricing", "Identified a segment of 'digitally hesitant' merchants who needed hand-holding"] },
      { id: "decisions", type: "decisions", title: "Key Decisions", subtitle: "Interview-first, not survey-first", content: "I chose in-person interviews over scaled surveys. At the 0-to-1 stage, depth beats breadth. The merchants told us things no survey would have captured — like the fact that most had been burned by previous delivery platforms that promised and under-delivered.", bullets: ["In-person interviews over surveys — depth over breadth at 0-1 stage", "Focused on onboarding UX, not just pricing", "Designed a phased rollout: trusted merchants first, then expand", "Built trust through transparency — shared our commission model upfront"] },
      { id: "solution", type: "solution", title: "The PRD", subtitle: "Research-backed go-to-market strategy", content: "Synthesized all 40+ interviews into a PRD that defined merchant personas, mapped onboarding workflows, and designed a phased rollout plan. The PRD became the founding team's primary strategic document.", bullets: ["Merchant personas based on real interview data", "Onboarding flow designed around trust-building", "Phased rollout: 10 trusted merchants → campus-wide → neighboring areas", "Commission model designed around merchant feedback (not assumptions)"] },
      { id: "impact", type: "impact", title: "The Impact", subtitle: "20-25% conversion rate", content: "The PRD-driven GTM strategy achieved a 20-25% merchant conversion rate — significantly above the industry average for early-stage food delivery platforms.", metrics: [{ label: "Merchant Interviews", value: "40+" }, { label: "Conversion Rate", value: "20-25%" }] },
      { id: "reflections", type: "reflections", title: "Reflections", content: "This was the project that made me a PM. Talking to 40 merchants in person changed everything about how I approach product work. The pain points they articulated were completely different from what we assumed sitting in a room brainstorming.", bullets: ["User research in person > any amount of desk research", "At 0-1, trust is the product — not features", "The PRD was the first document I wrote that directly led to business outcomes", "This experience shaped my principle: 'Talk to users, not spreadsheets'"] },
    ],
  },
  // ---- Assistly ----
  {
    slug: "assistly",
    heroTitle: "Assistly",
    heroSubtitle: "AI Productivity App",
    tldr: "Led user research and problem discovery to design an AI productivity assistant. Defined personas, mapped workflows, and structured an MVP balancing personalization with simplicity.",
    role: "Product Lead",
    timeline: "2025",
    team: "IIT Roorkee E-Summit Competition",
    sections: [
      { id: "problem", type: "problem", title: "The Problem", subtitle: "Cognitive overload kills productivity", content: "Knowledge workers struggle to prioritize tasks when everything feels urgent. Existing productivity tools add complexity instead of reducing it — more features, more friction, more decisions.", bullets: ["Users overwhelmed by too many tasks and no clear priority", "Existing tools add complexity instead of reducing cognitive load", "No personalization — same workflow for everyone regardless of work style", "Task completion rates drop as backlog grows"] },
      { id: "research", type: "research", title: "The Research", subtitle: "Understanding how people actually prioritize", content: "I studied how different types of workers prioritize their day. The pattern: most people default to urgency over importance, and existing tools reinforce this bias instead of correcting it.", bullets: ["Identified 3 user personas: Deadline-driven, Flow-state, and Planner", "Mapped daily workflows showing where cognitive overload hits", "Found that personalization (adapting to work style) was the most requested missing feature"] },
      { id: "solution", type: "solution", title: "The MVP", subtitle: "An AI assistant that adapts to you", content: "Designed an MVP that uses AI to learn user work patterns and suggest task prioritization that balances urgency with importance. The key differentiator: it adapts to your style instead of forcing a framework.", bullets: ["AI-powered task prioritization adapting to individual work style", "Personalized daily planning based on energy patterns", "Simplified interface — 3 priorities per day, not an infinite backlog", "Smart notifications that respect focus time"] },
      { id: "impact", type: "impact", title: "The Impact", subtitle: "Competition results", content: "Presented at IIT Roorkee E-Summit. The product concept was evaluated on user research depth, MVP feasibility, and market positioning.", metrics: [{ label: "Competition", value: "IIT Roorkee" }, { label: "User Personas", value: "3" }] },
      { id: "reflections", type: "reflections", title: "Reflections", content: "The biggest insight: productivity tools should reduce decisions, not add them. If your tool requires users to learn a new system, you've already lost. The best productivity tool is invisible.", bullets: ["Reduce decisions, don't add them", "Personalization is the moat in productivity tools", "The best tool is the one users don't think about"] },
    ],
  },
  // ---- Caro ----
  {
    slug: "caro",
    heroTitle: "Caro",
    heroSubtitle: "HealthTech Elder Care",
    tldr: "Contributed to product strategy and human-centered design for a non-intrusive elder care solution focused on dignity, privacy, and trust.",
    role: "Product Strategy",
    timeline: "2025",
    team: "IIT Roorkee E-Summit Competition",
    sections: [
      { id: "problem", type: "problem", title: "The Problem", subtitle: "Elder care that respects dignity", content: "Most elder care tech is designed for caregivers, not seniors. It's intrusive, surveillance-heavy, and strips dignity from the people it's supposed to help. Seniors feel monitored, not cared for.", bullets: ["Existing solutions are caregiver-first, not senior-first", "Surveillance-heavy design erodes trust and dignity", "Seniors reject intrusive monitoring technologies", "Caregiver stress increases when seniors resist tech"] },
      { id: "research", type: "research", title: "The Research", subtitle: "Designing for both sides", content: "I shaped the product vision around both caregivers and seniors — understanding that the product must serve two fundamentally different user needs simultaneously.", bullets: ["Dual persona research: seniors (autonomy) and caregivers (peace of mind)", "Found that non-intrusive sensing (ambient, not camera-based) was the key to acceptance", "Privacy and dignity emerged as non-negotiable design constraints"] },
      { id: "solution", type: "solution", title: "The Solution", subtitle: "Ambient, non-intrusive care", content: "Designed a product vision around ambient sensing instead of cameras, focusing on dignity, privacy, and trust. The product enables independent living for seniors while giving caregivers peace of mind.", bullets: ["Ambient sensing (motion, sound patterns) instead of cameras", "Dignity-first design language — care, not surveillance", "Gradual onboarding that builds trust over time", "Caregiver dashboard showing wellbeing patterns, not live feeds"] },
      { id: "impact", type: "impact", title: "The Impact", content: "Positioned Caro as a compassionate, scalable healthtech solution. Evaluated at IIT Roorkee E-Summit on ethical design principles and market viability.", metrics: [{ label: "Competition", value: "IIT Roorkee" }] },
      { id: "reflections", type: "reflections", title: "Reflections", content: "This project taught me that ethical design isn't a feature — it's a constraint that should shape every product decision. When you design for vulnerable users, every default matters.", bullets: ["Ethical design is a constraint, not a feature", "Dual-persona products need to balance competing needs", "Dignity is non-negotiable in healthtech"] },
    ],
  },
  // ---- Hatk ----
  {
    slug: "hatk",
    heroTitle: "Hatk",
    heroSubtitle: "Experiential Photobooth Startup",
    tldr: "Worked on market research, consumer insights, and product strategy to transform photobooths from a rental service into an experience-driven product focused on Gen Z virality.",
    role: "Product Strategy & Growth",
    timeline: "2025",
    team: "IIT Guwahati E-Summit Competition",
    sections: [
      { id: "problem", type: "problem", title: "The Problem", subtitle: "Photobooths are stuck in the rental era", content: "Photobooths are seen as a commodity rental service — same product, same price, no differentiation. The market was ripe for transformation into an experience-driven product.", bullets: ["Commoditized market with zero differentiation", "Revenue capped at per-event rental fees", "No social sharing or virality mechanics", "Missing the Gen Z experience economy"] },
      { id: "research", type: "research", title: "The Research", subtitle: "Understanding Gen Z event behavior", content: "I researched Gen Z behavior at events — what they share, why they share, and what makes an experience 'post-worthy'. The insight: Gen Z doesn't pay for products, they pay for shareable moments.", bullets: ["Studied Gen Z social sharing behavior at events", "Identified 'shareability' as the key value driver, not photo quality", "Mapped B2C (individual) and B2B (corporate event) monetization paths"] },
      { id: "solution", type: "solution", title: "The Strategy", subtitle: "From rental to experience platform", content: "Designed monetization models across B2C and B2B, evaluated pricing strategies, and defined growth levers focused on virality, emotional engagement, and social sharing.", bullets: ["Experience-first product design (themes, AR filters, social integration)", "Dual monetization: B2C premium packages + B2B corporate events", "Virality mechanics: instant social sharing with branded overlays", "Growth levers: Gen Z word-of-mouth, Instagram/TikTok integration"] },
      { id: "impact", type: "impact", title: "The Impact", content: "Enables Hatk to capture higher lifetime value per event, drive organic growth through social sharing, and scale beyond weddings into culture-led experiences.", metrics: [{ label: "Competition", value: "IIT Guwahati" }] },
      { id: "reflections", type: "reflections", title: "Reflections", content: "This project taught me to think about products as experiences, not features. For Gen Z, the product IS the content they create with it.", bullets: ["Products are experiences, not features", "Virality is a design decision, not a marketing tactic", "B2C and B2B can coexist with the right pricing architecture"] },
    ],
  },
  // ---- HireSight ----
  {
    slug: "hiresight",
    heroTitle: "HireSight",
    heroSubtitle: "AI Hiring & Retention Platform",
    tldr: "Defined core hiring and attrition problems for startups/SMEs. Built data-driven product features: employee archetypes, attrition prediction, and intelligent hiring workflows.",
    role: "Product Architect",
    timeline: "2025",
    team: "IIITDM Jabalpur TechFest Competition",
    sections: [
      { id: "problem", type: "problem", title: "The Problem", subtitle: "Startups hire on intuition, lose on attrition", content: "Startups and SMEs make hiring decisions based on gut feeling, then lose employees within 6 months because of culture mismatches and unclear role expectations. The cost of a bad hire at a 20-person startup is devastating.", bullets: ["Hiring decisions driven by intuition, not data", "Early attrition (0-6 months) is the #1 cost for startups", "No tools for SMEs — enterprise HR platforms are too complex and expensive", "Culture-fit assessment is subjective and biased"] },
      { id: "research", type: "research", title: "The Research", subtitle: "From intuition to insight", content: "I studied how startups actually hire and what predicts early attrition. The pattern: companies that defined 'employee archetypes' (behavioral profiles that succeed in their culture) had 3x lower attrition.", bullets: ["Identified employee archetypes as the key predictor of retention", "Mapped the hiring workflow: source → screen → interview → offer → onboard", "Found that the screen → interview transition had the highest drop-off and bias"] },
      { id: "solution", type: "solution", title: "The Product", subtitle: "Data-driven hiring for startups", content: "Structured the product architecture around three pillars: employee archetypes (define who succeeds), attrition prediction (flag risks early), and intelligent workflows (reduce bias in screening).", bullets: ["Employee archetype engine — define behavioral profiles that succeed", "Attrition prediction model — flag at-risk hires within 30 days", "Intelligent screening workflows — reduce bias with structured evaluation", "Dashboard showing hiring funnel health and retention predictions"] },
      { id: "impact", type: "impact", title: "The Impact", content: "Helps organizations make smarter hiring decisions, reduce early attrition, and shift from intuition-led to insight-driven talent management.", metrics: [{ label: "Competition", value: "IIITDM Jabalpur" }] },
      { id: "reflections", type: "reflections", title: "Reflections", content: "The hardest part of this project was translating fuzzy 'culture fit' into measurable product features. The employee archetype framework was the breakthrough — it made the subjective objective.", bullets: ["Culture fit can be measured if you define the right archetypes", "Attrition prediction is more valuable than hiring prediction", "SMEs need simple tools, not enterprise complexity downsized"] },
    ],
  },
  // ---- Phulkari ----
  {
    slug: "phulkari",
    heroTitle: "Phulkari",
    heroSubtitle: "Cultural & Luxury Brand Strategy",
    tldr: "Worked on market repositioning to transform Phulkari from a declining craft into a premium, scalable luxury ecosystem with a creator-first model.",
    role: "Brand Strategy",
    timeline: "2025",
    team: "IIM Bangalore Fest Competition",
    sections: [
      { id: "problem", type: "problem", title: "The Problem", subtitle: "A dying craft in a booming luxury market", content: "Phulkari — a traditional Punjabi embroidery craft — was declining. Artisans were aging out, young people weren't learning it, and the market positioned it as cheap ethnic wear instead of the premium art form it is.", bullets: ["Artisan population declining year over year", "Market perception: 'cheap ethnic wear' instead of luxury craft", "No brand narrative connecting heritage to premium positioning", "Global luxury market growing 8% YoY while Phulkari stagnated"] },
      { id: "solution", type: "solution", title: "The Strategy", subtitle: "Creator-first luxury ecosystem", content: "Designed a repositioning strategy that transforms Phulkari into a premium, scalable luxury brand. A creator-first model that integrates storytelling, authenticity, and global market expansion.", bullets: ["Repositioned from ethnic wear to 'wearable art' — luxury positioning", "Creator-first model: artisan stories as the brand narrative", "Storytelling-driven marketing: each piece has a provenance story", "Global expansion strategy targeting diaspora and luxury conscious consumers"] },
      { id: "impact", type: "impact", title: "The Impact", content: "Preserves cultural heritage while enabling sustainable livelihoods for artisans, proving that social impact and premium business models can coexist.", metrics: [{ label: "Competition", value: "IIM Bangalore" }] },
      { id: "reflections", type: "reflections", title: "Reflections", content: "This project proved that social impact and premium business models aren't opposites — they're complementary. The artisan story IS the luxury differentiator.", bullets: ["Social impact and premium pricing can coexist", "Storytelling is the moat in luxury", "Creator-first models build authenticity that can't be copied"] },
    ],
  },
  // ---- NoCaps ----
  {
    slug: "nocaps",
    heroTitle: "NoCaps",
    heroSubtitle: "Consumer Brand Strategy",
    tldr: "Worked on consumer psychology and GTM strategy to reframe a traditionally functional product into a confidence-led, youth-oriented brand.",
    role: "Brand & GTM Strategy",
    timeline: "2025",
    team: "IIT Delhi E-Summit Competition",
    sections: [
      { id: "problem", type: "problem", title: "The Problem", subtitle: "A commoditized category with zero emotional connection", content: "The product category was fully commoditized — consumers chose based on price or availability, with zero brand loyalty or emotional connection. The market was functional, not aspirational.", bullets: ["Zero brand differentiation in the category", "Purchase decisions driven purely by price/availability", "No emotional connection between brand and consumer", "Younger consumers especially disengaged from existing brands"] },
      { id: "research", type: "research", title: "The Research", subtitle: "Understanding Gen Z purchase psychology", content: "I studied consumer psychology around traditionally 'boring' product categories. The insight: Gen Z doesn't buy products, they buy identities. Even in functional categories, there's an opportunity to build emotional recall through positioning.", bullets: ["Mapped Gen Z purchase psychology in functional categories", "Identified 'confidence' as the emotional territory to own", "Found that relatable messaging > feature-based messaging for young consumers"] },
      { id: "solution", type: "solution", title: "The Strategy", subtitle: "From functional to confidence-led", content: "Defined the USP, target segments, and messaging strategy to stand out in a commoditized category. Shifted positioning from functional benefits to emotional empowerment.", bullets: ["Repositioned from functional to confidence-led brand", "Target: first-time and younger consumers", "Messaging strategy built on relatability and empowerment", "Social-first distribution leveraging influencer trust"] },
      { id: "impact", type: "impact", title: "The Impact", content: "Creates stronger emotional recall, improves brand differentiation, and drives adoption among first-time and younger consumers through relatable positioning.", metrics: [{ label: "Competition", value: "IIT Delhi" }] },
      { id: "reflections", type: "reflections", title: "Reflections", content: "Even the most 'boring' product categories have an emotional angle. The PM skill isn't building features — it's finding the emotional territory that no competitor owns.", bullets: ["Every category has an unowned emotional territory", "Gen Z buys identities, not products", "Relatability beats features in consumer brand building"] },
    ],
  },
  // ---- Backlog (existing) ----
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
