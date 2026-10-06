import type { ReactNode } from "react";
import Link from "next/link";
import { Header, Footer } from "@/components/sections/HomeSections";
import { detailNavigation } from "@/data/portfolio";

export function DetailPage({ current, children }: { current: string; children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">メインコンテンツへ</a>
      <Header links={detailNavigation} current={current} homeHref="/" />
      <main className="detail-page" id="main">{children}</main>
      <Footer links={detailNavigation} />
    </>
  );
}

export function PageIntro({ title, subtitle, description, topics }: {
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
}) {
  return (
    <section className="detail-intro" aria-labelledby="page-title">
      <div className="detail-container">
        <Link className="text-link" href="/">HOME</Link>
        <div className="detail-intro__grid">
          <div>
            <h1 id="page-title">{title}</h1>
            <p className="detail-intro__subtitle">{subtitle}</p>
            <p className="detail-intro__byline">TSUYOSHI SHOJI / {title}</p>
          </div>
          <p className="detail-intro__description">{description}</p>
          <ul className="detail-intro__topics micro-label" aria-label="ページの内容">
            {topics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function DetailSection({ number, title, children }: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  const headingId = `detail-${number}`;
  return (
    <section className="detail-section" aria-labelledby={headingId}>
      <div className="detail-container">
        <h2 className="detail-section__heading" id={headingId}>
          <span>{number}</span> / {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export function ImagePlaceholder({ label, portrait = false }: { label: string; portrait?: boolean }) {
  return (
    <div className={`image-placeholder${portrait ? " image-placeholder--portrait" : ""}`} role="img" aria-label={label}>
      <span className="micro-label">準備中...</span>
    </div>
  );
}