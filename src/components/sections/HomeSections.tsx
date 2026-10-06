import Image from "next/image";
import Link from "next/link";
import { Code2, Mail, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { CareerTimeline } from "./CareerTimeline";
import { career, contactOptions, skillGroups, type CareerItem } from "@/data/portfolio";

const contactIcons: Record<string, LucideIcon> = {
  LINE: MessageCircle,
  MAIL: Mail,
  GITHUB: Code2,
  PHONE: Phone,
};

const navigation = [
  { label: "PROFILE", href: "/profile" },
  { label: "CAREER", href: "/career" },
  { label: "EXPERIENCE", href: "/experience" },
  { label: "WORKS", href: "/works" },
  { label: "CONTACT", href: "/contact" },
];

function SectionKicker({ number, children }: { number: string; children: string }) {
  return (
    <p className="section-kicker">
      <span>{number}</span> / {children}
    </p>
  );
}

type NavigationItem = { label: string; href: string };

export function Header({ links = navigation, current, homeHref = "#top" }: {
  links?: NavigationItem[];
  current?: string;
  homeHref?: string;
}) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="wordmark" href={homeHref}>
          TSUYOSHI SHOJI.
        </Link>
        <nav className="site-nav" aria-label="メインナビゲーション">
          {links.map((item) => (
            <Link href={item.href} key={item.href} aria-current={current === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__index micro-label">01 / 06</p>
          <h1 id="hero-title">
            <span>THINK.</span>
            <span>DESIGN.</span>
            <span>BUILD.</span>
          </h1>
          <p className="hero__statement">
            ビジネスの目的を理解し、設計から実装まで一貫してつくる。
          </p>
          <p className="hero__identity">
            <strong>TSUYOSHI SHOJI</strong>
            <span>Freelance Software Engineer</span>
          </p>
        </div>
        <figure className="hero__visual">
          <Image
            src="/images/system/hero-architecture.png"
            alt=""
            width={760}
            height={520}
            priority
          />
        </figure>
        <p className="hero__location micro-label">SAPPORO, JP</p>
      </div>
    </section>
  );
}

export function ProfileSection() {
  return (
    <section className="section" id="profile" aria-labelledby="profile-title">
      <div className="section__inner">
        <SectionKicker number="02">PROFILE</SectionKicker>
        <div className="profile-grid">
          <div className="portrait-placeholder" role="img" aria-label="準備中...">
            <span className="micro-label">準備中...</span>
          </div>
          <div className="profile-copy">
            <p className="micro-label">FREELANCE SOFTWARE ENGINEER</p>
            <h2 id="profile-title">TSUYOSHI SHOJI</h2>
            <p className="profile-copy__role">庄司剛 / Freelance Software Engineer</p>
            <p className="profile-copy__location">Based in Sapporo, Japan.</p>
            <p className="profile-copy__body">
              札幌を拠点に活動するフリーランスソフトウェアエンジニアです。ビジネスの目的を整理し、必要なものを必要な規模で、設計から実装まで一貫して形にします。実務で培った開発経験と新しいツールを活かし、無理のない構成でプロダクトづくりに取り組みます。
            </p>
          </div>
          <aside className="skills" aria-label="経験と使用ツール">
            <h3 className="micro-label">EXPERIENCE / SELECTED TOOLS</h3>
            <div className="skills__groups">
              {skillGroups.map((group) => (
                <div className="skills__group" key={group.title}>
                  <h4>{group.title}</h4>
                  {group.items.map((item) => <p key={item}>{item}</p>)}
                </div>
              ))}
            </div>
          </aside>
        </div>
        <Link className="text-link section-detail-link" href="/profile">VIEW PROFILE</Link>
      </div>
    </section>
  );
}

export function CareerSection({ number = "03", showDetailLink = true, items = career }: {
  number?: string;
  showDetailLink?: boolean;
  items?: CareerItem[];
}) {
  return (
    <section className="section" id="career" aria-labelledby="career-title">
      <div className="section__inner">
        <div className="career-layout">
          <div className="career-intro">
            <SectionKicker number={number}>CAREER</SectionKicker>
            <h2 className="visually-hidden" id="career-title">
              Career progression from tester to freelance engineer
            </h2>
            <p className="career-side-note">FROM EXPERIENCE TO A BROADER IMPACT.</p>
          </div>
          <CareerTimeline items={items} />
        </div>
        {showDetailLink && <Link className="text-link section-detail-link" href="/career">VIEW CAREER</Link>}
      </div>
    </section>
  );
}

const experience = [
  {
    id: 1,
    project: "セキュリティ系業務アプリ(Web)",
    role: "開発リーダー",
    scale: "大規模（全体約30人）",
    period: "1年0ヶ月",
    tech: "C#, .NET Framework, Azure, Azure SQL Server 他",
  },
  {
    id: 2,
    project: "車載器用テスト用ダミーアプリ",
    role: "プロジェクトリーダー",
    scale: "小規模（5人）",
    period: "0年3ヶ月",
    tech: "Android Java, Android Automotive OS",
  },
  {
    id: 3,
    project: "車載器用オーディオアプリ",
    role: "開発リーダー",
    scale: "中規模（9人）",
    period: "0年10ヶ月",
    tech: "Android Java, Android OS, (Docker), (Linux) 他",
  },
  {
    id: 4,
    project: "金融系業務アプリ(Web)",
    role: "リーダー補佐",
    scale: "中規模（10人）",
    period: "0年3ヶ月",
    tech: "Java 他",
  },
  {
    id: 5,
    project: "医療系コンシューマ向けネイティブアプリ(モバイル)",
    role: "担当 ⇨ PL ⇨ PM",
    scale: "小規模（5人～20人）",
    period: "4年5ヶ月",
    tech: "Android Java, Android OS, Windows, Objective-C, macOS, iOS, MySQL 他",
  },
];

export function ExperienceSection({ number = "04" }: { number?: string }) {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="section__inner">
        <SectionKicker number={number}>PROJECT EXPERIENCE</SectionKicker>
        <h2 className="visually-hidden" id="experience-title">
          Project experience and professional technology areas
        </h2>
        <p className="experience-note">
          参画したプロジェクトの役割、規模、期間、使用技術を掲載しています。
        </p>
        <table className="experience-table">
          <thead>
            <tr>
              <th scope="col">PROJECT</th>
              <th scope="col">ROLE</th>
              <th scope="col">SCALE</th>
              <th scope="col">PERIOD</th>
              <th scope="col">TECH</th>
            </tr>
          </thead>
          <tbody>
            {experience.map((item) => (
              <tr key={item.id}>
                <td data-label="PROJECT">{item.project}</td>
                <td data-label="ROLE">{item.role}</td>
                <td data-label="SCALE">{item.scale}</td>
                <td data-label="PERIOD">{item.period}</td>
                <td data-label="TECH">{item.tech}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function WorksSection() {
  return (
    <section className="section" id="works" aria-labelledby="works-title">
      <div className="section__inner">
        <SectionKicker number="05">SELECTED WORKS</SectionKicker>
        <div className="works-grid">
          <div className="work-placeholder" role="img" aria-label="準備中...">
            <span className="micro-label">準備中...</span>
          </div>
          <div className="works-copy">
            <p className="micro-label">PUBLIC WORKS</p>
            <h2 id="works-title">Selected Works</h2>
            <p>公開可能な制作物と画像は準備中です。</p>
            <Link className="text-link" href="/works">VIEW WORKS</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="section__inner">
        <SectionKicker number="06">CONTACT</SectionKicker>
        <h2 className="contact-heading" id="contact-title">
          LET’S BUILD SOMETHING.
        </h2>
        <p className="contact-intro">
          プロジェクトのご相談・お見積もりなど、お気軽にお問い合わせください。
        </p>
        <ul className="contact-list">
          {contactOptions.map((item) => {
            const Icon = contactIcons[item.label];
            return (
              <li key={item.label}>
                <div className="contact-list__heading">
                  <Icon className="contact-list__icon" aria-hidden="true" />
                  <h3>{item.label}</h3>
                </div>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
        <Link className="text-link section-detail-link" href="/contact">VIEW CONTACT</Link>
      </div>
    </section>
  );
}

export function Footer({ links = navigation }: { links?: NavigationItem[] }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__identity">
          <span className="wordmark">TSUYOSHI SHOJI.</span>
          <p>Freelance Software Engineer</p>
        </div>
        <nav className="site-footer__nav" aria-label="フッターナビゲーション">
          {links.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <span className="micro-label">SAPPORO, JAPAN</span>
        </nav>
      </div>
    </footer>
  );
}