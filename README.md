Europäische Strandziele Showcase (Ghibli Style)
Ein Webprojekt zur Präsentation von sorgfältig ausgewählten Empfehlungen für europäische Strandurlaubsziele. Die Auswahl basiert auf spezifischen Kriterien wie Flugzeit ab München, Qualität und Erreichbarkeit der Strände, Effizienz des öffentlichen Nahverkehrs sowie kulturellen Angeboten. Die Website zeichnet sich durch ein einzigartiges, von Studio Ghibli inspiriertes Design aus, das eine warme und einladende Atmosphäre schafft, und nutzt moderne UI-Komponenten von Shadcn UI für eine ansprechende und funktionale Darstellung. Die Entwicklung erfolgte mit maßgeblicher Unterstützung durch Cursor.ai.

✨ Features
Übersichtliche Darstellung: Anzeige von empfohlenen europäischen Städten mit attraktiven Sandstränden in einer ansprechenden Übersicht.

Detaillierte Stadtprofile: Umfassende Detailseiten für jede vorgestellte Stadt mit spezifischen Informationen zu:

Strandqualität und Erreichbarkeit: Beschreibung der Sandbeschaffenheit, Wasserqualität und wie schnell die Strände vom Stadtzentrum aus mit öffentlichen Verkehrsmitteln erreichbar sind.

Öffentliche Verkehrsmittel: Bewertung der Effizienz, Abdeckung und Benutzerfreundlichkeit des lokalen ÖPNV-Netzes für Touristen.

Kulturelle Highlights: Vorstellung bedeutender Sehenswürdigkeiten, Museen und historischer Stätten für Erkundungstouren.

Freizeitaktivitäten: Informationen zu Spazierwegen, Küstenpfaden und Möglichkeiten für Bootsausflüge.

Geschätzte Kosten: Orientierungswerte für Flug- und Unterkunftskosten für den definierten Reisezeitraum.

Einzigartiges Ghibli-Design: Durchgängige Gestaltung im Stil von Studio Ghibli, die sich in Farbpalette, Typografie und Bildsprache widerspiegelt.

Responsives Layout: Optimierte Darstellung auf verschiedenen Bildschirmgrößen, vom Desktop-Monitor bis zum Smartphone.

Interaktiver Mauszeiger: Ein benutzerdefinierter, zum Ghibli-Thema passender Mauszeiger für ein kleines, zusätzliches Detail.

🛠️ Tech Stack
Framework: Next.js (App Router) - Gewählt für seine Performance-Optimierungen (SSG, SSR), das dateibasierte Routing und die hervorragende Developer Experience.

Sprache: TypeScript - Ermöglicht Typsicherheit und verbessert die Code-Qualität sowie die Wartbarkeit bei wachsender Codebasis.

UI-Bibliothek: Shadcn UI - Bietet eine Sammlung von wunderschön gestalteten, zugänglichen und hochgradig anpassbaren UI-Komponenten, die direkt ins Projekt kopiert werden können.

Styling: Tailwind CSS - Ein Utility-First CSS-Framework, das schnelles und konsistentes Styling direkt im Markup ermöglicht und perfekt mit Shadcn UI harmoniert.

Entwicklungsumgebung: Cursor.ai - Eine AI-gestützte Entwicklungsumgebung, die bei der Code-Generierung, Refaktorierung und Problemlösung unterstützt hat.

Deployment (Vorschlag): Vercel - Die ideale Hosting-Plattform für Next.js-Anwendungen, bietet einfache Integration, automatische Deployments und globale Skalierbarkeit.

🏗️ Projektstruktur (Auszug)
.
├── app/ # Next.js App Router: Enthält alle Routen, Seiten und Layouts.
│ ├── layout.tsx # Globales Hauptlayout der Anwendung.
│ ├── page.tsx # Code für die Startseite (Homepage).
│ └── destinations/
│ └── [slug]/
│ └── page.tsx # Dynamische Route für die Detailansicht jeder Destination.
├── components/ # Sammlung wiederverwendbarer React-Komponenten.
│ ├── ui/ # Von Shadcn UI bereitgestellte und angepasste UI-Primitive.
│ └── ... # Eigene Komponenten (Header, Footer, CityCard etc.).
├── lib/ # Hilfsfunktionen, Typdefinitionen und Datenlogik.
│ └── data.ts # Enthält die statischen Daten der Reiseziele und Zugriffsfunktionen.
├── public/ # Ordner für statische Assets, die direkt ausgeliefert werden.
│ ├── images/ # Projektbilder (optional).
│ └── cursors/
│ └── ghibli-cursor.png # Beispiel für den benutzerdefinierten Cursor.
├── styles/ # Zusätzliche globale Stylesheets (falls benötigt).
├── globals.css # Zentrale Datei für globale CSS-Regeln, Tailwind Basis-Layer und CSS-Variablen für das Theme.
├── tailwind.config.js # Konfigurationsdatei für Tailwind CSS (Theme-Anpassungen, Plugins).
├── next.config.mjs # Konfigurationsdatei für Next.js.
├── tsconfig.json # Konfigurationsdatei für den TypeScript-Compiler.
├── .cursorrules # Spezifische Anweisungen für die Cursor.ai Entwicklungsumgebung.
├── README.md # Diese detaillierte Projektbeschreibung.
└── ARCHITECTURE.md # Dokumentation der technischen Architektur und Designentscheidungen.

🚀 Getting Started
Stellen Sie sicher, dass Sie eine aktuelle LTS-Version von Node.js installiert haben (z.B. v18 oder v20).

Repository klonen:

git clone <repository-url>
cd <repository-name>

Abhängigkeiten installieren:
Wählen Sie einen Paketmanager Ihrer Wahl:

npm install

# oder

yarn install

# oder

pnpm install

(Optional) Umgebungsvariablen:
Erstellen Sie eine .env.local Datei im Stammverzeichnis, falls spezifische Umgebungsvariablen für lokale Entwicklung benötigt werden (derzeit nicht erforderlich). Sie können .env.example als Vorlage verwenden, falls diese Datei existiert.

💻 Development Server starten
Führen Sie den folgenden Befehl aus, um den lokalen Entwicklungsserver zu starten. Dieser beobachtet Änderungen an den Dateien und lädt die Anwendung automatisch neu.

npm run dev

# oder

yarn dev

# oder

pnpm dev

Öffnen Sie anschließend http://localhost:3000 (oder den im Terminal angezeigten Port) in Ihrem bevorzugten Webbrowser.

🧪 Linting & Formatting
Um die Codequalität sicherzustellen und einen konsistenten Stil zu gewährleisten, können Sie die konfigurierten Linting-Tools ausführen:

npm run lint

# oder

yarn lint

# oder

pnpm lint

Dies hilft dabei, potenzielle Fehler frühzeitig zu erkennen und die Lesbarkeit des Codes zu verbessern. Es wird empfohlen, zusätzlich einen Formatter wie Prettier zu integrieren und diesen bei jedem Speichern automatisch ausführen zu lassen.

📄 Lizenz
Dieses Projekt steht unter der MIT-Lizenz, welche eine sehr freizügige Nutzung erlaubt. Details finden Sie in der LICENSE Datei im Stammverzeichnis des Projekts.
