import { Button } from "@/components/ui/button";
import Link from "next/link";

// Beispielhafte Reiseziele, später könnten diese aus einer Datenquelle geladen werden
const destinations = [
  { id: 1, slug: "sardinien", name: "Sardinien" },
  { id: 2, slug: "korsika", name: "Korsika" },
  { id: 3, slug: "mallorca", name: "Mallorca" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Europäische Strandziele</h1>
          <p className="text-lg text-center mb-8">
            Entdecken Sie die schönsten Strände Europas im Ghibli-Stil
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {destinations.map((destination) => (
            <Link 
              href={`/destinations/${destination.slug}`} 
              key={destination.id}
              className="block"
            >
              <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-40 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Bild von {destination.name}</span>
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{destination.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Entdecken Sie die atemberaubenden Strände von {destination.name}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Details ansehen
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Button>Alle Reiseziele entdecken</Button>
        </div>
      </div>
    </main>
  );
} 