import type { Metadata } from "next";
import HeroSection from "@/components/custom/HeroSection";
import RecentProjects from "@/components/custom/RecentProjects";
import { RoofDividerPrimary, RoofDividerInverted } from "@/components/custom/RoofDivider";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RoofDividerPrimary />
      <RecentProjects />
      <RoofDividerInverted />
    </main>
  );
}
