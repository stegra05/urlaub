Projektarchitektur: Europäische Strandziele Showcase
Dieses Dokument beschreibt detailliert die Architektur und die zugrundeliegenden Designentscheidungen für die Website "Europäische Strandziele Showcase". Ziel ist es, ein klares Verständnis der technischen Struktur und der gewählten Ansätze zu vermitteln.

1. Übersicht
   Das Kernziel dieses Projekts ist die Schaffung einer informativen und ästhetisch ansprechenden Website, die europäische Stranddestinationen basierend auf klar definierten Kriterien (Flugzeit, Strandqualität, ÖPNV etc.) präsentiert. Ein besonderes Merkmal ist das einzigartige, von Studio Ghibli inspirierte Design, das eine warme, fast nostalgische Atmosphäre erzeugen soll. Um dies zu erreichen, wird auf moderne Webtechnologien gesetzt, die sowohl eine hohe Performance als auch eine gute Wartbarkeit gewährleisten.

Kerntechnologien: Next.js (App Router), TypeScript, Tailwind CSS, Shadcn UI. Diese Kombination wurde gewählt, da sie sich hervorragend für inhaltsorientierte Websites eignet, eine schnelle Entwicklung ermöglicht und gleichzeitig eine robuste Basis für zukünftige Erweiterungen bietet.

2. Verzeichnisstruktur
   Die gewählte Verzeichnisstruktur folgt den Konventionen von Next.js und bewährten Praktiken für die Organisation von Webprojekten:

/app: Das Herzstück der Anwendung gemäß dem Next.js App Router-Modell. Es enthält alle Routen, Layouts und Seitenlogiken.

layout.tsx: Das globale Root-Layout. Es definiert die Grundstruktur jeder Seite (z.B. durch Einbindung von Header und Footer) und ist der zentrale Ort für die Integration globaler Stile, Schriftarten und ggf. Context Provider.

page.tsx: Repräsentiert die Startseite (Homepage) der Anwendung unter der Root-URL (/).

destinations/[slug]/page.tsx: Eine dynamische Route, die für die Anzeige der Detailinformationen jeder einzelnen Zieldestination verantwortlich ist. Sie nutzt generateStaticParams, um zur Build-Zeit statische HTML-Seiten für jede bekannte Destination zu erzeugen, was die Ladezeiten erheblich verbessert.

/components: Dieser Ordner beherbergt alle wiederverwendbaren React-Komponenten, um Redundanz zu vermeiden und die Wartbarkeit zu erhöhen.

ui/: Enthält die von Shadcn UI bereitgestellten UI-Primitive (wie Button, Card, Dialog etc.), die direkt ins Projekt kopiert und bei Bedarf angepasst werden können. Dies ermöglicht volle Kontrolle über den Code der UI-Elemente.

Eigene Komponenten (Header.tsx, Footer.tsx, CityCard.tsx, CityDetailPageLayout.tsx etc.): Spezifische Komponenten, die für dieses Projekt entwickelt wurden und oft Shadcn UI-Komponenten intern verwenden.

/lib: Ein Sammelort für Hilfsmodule, Utility-Funktionen, Typdefinitionen und die primäre Datenlogik.

data.ts: Definiert die TypeScript-Interfaces (z.B. Destination) für die Datenstruktur und enthält die statischen Daten der Reiseziele als Array von Objekten. Ebenso beinhaltet sie Funktionen zum Abrufen spezifischer Daten, wie getDestinationBySlug.

/public: Dient zur Ablage aller statischen Dateien, die direkt über den Webserver ohne weitere Verarbeitung ausgeliefert werden sollen. Dazu gehören Bilder, Favicons, der benutzerdefinierte Cursor und ggf. selbst gehostete Schriftartendateien.

globals.css: Die zentrale CSS-Datei für globale Stile. Sie beinhaltet die Tailwind CSS Basis-Layer (@tailwind base, @tailwind components, @tailwind utilities), die Definition der CSS-Variablen für das Shadcn UI Theme (angepasst an die Ghibli-Palette) und andere globale Regeln wie den benutzerdefinierten Cursor-Stil.

tailwind.config.js: Die Konfigurationsdatei für Tailwind CSS. Hier wird das Standard-Theme von Tailwind erweitert, insbesondere um die spezifische Ghibli-Farbpalette und die ausgewählten Schriftarten zu integrieren.

3. Routing
   Das Routing wird vollständig und deklarativ durch den Next.js App Router gehandhabt. Die URL-Pfade entsprechen direkt der Ordnerstruktur innerhalb des /app-Verzeichnisses. Dieses dateibasierte Routing vereinfacht die Organisation und das Verständnis der Anwendungsstruktur. Die Detailseiten der Destinationen (/destinations/[slug]) werden als dynamische Routen implementiert, aber dank generateStaticParams zur Build-Zeit als statische Seiten (Static Site Generation - SSG) generiert. Dies führt zu exzellenter Performance und verbessert die Suchmaschinenoptimierung (SEO), da die Inhalte direkt im HTML verfügbar sind.

4. Komponentenstrategie
   Die Komponentenarchitektur basiert auf Wiederverwendbarkeit und klarer Trennung der Verantwortlichkeiten:

UI-Primitive: Die Verwendung von Shadcn UI als Basis für UI-Elemente bietet mehrere Vorteile: Die Komponenten sind standardmäßig barrierefrei (Accessibility), folgen Design-Best-Practices und können über Tailwind CSS und CSS-Variablen umfassend an das Ghibli-Design angepasst werden. Da der Code der Komponenten direkt im Projekt liegt, ist maximale Kontrolle und Anpassbarkeit gegeben.

