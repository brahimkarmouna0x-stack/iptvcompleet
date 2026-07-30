import type { Metadata } from "next";
import { getPhoneNumber, whatsappUrl } from "@/lib/settings";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Cookiebeleid — Transparant gebruik van cookies | IPTV Compleet",
  description:
    "Ontdek hoe IPTV Compleet cookies gebruikt voor noodzakelijke functies, analyses en voorkeuren. Cookiebeleid conform de AVG.",
  path: "/cookie-policy",
});

const CookiePolicyPage = async () => {
  const phone = await getPhoneNumber();
  const whatsapp = phone ? whatsappUrl(phone) : "#";
  return (
    <main className="pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-france-400 text-sm font-bold mb-4 uppercase tracking-wider glow-gold">
            Juridische informatie
          </span>
          <h1 className="font-display font-black text-4xl sm:text-6xl mb-6 text-blanc-50 leading-tight">
            Cookiebeleid
          </h1>
          <p className="text-blanc-400 text-lg">
            Laatst bijgewerkt: 6 mei 2026
          </p>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-8 lg:p-12 space-y-10 sm:space-y-12 animate-slide-up">
          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">
              Wat zijn cookies?
            </h2>
            <p className="text-blanc-300 leading-relaxed">
              Cookies zijn kleine tekstbestanden die op uw
              apparaat worden opgeslagen wanneer u een website bezoekt. Ze helpen de site om
              uw apparaat te herkennen en informatie over
              uw bezoek te onthouden, zoals uw voorkeurstaal en andere instellingen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">
              Hoe wij cookies gebruiken
            </h2>
            <p className="text-blanc-300 mb-6">
              Wij gebruiken cookies voor de volgende doeleinden:
            </p>
            <div className="grid gap-4">
              {[
                {
                  title: "Noodzakelijke cookies",
                  desc: "Essentieel voor de juiste werking van de site, zoals sessiebeheer en beveiliging.",
                },
                {
                  title: "Voorkeurscookies",
                  desc: "Onthouden uw instellingen en keuzes voor een meer gepersonaliseerde ervaring.",
                },
                {
                  title: "Analytische cookies",
                  desc: "Helpen ons te begrijpen hoe bezoekers onze site gebruiken door anonieme gegevens te verzamelen.",
                },
              ].map((cookie, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-blanc-50/5 border border-blanc-50/10"
                >
                  <h3 className="text-blanc-50 font-bold mb-1">
                    {cookie.title}
                  </h3>
                  <p className="text-blanc-400 text-sm">{cookie.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blanc-50 mb-4">
              Cookies beheren
            </h2>
            <p className="text-blanc-300 leading-relaxed">
              De meeste webbrowsers staan u toe cookies te beheren
              via hun instellingen. U kunt ervoor kiezen om alle cookies te blokkeren
              of alleen die van derden. Houd er rekening mee dat het uitschakelen van essentiële cookies
              de werking van onze dienst kan beïnvloeden.
            </p>
          </section>

          <section className="pt-8 border-t border-blanc-50/10">
            <h2 className="text-xl font-bold text-blanc-50 mb-4">
              Neem contact op
            </h2>
            <p className="text-blanc-300">
              Hebt u vragen over ons gebruik van cookies?
              Neem contact op via{" "}
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-france-500 hover:underline"
              >
                WhatsApp
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CookiePolicyPage;
