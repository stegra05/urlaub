import type { ReactNode } from "react";

// Basic structure for sections
interface ReportSection {
  id: string;
  title: string;
  paragraphs: string[]; // Store text content as paragraphs
  listItems?: string[]; // Optional list items
  note?: string; // Optional note
}

// Structure for table data
interface TableData {
  headers: string[];
  rows: string[][];
}

// Structure for detailed destination analysis
interface DestinationAnalysisSection {
  subtitle: string;
  paragraphs: string[];
}

interface DestinationAnalysis {
  id: string;
  title: string;
  sections: DestinationAnalysisSection[];
}

// Combined types for sections with extra data
interface CandidateSection extends ReportSection {
  tableData: TableData;
}

interface AnalysisSection
  extends Omit<ReportSection, "paragraphs" | "listItems"> {
  // Omit base content fields
  destinations: DestinationAnalysis[];
}

interface ComparisonSection extends ReportSection {
  tableData: TableData;
}

// == Report Content ==

export const introductionSection: ReportSection = {
  id: "einleitung",
  title: "1. Einleitung",
  paragraphs: [
    "Dieser Bericht dient dem Zweck, 3-5 europäische Städte zu identifizieren und zu vergleichen, die den Kriterien des Nutzers für einen Strandurlaub entsprechen. Ziel ist es, eine detaillierte Analyse der Eignung jeder Stadt hinsichtlich der Qualität und Erreichbarkeit ihrer Strände, des öffentlichen Verkehrs, der kulturellen Attraktionen, der Freizeitaktivitäten und der geschätzten Kosten zu liefern. Abschließend wird ein vergleichender Überblick präsentiert, um dem Nutzer die Entscheidung für ein Urlaubsziel zwischen dem 14. und 22. Juni 2025 zu erleichtern.",
    "Die Anforderungen des Nutzers umfassen:",
    // List items will be handled separately if needed or integrated into paragraphs
    "Die Erstellung dieses Berichts basiert auf der Auswertung der bereitgestellten Recherchematerialien, um zunächst potenzielle Kandidatenstädte anhand der Flugzeit und des Vorhandenseins von Stränden zu identifizieren. Anschließend erfolgt eine eingehende Analyse jeder Kandidatenstadt unter Berücksichtigung der genannten Kriterien. Die vielversprechendsten 3-5 Reiseziele werden schließlich miteinander verglichen.",
  ],
  listItems: [
    "europäische Städte mit Sandstränden,",
    "eine Flugzeit von München (MUC) von etwa 2-3 Stunden im genannten Reisezeitraum,",
    "Sandstrände, die innerhalb von maximal 45 Minuten mit öffentlichen Verkehrsmitteln vom Stadtzentrum aus erreichbar sind und feinen Sand sowie klares Wasser aufweisen sollen,",
    "ein effizientes, umfassendes und benutzerfreundliches öffentliches Verkehrsnetz für Touristen, das den Zugang zu Unterkünften, Stadtzentren, Stränden und Ausflugszielen ermöglicht,",
    "bedeutende kulturelle und historische Attraktionen für Stadtbesichtigungen und Erkundungen,",
    "die Verfügbarkeit von einfachen Spaziergängen, Küstenwegen und Bootsausflügen,",
    "geschätzte Kosten für Hin- und Rückflugtickets von München für zwei Personen sowie die Verfügbarkeit von gut bewerteten Hotels oder Airbnb-Unterkünften für maximal 150 € pro Nacht für zwei Personen mit einer Schätzung der Gesamtkosten für 6 Nächte.",
  ],
};

