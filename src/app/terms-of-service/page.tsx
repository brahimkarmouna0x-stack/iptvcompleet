import type { Metadata } from "next";
import { Info, MessageCircle } from "lucide-react";
import { getPhoneNumber, whatsappUrl } from "@/lib/settings";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Algemene voorwaarden voor het IPTV-abonnement | IPTV Compleet",
  description:
    "Lees de algemene voorwaarden van IPTV Compleet voor uw IPTV-abonnement. Duidelijke regels over gebruik, betaling en garantie.",
  path: "/terms-of-service",
});

const TermsOfServicePage = async () => {
  const phone = await getPhoneNumber();
  const whatsapp = phone ? whatsappUrl(phone) : "#";
  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-rouge-400 text-sm font-bold mb-4 uppercase tracking-wider glow-red">
            Juridische informatie
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
            <span className="text-gradient">Algemene</span> voorwaarden
          </h1>
          <p className="text-blanc-400 text-lg">
            Laatst bijgewerkt: 6 mei 2026
          </p>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-8 lg:p-12 space-y-10 sm:space-y-12 animate-slide-up">
          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">1. Acceptatie van de voorwaarden</h2>
            <p className="text-blanc-300 leading-relaxed">
              Door IPTV Compleet te bezoeken of te gebruiken, accepteert u deze algemene voorwaarden. Als u niet alle voorwaarden accepteert, mag u de dienst niet gebruiken.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">2. Beschrijving van de dienst</h2>
            <p className="text-blanc-300 leading-relaxed">
              IPTV Compleet biedt een IPTV-abonnementsdienst waarmee gebruikers toegang krijgen tot live tv-zenders en content-on-demand via internet. De beschikbaarheid van content kan per regio verschillen en kan veranderen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">3. Verplichtingen van de gebruiker</h2>
            <ul className="space-y-4">
              {[
                "U moet minimaal 18 jaar zijn om deze dienst te gebruiken.",
                "U bent verantwoordelijk voor de vertrouwelijkheid van uw account.",
                "De dienst is uitsluitend bedoeld voor persoonlijk en niet-commercieel gebruik.",
                "U mag de aangeboden content niet uitzenden of publiceren.",
                "Een abonnement is alleen geldig voor het opgegeven aantal apparaatverbindingen."
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-blanc-300">
                  <Info
                    className="mt-1 h-5 w-5 shrink-0 text-rouge-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">4. Betaling en restituties</h2>
            <p className="text-blanc-300 leading-relaxed">
              Abonnementen worden vooruitbetaald op een terugkerende basis. Alle betalingen zijn niet-restitueerbaar, tenzij wettelijk verplicht of anderszins bepaald door ons restitutiebeleid. Wij behouden ons het recht voor om onze prijzen op elk moment te wijzigen met voorafgaande kennisgeving.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">5. Beperking van aansprakelijkheid</h2>
            <p className="text-blanc-300 leading-relaxed">
              IPTV Compleet is niet aansprakelijk voor indirecte, incidentele, speciale of gevolgschades voortvloeiend uit het gebruik of het onvermogen om de dienst te gebruiken.
            </p>
          </section>

          <section className="pt-8 border-t border-blanc-50/10 text-center">
            <p className="text-blanc-400 mb-6 font-medium">
              Hebt u een vraag over onze voorwaarden?
            </p>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-blanc-50 font-bold hover:bg-blanc-50/10 transition-all border border-blanc-50/10"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat op WhatsApp
            </a>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfServicePage;
