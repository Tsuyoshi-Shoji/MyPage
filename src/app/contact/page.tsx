import type { Metadata } from "next";
import { DetailPage, DetailSection, PageIntro } from "@/components/layout/DetailPage";
import { contactOptions } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "/contact",
  "Contact | 庄司剛",
  "庄司剛へのWeb制作・Web開発のご相談について。問い合わせ方法とご相談から開始までの流れを紹介します。連絡先は公開準備中です。",
);

const flow = [
  { title: "お問い合わせ", description: "連絡先の公開後、ご相談内容をお知らせください。" },
  { title: "ヒアリング", description: "ご相談内容や目的、ご要望をお伺いします。" },
  { title: "ご提案・お見積り", description: "内容に応じて、進め方とお見積りをご提案します。" },
  { title: "ご契約・開始", description: "内容・条件に合意後、プロジェクトを開始します。" },
];

export default function ContactPage() {
  const methods = ["MAIL", "GITHUB", "LINE"].map((label) => contactOptions.find((item) => item.label === label));
  return (
    <DetailPage current="/contact">
      <PageIntro title="CONTACT" subtitle={"プロジェクトのご相談・お見積りなど、\nお気軽にお問い合わせください。"} description="Webサイト・Webアプリケーションの制作・開発をご検討の方へ。目的や課題の整理から、設計・実装まで、ご相談内容に応じて一緒に考えます。" topics={["PROJECT", "CONSULTING", "DEVELOPMENT", "SUPPORT"]} />
      <DetailSection number="01" title="CONTACT METHOD">
        <div className="detail-columns detail-columns--three contact-methods">
          {methods.map((method) => method && (
            <article key={method.label}>
              <p className="micro-label">{method.label === "GITHUB" ? "DEVELOPMENT" : "INQUIRY"}</p>
              <h3>{method.label}</h3>
              <p>{method.purpose}</p>
              <p className="contact-methods__status">{method.description}</p>
            </article>
          ))}
        </div>
        <p className="contact-phone-note">{contactOptions.find((item) => item.label === "PHONE")?.description}</p>
      </DetailSection>
      <DetailSection number="02" title="INFORMATION">
        <div className="contact-information">
          <dl>
            <div><dt>ご相談内容</dt><dd>Webサイト制作 / Webアプリケーション開発<br />ソフトウェアの設計・実装</dd></div>
            <div><dt>拠点</dt><dd>札幌、北海道</dd></div>
            <div><dt>対応方法</dt><dd>ご相談内容に応じて調整します。</dd></div>
            <div><dt>稼働条件</dt><dd>期間・規模・ご要望を伺い、個別にご相談します。</dd></div>
          </dl>
          <div>
            <h3>ご相談内容の例</h3>
            <ul>
              <li>Webサイト・Webサービスの制作・開発</li>
              <li>既存サイトやシステムの見直し</li>
              <li>目的や要件の整理、設計のご相談</li>
              <li>技術選定や実装方法のご相談</li>
            </ul>
          </div>
        </div>
      </DetailSection>
      <DetailSection number="03" title="FLOW">
        <ol className="contact-flow">
          {flow.map((step, index) => (
            <li key={step.title}>
              <p className="micro-label">0{index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </DetailSection>
    </DetailPage>
  );
}