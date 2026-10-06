export const detailNavigation = [
  { label: "PROFILE", href: "/profile" },
  { label: "CAREER", href: "/career" },
  { label: "WORKS", href: "/works" },
  { label: "CONTACT", href: "/contact" },
];

export type CareerItem = {
  period: string;
  role: string;
  description: string;
};

export const career: CareerItem[] = [
  {
    period: "07-2019 ～ 07-2020",
    role: "TESTER",
    description: "品質の重要性を学び、ものづくりの基礎をつくる。",
  },
  {
    period: "08-2020 ～ 03-2023",
    role: "DEVELOPER",
    description: "Web・モバイルアプリの開発を通じて、技術力と開発視野を広げる。",
  },
  {
    period: "04-2023 ～ 03-2026",
    role: "TEAM LEADER",
    description: "チームを牽引し、プロジェクトの推進・設計に責任を持ち、人と技術の両面で成長する。",
  },
  {
    period: "04-2026 ～ PRESENT",
    role: "FREELANCE",
    description: "より柔軟な開発環境で価値を生み出し、企画から実装までを一貫して支援できる存在を目指す。",
  },
];

export const skillGroups = [
  { title: "PROFESSIONAL EXPERIENCE", items: ["Android / Java", "iOS / Objective-C", ".NET / C#", "Azure"] },
  { title: "WEB / PERSONAL DEVELOPMENT", items: ["TypeScript / React / Next.js", "Android / iOS"] },
  { title: "DEVELOPMENT TOOLS", items: ["ChatGPT", "GitHub Copilot"] },
];

export const values = [
  { title: "THINK DEEPLY", description: "表面的な解決ではなく、目的と課題を整理し、本質的な問いから考える。" },
  { title: "BUILD TOGETHER", description: "一人ではなく、チームで。対話を重ねながら、より大きな価値を生み出す。" },
  { title: "CONTINUE EXPLORING", description: "技術・デザイン・ビジネスなど、新しい領域にも挑戦し続ける。" },
];

export const contactOptions = [
  { label: "LINE", description: "連絡先URLは準備中です。", purpose: "気軽なご相談やお問い合わせに。" },
  { label: "MAIL", description: "メールアドレスは準備中です。", purpose: "お仕事のご相談・お見積もりに。" },
  { label: "GITHUB", description: "公開プロフィールは準備中です。", purpose: "公開プロジェクトや開発履歴の確認に。" },
  { label: "PHONE", description: "電話番号はメールでお問い合わせいただいた方へ、返信時にご案内します。", purpose: "" },
];