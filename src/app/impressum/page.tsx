import type { Metadata } from "next";
import { Header, Footer } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der AHI-TEC, Meinerzhagen. Gesetzliche Angaben gemäß § 5 TMG.",
  alternates: {
    canonical: "/impressum",
  },
  openGraph: {
    title: "Impressum – AHI-TEC",
    description: "Impressum der AHI-TEC, Meinerzhagen.",
    url: "/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header solid />
      <main className="flex-grow mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 w-full">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Impressum</h1>

        <section className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
            <p className="mt-2">
              AHI-TEC
              <br />
              58540 Meinerzhagen
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Kontakt</h2>
            <p className="mt-2">
              E-Mail:{" "}
              <a
                href="mailto:info@ahi-tec.de"
                className="text-signal underline hover:opacity-80"
              >
                info@ahi-tec.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="mt-2">AHI-TEC, Anschrift wie oben.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">Haftung für Inhalte</h2>
            <p className="mt-2">
              Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für
              die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können
              wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
              gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
