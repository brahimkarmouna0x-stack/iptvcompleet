import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import AuthoritySections from "@/components/sections/page/AuthoritySections";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title:
    "IPTV Compleet Nederland: 31.000+ Zenders in 4K | Direct Actief",
  description:
    "IPTV Compleet: het complete IPTV-abonnement in Nederland met 31.000+ zenders, films en series in 4K, zonder onderbrekingen. Direct actief, alles inbegrepen, gratis proefperiode.",
  path: "/",
  // The root `opengraph-image.tsx` supplies the branded 1200×630 social card.
  // Setting `ogImage: false` keeps `twitter.images` unset too, so the Twitter
  // card reuses that same 1200×630 card instead of the square brand logo —
  // matching the landing pages and avoiding a wrong-ratio summary_large_image.
  ogImage: false,
});

// Above-fold: Hero is static (LCP element)
// Below-fold sections: dynamically imported with SSR enabled (pre-rendered, not client-only)
const FeatureMarquee = dynamic(() => import("@/components/ui/FeatureMarquee"), {
  ssr: true,
});
const HowItWorks = dynamic(
  () => import("@/components/sections/HowItWorks"),
  { ssr: true },
);
const WatchEverywhere = dynamic(
  () => import("@/components/sections/WatchEverywhere"),
  { ssr: true },
);
const AboutIPTVStreaming = dynamic(
  () => import("@/components/sections/AboutIPTVStreaming"),
  { ssr: true },
);
const WhyIPTVStreaming = dynamic(
  () => import("@/components/sections/WhyIPTVStreaming"),
  { ssr: true },
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: true },
);
const Categories = dynamic(() => import("@/components/sections/Categories"), {
  ssr: true,
});
const ChannelShowcase = dynamic(
  () => import("@/components/sections/ChannelShowcase"),
  { ssr: true },
);
const Trending = dynamic(() => import("@/components/sections/Trending"), {
  ssr: true,
});
const Partners = dynamic(() => import("@/components/sections/Partners"), {
  ssr: true,
});
const Features = dynamic(() => import("@/components/sections/Features"), {
  ssr: true,
});
const ComparisonTable = dynamic(
  () => import("@/components/sections/ComparisonTable"),
  { ssr: true },
);
const Guide = dynamic(() => import("@/components/sections/Guide"), {
  ssr: true,
});
const Guarantee = dynamic(
  () => import("@/components/sections/Guarantee"),
  { ssr: true },
);
const Pricing = dynamic(() => import("@/components/sections/Pricing"), {
  ssr: true,
});
const Compatibility = dynamic(
  () => import("@/components/sections/Compatibility"),
  { ssr: true },
);
const FAQ = dynamic(() => import("@/components/sections/FAQ"), { ssr: true });
const ContentHighlights = dynamic(
  () => import("@/components/sections/ContentHighlights"),
  { ssr: true },
);
const Stats = dynamic(() => import("@/components/sections/Stats"), {
  ssr: true,
});
const TrustBadges = dynamic(
  () => import("@/components/sections/TrustBadges"),
  { ssr: true },
);
const CTA = dynamic(() => import("@/components/sections/CTA"), { ssr: true });
const SeoSections = dynamic(
  () => import("@/components/sections/SeoSections"),
  { ssr: true },
);

export default function Home() {
  return (
    <main className="home-page flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema()),
        }}
      />
      <Hero />
      <FeatureMarquee />
      <WatchEverywhere />
      <HowItWorks />
      <AboutIPTVStreaming />
      <Testimonials />
      <Categories />
      <ChannelShowcase />
      <Trending />
      <Partners />
      <Features />
      <WhyIPTVStreaming />
      <ComparisonTable />
      <Guide />
      <Guarantee />
      <Pricing />
      <Compatibility />
      <FAQ />
      <ContentHighlights />
      <Stats />
      <TrustBadges />
      <AuthoritySections slug="home" />
      <SeoSections />
      <CTA />
    </main>
  );
}
