import type { L } from "@/lib/i18n";

export type CategoryId = "seedlings" | "saplings" | "forests";

export const CATEGORIES: { id: CategoryId; name: L; level: L; eligibility: L }[] = [
  {
    id: "seedlings",
    name: { en: "Seedlings", bn: "সিডলিংস" },
    level: { en: "School", bn: "স্কুল" },
    eligibility: {
      en: "Classes 6–10 or equivalent, including Bangla Version, English Version, O-Level, and Dakhil",
      bn: "৬ষ্ঠ–১০ম শ্রেণি বা সমমান, বাংলা ভার্সন, ইংলিশ ভার্সন, ও-লেভেল ও দাখিলসহ",
    },
  },
  {
    id: "saplings",
    name: { en: "Saplings", bn: "স্যাপলিংস" },
    level: { en: "College & Admission", bn: "কলেজ ও ভর্তি-প্রার্থী" },
    eligibility: {
      en: "Classes 11–12, HSC or equivalent, A-Level, Alim, and university admission candidates",
      bn: "একাদশ–দ্বাদশ শ্রেণি, এইচএসসি বা সমমান, এ-লেভেল, আলিম এবং বিশ্ববিদ্যালয় ভর্তি-প্রার্থী",
    },
  },
  {
    id: "forests",
    name: { en: "Forests", bn: "ফরেস্টস" },
    level: { en: "University", bn: "বিশ্ববিদ্যালয়" },
    eligibility: {
      en: "Undergraduate university students from any discipline",
      bn: "যেকোনো বিভাগের স্নাতক পর্যায়ের বিশ্ববিদ্যালয় শিক্ষার্থী",
    },
  },
];

export const TEAM_RULES: L[] = [
  { en: "A team has 2–3 members.", bn: "প্রতিটি টিমে ২–৩ জন সদস্য থাকবে।" },
  {
    en: "All members belong to the same category and may come from different institutions.",
    bn: "সব সদস্য একই ক্যাটাগরির হতে হবে, তবে ভিন্ন ভিন্ন প্রতিষ্ঠান থেকে আসতে পারবে।",
  },
  { en: "Each student joins one team.", bn: "একজন শিক্ষার্থী কেবল একটি টিমে যোগ দিতে পারবে।" },
  {
    en: "One Team Leader handles registration and official submissions.",
    bn: "একজন টিম লিডার রেজিস্ট্রেশন ও সব অফিশিয়াল সাবমিশন সম্পন্ন করবে।",
  },
];

export type Stage = {
  slug: string;
  chapter: 0 | 1 | 2;
  title: L;
  what: L;
  who?: L;
  panel?: L;
  next: L;
  link: { to: "/competition" | "/prizes" | "/event-info" | "/roadmap"; hash?: string; label: L };
};

export const CHAPTERS: L[] = [
  { en: "Research & Qualify", bn: "গবেষণা ও যোগ্যতা অর্জন" },
  { en: "Create & Submit", bn: "তৈরি ও জমা" },
  { en: "Reach the Finale", bn: "ফাইনালের পথে" },
];

const updates = { to: "/event-info" as const, hash: "updates", label: { en: "Official updates", bn: "অফিশিয়াল আপডেট" } };

