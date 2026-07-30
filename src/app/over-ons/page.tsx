import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import PageHero from "@/components/sections/page/PageHero";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = buildMetadata({
  title: "Over ons | IPTV Compleet — De IPTV-aanbieder van Nederland",
  description:
    "Ontdek IPTV Compleet, de meest betrouwbare premium IPTV-aanbieder van Nederland. Wij bieden 24/7 ondersteuning en 99,9% beschikbaarheid.",
  path: "/over-ons",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: "Home", url: "https://iptvcompleet.store" },
            { name: "Over ons", url: "https://iptvcompleet.store/over-ons" },
          ])),
        }}
      />
      <main className="flex-1 bg-france-950">
      <PageHero
        hero={{
          headline: "Over IPTV Compleet",
          subheadline:
            "De meest betrouwbare premium IPTV-aanbieder van Nederland. Wij staan voor kwaliteit, stabiliteit en klanttevredenheid 24/7.",
          cta: { label: "Bekijk abonnementen", href: "/#pakketten" },
          badgeTags: ["Betrouwbaar", "Ondersteuning 24/7", "Premium 4K"],
        }}
      >
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Over ons", href: "/over-ons" },
          ]}
        />
      </PageHero>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-blanc-50">
          <div className="prose prose-invert lg:prose-lg mx-auto prose-a:text-france-400 hover:prose-a:text-france-300">
            <h2>Wie zijn wij</h2>
            <p>
              Bij <strong>IPTV Compleet</strong> zetten wij ons in om de ultieme tv-ervaring te bieden aan Nederlandstaligen die in Nederland wonen.
              Als toonaangevende IPTV-aanbieder combineren wij geavanceerde streamingtechnologie en ongeëvenaarde klantenservice.
            </p>

            <h2>Onze missie</h2>
            <p>
              Onze missie is eenvoudig: onbeperkt entertainment toegankelijk maken voor iedereen, zonder onderbrekingen, zonder verborgen kosten en met de hoogste beeldkwaliteit (4K en 8K HDR).
            </p>

            <h2>Waarom kiezen voor ons?</h2>
            <ul>
              <li><strong>Betrouwbaarheid:</strong> onze servers bieden een gegarandeerde beschikbaarheid van 99,9%.</li>
              <li><strong>Kwaliteit:</strong> wij bieden duizenden live zenders en een uitgebreide VOD-bibliotheek in scherpe 4K-kwaliteit.</li>
              <li><strong>Klantenservice:</strong> ons team staat 24/7 via WhatsApp klaar om u te helpen met installatie of technische vragen.</li>
            </ul>

            <h2>Neem contact op</h2>
            <p>
              Hebt u vragen of wilt u meer weten over onze diensten? Bezoek onze <a href="/support">ondersteuningspagina</a> of neem direct contact met ons op via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
