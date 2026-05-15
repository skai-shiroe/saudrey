import { Column } from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Schema } from "@once-ui-system/core";
import { Meta } from "@once-ui-system/core";
import { Hero } from "@/components/home/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { WhyMeSection } from "@/components/home/WhyMeSection";
import { CaseStudyHighlight } from "@/components/home/CaseStudyHighlight";
import { PhilosophyPreview } from "@/components/home/PhilosophyPreview";
import { ContactSection } from "@/components/home/ContactSection";
import { Mailchimp } from "@/components/Mailchimp";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="l" gap="0" paddingY="0" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Hero />
      <div className="divider-gradient" />
      <ProblemSection />
      <div className="divider-gradient" />
      <ServicesSection />
      <div className="divider-gradient" />
      <FeaturedProjects />
      <div className="divider-gradient" />
      <ExpertiseSection />
      <div className="divider-gradient" />
      <WhyMeSection />
      <div className="divider-gradient" />
      <CaseStudyHighlight />
      <div className="divider-gradient" />
      <PhilosophyPreview />
      <div className="divider-gradient" />
      <ContactSection />
      <div className="divider-gradient" />
      <Column fillWidth paddingY="40" horizontal="center">
        <Mailchimp />
      </Column>
    </Column>
  );
}