export const STAGES: Stage[] = [
  {
    slug: "concept-note",
    chapter: 0,
    title: { en: "Concept Note Submission", bn: "কনসেপ্ট নোট জমা" },
    what: {
      en: "Registered teams turn their research, brand idea, campaign strategy, and activation plan into a Concept Note.",
      bn: "নিবন্ধিত টিমগুলো তাদের গবেষণা, ব্র্যান্ড আইডিয়া, ক্যাম্পেইন কৌশল ও অ্যাক্টিভেশন পরিকল্পনা একটি কনসেপ্ট নোটে রূপ দেয়।",
    },
    who: { en: "All registered teams", bn: "সকল নিবন্ধিত টিম" },
    next: { en: "Work through the Concept Note checklist.", bn: "কনসেপ্ট নোট চেকলিস্ট ধরে প্রস্তুতি নিন।" },
    link: { to: "/competition", hash: "checklist", label: { en: "Prepare Your Concept Note", bn: "কনসেপ্ট নোট প্রস্তুত করুন" } },
  },
  {
    slug: "shortlist",
    chapter: 0,
    title: { en: "Shortlist Announcement", bn: "শর্টলিস্ট ঘোষণা" },
    what: {
      en: "Judges and panelists review the submitted concept notes, select the strongest concepts, and shortlist teams based on their evaluation.",
      bn: "বিচারক ও প্যানেলিস্টরা জমা দেওয়া কনসেপ্ট নোট পর্যালোচনা করেন, সবচেয়ে শক্তিশালী ধারণাগুলো বাছাই করেন এবং মূল্যায়নের ভিত্তিতে টিমগুলোকে শর্টলিস্ট করেন।",
    },
    next: { en: "Follow the official update channels.", bn: "অফিশিয়াল আপডেট চ্যানেলগুলো অনুসরণ করুন।" },
    link: updates,
  },
  {
    slug: "workshop",
    chapter: 0,
    title: { en: "Online Workshop", bn: "অনলাইন ওয়ার্কশপ" },
    what: {
      en: "Shortlisted teams get guidance on improving the campaign and preparing the Reel.",
      bn: "শর্টলিস্টেড টিমগুলো ক্যাম্পেইন উন্নত করা ও রিল প্রস্তুতির দিকনির্দেশনা পায়।",
    },
    who: { en: "Shortlisted teams", bn: "শর্টলিস্টেড টিম" },
    next: { en: "Review the Campaign Reel guide.", bn: "ক্যাম্পেইন রিল গাইড দেখে নিন।" },
    link: { to: "/competition", hash: "submissions", label: { en: "Submission guide", bn: "সাবমিশন গাইড" } },
  },
  {
    slug: "reel-production",
    chapter: 1,
    title: { en: "Reel Production Period", bn: "রিল নির্মাণ পর্ব" },
    what: {
      en: "Shortlisted teams create their Campaign Reel and prepare activation evidence or a credible implementation plan.",
      bn: "শর্টলিস্টেড টিমগুলো ক্যাম্পেইন রিল তৈরি করে এবং অ্যাক্টিভেশনের প্রমাণ বা বাস্তবসম্মত বাস্তবায়ন পরিকল্পনা প্রস্তুত করে।",
    },
    who: { en: "Shortlisted teams", bn: "শর্টলিস্টেড টিম" },
    next: { en: "Plan your Proof-of-Impact evidence.", bn: "প্রুফ-অব-ইমপ্যাক্ট প্রমাণের পরিকল্পনা করুন।" },
    link: { to: "/competition", hash: "campaign-lab", label: { en: "See the Campaign Lab", bn: "ক্যাম্পেইন ল্যাব দেখুন" } },
  },
  {
    slug: "reel-submission",
    chapter: 1,
    title: { en: "Reel Submission", bn: "রিল জমা" },
    what: {
      en: "The Team Leader submits the Campaign Reel according to the organizer’s instructions.",
      bn: "আয়োজকদের নির্দেশনা অনুযায়ী টিম লিডার ক্যাম্পেইন রিল জমা দেয়।",
    },
    who: { en: "Shortlisted teams", bn: "শর্টলিস্টেড টিম" },
    next: { en: "Check the organizers’ current Reel instructions.", bn: "রিল সংক্রান্ত আয়োজকদের সর্বশেষ নির্দেশনা দেখুন।" },
    link: updates,
  },
  {
    slug: "evaluation",
    chapter: 1,
    title: { en: "Evaluation & Final Team Selection", bn: "মূল্যায়ন ও চূড়ান্ত টিম নির্বাচন" },
    what: { en: "Judge Panels evaluate the submitted Campaign Reels using the Reel score breakdown and select the final teams for the Grand Finale.", bn: "বিচারক প্যানেল রিলের নম্বর বণ্টন অনুযায়ী জমা দেওয়া ক্যাম্পেইন রিল মূল্যায়ন করে এবং গ্র্যান্ড ফিনালের জন্য চূড়ান্ত টিম নির্বাচন করে।" },
    panel: { en: "Judge Panels", bn: "বিচারক প্যানেল" },
    next: { en: "Learn how judges assess entries.", bn: "বিচারকরা কীভাবে মূল্যায়ন করেন জেনে নিন।" },
    link: { to: "/competition", hash: "judging", label: { en: "Judging", bn: "মূল্যায়ন পদ্ধতি" } },
  },
  {
    slug: "finalists",
    chapter: 2,
    title: { en: "Finalist Teams Announcement", bn: "ফাইনালিস্ট টিম ঘোষণা" },
    what: {
      en: "Finalists receive instructions for the next stage through official channels.",
      bn: "ফাইনালিস্টরা অফিশিয়াল চ্যানেলের মাধ্যমে পরবর্তী ধাপের নির্দেশনা পায়।",
    },
    who: { en: "Finalist teams", bn: "ফাইনালিস্ট টিম" },
    next: { en: "Watch the official channels for instructions.", bn: "নির্দেশনার জন্য অফিশিয়াল চ্যানেলে নজর রাখুন।" },
    link: updates,
  },
  {
    slug: "bootcamp",
    chapter: 2,
    title: { en: "Mentorship & Bootcamp", bn: "মেন্টরশিপ ও বুটক্যাম্প" },
    what: {
      en: "Finalist teams refine their campaign pitch and presentation with feedback.",
      bn: "ফাইনালিস্ট টিমগুলো ফিডব্যাকের মাধ্যমে ক্যাম্পেইন পিচ ও উপস্থাপনা আরও শাণিত করে।",
    },
    who: { en: "Finalist teams and mentors", bn: "ফাইনালিস্ট টিম ও মেন্টর" },
    next: { en: "See who you’ll meet.", bn: "কাদের সাথে দেখা হবে দেখুন।" },
    link: { to: "/event-info", hash: "meet", label: { en: "Who you’ll meet", bn: "যাদের সাথে দেখা হবে" } },
  },
  {
    slug: "grand-finale",
    chapter: 2,
    title: { en: "National Grand Finale", bn: "জাতীয় গ্র্যান্ড ফিনালে" },
    what: {
      en: "Finalists present their campaign and category award winners are announced.",
      bn: "ফাইনালিস্টরা তাদের ক্যাম্পেইন উপস্থাপন করে এবং প্রতিটি ক্যাটাগরির বিজয়ীদের নাম ঘোষণা করা হয়।",
    },
    who: { en: "Finalist teams, judges, and guests", bn: "ফাইনালিস্ট টিম, বিচারক ও অতিথিবৃন্দ" },
    next: { en: "See the Prize Pool & Recognition.", bn: "প্রাইজ পুল ও স্বীকৃতি দেখুন।" },
    link: { to: "/prizes", label: { en: "Prize Pool & Recognition", bn: "প্রাইজ পুল ও স্বীকৃতি" } },
  },
];

