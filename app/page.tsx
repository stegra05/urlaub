import React from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
// Import the actual destinations data
import { destinations } from '@/lib/data';
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
      <section className="relative w-full max-w-4xl text-center py-16 mx-auto">
        {/* Placeholder for Ghibli-inspired background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-100 via-emerald-50 to-background rounded-lg opacity-50"></div>

        <h1 className="text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl mb-6">
          Europäische Traumstrände: Ihr Urlaubsguide
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Entdecken Sie handverlesene Reiseziele am Meer, inspiriert von der Magie der Ghibli-Filme. Finden Sie Ihren perfekten Strandurlaub.
        </p>
        {/* Optional: Call to action button can be added later */}
      </section>

      {/* Destinations Grid Section */}
      <section className="w-full max-w-5xl py-16 mx-auto">
        <div className="text-center mb-12">
          {/* Adjust text size */}
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl mb-4">
            Top-Empfehlungen für Ihren Strandurlaub
          </h2>
          {/* Removed paragraph */}
        </div>

        {/* Responsive Grid - showing first 4 destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {destinations.slice(0, 4).map((destination) => (
            <Card key={destination.slug} className="flex flex-col justify-between rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{destination.name}</CardTitle>
                {/* Optional: CardDescription could go here */}
              </CardHeader>
              <CardContent>
                {/* Image Placeholder */}
                {/* TODO: Ersetze dies durch <Image src={destination.imageUrl || '/placeholder.jpg'} alt={`Bild von ${destination.name}`} width={500} height={281} className="rounded-md object-cover" /> */}
                <div className="aspect-video bg-muted rounded-md my-2 flex items-center justify-center">
                   <span className="text-sm text-muted-foreground">Bild Platzhalter</span>
                </div>
                {/* Short Description Placeholder */}
                <p className="text-sm text-muted-foreground mt-2">
                  Erkunden Sie {destination.name} und seine einzigartigen Küsten.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/destinations/${destination.slug}`}>Mehr erfahren</Link>
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