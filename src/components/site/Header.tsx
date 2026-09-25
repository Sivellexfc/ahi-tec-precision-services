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

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label="AHI-TEC Startseite"
    >
      <Image
        src="/images/logo.png"
        alt="AHI-TEC Industriedienstleistungen"
        width={200}
        height={69}
        priority
        className="h-10 w-auto object-contain"
      />
    </Link>
  );
}

export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled || solid
          ? "border-b border-border bg-background/95 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Hauptnavigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                scrolled || solid
                  ? "text-foreground hover:text-signal"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#kontakt"
            className="rounded-md bg-signal px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Anfrage senden
          </Link>
        </nav>
        <Link
          href="/#kontakt"
          className="rounded-md bg-signal px-3 py-2 text-sm font-semibold text-accent-foreground md:hidden"
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
            <p className="mt-3 max-w-sm text-sm text-primary-foreground/70">
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
