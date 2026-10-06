import type { Metadata } from "next";
import Link from "next/link";
import { DetailPage, DetailSection, ImagePlaceholder, PageIntro } from "@/components/layout/DetailPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "/works",
  "Works | 庄司剛",
  "庄司剛の公開制作物。ポートフォリオサイトを紹介し、その他の制作物は公開準備中です。",
);

const works = [
  { number: "001", title: "PORTFOLIO", type: "WEBSITE", role: "DEVELOPMENT", stack: "Next.js / TypeScript", status: "制作中", description: "庄司剛の経験・技術・考え方を伝え、Web制作・開発のご相談につなげるポートフォリオサイト。", href: "/" },
  { number: "002", title: "公開準備中", type: "未掲載", role: "未掲載", stack: "未掲載", status: "公開準備中", description: "制作内容・担当範囲・使用技術は、公開可能な情報を確認後に掲載します。", href: null },
  { number: "003", title: "公開準備中", type: "未掲載", role: "未掲載", stack: "未掲載", status: "公開準備中", description: "制作内容・担当範囲・使用技術は、公開可能な情報を確認後に掲載します。", href: null },
  { number: "004", title: "公開準備中", type: "未掲載", role: "未掲載", stack: "未掲載", status: "公開準備中", description: "制作内容・担当範囲・使用技術は、公開可能な情報を確認後に掲載します。", href: null },
];

export default function WorksPage() {
  return (
    <DetailPage current="/works">
      <PageIntro title="WORKS" subtitle="つくったもの。関わったもの。" description="自身で制作した公開可能な成果物を紹介します。制作物の画像や詳細は準備中です。" topics={["WEB", "MOBILE", "SYSTEM", "CLOUD", "PRODUCT"]} />
      <DetailSection number="01" title="SELECTED WORKS">
        <p className="detail-muted works-disclosure">公開できる制作物を順次掲載します。準備中の項目は掲載用の仮枠です。</p>
        <div className="selected-works">
          {works.map((work) => (
            <article className="selected-work" key={work.number}>
              <ImagePlaceholder label="準備中..." />
              <div className="selected-work__copy">
                <p className="micro-label">PROJECT / {work.number}</p>
                <h3>{work.title}</h3>
                <dl className="work-spec">
                  <div><dt>TYPE</dt><dd>{work.type}</dd></div>
                  <div><dt>ROLE</dt><dd>{work.role}</dd></div>
                  <div><dt>STACK</dt><dd>{work.stack}</dd></div>
                  <div><dt>STATUS</dt><dd>{work.status}</dd></div>
                </dl>
                <p className="selected-work__description">{work.description}</p>
                {work.href ? <Link className="text-link" href={work.href}>VIEW SITE</Link> : <p className="micro-label">CASE / 準備中</p>}
              </div>
            </article>
          ))}
        </div>
      </DetailSection>
    </DetailPage>
  );
}