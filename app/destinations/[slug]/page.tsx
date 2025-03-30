import { getDestinationBySlug, destinations } from "@/lib/data";
import type { Destination } from "@/lib/data";
import { notFound } from "next/navigation";
import React from "react";
import type { Metadata } from "next";
import { DestinationClientPage } from "@/components/DestinationClientPage";

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
  // Die Destination-Daten innerhalb der Funktion abrufen
  const destination = getDestinationBySlug(params.slug);
  
  // Fallback-Werte, falls keine Destination gefunden wird
  if (!destination) {
    return {
      title: "Destination nicht gefunden - Europäische Strandziele",
      description: "Die gesuchte Stranddestination konnte nicht gefunden werden.",
    };
  }
  
  // Spezifische Metadaten basierend auf den Destination-Daten
  return {
    title: `${destination.name} - Europäische Strandziele`,
    description: `Entdecken Sie ${destination.name} mit ${destination.beach.quality} und erleben Sie die lokale Kultur: ${destination.culture}`,
    openGraph: {
      title: `${destination.name} - Europäische Strandziele`,
      description: `Entdecken Sie ${destination.name} mit ${destination.beach.quality}. Flugzeit: ${destination.flightTime}`,
      type: "website",
      url: `https://europaeische-strandziele.de/destinations/${destination.slug}`,
      images: [
        {
          url: destination.imageUrl || "https://europaeische-strandziele.de/images/og-image.jpg",
          width: 500,
          height: 281,
          alt: `Bild von ${destination.name}`,
        },
      ],
    },
  };
}

export default function DestinationPage({ params }: DestinationPageProps) {
  // Fetch data using the slug
  const destination = getDestinationBySlug(params.slug);

  // Handle case where destination is not found
  if (!destination) {
    notFound(); // Trigger 404 page
  }

  // Render the client component, passing the fetched data
  return <DestinationClientPage destination={destination} />;
}
