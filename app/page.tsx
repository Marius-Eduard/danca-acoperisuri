import HeroSection from "@/components/custom/HeroSection";
import RecentProjects from "@/components/custom/RecentProjects";
import { RoofDividerPrimary, RoofDividerInverted } from "@/components/custom/RoofDivider";

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
