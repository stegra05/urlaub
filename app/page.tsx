import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
// Import the actual destinations data
import { destinations } from "@/lib/data";
// Import Shadcn Card components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// // Beispielhafte Reiseziele, später könnten diese aus einer Datenquelle geladen werden
// const destinations = [
//   { id: 1, slug: "sardinien", name: "Sardinien" },
//   { id: 2, slug: "korsika", name: "Korsika" },
//   { id: 3, slug: "mallorca", name: "Mallorca" },
// ];

export default function HomePage() {
  return (
    <main className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-4xl py-16 text-center">
        {/* Placeholder for Ghibli-inspired background */}
        <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-b from-blue-100 via-emerald-50 to-background opacity-50"></div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
          Europäische Traumstrände: Ihr Urlaubsguide
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Entdecken Sie handverlesene Reiseziele am Meer, inspiriert von der
          Magie der Ghibli-Filme. Finden Sie Ihren perfekten Strandurlaub.
        </p>
        {/* Optional: Call to action button can be added later */}
      </section>

      {/* Destinations Grid Section */}
      <section className="mx-auto w-full max-w-5xl py-16">
        <div className="mb-12 text-center">
          {/* Adjust text size */}
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Top-Empfehlungen für Ihren Strandurlaub
          </h2>
          {/* Removed paragraph */}
        </div>

        {/* Responsive Grid - showing first 4 destinations */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {destinations.slice(0, 4).map((destination) => (
            <Card
              key={destination.slug}
              className="flex flex-col justify-between rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <CardHeader>
                <CardTitle>{destination.name}</CardTitle>
                {/* Optional: CardDescription could go here */}
              </CardHeader>
              <CardContent>
                {/* Image Placeholder */}
                {/* TODO: Ersetze dies durch <Image src={destination.imageUrl || '/placeholder.jpg'} alt={`Bild von ${destination.name}`} width={500} height={281} className="rounded-md object-cover" /> */}
                <Image
                  src={destination.imageUrl || "/placeholder.jpg"} // Fallback image
                  alt={`Bild von ${destination.name}`}
                  width={500}
                  height={281}
                  className="aspect-video rounded-md object-cover"
                />
                {/* Short Description Placeholder */}
                <p className="mt-2 text-sm text-muted-foreground">
                  Erkunden Sie {destination.name} und seine einzigartigen
                  Küsten.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/destinations/${destination.slug}`}>
                    Mehr erfahren
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Removed the bottom button */}
        {/*
        <div className="text-center">
          <Button>Alle Reiseziele entdecken</Button>
        </div>
        */}
      </section>
    </main>
  );
}
