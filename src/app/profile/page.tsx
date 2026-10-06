import type { Metadata } from "next";
import { DetailPage, DetailSection, ImagePlaceholder } from "@/components/layout/DetailPage";
import { CareerSection, ExperienceSection } from "@/components/sections/HomeSections";
import { skillGroups, values } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "/profile",
  "Profile | 庄司剛",
  "札幌を拠点に活動するフリーランスソフトウェアエンジニア、庄司剛のプロフィール。開発経験、技術、仕事で大切にしている考え方を紹介します。",
);

export default function ProfilePage() {
  return (
    <DetailPage current="/profile">
      <section className="detail-section" aria-labelledby="page-title">
        <div className="detail-container">
          <p className="detail-section__heading"><span>01</span> / PROFILE</p>
          <div className="profile-detail">
            <ImagePlaceholder label="準備中..." portrait />
            <div className="profile-detail__copy">
              <p className="micro-label">FREELANCE SOFTWARE ENGINEER</p>
              <h1 id="page-title">TSUYOSHI SHOJI</h1>
              <p className="profile-detail__name">庄司 剛</p>
              <p>札幌を拠点に活動するフリーランスエンジニアです。<br />ビジネスの目的を理解し、必要なものを必要な規模で<br />設計から実装まで一貫して形にします。</p>
              <p>モバイルアプリや業務システムで培った実務経験を<br />Web制作・アプリ開発にも活かします。<br />新しい技術やAIツールを取り入れながら<br />無理のない構成でプロダクトづくりに取り組みます。</p>
              <p className="profile-detail__quote">良いプロダクトは、良い問いから生まれる。</p>
            </div>
            <dl className="profile-facts">
              <div><dt>LOCATION</dt><dd>札幌、北海道</dd></div>
              <div><dt>ROLE</dt><dd>Freelance <br />Software Engineer</dd></div>
              <div><dt>EXPERIENCE</dt><dd>Android / iOS<br />.NET / Azure</dd></div>
              <div><dt>FOCUS</dt><dd>Technicalマネジメント <br />開発全般</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <DetailSection number="02" title="SKILLS">
        <div className="detail-columns detail-columns--three">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="micro-label">{group.title}</h3>
              <ul className="detail-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </DetailSection>
      <CareerSection />
      <ExperienceSection />
      <DetailSection number="05" title="VALUES">
        <div className="detail-columns detail-columns--three value-grid">
          {values.map((value, index) => (
            <article key={value.title}>
              <p className="micro-label">0{index + 1}</p>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <ImagePlaceholder label="準備中..." />
            </article>
          ))}
        </div>
      </DetailSection>
      <DetailSection number="06" title="INTERESTS">
        <p className="detail-muted">仕事以外の活動や興味については、公開準備中です。</p>
      </DetailSection>
    </DetailPage>
  );
}