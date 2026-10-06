import type { Metadata } from "next";
import { DetailPage, DetailSection, ImagePlaceholder, PageIntro } from "@/components/layout/DetailPage";
import { career, skillGroups, values } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "/career",
  "Career | 庄司剛",
  "庄司剛のキャリア。テスター、開発エンジニア、チームリーダーを経てフリーランスへ。役割の変化と実務経験、技術、仕事への考え方を紹介します。",
);

export default function CareerPage() {
  return (
    <DetailPage current="/career">
      <PageIntro title="CAREER" subtitle="これまでの経験と、これからの挑戦。" description="現場での経験を通じて、技術とビジネスの両面から価値を生み出すことを目指してきました。テスターからフリーランスまで、役割の変化と歩みを紹介します。" topics={["EXPERIENCE", "TECHNOLOGY", "GROWTH", "VALUE"]} />
      <DetailSection number="01" title="TIMELINE">
        <div className="career-detail-layout">
          <ol className="career-detail-timeline">
            {career.map((item) => (
              <li key={item.role}>
                <p className="career-detail-timeline__period micro-label">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="career-detail-visual">
            <ImagePlaceholder label="準備中..." portrait />
            <figcaption className="micro-label">CONTINUE EXPLORING.</figcaption>
          </figure>
        </div>
      </DetailSection>
      <DetailSection number="02" title="WORK EXPERIENCE">
        <div className="detail-columns detail-columns--four career-role-grid">
          {career.map((item) => (
            <article key={item.role}>
              <p className="micro-label">{item.period}</p>
              <h3>{item.role}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </DetailSection>
      <DetailSection number="03" title="TECHNOLOGY">
        <div className="detail-columns detail-columns--three">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="micro-label">{group.title}</h3>
              <ul className="detail-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </DetailSection>
      <DetailSection number="04" title="WHAT I VALUE">
        <div className="career-values">
          <ImagePlaceholder label="準備中..." />
          <div className="detail-columns detail-columns--three value-grid">
            {values.map((value, index) => (
              <article key={value.title}>
                <p className="micro-label">0{index + 1}</p>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </DetailSection>
    </DetailPage>
  );
}