export const EXPLORER_STAGES: { slug: string; deliverable: L }[] = [
  { slug: "concept-note", deliverable: { en: "One PDF Concept Note, 10–12 A4 pages excluding cover and contents", bn: "একটি পিডিএফ কনসেপ্ট নোট, কভার ও সূচিপত্র বাদে ১০–১২ পৃষ্ঠা (A4)" } },
  { slug: "reel-submission", deliverable: { en: "A Campaign Reel showing your solution, hypothetical brand, campaign, and activation", bn: "আপনার সমাধান, কাল্পনিক ব্র্যান্ড, ক্যাম্পেইন ও অ্যাক্টিভেশন দেখানো একটি ক্যাম্পেইন রিল" } },
  { slug: "grand-finale", deliverable: { en: "A live presentation defending evidence, feasibility, and impact", bn: "প্রমাণ, বাস্তবায়নযোগ্যতা ও প্রভাব তুলে ধরা একটি সরাসরি উপস্থাপনা" } },
];

export const EXPLORER_LABELS: Record<string, L> = {
  "concept-note": { en: "Concept Note", bn: "কনসেপ্ট নোট" },
  "reel-submission": { en: "Campaign Reel", bn: "ক্যাম্পেইন রিল" },
  "grand-finale": { en: "National Grand Finale", bn: "জাতীয় গ্র্যান্ড ফিনালে" },
};

