import Link from "next/link";
import { Header, Footer } from "@/components/site/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-signal">
            Fehler 404
          </p>
          <h1 className="mt-2 text-7xl font-black text-foreground">404</h1>
          <h2 className="mt-4 text-2xl font-bold text-foreground">
            Seite nicht gefunden
          </h2>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-signal px-6 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              Zur Startseite
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
