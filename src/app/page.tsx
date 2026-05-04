import { HeroSection }          from "@/components/sections/HeroSection";
import { AboutSection }         from "@/components/sections/AboutSection";
import { StackSection }         from "@/components/sections/StackSection";
import { ProjectsSection }      from "@/components/sections/ProjectsSection";
import { JourneySection }       from "@/components/sections/JourneySection";
import { TrustSection }         from "@/components/sections/TrustSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { BlogPreviewSection }   from "@/components/sections/BlogPreviewSection";
import { ContactSection }       from "@/components/sections/ContactSection";
import { getPosts }             from "@/lib/sanity/queries";

export default async function Home() {
  const posts = await getPosts(3);
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <JourneySection />
      <TrustSection />
      <CertificationsSection />
      <BlogPreviewSection posts={posts} />
      <ContactSection />
    </>
  );
}
