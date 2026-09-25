import type { Metadata } from "next";
import { Header, Footer } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum der AHI-TEC, Meinerzhagen. Gesetzliche Anbieterkennzeichnung gemäß § 5 DDG und § 18 MStV.",
  alternates: {
    canonical: "/impressum",
  },
  openGraph: {
    title: "Impressum – AHI-TEC",
    description: "Rechtliche Angaben und Impressum der AHI-TEC, Meinerzhagen.",
    url: "/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6 w-full">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Impressum
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Gesetzliche Anbieterkennzeichnung gemäß § 5 Digitale-Dienste-Gesetz (DDG) sowie § 18 Medienstaatsvertrag (MStV).
        </p>

        <section className="mt-10 space-y-10 text-sm leading-relaxed text-muted-foreground">
          {/* Angaben nach § 5 DDG */}
          <div className="border-b border-border pb-8">
            <h2 className="text-xl font-bold text-foreground">
              Angaben gemäß § 5 DDG
            </h2>
            <div className="mt-4 space-y-1 text-foreground">
              <p className="font-semibold text-base">AHI-TEC</p>
              <p className="text-muted-foreground">Industriedienstleistungen</p>
              <p className="text-muted-foreground">
                [Straße und Hausnummer ergänzen]
                <br />
                58540 Meinerzhagen
                <br />
                Deutschland
              </p>
            </div>

            <div className="mt-4">
              <p className="font-semibold text-foreground">Vertreten durch:</p>
              <p className="mt-1 text-muted-foreground">[Vor- und Nachname des Inhabers / Geschäftsführers]</p>
            </div>
          </div>

          {/* Kontakt */}
          <div className="border-b border-border pb-8">
            <h2 className="text-xl font-bold text-foreground">Kontakt</h2>
            <div className="mt-4 space-y-2">
              <p>
                <span className="font-semibold text-foreground">Telefon:</span>{" "}
                <span className="text-muted-foreground">[Telefonnummer ergänzen – gesetzliche Pflichtangabe nach § 5 Abs. 1 Nr. 2 DDG]</span>
              </p>
              <p>
                <span className="font-semibold text-foreground">E-Mail:</span>{" "}
                <a
                  href="mailto:info@ahi-tec.de"
                  className="text-signal underline hover:opacity-85 font-medium"
                >
                  info@ahi-tec.de
                </a>
              </p>
              <p>
                <span className="font-semibold text-foreground">Website:</span>{" "}
                <a
                  href="https://ahi-tec.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  https://ahi-tec.de
                </a>
              </p>
            </div>
          </div>

          {/* Umsatzsteuer-ID & Register */}
          <div className="border-b border-border pb-8">
            <h2 className="text-xl font-bold text-foreground">
              Umsatzsteuer-Identifikationsnummer & Register
            </h2>
            <div className="mt-4 space-y-3">
              <div>
                <p className="font-semibold text-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                </p>
                <p className="mt-1 text-muted-foreground">
                  [USt-IdNr. eintragen, z. B. DE123456789 oder &quot;Wird auf Anfrage mitgeteilt / Nicht zutreffend&quot;]
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Registereintrag:</p>
                <p className="mt-1 text-muted-foreground">
                  [Falls im Handelsregister eingetragen: Registergericht und Registernummer angeben, andernfalls: &quot;Nicht im Handelsregister eingetragen (Einzelunternehmen)&quot;]
                </p>
              </div>
            </div>
          </div>

          {/* Redaktionell verantwortlich */}
          <div className="border-b border-border pb-8">
            <h2 className="text-xl font-bold text-foreground">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <div className="mt-4 space-y-1">
              <p className="text-muted-foreground">[Vor- und Nachname]</p>
              <p className="text-muted-foreground">[Straße und Hausnummer]</p>
              <p className="text-muted-foreground">58540 Meinerzhagen</p>
            </div>
          </div>

          {/* Streitbeilegung */}
          <div className="border-b border-border pb-8">
            <h2 className="text-xl font-bold text-foreground">
              EU-Streitschlichtung & Verbraucherstreitbeilegung
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">Europäische Online-Streitbeilegung:</h3>
                <p className="mt-1">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter folgendem Link finden:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-signal underline hover:opacity-85"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  .<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Verbraucherstreitbeilegung / Universalschlichtungsstelle:</h3>
                <p className="mt-1">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>

          {/* Haftungsausschluss */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">
              Haftungsausschluss (Disclaimer)
            </h2>

            <div>
              <h3 className="font-semibold text-foreground">Haftung für Inhalte</h3>
              <p className="mt-1">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">Haftung für Links</h3>
              <p className="mt-1">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground">Urheberrecht</h3>
              <p className="mt-1">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
