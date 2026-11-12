import type { L } from "@/lib/i18n";

const s = (en: string, bn: string): L => ({ en, bn });

export const UI = {
  register: s("Register Your Team", "টিম রেজিস্ট্রেশন করুন"),
  exploreRoadmap: s("Explore the Roadmap", "রোডম্যাপ দেখুন"),
  nav: {
    challenge: s("The Challenge", "চ্যালেঞ্জ"),
    roadmap: s("Roadmap", "রোডম্যাপ"),
    prizes: s("Prize Pool", "প্রাইজ পুল"),
    eventInfo: s("Event Info", "ইভেন্ট তথ্য"),
    join: s("Get Involved", "যুক্ত হোন"),
    organizers: s("Organizers", "আয়োজক"),
    meet: s("Who You’ll Meet", "যাদের সাথে দেখা হবে"),
    faq: s("FAQ", "প্রশ্নোত্তর"),
  },
  skip: s("Skip to content", "মূল কনটেন্টে যান"),
  menu: s("Menu", "মেনু"),
  close: s("Close menu", "মেনু বন্ধ করুন"),
  home: s("GreenFluence 2026 home", "গ্রিনফ্লুয়েন্স ২০২৬ হোম"),
  newTab: s("Opens Google Forms in a new tab", "নতুন ট্যাবে গুগল ফর্ম খুলবে"),
  newTabSr: s("(opens in a new tab)", "(নতুন ট্যাবে খুলবে)"),
  checkUpdates: s("Check official registration updates", "অফিশিয়াল রেজিস্ট্রেশন আপডেট দেখুন"),
  leaderNote: s("The Team Leader completes registration for the whole team.", "পুরো টিমের পক্ষে টিম লিডার রেজিস্ট্রেশন সম্পন্ন করবে।"),
  organizedBy: s("Jointly organized by", "যৌথ আয়োজনে"),
  earthsAnts: s("Earth’s Ants Youth Environmental Organization", "আর্থস অ্যান্টস ইয়ুথ এনভায়রনমেন্টাল অর্গানাইজেশন"),
  esdm: s(
    "Department of Environmental Science and Disaster Management (ESDM), Daffodil International University (DIU)",
    "এনভায়রনমেন্টাল সায়েন্স অ্যান্ড ডিজাস্টার ম্যানেজমেন্ট বিভাগ (ESDM), ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি (DIU)",
  ),
  tagline: s("Where Sustainable Ideas Represent Powerful Brands", "যেখানে টেকসই ভাবনা প্রতিনিধিত্ব করে শক্তিশালী ব্র্যান্ডের"),
  footerScope: s("A national competition open to students from all 64 districts of Bangladesh.", "বাংলাদেশের ৬৪ জেলার শিক্ষার্থীদের জন্য উন্মুক্ত একটি জাতীয় প্রতিযোগিতা।"),
  whoTakesPart: s("Who takes part", "কারা অংশ নেবে"),
  whatHappens: s("What happens", "কী হবে"),
  nextMove: s("Your next move", "আপনার পরবর্তী পদক্ষেপ"),
  deliverable: s("Deliverable", "যা জমা দিতে হবে"),
  stageOf: (n: number, total: number): L => ({ en: `Stage ${n} of ${total}`, bn: `ধাপ ${toBn(n)} / ${toBn(total)}` }),
  previous: s("Previous", "আগের"),
  next: s("Next", "পরের"),
  furtherPrizes: s("Further prize and recognition details will be announced by the organizers.", "পুরস্কার ও স্বীকৃতির বিস্তারিত আয়োজকরা পরে জানাবেন।"),
};

export function toBn(n: number) {
  return String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)] ?? d);
}
