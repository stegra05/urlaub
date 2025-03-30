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

  // Render the client component, passing the fetched data
  return <DestinationClientPage destination={destination} />;
}
