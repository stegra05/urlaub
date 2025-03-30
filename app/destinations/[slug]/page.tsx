import { getDestinationBySlug, destinations } from "@/lib/data";
import type { Destination } from "@/lib/data";
import { notFound } from 'next/navigation';
import React from 'react';
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

// Generate static paths for each destination
export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

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
            {/* == Strandqualität & Erreichbarkeit == */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">Strandqualität & Erreichbarkeit</h2>
              <div className="space-y-2 text-foreground/80">
                <p><strong>Qualität:</strong> {destination.beach.quality}</p>
                <p><strong>Erreichbarkeit:</strong> {destination.beach.accessibility}</p>
              </div>
            </section>

            {/* == Öffentliche Verkehrsmittel == */}
            {destination.transport && (
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-secondary">Öffentliche Verkehrsmittel</h2>
                <p className="text-foreground/80">{destination.transport}</p>
              </section>
            )}

            {/* == Kulturelle Highlights == */}
            {destination.culture && (
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-secondary">Kulturelle Highlights</h2>
                 <p className="text-foreground/80">{destination.culture}</p>
              </section>
            )}

            {/* == Freizeitaktivitäten == */}
            {destination.activities && (
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-secondary">Freizeitaktivitäten</h2>
                 <p className="text-foreground/80">{destination.activities}</p>
              </section>
            )}
          </div>

          <div className="space-y-6 bg-card p-6 rounded-lg shadow-sm">
            {/* == Praktische Infos & Kosten == */}
            <section>
              <h2 className="text-xl font-semibold mb-3 text-secondary">Praktische Infos & Kosten</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium">Beste Reisezeit:</span>
                  <p className="text-foreground/80">Mai bis September</p>
                </div>
                <div>
                  <span className="font-medium">Anreise:</span>
                  <p className="text-foreground/80">{destination.flightTime}</p>
                </div>
                <div>
                  <span className="font-medium">Sprache:</span>
                  <p className="text-foreground/80">Landessprache, Englisch verbreitet</p>
                </div>
                <div>
                  <span className="font-medium">Währung:</span>
                  <p className="text-foreground/80">Euro</p>
                </div>

                {/* Geschätzte Kosten */}
                {destination.costs && (
                  <>
                    <div className="pt-3 mt-3 border-t border-border">
                       <h3 className="text-base font-semibold mb-2 text-secondary">Geschätzte Kosten</h3>
                       <div className="space-y-1">
                         <div>
                           <span className="font-medium">Flüge:</span>
                           <p className="text-foreground/80">{destination.costs.flights}</p>
                         </div>
                         <div>
                           <span className="font-medium">Unterkunft:</span>
                           <p className="text-foreground/80">{destination.costs.accommodation}</p>
                         </div>
                       </div>
                    </div>
                  </>
                )}
              </div>
            </section>

            <Button className="w-full">Reise planen</Button>
          </div>
        </div>
      </div>
    </main>
  );
} 