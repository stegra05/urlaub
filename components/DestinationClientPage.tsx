"use client"; // Mark this as a Client Component

import type { Destination } from "@/lib/data";
import { Button } from "@/components/ui/button";
import React from "react";
// Optional: Import Image if you implement the TODO later
import Image from "next/image";

interface DestinationClientPageProps {
  destination: Destination; // Receive destination data as a prop
}

export function DestinationClientPage({
  destination,
}: DestinationClientPageProps) {
  // The entire UI rendering logic from the original page component goes here
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Button
            variant="ghost"
            className="mb-4"
            onClick={() => window.history.back()}
          >
            &larr; Zurück
          </Button>
          <h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            {destination.name}
          </h1>
          {/* TODO: Ersetze dies durch <Image src={destination.imageUrl || '/placeholder-large.jpg'} alt={`Hauptbild von ${destination.name}`} width={800} height={320} className="rounded-lg object-cover w-full aspect-[5/2]" /> */}
          <Image
            src={destination.imageUrl || "/placeholder-large.jpg"} // Fallback image
            alt={`Hauptbild von ${destination.name}`}
            width={800}
            height={320}
            className="mb-6 aspect-[5/2] w-full rounded-lg object-cover" // Added mb-6 from the div
            priority // Load this image first
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            {/* == Strandqualität & Erreichbarkeit == */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold text-secondary">
                Strandqualität & Erreichbarkeit
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Qualität:</strong> {destination.beach.quality}
                </p>
                <p>
                  <strong>Erreichbarkeit:</strong>{" "}
                  {destination.beach.accessibility}
                </p>
              </div>
            </section>

            {/* == Öffentliche Verkehrsmittel == */}
            {destination.transport && (
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-secondary">
                  Öffentliche Verkehrsmittel
                </h2>
                <p className="text-muted-foreground">{destination.transport}</p>
              </section>
            )}

            {/* == Kulturelle Highlights == */}
            {destination.culture && (
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-secondary">
                  Kulturelle Highlights
                </h2>
                <p className="text-muted-foreground">{destination.culture}</p>
              </section>
            )}

            {/* == Freizeitaktivitäten == */}
            {destination.activities && (
              <section>
                <h2 className="mb-4 text-2xl font-semibold text-secondary">
                  Freizeitaktivitäten
                </h2>
                <p className="text-muted-foreground">
                  {destination.activities}
                </p>
              </section>
            )}
          </div>

          <div className="space-y-6 rounded-lg bg-card p-6 shadow-sm">
            {/* == Praktische Infos & Kosten == */}
            <section>
              <h2 className="mb-3 text-xl font-semibold text-secondary">
                Praktische Infos & Kosten
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                {/* Display flightTime only if it exists */}
                {destination.flightTime && (
                  <div>
                    <span className="font-medium text-foreground">
                      Anreise:
                    </span>
                    <p>{destination.flightTime}</p>
                  </div>
                )}

                {/* Removed hardcoded placeholders for Sprache, Währung, Beste Reisezeit */}

                {/* Geschätzte Kosten - Display only if costs object exists */}
                {destination.costs && (
                  <>
                    <div className="mt-3 border-t border-border pt-3">
                      <h3 className="mb-2 text-base font-semibold text-secondary">
                        Geschätzte Kosten
                      </h3>
                      <div className="space-y-1">
                        {/* Display flights only if it exists */}
                        {destination.costs.flights && (
                          <div>
                            <span className="font-medium text-foreground">
                              Flüge:
                            </span>
                            <p>{destination.costs.flights}</p>
                          </div>
                        )}
                        {/* Display accommodation only if it exists */}
                        {destination.costs.accommodation && (
                          <div>
                            <span className="font-medium text-foreground">
                              Unterkunft:
                            </span>
                            <p>{destination.costs.accommodation}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </section>

            {/* This button can remain here as the whole component is client-side now */}
            <Button className="w-full">Reise planen</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
