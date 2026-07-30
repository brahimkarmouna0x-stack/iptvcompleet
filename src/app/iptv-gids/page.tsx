import type { Metadata } from "next";
import { IPTV_GERMAN_PAGES, iptvPath } from "@/content/iptv-german-pages";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Link from "next/link";
import VaultSearch from "@/components/iptv-german/VaultSearch";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildMetadata({
  title: "IPTV-kennisbank",
  description:
    "Blader door de IPTV-kennisbank van IPTV Compleet met gidsen over applicaties, abonnementen, 4K, IPTV, M3U-playlists en beveiligd streamen.",
  path: "/iptv-gids",
});

export default function IPTVStreamingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "https://iptvcompleet.store" },
            { name: "IPTV-gids", url: "https://iptvcompleet.store/iptv-gids" },
          ])),
        }}
      />
      <main className="flex-1 px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 inline-flex rounded-full border border-france-500/25 bg-france-500/15 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-france-100">
          IPTV-kennisbank
        </p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-blanc-50 sm:text-5xl lg:text-6xl">
          IPTV-gids
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-blanc-300 sm:text-lg">
          Een centrale bibliotheek met praktische IPTV-gidsen voor
          applicaties, spelers, apparaten, abonnementen, kwaliteit en
          beveiligd streamen.
        </p>

        <div className="mt-12">
          <VaultSearch />
        </div>


        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IPTV_GERMAN_PAGES.map((page) => (
            <Link
              key={page.slug}
              href={iptvPath(page.slug)}
              className="rounded-2xl border border-blanc-50/10 bg-blanc-50/[0.035] p-5 transition-colors hover:border-france-500/40 hover:bg-blanc-50/5"
            >
              <h2 className="text-lg font-black text-blanc-50">{page.keyword}</h2>
              <p className="mt-3 text-sm leading-6 text-blanc-400">
                {page.metaDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-32">
        <Pricing />
      </div>

      <div className="mt-32">
        <CTA
          title={<>Begin vandaag nog met <span className="text-gradient">IPTV Compleet</span></>}
          description="Ontdek de beste IPTV-ervaring met duizenden zenders, films en series in de hoogste kwaliteit."
        />
      </div>
    </main>
    </>
  );
}
