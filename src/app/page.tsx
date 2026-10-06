import {
  CareerSection,
  ContactSection,
  ExperienceSection,
  Footer,
  Header,
  HeroSection,
  ProfileSection,
  WorksSection,
} from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        メインコンテンツへ
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <ProfileSection />
        <CareerSection />
        <ExperienceSection />
        <WorksSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
