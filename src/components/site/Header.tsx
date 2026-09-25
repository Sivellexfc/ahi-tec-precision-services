"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#ueber-uns", label: "Über uns" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Logo({
  className = "h-12 sm:h-14 w-auto object-contain",
}: {
  className?: string;
} = {}) {
  return (
    <Link
      href="/"
      className="inline-flex items-center transition-opacity hover:opacity-90"
      aria-label="AHI-TEC Startseite"
    >
      <Image
        src="/images/logo.png"
        alt="AHI-TEC Industriedienstleistungen"
        width={300}
        height={104}
        priority
        className={className}
      />
    </Link>
  );
}

export function Header({ solid = false }: { solid?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-200 border-b border-border ${
        scrolled ? "shadow-md" : "shadow-xs"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Hauptnavigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-signal"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#kontakt"
            className="rounded-md bg-signal px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 shadow-sm"
          >
            Anfrage senden
          </Link>
        </nav>
        <Link
          href="/#kontakt"
          className="rounded-md bg-signal px-3 py-2 text-sm font-semibold text-accent-foreground md:hidden shadow-sm"
        >
          Kontakt
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-deep text-primary-foreground" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Logo />
            <p className="mt-3 max-w-sm text-sm text-primary-foreground/70 leading-relaxed">
              Industriedienstleistungen aus Meinerzhagen – Montage, Prüfung,
              Sortierung, Entgraten und CNC-Bearbeitung.
            </p>
          </div>
          <div className="text-sm text-primary-foreground/70">
            <p className="font-semibold text-primary-foreground">AHI-TEC</p>
            <p>58540 Meinerzhagen</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} AHI-TEC. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="transition-colors hover:text-primary-foreground">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition-colors hover:text-primary-foreground">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