export const BRIEF_STEPS: L[] = [
  { en: "Choose one existing local or international brand operating in Bangladesh.", bn: "বাংলাদেশে কার্যক্রম পরিচালনাকারী একটি দেশি বা আন্তর্জাতিক ব্র্যান্ড বেছে নিন।" },
  { en: "Research one genuine sustainability problem connected to that brand and use credible evidence.", bn: "ওই ব্র্যান্ডের সাথে সম্পর্কিত একটি প্রকৃত টেকসই-সংক্রান্ত সমস্যা নির্ভরযোগ্য তথ্যপ্রমাণসহ গবেষণা করুন।" },
  { en: "Map the people affected and the groups who could help.", bn: "কারা ক্ষতিগ্রস্ত এবং কারা সাহায্য করতে পারে, তাদের চিহ্নিত করুন।" },
  { en: "Explain the campaign’s Primary SDG alignment. Choose two Supporting SDGs from the seven eligible options and justify both.", bn: "ক্যাম্পেইনের প্রাথমিক SDG সংযোগ ব্যাখ্যা করুন। সাতটি নির্ধারিত লক্ষ্য থেকে দুটি সহায়ক SDG বেছে নিয়ে উভয়ের যৌক্তিকতা দিন।" },
  { en: "Develop a feasible solution and name a new hypothetical brand with a purpose and clear responsibilities.", bn: "একটি বাস্তবসম্মত সমাধান তৈরি করুন এবং উদ্দেশ্য ও সুস্পষ্ট দায়িত্বসহ একটি নতুন কাল্পনিক ব্র্যান্ডের নাম দিন।" },
  { en: "Build a campaign strategy with a target audience, message, channels, and measurable indicators.", bn: "লক্ষ্য দর্শক, বার্তা, চ্যানেল ও পরিমাপযোগ্য সূচকসহ একটি ক্যাম্পেইন কৌশল তৈরি করুন।" },
  { en: "Plan a Proof-of-Impact Activation people can take part in. Describe the action, resources, implementation steps, measurement, and how it could scale.", bn: "মানুষ অংশ নিতে পারে এমন একটি প্রুফ-অব-ইমপ্যাক্ট অ্যাক্টিভেশন পরিকল্পনা করুন। কাজ, সম্পদ, বাস্তবায়নের ধাপ, পরিমাপ এবং কীভাবে বড় পরিসরে নেওয়া যায় তা বর্ণনা করুন।" },
];

export const SDGS: { n: number; name: L; desc: L }[] = [
  { n: 4, name: { en: "Quality Education", bn: "মানসম্মত শিক্ষা" }, desc: { en: "Campaigns that teach a habit or skill, such as a peer-led lesson on sorting waste in school canteens.", bn: "কোনো অভ্যাস বা দক্ষতা শেখায় এমন ক্যাম্পেইন, যেমন স্কুল ক্যান্টিনে বর্জ্য আলাদা করা নিয়ে সহপাঠীদের নেতৃত্বে পাঠ।" } },
  { n: 8, name: { en: "Decent Work and Economic Growth", bn: "শোভন কাজ ও অর্থনৈতিক প্রবৃদ্ধি" }, desc: { en: "Ideas that create fair livelihoods, such as linking informal recyclers to a brand’s collection scheme.", bn: "ন্যায্য জীবিকা তৈরি করে এমন আইডিয়া, যেমন অনানুষ্ঠানিক রিসাইক্লারদের কোনো ব্র্যান্ডের সংগ্রহ উদ্যোগের সাথে যুক্ত করা।" } },
  { n: 9, name: { en: "Industry, Innovation and Infrastructure", bn: "শিল্প, উদ্ভাবন ও অবকাঠামো" }, desc: { en: "New systems or tools, such as a simple return-tracking method for reusable packaging.", bn: "নতুন ব্যবস্থা বা টুল, যেমন পুনঃব্যবহারযোগ্য প্যাকেজিং ফেরত ট্র্যাক করার সহজ পদ্ধতি।" } },
  { n: 11, name: { en: "Sustainable Cities and Communities", bn: "টেকসই নগর ও জনপদ" }, desc: { en: "Neighbourhood-scale change, such as cleaner drop-off points in a busy market.", bn: "এলাকাভিত্তিক পরিবর্তন, যেমন ব্যস্ত বাজারে পরিচ্ছন্ন বর্জ্য জমার স্থান।" } },
  { n: 12, name: { en: "Responsible Consumption and Production", bn: "পরিমিত ভোগ ও টেকসই উৎপাদন" }, desc: { en: "Less waste from what we buy and use, such as refill or take-back options.", bn: "কেনা ও ব্যবহারের ক্ষেত্রে বর্জ্য কমানো, যেমন রিফিল বা ফেরত নেওয়ার সুযোগ।" } },
  { n: 13, name: { en: "Climate Action", bn: "জলবায়ু কার্যক্রম" }, desc: { en: "Lower emissions or better preparedness, such as a campus commute-sharing push.", bn: "নিঃসরণ কমানো বা প্রস্তুতি বাড়ানো, যেমন ক্যাম্পাসে যাতায়াত ভাগাভাগির উদ্যোগ।" } },
  { n: 17, name: { en: "Partnerships for the Goals", bn: "লক্ষ্য অর্জনে অংশীদারত্ব" }, desc: { en: "Bringing groups together, such as a brand, a student club, and a local handler running a pilot.", bn: "বিভিন্ন পক্ষকে একসাথে আনা, যেমন একটি ব্র্যান্ড, ছাত্র সংগঠন ও স্থানীয় প্রতিষ্ঠান মিলে পাইলট পরিচালনা।" } },
];

