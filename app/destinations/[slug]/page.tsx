import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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
  const { slug } = params;

  // In einer realen Anwendung würden wir hier die Daten aus einer API oder Datendatei abrufen
  // und prüfen, ob das Reiseziel existiert
  // Wenn nicht, können wir die notFound() Funktion aufrufen

  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" className="mb-4" onClick={() => window.history.back()}>
            &larr; Zurück
          </Button>
          <h1 className="text-4xl font-bold mb-4 text-primary">{slug}</h1>
          <div className="h-64 bg-muted rounded-lg mb-6 overflow-hidden">
            {/* Hier würde ein Bild des Reiseziels angezeigt werden */}
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Bild von {slug}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Beschreibung</h2>
              <p className="text-foreground/80">
                Detaillierte Beschreibung von {slug} mit Informationen über die Strände, 
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