export const candidateIdentificationSection: CandidateSection = {
  id: "kandidaten",
  title: "2. Identifizierung anfänglicher Kandidatenstädte",
  paragraphs: [
    "Die Überprüfung der Flugzeiten von München (MUC) zeigt, dass mehrere europäische Städte innerhalb des gewünschten Zeitrahmens von 2-3 Stunden erreichbar sind. Laut [Quelle 1] umfassen diese Barcelona (2h 10m), Madrid (2h 45m), Athen (2h 30m), Palma de Mallorca (2h 10m) und Istanbul (2h 55m). Ergänzende Informationen aus [Quelle 2] bestätigen diese Zeiten und fügen weitere potenzielle Ziele wie Split/Dalmatien (2h 10m), Sizilien (2h 15m), Sardinien (1h 20m), Zakynthos (1h 40m), Malta (2h 20m) und Malaga/Costa del Sol (2h 30m) hinzu. Es ist anzumerken, dass Lissabon mit einer Flugzeit von 3h 20m [Quelle 1] die obere Grenze leicht überschreitet, aber aufgrund seiner Nähe zu Stränden dennoch in Betracht gezogen werden könnte. Nizza wird in [Quelle 3] als gut erreichbar mit nahegelegenen Stränden erwähnt, wobei die genaue Flugzeit von München noch zu prüfen ist.",
    "Die Recherchematerialien [Quelle 3] listen eine Vielzahl europäischer Städte mit Stränden auf, die mit öffentlichen Verkehrsmitteln erreichbar sind. Zu den häufig genannten Städten gehören Barcelona, Nizza, Lissabon (und nahegelegene Orte wie Cascais und Carcavelos), Malaga, Split, Palermo, Sitges, Alicante und Valencia. Durch den Abgleich dieser Liste mit den Flugzeiten von München erscheinen Barcelona, Nizza, Lissabon (und Umgebung), Malaga, Split und Palermo als vielversprechende anfängliche Kandidaten. Sitges, obwohl keine Großstadt, liegt sehr nah an Barcelona und sollte im Rahmen der Analyse Barcelonas berücksichtigt werden.",
    "Die folgende Tabelle fasst die anfängliche Bewertung der Städte basierend auf Flugzeit und dem Vorhandensein von Sandstränden zusammen:",
    // Placeholder paragraph for where the table goes
    "Basierend auf diesen ersten Kriterien scheinen Barcelona, Malaga, Palermo und Split vielversprechende Kandidaten zu sein. Lissabon und Athen werden aufgrund der leicht überschrittenen Flugzeit bzw. der noch zu prüfenden Strandnähe vorerst mit geringerer Priorität behandelt. Nizza erfordert die Klärung der Flugzeit. Palma de Mallorca wird im weiteren Verlauf als möglicher Kandidat ebenfalls berücksichtigt.",
  ],
  tableData: {
    headers: [
      "Stadt",
      "Geschätzte Flugzeit von MUC",
      "Vorhandensein von Sandstränden",
      "Innerhalb von 2-3 Stunden Flugzeit",
    ],
    rows: [
      ["Barcelona", "2h 10m", "Ja", "Ja"],
      ["Lissabon", "3h 20m", "Ja (in der Nähe)", "Nein (leicht überschritten)"],
      ["Malaga", "2h 30m", "Ja", "Ja"],
      ["Nizza", "Zu prüfen", "Ja (in der Nähe)", "Zu prüfen"],
      ["Palermo", "2h", "Ja", "Ja"],
      ["Split", "2h 10m", "Ja", "Ja"],
      ["Palma de Mallorca", "2h 10m", "Ja", "Ja"],
      ["Athen", "2h 30m", "Ja", "Ja"],
    ],
  },
  note: "Hinweis: Die Nummern wie [Quelle 1], [Quelle 8] etc. beziehen sich auf die ursprünglichen Recherchematerialien und sind hier nicht verlinkt.",
};