export const CAMPAIGN_EXAMPLES: { id: string; issue: L; brand: string; activation: L; measure: L }[] = [
  { id: "packaging", issue: { en: "Takeaway packaging waste", bn: "টেকঅ্যাওয়ে প্যাকেজিং বর্জ্য" }, brand: "LoopBack", activation: { en: "Pilot a reusable container return point for a campus canteen", bn: "ক্যাম্পাস ক্যান্টিনে পুনঃব্যবহারযোগ্য কন্টেইনার ফেরতের একটি পাইলট পয়েন্ট চালু করা" }, measure: { en: "Share of issued containers returned", bn: "দেওয়া কন্টেইনারের কত অংশ ফেরত এসেছে" } },
  { id: "ewaste", issue: { en: "Old chargers and accessories", bn: "পুরোনো চার্জার ও আনুষঙ্গিক যন্ত্রাংশ" }, brand: "ReCircuit", activation: { en: "Run a collection pilot with a qualified e-waste handler", bn: "যোগ্য ই-বর্জ্য প্রক্রিয়াকারীর সাথে একটি সংগ্রহ পাইলট পরিচালনা" }, measure: { en: "Number or weight of items handed to the handler", bn: "প্রক্রিয়াকারীর কাছে হস্তান্তরিত জিনিসের সংখ্যা বা ওজন" } },
  { id: "food", issue: { en: "Uneaten canteen meals", bn: "ক্যান্টিনে নষ্ট হওয়া খাবার" }, brand: "PortionWise", activation: { en: "Test a smaller-portion option with a campus canteen", bn: "ক্যাম্পাস ক্যান্টিনে ছোট পরিমাণের খাবারের বিকল্প পরীক্ষা করা" }, measure: { en: "Edible leftovers per meal before and during the pilot", bn: "পাইলটের আগে ও চলাকালীন প্রতি বেলায় অবশিষ্ট খাবারের পরিমাণ" } },
];

export const CHECKLIST: { id: string; label: L }[] = [
  { id: "team", label: { en: "Team and selected brand", bn: "টিম ও নির্বাচিত ব্র্যান্ড" } },
  { id: "evidence", label: { en: "Problem evidence", bn: "সমস্যার তথ্যপ্রমাণ" } },
  { id: "stakeholders", label: { en: "Stakeholders", bn: "অংশীজন" } },
  { id: "sdgs", label: { en: "SDGs", bn: "SDG" } },
  { id: "solution", label: { en: "Solution and hypothetical brand", bn: "সমাধান ও কাল্পনিক ব্র্যান্ড" } },
  { id: "feasibility", label: { en: "Feasibility", bn: "বাস্তবায়নযোগ্যতা" } },
  { id: "strategy", label: { en: "Campaign strategy", bn: "ক্যাম্পেইন কৌশল" } },
  { id: "activation", label: { en: "Proof-of-Impact Activation", bn: "প্রুফ-অব-ইমপ্যাক্ট অ্যাক্টিভেশন" } },
  { id: "resources", label: { en: "Resources", bn: "প্রয়োজনীয় সম্পদ" } },
  { id: "plan", label: { en: "Implementation plan", bn: "বাস্তবায়ন পরিকল্পনা" } },
  { id: "indicators", label: { en: "Indicators", bn: "সূচক" } },
  { id: "conclusion", label: { en: "Conclusion", bn: "উপসংহার" } },
];

