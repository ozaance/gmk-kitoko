import { EngagementsSection } from "@/components/engagements-section";
import { FounderSection } from "@/components/founder-section";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { PrestationsSection } from "@/components/prestations-section";
import { ReservationSection } from "@/components/reservation-section";
import { ReviewsSection } from "@/components/reviews-section";
import { ShopBanner } from "@/components/shop-banner";
import { ShopExperience } from "@/components/shop-experience";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ShopBanner />
        <PrestationsSection />
        <ShopExperience />
        <EngagementsSection />
        <ReviewsSection />
        <GallerySection />
        <FounderSection />
        <ReservationSection />
      </main>
      <SiteFooter />
    </>
  );
}