// Only Barcelona details extracted for brevity
const barcelonaAnalysis: DestinationAnalysis = {
  id: "barcelona",
  title: "3.1 Barcelona, Spanien",
  sections: [
    {
      subtitle: "Strandqualität und Erreichbarkeit",
      paragraphs: [
        "Barcelona wird in [Quelle 8] als Top-Strandziel in Europa gelistet (beste Reisezeit: April bis Oktober). Die Recherchematerialien [Quelle 9] beschreiben Strände in der Nähe von Barcelona, die mit dem Zug erreichbar sind (Gavà, Castelldefels, Garraf, Sitges – 25 bis 45 Minuten), sowie Strände innerhalb der Stadt Barcelona (Barceloneta, Nova Icària, Bogatell, Mar Bella). Sitges wird in [Quelle 11] als Ort mit über einem Dutzend Sandstränden und einer 40-minütigen Zugfahrt von Barcelona entfernt beschrieben. Castelldefels bietet einen ruhigeren, 5 km langen Sandstrand [Quelle 11]. Platja d'Altafulla in der Nähe von Barcelona ist familienfreundlich mit klarem, ruhigem Wasser und feinem Sand [Quelle 12]. Sant Sebastià in Sitges ist bei Einheimischen beliebt, familienfreundlich und verfügt über nahegelegene Bars [Quelle 12]. Barceloneta ist mit der Metro L4 (Station Barceloneta), Nova Icària mit L4 (Ciutadella Vila Olimpica), Bogatell mit L4 (Poblenou oder Llacuna) und Mar Bella mit L4 (Poblenou oder Selva Mar) erreichbar [Quelle 13]. Insgesamt bietet Barcelona sowohl städtische Strände mit direkter Metroanbindung als auch Küstenorte in der Nähe, die mit einer kurzen Zugfahrt erreichbar sind. Die Beschreibungen deuten auf eine Vielfalt von Strandtypen hin, von lebhaft bis ruhig, und erwähnen feinen Sand sowie klares Wasser für einige der genannten Strände.",
      ],
    },
    {
      subtitle: "Öffentliche Verkehrsmittel",
      paragraphs: [
        "Das öffentliche Verkehrsnetz Barcelonas wird in [Quelle 15] als effizient, umfassend und touristenfreundlich beschrieben. Es umfasst Metro, Busse (TMB) und Straßenbahnen (Tram). Die Hola Barcelona Travel Card bietet unbegrenzte Fahrten für eine bestimmte Anzahl von Tagen und wird empfohlen [Quelle 15]. Die Metro deckt die meisten touristischen Bereiche ab. Die Erreichbarkeit der Strände ist gut, sowohl innerhalb der Stadt (Metro) auch für nahegelegene Orte (Zug).",
      ],
    },
    {
      subtitle: "Kulturelle Attraktionen",
      paragraphs: [
        "Barcelona ist reich an kulturellen und historischen Highlights. [Quelle 17] erwähnt die Werke Gaudis (Sagrada Familia, Park Güell, Casa Batlló), das Gotische Viertel, Las Ramblas und den Montjuïc. Zusätzlich gibt es zahlreiche Museen (Picasso-Museum, MNAC) und architektonische Sehenswürdigkeiten.",
      ],
    },
    {
      subtitle: "Freizeitaktivitäten",
      paragraphs: [
        "Neben den Strandbesuchen und Stadtbesichtigungen bietet Barcelona Möglichkeiten für Spaziergänge (z.B. entlang der Strandpromenade, im Park Güell oder am Montjuïc). Küstenwege in der direkten Umgebung sind begrenzt, aber Ausflüge nach Sitges oder entlang der Costa Brava (längere Fahrt) bieten solche Möglichkeiten. [Quelle 19] erwähnt Bootstouren entlang der Küste, inklusive Katamaranfahrten und Segeltörns. Tapas-Touren und das Nachtleben sind ebenfalls beliebte Aktivitäten.",
      ],
    },
    {
      subtitle: "Geschätzte Kosten",
      paragraphs: [
        "Flüge: Hin- und Rückflug von München (MUC) nach Barcelona (BCN) für Juni 2025 werden in [Quelle 20] und [Quelle 21] als günstig bis moderat eingestuft, abhängig von der Fluggesellschaft und Buchungszeitpunkt. Eine grobe Schätzung für 2 Personen könnte zwischen 300 € und 600 € liegen.",
        "Unterkunft: [Quelle 22] und [Quelle 23] zeigen eine große Auswahl an Hotels und Airbnb-Unterkünften in Barcelona. Gut bewertete Optionen unter 150 € pro Nacht für 2 Personen sind verfügbar, erfordern aber ggf. eine frühzeitige Buchung, insbesondere im Juni. Gesamtkosten für 6 Nächte: ca. 600 € bis 900 €.",
      ],
    },
  ],
};

// Placeholder for other destinations analysis
const malagaAnalysis: DestinationAnalysis = {
  id: "malaga",
  title: "3.2 Malaga, Spanien (Costa del Sol)",
  sections: [],
};
const palermoAnalysis: DestinationAnalysis = {
  id: "palermo",
  title: "3.3 Palermo, Italien (Sizilien)",
  sections: [],
};
const nizzaAnalysis: DestinationAnalysis = {
  id: "nizza",
  title: "3.4 Nizza, Frankreich (Côte d'Azur)",
  sections: [],
};

export const detailedAnalysisSection: AnalysisSection = {
  id: "analyse",
  title: "3. Detaillierte Profile und Analysen ausgewählter Reiseziele",
  note: undefined, // No general note for this section
  destinations: [
    // Include extracted and placeholders
    barcelonaAnalysis,
    malagaAnalysis,
    palermoAnalysis,
    nizzaAnalysis,
  ],
};