Layout-Komponenten: Komponenten wie Header, Footer oder spezifische Seitenlayouts (CityDetailPageLayout) definieren die übergeordnete Struktur und sorgen für ein konsistentes Erscheinungsbild über verschiedene Seiten hinweg.

Feature-Komponenten: Diese Komponenten kapseln spezifische Funktionalitäten oder Inhaltsblöcke, wie z.B. die CityCard zur Vorschau einer Stadt oder die BeachInfoSection zur Darstellung der Strandinformatioen auf der Detailseite. Sie sind oft aus mehreren UI-Primitiven und anderen Feature-Komponenten zusammengesetzt.

Komposition: Dem Prinzip "Composition over Inheritance" folgend, werden komplexe UIs durch das Zusammensetzen kleinerer, fokussierter Komponenten erstellt. Dies fördert die Wiederverwendbarkeit, erleichtert Tests und macht den Code flexibler und verständlicher.

5. Styling (Ghibli Aesthetic)
   Die Umsetzung des Ghibli-inspirierten Designs erfolgt durch eine Kombination verschiedener Techniken, die auf Tailwind CSS aufbauen:

Basis: Tailwind CSS liefert die Grundlage mit seinem Utility-First-Ansatz, der schnelles und direktes Styling im Markup ermöglicht.

Theming: Das Herzstück des Ghibli-Looks wird durch die Anpassung des Shadcn UI Themes erreicht. Dies geschieht primär über CSS-Variablen, die in globals.css definiert und mit den Werten der Ghibli-Farbpalette belegt werden. Shadcn UI-Komponenten nutzen diese Variablen standardmäßig.

Visuelle Merkmale: Die spezifische Ästhetik wird durch folgende Elemente verstärkt:

Farben: Eine Palette aus sanften, natürlichen und erdigen Tönen, die an die Filme von Studio Ghibli erinnert (konfiguriert in tailwind.config.js und globals.css).

Typografie: Sorgfältig ausgewählte, freundliche und gut lesbare Schriftarten, eingebunden über next/font für optimale Performance.

Formen: Durchgängige Verwendung von leicht abgerundeten Ecken (z.B. rounded-lg als Standard in Tailwind-Konfiguration oder globalen Styles), um harte Kanten zu vermeiden.

Schatten: Einsatz von subtilen, weichen Schatten (shadow-md oder benutzerdefinierte, weichere Varianten), um Elementen Tiefe zu verleihen, ohne aufdringlich zu wirken.

Cursor: Ein kleiner, thematisch passender benutzerdefinierter Cursor als verspieltes Detail, implementiert via CSS in globals.css.

Konsistenz: Um ein einheitliches Erscheinungsbild sicherzustellen, werden Styles bevorzugt über Tailwind-Utility-Klassen und die konfigurierten Varianten der Shadcn-Komponenten angewendet. Globale Styles werden nur sparsam für Basiselemente oder übergreifende Regeln eingesetzt.

6. Datenhaltung
   Die Daten der Reiseziele (Informationen zu Stränden, Kosten, Kultur etc.) werden bewusst statisch gehalten und direkt in der Codebasis (lib/data.ts) als TypeScript-Objekte/-Arrays verwaltet.

Vorteile: Dieser Ansatz ist für den aktuellen Umfang ideal, da er die Datenbeschaffung extrem vereinfacht (keine Datenbank oder externe API nötig) und die Nutzung von Next.js' Static Site Generation (SSG) optimal unterstützt. Dies führt zu sehr schnellen Ladezeiten und reduziert die Komplexität der Infrastruktur.

Nachteile/Erweiterung: Der Nachteil ist, dass Änderungen an den Daten einen neuen Build- und Deployment-Prozess erfordern. Sollte die Anwendung in Zukunft komplexere Anforderungen haben (z.B. Benutzer-Logins, dynamischere Daten, häufige Updates), müsste dieser Ansatz durch die Anbindung einer Datenbank oder eines Headless CMS erweitert werden, wobei Next.js auch hierfür flexible Möglichkeiten (Server Components, API Routes) bietet.

7. State Management
   Für den aktuellen Funktionsumfang der Website ist kein komplexes globales State Management erforderlich. Die Verwaltung des Zustands erfolgt primär lokal innerhalb der Komponenten oder durch einfache Weitergabe über Props.

Ansatz: Es wird auf Reacts eingebaute Hooks (useState, useEffect) gesetzt. Für selten benötigten, globaleren State, der über wenige Ebenen geteilt werden muss (z.B. Theme-Einstellungen, falls dynamisch änderbar), könnte useContext verwendet werden.

Begründung: Die Einführung externer Bibliotheken wie Redux oder Zustand würde unnötige Komplexität hinzufügen. Der gewählte Ansatz hält die Architektur schlank und fokussiert.

8. Entwicklung mit Cursor.ai
   Die Verwendung von Cursor.ai als Entwicklungsumgebung hat den Prozess unterstützt, insbesondere bei der schnellen Generierung von Boilerplate-Code, der Implementierung von Komponenten nach vorgegebenen Mustern und der Refaktorierung. Das .cursorrules-File dient dabei als Leitfaden für die AI, um Konsistenz im Code-Stil, der Architektur und der Verwendung der festgelegten Technologien sicherzustellen.

9. Deployment
   Die empfohlene Plattform für das Deployment dieser Next.js-Anwendung ist Vercel.

Gründe: Vercel ist der Entwickler von Next.js und bietet eine nahtlose Integration. Features wie automatische Deployments bei Git-Pushes, Optimierung für SSG und ISR, ein globales CDN und einfache Konfiguration machen es zur idealen Wahl für Projekte dieser Art. Die Bereitstellung ist oft mit wenigen Klicks erledigt.
