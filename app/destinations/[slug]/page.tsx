import { getDestinationBySlug, destinations } from "@/lib/data";
import type { Destination } from "@/lib/data";
import { notFound } from 'next/navigation';
import React from 'react';
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

// Define props type including params
interface DestinationPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: DestinationPageProps): Metadata {
  // In einer realen Anwendung würden wir hier die Daten aus einer API oder Datendatei abrufen
  return {
    title: `${params.slug} - Europäische Strandziele`,
    description: `Entdecken Sie alles über ${params.slug} als Urlaubsziel`,
  };
}

export default function DestinationPage({ params }: DestinationPageProps) {
  // Fetch data using the slug
  const destination = getDestinationBySlug(params.slug);

  // Handle case where destination is not found
  if (!destination) {
    notFound(); // Trigger 404 page
  }

  // Render the destination details
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" className="mb-4" onClick={() => window.history.back()}>
            &larr; Zurück
          </Button>
          <h1 className="text-4xl font-bold mb-4 text-primary">{destination.name}</h1>
          <div className="h-64 bg-muted rounded-lg mb-6 overflow-hidden">
            {/* Hier würde ein Bild des Reiseziels angezeigt werden */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Bild von {destination.name}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Beschreibung</h2>
              <p className="text-foreground/80">
                Detaillierte Beschreibung von {destination.name} mit Informationen über die Strände, 
                Aktivitäten und besondere Attraktionen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Kristallklares Wasser und traumhafte Strände</li>
                <li>Historische Altstadt zum Erkunden</li>
                <li>Ausgezeichnete lokale Küche</li>
                <li>Vielseitige Freizeitmöglichkeiten</li>
              </ul>
            </section>
          </div>

          <div className="space-y-6 bg-card p-6 rounded-lg shadow-sm">
            <section>
              <h2 className="text-xl font-semibold mb-3">Praktische Infos</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium">Beste Reisezeit:</span>
                  <p className="text-foreground/80">Mai bis September</p>
                </div>
                <div>
                  <span className="font-medium">Anreise:</span>
                  <p className="text-foreground/80">Flug ab München: ca. 2,5 Stunden</p>
                </div>
                <div>
                  <span className="font-medium">Sprache:</span>
                  <p className="text-foreground/80">Landessprache, Englisch verbreitet</p>
                </div>
                <div>
                  <span className="font-medium">Währung:</span>
                  <p className="text-foreground/80">Euro</p>
                </div>
              </div>
            </section>

            <Button className="w-full">Reise planen</Button>
          </div>
        </div>
      </div>
    </main>
  );
} 