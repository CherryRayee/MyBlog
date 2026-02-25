export type Horizon = "3-Year" | "5-Year" | "Life-Long";
export type Category = "Career" | "Financial" | "Education" | "Language" | "Health" | "Personal";
export type Status = "Pending" | "In Progress" | "Achieved";
export type Priority = "High" | "Medium" | "Low";

export interface Milestone {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface PlanItem {
  id: string;
  title: string;
  description?: string;
  horizon: Horizon;
  category: Category;
  status: Status;
  priority: Priority;
  timeline?: {
    startDate?: string;
    targetDate?: string;
  };
  progress?: number; // 0-100
  milestones?: Milestone[];
  motivation?: string; // "Why I want this"
  resources?: string[]; // Links or text
  tags?: string[];
}

export const PLAN_DATA: PlanItem[] = [
  // 3-Year Plan
  {
    id: "1",
    title: "Senior Engineer Promotion",
    description:
      "Achieve Senior Software Engineer level at current company by leading a major project and mentoring juniors.",
    horizon: "3-Year",
    category: "Career",
    status: "In Progress",
    priority: "High",
    timeline: {
      startDate: "2024-01-01",
      targetDate: "2025-12-01",
    },
    progress: 65,
    milestones: [
      { id: "m1", title: "Complete System Design Certification", isCompleted: true },
      { id: "m2", title: "Lead Q3 Feature Launch", isCompleted: true },
      { id: "m3", title: "Mentor 2 Junior Devs to promotion", isCompleted: false },
      { id: "m4", title: "Submit Promotion Packet", isCompleted: false },
    ],
    motivation: "To increase impact, autonomy, and compensation for future financial goals.",
    tags: ["leadership", "promotion", "tech"],
  },
  {
    id: "2",
    title: "Investment Portfolio $100k",
    description:
      "Build a diversified investment portfolio reaching $100k through consistent monthly contributions and ETF growth.",
    horizon: "3-Year",
    category: "Financial",
    status: "In Progress",
    priority: "High",
    timeline: {
      startDate: "2023-06-01",
      targetDate: "2026-06-01",
    },
    progress: 42,
    milestones: [
      { id: "m1", title: "Max out 401k for 2024", isCompleted: true },
      { id: "m2", title: "Reach $50k milestone", isCompleted: false },
      { id: "m3", title: "Rebalance portfolio", isCompleted: false },
    ],
    motivation: "Financial security and compounding growth for early retirement.",
    tags: ["investing", "wealth", "compounding"],
  },
  {
    id: "3",
    title: "Master Japanese N3",
    description: "Pass the JLPT N3 exam to comfortably converse and consume native media.",
    horizon: "3-Year",
    category: "Language",
    status: "In Progress",
    priority: "Medium",
    timeline: {
      startDate: "2024-01-01",
      targetDate: "2025-07-01",
    },
    progress: 30,
    milestones: [
      { id: "m1", title: "Finish Genki I textbook", isCompleted: true },
      { id: "m2", title: "Finish Genki II textbook", isCompleted: false },
      { id: "m3", title: "Complete 2000 Anki cards", isCompleted: false },
      { id: "m4", title: "Pass N4 practice exam", isCompleted: false },
    ],
    motivation: "To travel Japan deeply and read untranslated manga.",
    resources: ["Genki I & II", "Anki", "Wanikani"],
    tags: ["japanese", "language", "learning"],
  },
  {
    id: "4",
    title: "Run a Marathon",
    description: "Complete a full marathon under 4 hours.",
    horizon: "3-Year",
    category: "Health",
    status: "Pending",
    priority: "Medium",
    timeline: {
      targetDate: "2026-10-01",
    },
    progress: 0,
    milestones: [
      { id: "m1", title: "Run a 5k without stopping", isCompleted: false },
      { id: "m2", title: "Complete a Half Marathon", isCompleted: false },
      { id: "m3", title: "Follow 16-week marathon training plan", isCompleted: false },
    ],
    motivation: "Push physical limits and improve cardiovascular health.",
    tags: ["running", "fitness", "endurance"],
  },

  // 5-Year Plan
  {
    id: "5",
    title: "Tech Lead Role",
    description: "Transition into a Tech Lead or Engineering Manager role.",
    horizon: "5-Year",
    category: "Career",
    status: "Pending",
    priority: "High",
    progress: 10,
    timeline: {
      startDate: "2026-01-01",
      targetDate: "2028-12-31",
    },
    milestones: [
      { id: "m1", title: "Read 'The Manager's Path'", isCompleted: false },
      { id: "m2", title: "Take on interim TL responsibilities", isCompleted: false },
    ],
    motivation: "Scale impact through people and architecture.",
    tags: ["management", "leadership"],
  },
  {
    id: "6",
    title: "Buy a House",
    description: "Purchase a primary residence in a suburban area.",
    horizon: "5-Year",
    category: "Financial",
    status: "Pending",
    priority: "High",
    progress: 20,
    timeline: {
      startDate: "2025-01-01",
      targetDate: "2029-01-01",
    },
    milestones: [
      { id: "m1", title: "Save 20% down payment", isCompleted: false },
      { id: "m2", title: "Improve credit score to 800+", isCompleted: true },
      { id: "m3", title: "Research neighborhoods", isCompleted: false },
    ],
    motivation: "Stability and building equity.",
    tags: ["real-estate", "home"],
  },
  {
    id: "7",
    title: "MBA or Masters",
    description: "Complete a part-time Masters degree or MBA.",
    horizon: "5-Year",
    category: "Education",
    status: "Pending",
    priority: "Low",
    timeline: {
      targetDate: "2030-01-01",
    },
    milestones: [
      { id: "m1", title: "Take GMAT", isCompleted: false },
      { id: "m2", title: "Apply to 3 target schools", isCompleted: false },
    ],
    motivation: "Expand business knowledge and network.",
    tags: ["education", "degree"],
  },
  {
    id: "8",
    title: "Fluent in Japanese",
    description: "Achieve business-level fluency in Japanese (N1/N2).",
    horizon: "5-Year",
    category: "Language",
    status: "Pending",
    priority: "Medium",
    timeline: {
      targetDate: "2030-01-01",
    },
    milestones: [
      { id: "m1", title: "Pass JLPT N2", isCompleted: false },
      { id: "m2", title: "Read 5 Japanese novels", isCompleted: false },
    ],
    motivation: "Full cultural immersion and potential career opportunities in Japan.",
    tags: ["japanese", "language"],
  },

  // Life-Long Plan
  {
    id: "9",
    title: "Financial Independence",
    description: "Achieve FIRE (Financial Independence, Retire Early) with $2.5M net worth.",
    horizon: "Life-Long",
    category: "Financial",
    status: "In Progress",
    priority: "High",
    progress: 15,
    milestones: [
      { id: "m1", title: "Reach $100k net worth", isCompleted: true },
      { id: "m2", title: "Reach $500k net worth", isCompleted: false },
      { id: "m3", title: "Reach $1M net worth", isCompleted: false },
    ],
    motivation: "Freedom to work on passion projects without financial constraints.",
    tags: ["fire", "wealth", "freedom"],
  },
  {
    id: "10",
    title: "Write a Book",
    description: "Publish a technical book on Software Architecture or a Sci-Fi novel.",
    horizon: "Life-Long",
    category: "Career",
    status: "Pending",
    priority: "Medium",
    progress: 5,
    milestones: [
      { id: "m1", title: "Draft outline", isCompleted: false },
      { id: "m2", title: "Write first 3 chapters", isCompleted: false },
      { id: "m3", title: "Find an agent or publisher", isCompleted: false },
    ],
    motivation: "Share knowledge and leave a legacy.",
    tags: ["writing", "legacy"],
  },
  {
    id: "11",
    title: "Mentor 100 Developers",
    description: "Help junior developers grow in their careers through direct mentorship.",
    horizon: "Life-Long",
    category: "Personal",
    status: "In Progress",
    priority: "Medium",
    progress: 12,
    milestones: [
      { id: "m1", title: "Mentor 10 devs", isCompleted: true },
      { id: "m2", title: "Mentor 50 devs", isCompleted: false },
    ],
    motivation: "Give back to the community that helped me.",
    tags: ["mentorship", "giving-back"],
  },
  {
    id: "12",
    title: "Travel to 50 Countries",
    description: "Visit and experience cultures in 50 different countries.",
    horizon: "Life-Long",
    category: "Personal",
    status: "In Progress",
    priority: "Low",
    progress: 24, // 12/50
    timeline: {
      startDate: "2015-01-01",
    },
    milestones: [
      { id: "m1", title: "Visit 10 countries", isCompleted: true },
      { id: "m2", title: "Visit 25 countries", isCompleted: false },
      { id: "m3", title: "Visit Antarctica", isCompleted: false },
    ],
    motivation: "Broaden perspective and experience the world's diversity.",
    tags: ["travel", "adventure"],
  },
];

export const CATEGORIES: Category[] = ["Career", "Financial", "Education", "Language", "Health", "Personal"];

export const HORIZONS: Horizon[] = ["3-Year", "5-Year", "Life-Long"];
