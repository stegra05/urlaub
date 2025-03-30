import React from "react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-border/40 bg-muted py-6 text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 text-sm sm:flex-row md:px-6">
        {/* Copyright Notice */}
        <p className="mb-2 sm:mb-0">© {currentYear} Urlaubsziele Showcase</p>

        {/* Footer Links */}
        <div className="flex space-x-4">
          <Link
            href="/impressum"
            className="transition-colors hover:text-primary focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="transition-colors hover:text-primary focus:rounded-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
