import React from 'react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground py-6 mt-12 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        {/* Copyright Notice */}
        <p className="mb-2 sm:mb-0">
          © {currentYear} Urlaubsziele Showcase
        </p>

        {/* Footer Links */}
        <div className="flex space-x-4">
          <Link 
            href="#" 
            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:rounded-sm"
          >
            Impressum
          </Link>
          <Link 
            href="#" 
            className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:rounded-sm"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
} 