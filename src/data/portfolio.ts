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
  responsibilities?: string[];
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

export const careerTimeline = [
  {
    period: "2014",
    role: "大学入学",
    description: "札幌の大学に入学。情報工学を専攻し、プログラミングの基礎を学ぶ。この頃からものづくりやテクノロジーに強い関心を持つ。",
  },
  {
    period: "2018",
    role: "大学卒業",
    description: "大学を卒業。新卒でソフトウェア開発の会社に入社し、テストエンジニアとしてキャリアをスタート。",
  },
  {
    period: "2019 - 2021",
    role: "開発エンジニアへ",
    description: "テスト業務で得た知見を活かし、モバイルアプリの開発エンジニアに。Android（Java）を中心に、iOSやバックエンドの開発も経験。",
  },
  {
    period: "2021 - 2023",
    role: "チームリーダー",
    description: "5名規模のチームをリード。要件定義・設計・実装・テスト・リリースまで一貫して担当し、最大20名規模のプロジェクトにも参画。",
  },
  {
    period: "2024 - 現在",
    role: "フリーランス",
    description: "より自由に、より本質的なプロダクトづくりに挑戦するため独立。個人開発や受託開発、技術支援など幅広く活動中。",
  },
];

export const workExperiences = [
  {
    period: "2018 - 2019",
    role: "TESTER",
    description: "ソフトウェアテストの基礎を学び、品質の重要性やものづくりのプロセスを理解。",
    responsibilities: ["テスト設計", "テスト実施", "不具合報告・管理"],
  },
  {
    period: "2019 - 2021",
    role: "DEVELOPER",
    description: "モバイルアプリの開発に携わり、実装力を磨く。Android（Java）を中心に、iOSアプリ開発も経験。",
    responsibilities: ["Androidアプリ開発（Java）", "iOSアプリ開発（Objective-C）", "機能設計・実装・テスト"],
  },
  {
    period: "2021 - 2023",
    role: "TEAM LEADER",
    description: "5〜20名規模のチームをリードし、開発プロセスの改善とチームの成果最大化に取り組む。",
    responsibilities: ["チームマネジメント", "要件定義・設計", "スケジュール管理", "クライアントとの調整"],
  },
  {
    period: "2024 - PRESENT",
    role: "FREELANCE",
    description: "受託開発・技術支援に加え、個人開発にも注力。ビジネスと技術の両面から価値を生み出す。",
    responsibilities: ["Web / モバイルアプリ開発", "バックエンド開発", "クラウド環境構築・運用", "個人開発プロダクトの企画・開発"],
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