export const SCORES: { label: L; weight: number }[] = [
  { label: { en: "Problem understanding", bn: "সমস্যা অনুধাবন" }, weight: 15 },
  { label: { en: "Stakeholder mapping", bn: "অংশীজন চিহ্নিতকরণ" }, weight: 10 },
  { label: { en: "SDG alignment", bn: "SDG সংযোগ" }, weight: 10 },
  { label: { en: "Solution and hypothetical brand", bn: "সমাধান ও কাল্পনিক ব্র্যান্ড" }, weight: 15 },
  { label: { en: "Campaign strategy", bn: "ক্যাম্পেইন কৌশল" }, weight: 15 },
  { label: { en: "Storytelling", bn: "গল্প বলা" }, weight: 15 },
  { label: { en: "Proof-of-Impact Activation", bn: "প্রুফ-অব-ইমপ্যাক্ট অ্যাক্টিভেশন" }, weight: 15 },
  { label: { en: "Planning and KPIs", bn: "পরিকল্পনা ও KPI" }, weight: 5 },
];

export const RANKS: { id: string; name: L; champion?: boolean }[] = [
  { id: "champion", name: { en: "Champion", bn: "চ্যাম্পিয়ন" }, champion: true },
  { id: "first", name: { en: "1st Runner-up", bn: "প্রথম রানার-আপ" } },
  { id: "second", name: { en: "2nd Runner-up", bn: "দ্বিতীয় রানার-আপ" } },
];