export const comparisonSection: ComparisonSection = {
  id: "vergleich",
  title: "4. Vergleichende Zusammenfassung",
  paragraphs: [
    "Die folgende Tabelle fasst die wichtigsten Ergebnisse der Analyse für die vielversprechendsten Kandidaten zusammen:",
    // Placeholder for where the table goes
  ],
  tableData: {
    headers: [
      "Kriterium",
      "Barcelona",
      "Malaga",
      "Palermo",
      "Nizza (vorbehaltlich Flugzeit)",
    ],
    rows: [
      ["Flugzeit (MUC)", "ca. 2h 10m", "ca. 2h 30m", "ca. 2h", "Zu prüfen"],
      ["Sandstrandqualität", "++/+", "+++", "++", "+"],
      ["Erreichbarkeit Strände (ÖPNV <45min)", "+++", "+++", "++", "++"],
      ["Öffentlicher Nahverkehr", "+++", "++", "+", "+++"],
      ["Kulturelle Attraktionen", "+++", "++", "+++", "+++"],
      ["Freizeit (Spaziergänge, Bootstouren)", "++", "++", "++", "++"],
      [
        "Geschätzte Kosten (Flug + 6 Nächte <150€/Nacht)",
        "Mittel bis Hoch",
        "Mittel",
        "Günstig bis Mittel",
        "Hoch",
      ],
    ],
  },
  note: "Legende: +++ (Sehr gut), ++ (Gut), + (Akzeptabel), - (Weniger geeignet)",
};

export const recommendationSection: ReportSection = {
  id: "empfehlung",
  title: "5. Fazit und Empfehlung",
  paragraphs: [
    "Basierend auf der Analyse der Kriterien des Nutzers, insbesondere der Kombination aus hochwertigen, gut erreichbaren Sandstränden, kulturellen Angeboten und einem effizienten öffentlichen Nahverkehr, kristallisieren sich Barcelona und Malaga als die stärksten Empfehlungen heraus.",
    // List items handled separately or as paragraphs
    "Palermo ist eine faszinierende Option für Kulturliebhaber mit einem guten Strand (Mondello) in Reichweite, allerdings ist das ÖPNV-System weniger ausgebaut als in den spanischen Städten. Die Kosten sind attraktiv.",
    "Nizza bietet eine wunderschöne Küstenpromenade und exzellente kulturelle Angebote, jedoch sind die Hauptstrände kieselig und die Kosten generell höher. Die Flugzeit von München muss noch bestätigt werden.",
    "Empfehlung für den Reisezeitraum 14.-22. Juni 2025:",
    // Ordered list items handled separately
    "Es wird empfohlen, die Flug- und Hotelpreise für Malaga und Barcelona für den spezifischen Zeitraum frühzeitig zu prüfen und zu vergleichen, um die endgültige Entscheidung zu treffen.",
  ],
  // Define list items for Barcelona/Malaga points if needed
  listItems: [
    "<strong>Barcelona</strong> punktet mit einer unschlagbaren Kombination aus pulsierendem Stadtleben, weltberühmten kulturellen Sehenswürdigkeiten und einer Vielzahl von Stränden, die sowohl direkt in der Stadt als auch in kurzer Entfernung per Zug erreichbar sind. Das ÖPNV-System ist exzellent. Die Kosten sind tendenziell etwas höher, aber im Rahmen des Budgets machbar.",
    "<strong>Malaga</strong> bietet die attraktivsten Sandstrände direkt an der Stadt oder in unmittelbarer Nähe (Costa del Sol). Die Stadt selbst hat kulturell viel zu bieten (Picasso, Alcazaba) und dient als guter Ausgangspunkt für Ausflüge in Andalusien. Der ÖPNV ist gut, aber für Ausflüge ist ein Mietwagen oft sinnvoll. Die Kosten sind tendenziell etwas niedriger als in Barcelona.",
    // Add ordered list items separately or handle rendering logic in component
  ],
};

// Combine all sections into a single export
export const reportData = {
  introduction: introductionSection,
  candidates: candidateIdentificationSection,
  analysis: detailedAnalysisSection,
  comparison: comparisonSection,
  recommendation: recommendationSection,
};
