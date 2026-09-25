import type { Metadata } from "next";
import { Header, Footer } from "@/components/site/Header";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der AHI-TEC, Meinerzhagen. Umfassende Informationen zur Erhebung und Verarbeitung personenbezogener Daten gemäß DSGVO und TDDDG.",
  alternates: {
    canonical: "/datenschutz",
  },
  openGraph: {
    title: "Datenschutzerklärung – AHI-TEC",
    description: "Datenschutzerklärung der AHI-TEC, Meinerzhagen gemäß DSGVO.",
    url: "/datenschutz",
  },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow mx-auto max-w-4xl px-4 pb-24 pt-32 sm:px-6 w-full">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Stand: September 2026 · Datenschutz nach den Vorgaben der Datenschutz-Grundverordnung (DSGVO) und des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes (TDDDG).
        </p>

        <div className="mt-10 space-y-12 text-sm leading-relaxed text-muted-foreground">
          {/* 1. Datenschutz auf einen Blick */}
          <section className="border-b border-border pb-8">
            <h2 className="text-xl font-bold text-foreground">
              1. Datenschutz auf einen Blick
            </h2>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">Allgemeine Hinweise</h3>
                <p className="mt-1">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Datenerfassung auf dieser Website</h3>
                <p className="mt-1">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
                </p>
                <p className="mt-2">
                  <strong>Wie erfassen wir Ihre Daten?</strong><br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben oder uns per E-Mail senden. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>
                <p className="mt-2">
                  <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Bearbeitung Ihrer Kontaktanfragen genutzt werden. Es findet kein Profiling oder Tracking zu Werbezwecken statt.
                </p>
                <p className="mt-2">
                  <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Zudem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Hosting */}
          <section className="border-b border-border pb-8">
            <h2 className="text-xl font-bold text-foreground">
              2. Hosting
            </h2>
            <div className="mt-4 space-y-3">
              <p>
                Wir hosten die Inhalte unserer Website bei einem externen Anbieter (Host). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
              <p>
                Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p>
                Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
              </p>
            </div>
          </section>

          {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
          <section className="border-b border-border pb-8">
            <h2 className="text-xl font-bold text-foreground">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <div className="mt-4 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground">Datenschutz</h3>
                <p className="mt-1">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Hinweis zur verantwortlichen Stelle</h3>
                <p className="mt-1">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="mt-2 text-foreground font-medium">
                  <p>AHI-TEC Industriedienstleistungen</p>
                  <p className="text-muted-foreground">[Straße und Hausnummer ergänzen]</p>
                  <p className="text-muted-foreground">58540 Meinerzhagen</p>
                  <p className="text-muted-foreground">Deutschland</p>
                  <p className="mt-2 text-muted-foreground">
                    Telefon: [Telefonnummer ergänzen]<br />
                    E-Mail:{" "}
                    <a href="mailto:info@ahi-tec.de" className="text-signal underline">
                      info@ahi-tec.de
                    </a>
                  </p>
                </div>
                <p className="mt-2">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Speicherdauer</h3>
                <p className="mt-1">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Rechtsgrundlagen der Datenverarbeitung</h3>
                <p className="mt-1">
                  Soweit Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Soweit die Verarbeitung zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen erforderlich ist, erfolgt sie auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind (Art. 6 Abs. 1 lit. c DSGVO). Die Verarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="mt-1">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">
                  Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                </h3>
                <p className="mt-1 uppercase text-xs font-semibold text-foreground/85">
                  WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN. WIDERSPRECHEN SIE, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                <p className="mt-1">
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Die zuständige Aufsichtsbehörde für Nordrhein-Westfalen ist:
                </p>
                <div className="mt-2 text-foreground font-medium">
                  <p>Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen (LDI NRW)</p>
                  <p className="text-muted-foreground">Kavalleriestraße 2–4, 40213 Düsseldorf</p>
                  <p className="text-muted-foreground">Website: https://www.ldi.nrw.de</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Recht auf Datenübertragbarkeit</h3>
                <p className="mt-1">
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Auskunft, Berichtigung, Löschung und Einschränkung</h3>
                <p className="mt-1">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">SSL- bzw. TLS-Verschlüsselung</h3>
                <p className="mt-1">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Datenerfassung auf dieser Website */}
          <section className="border-b border-border pb-8">
            <h2 className="text-xl font-bold text-foreground">
              4. Datenerfassung auf dieser Website
            </h2>

            <div className="mt-4 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground">Cookies und Tracking-Technologien</h3>
                <p className="mt-1">
                  Diese Website setzt bewusst <strong>keine Tracking-Cookies, keine Profiling-Cookies und keine Werbecookies</strong> ein. Wir verwenden keine Analyse-Dienste wie Google Analytics oder Werbetracker von Drittanbietern. Aus diesem Grund ist auf dieser Website kein störendes Cookie-Banner erforderlich, da keine zustimmungspflichtigen Datenverarbeitungen im Sinne des § 25 TDDDG stattfinden.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Server-Log-Dateien</h3>
                <p className="mt-1">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL (die zuvor besuchte Seite)</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="mt-2">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground">Kontaktaufnahme per E-Mail oder Kontaktformular</h3>
                <p className="mt-1">
                  Wenn Sie uns per E-Mail oder über ein Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular bzw. Ihrer E-Mail inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail-Adresse, Inhalt der Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="mt-2">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
                </p>
                <p className="mt-2">
                  Die von Ihnen an uns übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Plugins und Tools */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">
              5. Plugins und Tools
            </h2>

            <div>
              <h3 className="font-semibold text-foreground">Lokale Web Fonts (Next.js Font Optimization)</h3>
              <p className="mt-1">
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Web Fonts. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Schriften direkt über unsere Server bzw. unser Content Delivery Network. Eine direkte Verbindung zu externen Servern von Dritten (wie z. B. Servern von Google in den USA) wird durch den Browser des Nutzers beim Aufruf der Seite nicht hergestellt. Ihre IP-Adresse wird somit nicht an externe Drittanbieter übertragen.
              </p>
              <p className="mt-2">
                Die Nutzung erfolgt im Interesse einer ansprechenden und einheitlichen Darstellung unseres Online-Angebots. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