export const FAQS: { id: string; topic: L; q: L; a: L; link?: { to: "/competition" | "/roadmap" | "/prizes" | "/event-info" | "/join"; hash?: string } }[] = [
  { id: "category", topic: { en: "Eligibility", bn: "যোগ্যতা" }, q: { en: "Which category am I in?", bn: "আমি কোন ক্যাটাগরিতে পড়ব?" }, a: { en: "Seedlings is for Classes 6–10 or equivalent. Saplings is for Classes 11–12, HSC or equivalent, A-Level, Alim, and university admission candidates. Forests is for undergraduate university students from any discipline.", bn: "সিডলিংস ৬ষ্ঠ–১০ম শ্রেণি বা সমমানের জন্য। স্যাপলিংস একাদশ–দ্বাদশ শ্রেণি, এইচএসসি বা সমমান, এ-লেভেল, আলিম ও ভর্তি-প্রার্থীদের জন্য। ফরেস্টস যেকোনো বিভাগের স্নাতক শিক্ষার্থীদের জন্য।" }, link: { to: "/competition", hash: "eligibility" } },
  { id: "size", topic: { en: "Teams", bn: "টিম" }, q: { en: "How many people are in a team?", bn: "একটি টিমে কতজন থাকবে?" }, a: { en: "Each team has 2–3 members, and each student joins only one team.", bn: "প্রতিটি টিমে ২–৩ জন সদস্য থাকবে এবং একজন শিক্ষার্থী কেবল একটি টিমে যোগ দিতে পারবে।" }, link: { to: "/competition", hash: "eligibility" } },
  { id: "cross", topic: { en: "Teams", bn: "টিম" }, q: { en: "Can teammates come from different institutions?", bn: "সদস্যরা কি ভিন্ন প্রতিষ্ঠানের হতে পারবে?" }, a: { en: "Yes. Members may come from different institutions as long as they all belong to the same category.", bn: "হ্যাঁ। সবাই একই ক্যাটাগরির হলে ভিন্ন ভিন্ন প্রতিষ্ঠান থেকে সদস্য নেওয়া যাবে।" } },
  { id: "who", topic: { en: "Registration", bn: "রেজিস্ট্রেশন" }, q: { en: "Who registers the team?", bn: "টিমের রেজিস্ট্রেশন কে করবে?" }, a: { en: "One Team Leader completes registration through the official Google Form and handles official submissions.", bn: "একজন টিম লিডার অফিশিয়াল গুগল ফর্মের মাধ্যমে রেজিস্ট্রেশন সম্পন্ন করবে এবং সব অফিশিয়াল সাবমিশন দেবে।" }, link: { to: "/join" } },
  { id: "real", topic: { en: "Challenge", bn: "চ্যালেঞ্জ" }, q: { en: "Can we use a real brand?", bn: "আমরা কি বাস্তব কোনো ব্র্যান্ড ব্যবহার করতে পারব?" }, a: { en: "Yes. Choose one existing local or international brand operating in Bangladesh and research a genuine sustainability problem connected to it. Studying a brand does not imply endorsement, sponsorship, or partnership.", bn: "হ্যাঁ। বাংলাদেশে কার্যক্রম পরিচালনাকারী একটি দেশি বা আন্তর্জাতিক ব্র্যান্ড বেছে নিয়ে এর সাথে সম্পর্কিত প্রকৃত সমস্যা নিয়ে গবেষণা করুন। কোনো ব্র্যান্ড নিয়ে গবেষণা মানে তাদের সমর্থন, স্পনসরশিপ বা অংশীদারত্ব নয়।" }, link: { to: "/competition", hash: "brief" } },
  { id: "hypo", topic: { en: "Challenge", bn: "চ্যালেঞ্জ" }, q: { en: "What is a hypothetical brand?", bn: "কাল্পনিক ব্র্যান্ড কী?" }, a: { en: "A new brand your team invents to carry out your solution, with a clear purpose and responsibilities.", bn: "আপনার সমাধান বাস্তবায়নের জন্য টিমের তৈরি একটি নতুন ব্র্যান্ড, যার সুস্পষ্ট উদ্দেশ্য ও দায়িত্ব রয়েছে।" }, link: { to: "/competition", hash: "campaign-lab" } },
  { id: "activation", topic: { en: "Challenge", bn: "চ্যালেঞ্জ" }, q: { en: "What counts as a Proof-of-Impact Activation?", bn: "প্রুফ-অব-ইমপ্যাক্ট অ্যাক্টিভেশন কী?" }, a: { en: "A practical action people can take part in, with resources, implementation steps, a way to measure results, and a path to scale.", bn: "মানুষ অংশ নিতে পারে এমন একটি বাস্তব কাজ, যার সম্পদ, বাস্তবায়নের ধাপ, ফলাফল পরিমাপের উপায় এবং বড় পরিসরে নেওয়ার পথ রয়েছে।" }, link: { to: "/competition", hash: "campaign-lab" } },
  { id: "shortlist", topic: { en: "Submissions", bn: "সাবমিশন" }, q: { en: "What do shortlisted teams submit?", bn: "শর্টলিস্টেড টিমগুলো কী জমা দেবে?" }, a: { en: "A Campaign Reel showing the proposed solution, hypothetical brand, campaign, and how the activation works, with evidence if it has been carried out or a credible plan if it is still proposed. A smartphone can be used.", bn: "একটি ক্যাম্পেইন রিল, যেখানে প্রস্তাবিত সমাধান, কাল্পনিক ব্র্যান্ড, ক্যাম্পেইন ও অ্যাক্টিভেশন কীভাবে কাজ করে তা দেখানো হবে। বাস্তবায়িত হলে প্রমাণ, নয়তো বাস্তবসম্মত পরিকল্পনা দিতে হবে। স্মার্টফোন দিয়েই করা যাবে।" }, link: { to: "/competition", hash: "submissions" } },
  { id: "awards", topic: { en: "Awards", bn: "পুরস্কার" }, q: { en: "Who receives awards and certificates?", bn: "কারা পুরস্কার ও সনদ পাবে?" }, a: { en: "Each category recognizes a Champion, 1st Runner-up, and 2nd Runner-up. Teams that complete and submit the Round 1 Concept Note receive a Certificate of Participation, and finalist teams receive a Certificate of Excellence.", bn: "প্রতিটি ক্যাটাগরিতে চ্যাম্পিয়ন, প্রথম রানার-আপ ও দ্বিতীয় রানার-আপ থাকবে। প্রথম রাউন্ডে কনসেপ্ট নোট জমা দেওয়া টিমগুলো অংশগ্রহণ সনদ এবং ফাইনালিস্ট টিমগুলো শ্রেষ্ঠত্বের সনদ পাবে।" }, link: { to: "/prizes" } },
  { id: "updates", topic: { en: "Updates", bn: "আপডেট" }, q: { en: "Where do I get official updates?", bn: "অফিশিয়াল আপডেট কোথায় পাব?" }, a: { en: "Follow the organizers’ official channels, linked on the Event Info page.", bn: "আয়োজকদের অফিশিয়াল চ্যানেল অনুসরণ করুন, যার লিংক ইভেন্ট তথ্য পাতায় আছে।" }, link: { to: "/event-info", hash: "updates" } },
];

// Approved public announcements. Leave empty until organizers publish one.
export const ANNOUNCEMENTS: { title: L; body: L }[] = [];
