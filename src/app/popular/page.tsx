import type { Metadata } from "next";
import PopularContent from "@/components/sections/PopularContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Populaire content — Films & series om te ontdekken | IPTV Compleet",
  description:
    "Ontdek de meest populaire films en series van dit moment en de contentcategorieën van IPTV Compleet. Film-/seriedata geleverd door TMDB.",
  path: "/popular",
});

export default function PopularPage() {
  return (
    <main className="min-h-screen">
      <PopularContent />
    </main>
  );
}
