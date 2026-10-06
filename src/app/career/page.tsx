import type { Metadata } from "next";
import { DetailPage, DetailSection, ImagePlaceholder, PageIntro } from "@/components/layout/DetailPage";
import { CareerSection, ExperienceSection } from "@/components/sections/HomeSections";
import { careerTimeline, workExperiences } from "@/data/portfolio";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "/career",
  "Career | 庄司剛",
  "庄司剛のキャリア。大学での学びからフリーランスへ至る歩みと、職務上の役割の変化、実務プロジェクトへの参画経験を紹介します。",
);

export default function CareerPage() {
  return (
    <DetailPage current="/career">
      <PageIntro title="CAREER" subtitle="これまでの経験と、これからの挑戦。" description="大学卒業から現在までの歩みと、エンジニアとしての役割の変化、実務プロジェクトへの参画経験をまとめています。現場での経験を通じて、技術とビジネスの両面から価値を生み出すことを目指してきました。" topics={["CAREER", "PROJECT EXPERIENCE", "GROWTH"]} />
      <DetailSection number="01" title="TIMELINE">
        <div className="career-detail-layout">
          <ol className="career-detail-timeline">
            {careerTimeline.map((item) => (
              <li key={item.period}>
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
      <CareerSection number="02" showDetailLink={false} items={workExperiences} />
      <ExperienceSection number="03" />
    </DetailPage>
  );
}