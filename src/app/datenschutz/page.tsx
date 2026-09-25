import type { Metadata } from "next";
import { Header, Footer } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der AHI-TEC, Meinerzhagen. Informationen zur Erhebung und Verarbeitung personenbezogener Daten gemäß DSGVO.",
  alternates: {
    canonical: "/datenschutz",
  },
  openGraph: {
    title: "Datenschutzerklärung – AHI-TEC",
    description: "Datenschutzerklärung der AHI-TEC, Meinerzhagen.",
    url: "/datenschutz",
  },
};

const SECTIONS = [
  {
    title: "1. Verantwortliche Stelle",
    text: "Verantwortlich für die Datenverarbeitung auf dieser Website ist AHI-TEC, 58540 Meinerzhagen, E-Mail: info@ahi-tec.de.",
  },
  {
    title: "2. Erhebung und Speicherung personenbezogener Daten",
    text: "Beim Besuch dieser Website werden durch den Hosting-Anbieter automatisch Informationen in sogenannten Server-Log-Dateien gespeichert (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp). Diese Daten dienen der Sicherstellung eines störungsfreien Betriebs und werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
  },
  {
    title: "3. Kontaktaufnahme",
    text: "Bei Ihrer Kontaktaufnahme per E-Mail werden die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse, Inhalt der Anfrage) zur Bearbeitung Ihres Anliegens gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind.",
  },
  {
    title: "4. Cookies und Tracking",
    text: "Diese Website verwendet keine Tracking-Tools und setzt keine Marketing-Cookies ein.",
  },
  {
    title: "5. Ihre Rechte",
    text: "Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen die Verarbeitung (Art. 21 DSGVO). Zudem besteht ein Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO).",
  },
  {
    title: "6. Datensicherheit",
    text: "Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulation, Verlust oder Zugriff unberechtigter Dritter zu schützen.",
  },
];

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 w-full">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Datenschutzerklärung
        </h1>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          {SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
              <p className="mt-2">{section.text}</p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
