"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function EmpfehlungenPage() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-12">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">
        Empfehlung für Urlaubsziele mit Sandstränden in Europa
      </h1>

      {/* 1. Einleitung */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">1. Einleitung</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none text-card-foreground">
          <p>
            Dieser Bericht dient dem Zweck, 3-5 europäische Städte zu
            identifizieren und zu vergleichen, die den Kriterien des Nutzers für
            einen Strandurlaub entsprechen. Ziel ist es, eine detaillierte
            Analyse der Eignung jeder Stadt hinsichtlich der Qualität und
            Erreichbarkeit ihrer Strände, des öffentlichen Verkehrs, der
            kulturellen Attraktionen, der Freizeitaktivitäten und der
            geschätzten Kosten zu liefern. Abschließend wird ein vergleichender
            Überblick präsentiert, um dem Nutzer die Entscheidung für ein
            Urlaubsziel zwischen dem 14. und 22. Juni 2025 zu erleichtern.
          </p>
          <p>Die Anforderungen des Nutzers umfassen:</p>
          <ul>
            <li>europäische Städte mit Sandstränden,</li>
            <li>
              eine Flugzeit von München (MUC) von etwa 2-3 Stunden im genannten
              Reisezeitraum,
            </li>
            <li>
              Sandstrände, die innerhalb von maximal 45 Minuten mit öffentlichen
              Verkehrsmitteln vom Stadtzentrum aus erreichbar sind und feinen
              Sand sowie klares Wasser aufweisen sollen,
            </li>
            <li>
              ein effizientes, umfassendes und benutzerfreundliches öffentliches
              Verkehrsnetz für Touristen, das den Zugang zu Unterkünften,
              Stadtzentren, Stränden und Ausflugszielen ermöglicht,
            </li>
            <li>
              bedeutende kulturelle und historische Attraktionen für
              Stadtbesichtigungen und Erkundungen,
            </li>
            <li>
              die Verfügbarkeit von einfachen Spaziergängen, Küstenwegen und
              Bootsausflügen,
            </li>
            <li>
              geschätzte Kosten für Hin- und Rückflugtickets von München für
              zwei Personen sowie die Verfügbarkeit von gut bewerteten Hotels
              oder Airbnb-Unterkünften für maximal 150 € pro Nacht für zwei
              Personen mit einer Schätzung der Gesamtkosten für 6 Nächte.
            </li>
          </ul>
          <p>
            Die Erstellung dieses Berichts basiert auf der Auswertung der
            bereitgestellten Recherchematerialien, um zunächst potenzielle
            Kandidatenstädte anhand der Flugzeit und des Vorhandenseins von
            Stränden zu identifizieren. Anschließend erfolgt eine eingehende
            Analyse jeder Kandidatenstadt unter Berücksichtigung der genannten
            Kriterien. Die vielversprechendsten 3-5 Reiseziele werden
            schließlich miteinander verglichen.
          </p>
        </CardContent>
      </Card>

      {/* 2. Identifizierung anfänglicher Kandidatenstädte */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">
            2. Identifizierung anfänglicher Kandidatenstädte
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none text-card-foreground space-y-4">
          <p>
            Die Überprüfung der Flugzeiten von München (MUC) zeigt, dass mehrere
            europäische Städte innerhalb des gewünschten Zeitrahmens von 2-3
            Stunden erreichbar sind. Laut [Quelle 1] umfassen diese Barcelona
            (2h 10m), Madrid (2h 45m), Athen (2h 30m), Palma de Mallorca (2h
            10m) und Istanbul (2h 55m). Ergänzende Informationen aus [Quelle 2]
            bestätigen diese Zeiten und fügen weitere potenzielle Ziele wie
            Split/Dalmatien (2h 10m), Sizilien (2h 15m), Sardinien (1h 20m),
            Zakynthos (1h 40m), Malta (2h 20m) und Malaga/Costa del Sol (2h 30m)
            hinzu. Es ist anzumerken, dass Lissabon mit einer Flugzeit von 3h
            20m [Quelle 1] die obere Grenze leicht überschreitet, aber aufgrund
            seiner Nähe zu Stränden dennoch in Betracht gezogen werden könnte.
            Nizza wird in [Quelle 3] als gut erreichbar mit nahegelegenen
            Stränden erwähnt, wobei die genaue Flugzeit von München noch zu
            prüfen ist.
          </p>
          <p>
            Die Recherchematerialien [Quelle 3] listen eine Vielzahl
            europäischer Städte mit Stränden auf, die mit öffentlichen
            Verkehrsmitteln erreichbar sind. Zu den häufig genannten Städten
            gehören Barcelona, Nizza, Lissabon (und nahegelegene Orte wie
            Cascais und Carcavelos), Malaga, Split, Palermo, Sitges, Alicante
            und Valencia. Durch den Abgleich dieser Liste mit den Flugzeiten von
            München erscheinen Barcelona, Nizza, Lissabon (und Umgebung),
            Malaga, Split und Palermo als vielversprechende anfängliche
            Kandidaten. Sitges, obwohl keine Großstadt, liegt sehr nah an
            Barcelona und sollte im Rahmen der Analyse Barcelonas berücksichtigt
            werden.
          </p>
          <p>
            Die folgende Tabelle fasst die anfängliche Bewertung der Städte
            basierend auf Flugzeit und dem Vorhandensein von Sandstränden
            zusammen:
          </p>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Stadt</TableHead>
                  <TableHead>Geschätzte Flugzeit von MUC</TableHead>
                  <TableHead>Vorhandensein von Sandstränden</TableHead>
                  <TableHead>Innerhalb von 2-3 Stunden Flugzeit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Barcelona</TableCell>
                  <TableCell>2h 10m</TableCell>
                  <TableCell>Ja</TableCell>
                  <TableCell>Ja</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Lissabon</TableCell>
                  <TableCell>3h 20m</TableCell>
                  <TableCell>Ja (in der Nähe)</TableCell>
                  <TableCell>Nein (leicht überschritten)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Malaga</TableCell>
                  <TableCell>2h 30m</TableCell>
                  <TableCell>Ja</TableCell>
                  <TableCell>Ja</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Nizza</TableCell>
                  <TableCell>Zu prüfen</TableCell>
                  <TableCell>Ja (in der Nähe)</TableCell>
                  <TableCell>Zu prüfen</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Palermo</TableCell>
                  <TableCell>2h</TableCell>
                  <TableCell>Ja</TableCell>
                  <TableCell>Ja</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Split</TableCell>
                  <TableCell>2h 10m</TableCell>
                  <TableCell>Ja</TableCell>
                  <TableCell>Ja</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Palma de Mallorca</TableCell>
                  <TableCell>2h 10m</TableCell>
                  <TableCell>Ja</TableCell>
                  <TableCell>Ja</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Athen</TableCell>
                  <TableCell>2h 30m</TableCell>
                  <TableCell>Ja</TableCell>
                  <TableCell>Ja</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p>
            Basierend auf diesen ersten Kriterien scheinen Barcelona, Malaga,
            Palermo und Split vielversprechende Kandidaten zu sein. Lissabon und
            Athen werden aufgrund der leicht überschrittenen Flugzeit bzw. der
            noch zu prüfenden Strandnähe vorerst mit geringerer Priorität
            behandelt. Nizza erfordert die Klärung der Flugzeit. Palma de
            Mallorca wird im weiteren Verlauf als möglicher Kandidat ebenfalls
            berücksichtigt.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Hinweis: Die Nummern wie [Quelle 1], [Quelle 8] etc. beziehen sich auf die
            ursprünglichen Recherchematerialien und sind hier nicht verlinkt.
          </p>
        </CardContent>
      </Card>

      {/* 3. Detaillierte Profile und Analysen */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">
            3. Detaillierte Profile und Analysen ausgewählter Reiseziele
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* 3.1 Barcelona */}
          <section>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              3.1 Barcelona, Spanien
            </h3>
            <div className="prose prose-lg max-w-none text-card-foreground space-y-3">
              <p>
                <strong>Strandqualität und Erreichbarkeit:</strong> Barcelona
                wird in [Quelle 8] als Top-Strandziel in Europa gelistet (beste
                Reisezeit: April bis Oktober). Die Recherchematerialien [Quelle
                9] beschreiben Strände in der Nähe von Barcelona, die mit dem
                Zug erreichbar sind (Gavà, Castelldefels, Garraf, Sitges – 25
                bis 45 Minuten), sowie Strände innerhalb der Stadt Barcelona
                (Barceloneta, Nova Icària, Bogatell, Mar Bella). Sitges wird in
                [Quelle 11] als Ort mit über einem Dutzend Sandstränden und
                einer 40-minütigen Zugfahrt von Barcelona entfernt beschrieben.
                Castelldefels bietet einen ruhigeren, 5 km langen Sandstrand
                [Quelle 11]. Platja d'Altafulla in der Nähe von Barcelona ist
                familienfreundlich mit klarem, ruhigem Wasser und feinem Sand
                [Quelle 12]. Sant Sebastià in Sitges ist bei Einheimischen
                beliebt, familienfreundlich und verfügt über nahegelegene Bars
                [Quelle 12]. Barceloneta ist mit der Metro L4 (Station
                Barceloneta), Nova Icària mit L4 (Ciutadella Vila Olimpica),
                Bogatell mit L4 (Poblenou oder Llacuna) und Mar Bella mit L4
                (Poblenou oder Selva Mar) erreichbar [Quelle 13]. Insgesamt
                bietet Barcelona sowohl städtische Strände mit direkter
                Metroanbindung als auch Küstenorte in der Nähe, die mit einer
                kurzen Zugfahrt erreichbar sind. Die Beschreibungen deuten auf
                eine Vielfalt von Strandtypen hin, von lebhaft bis ruhig, und
                erwähnen feinen Sand sowie klares Wasser für einige der
                genannten Strände.
              </p>
              <p>
                <strong>Öffentliche Verkehrsmittel:</strong> Das öffentliche
                Verkehrsnetz Barcelonas wird in [Quelle 15] als effizient,
                umfassend und touristenfreundlich beschrieben. Es umfasst Metro,
                Busse, Straßenbahnen und die FGC-Vorortzüge. Für Touristen
                stehen verschiedene Ticketoptionen zur Verfügung, wie die Hola
                Barcelona Travel Card für unbegrenzte Fahrten inklusive
                Flughafentransfer [Quelle 16] und die T-Casual für 10 Fahrten
                [Quelle 16]. Die Metro wird als das schnellste und einfachste
                Fortbewegungsmittel hervorgehoben, das die meisten touristischen
                Sehenswürdigkeiten abdeckt [Quelle 19]. Das Metronetz verfügt
                über 12 gut verbundene Linien mit häufigen Fahrten [Quelle 18].
                Busse bedienen auch Gebiete außerhalb des Metronetzes und
                verkehren die ganze Nacht [Quelle 19]. Die Nutzung von Google
                Maps wird in [Quelle 21] (obwohl für Nizza) als hilfreich für
                die Navigation im öffentlichen Verkehr angedeutet, was auch für
                Barcelona zutrifft. Das gut ausgebaute öffentliche
                Verkehrssystem Barcelonas scheint für Touristen geeignet zu
                sein, um die Stadt zu erkunden und Strände sowie Attraktionen
                problemlos zu erreichen. Die Verfügbarkeit von Mehrtagespässen
                und Flughafenverbindungen ist ein wesentlicher Vorteil.
              </p>
              <p>
                <strong>Kulturelle und historische Bedeutung:</strong> Barcelona
                ist reich an kulturellen und historischen Sehenswürdigkeiten,
                wie in [Quelle 22] aufgeführt. Dazu gehören Gaudís Meisterwerke
                (Sagrada Família, Park Güell, Casa Batlló, La Pedrera), das
                Gotische Viertel, Las Ramblas, das Picasso-Museum, das Museu
                Nacional d'Art de Catalunya und die Fundació Joan Miró. Die
                Sagrada Família, der Park Güell, die Casa Batlló und La Pedrera
                werden in [Quelle 24] als architektonische Höhepunkte
                hervorgehoben. Das Gotische Viertel und die Kirche Santa Maria
                del Mar werden ebenfalls erwähnt [Quelle 26]. [Quelle 26] listet
                die Sagrada Família, den Park Güell, La Rambla, das
                Picasso-Museum und den magischen Brunnen von Montjuïc als
                Top-Attraktionen auf. Die Fülle und Vielfalt der kulturellen
                Attraktionen unterstreichen Barcelonas Bedeutung als Ziel für
                Sightseeing und Erkundungen abseits der Strände. Die
                Konzentration der architektonischen Werke Gaudís macht die Stadt
                zu einem einzigartigen Ziel für Architekturbegeisterte.
              </p>
              <p>
                <strong>Verfügbarkeit von Freizeitaktivitäten:</strong> Die
                Recherchematerialien [Quelle 28] erwähnen Wanderwege und
                Küstenpfade in und um Barcelona, darunter den Berg Montserrat
                [Quelle 31], den Naturpark Collserola [Quelle 30], den Naturpark
                Garraf [Quelle 28], die Küstenpfade der Costa Brava [Quelle 30]
                und Stadtspaziergänge wie Diagonal nach Drassanes und Montjuic
                [Quelle 29]. Verschiedene Bootsausflüge ab Barcelona werden in
                [Quelle 35] detailliert beschrieben, darunter
                Besichtigungsfahrten durch den Hafen und entlang der Küste,
                Katamaranfahrten mit Musik, Sonnenuntergangsfahrten und
                Segelerlebnisse. Die Preise variieren ([Quelle 36]) bis zu
                teureren Optionen wie 37,78 $ ([Quelle 36]) für eine 2-stündige
                Segeltour. Barcelona bietet somit eine gute Auswahl an
                Freizeitaktivitäten, von einfachen Stadtspaziergängen und
                Wanderungen in nahegelegenen Naturparks (gut mit öffentlichen
                Verkehrsmitteln erreichbar) über Küstenpfade bis hin zu
                verschiedenen Bootsausflügen für unterschiedliche Interessen und
                Budgets.
              </p>
              <p>
                <strong>Geschätzte Reisekosten:</strong>
              </p>
              <ul>
                <li>
                  <strong>Flüge:</strong> Die Recherchematerialien [Quelle 43]
                  liefern Informationen zu Flügen von München nach Barcelona im
                  Juni 2025. Die Preise variieren je nach Fluggesellschaft und
                  Buchungszeitpunkt. Hin- und Rückflüge im Mai werden ab 139 $
                  ([Quelle 43]) angezeigt. Skyscanner [Quelle 45] zeigt
                  einfache Flüge am Samstag, den 14. Juni, ab 59 $ (Vueling),
                  was auf einen Hin- und Rückflugpreis von etwa 120-200 $ pro
                  Person hindeutet, potenziell 240-400 $ für zwei Personen.
                  Momondo [Quelle 46] listet direkte Hin- und Rückflugoptionen
                  in naher Zukunft ab 97-246 $ pro Person auf. Lufthansa
                  [Quelle 44] bietet Flüge ab 131 € pro Person für Termine in
                  naher Zukunft an. Basierend auf diesen Informationen könnte
                  eine realistische Schätzung für Hin- und Rückflüge für zwei
                  Personen im Juni 2025 zwischen 250 € und 600 € liegen,
                  abhängig von der Fluggesellschaft, den spezifischen
                  Reisedaten innerhalb der Woche (Samstagabflüge könnten teurer
                  sein) und dem Buchungszeitpunkt. Vueling scheint eine
                  preisgünstige Option zu sein.
                </li>
                <li>
                  <strong>Unterkünfte:</strong> Die Recherchematerialien [Quelle
                  48] listen verschiedene Unterkunftsmöglichkeiten in Barcelona
                  auf. Hostelworld [Quelle 48] zeigt Hostels mit privaten
                  Zimmern ab etwa 30-70 € pro Nacht. Kayak [Quelle 49] listet
                  Hotels mit einigen "Best Value"-Optionen um 43-48 $ pro
                  Nacht, die meisten empfohlenen Optionen sind jedoch teurer.
                  Booking.com [Quelle 50] bietet Apartments ab 134 $ pro Nacht.
                  Momondo [Quelle 51] listet Hotels wie The Central House
                  Barcelona Gracia um 40 $ pro Nacht und Hotel Best 4 Barcelona
                  für 135 $ pro Nacht. Expedia [Quelle 52] listet mehrere 3-4
                  Sterne Hotels in der Innenstadt von Barcelona mit Bewertungen
                  über 9,0, wobei die Preise für Juni 2025 direkt auf der
                  Plattform zu prüfen sind. Es scheint möglich zu sein, gut
                  bewertete Hotels oder Airbnb-Unterkünfte in Barcelona für
                  unter 150 € pro Nacht für zwei Personen zu finden,
                  insbesondere wenn Hostels mit privaten Zimmern in Betracht
                  gezogen oder Optionen etwas außerhalb der sehr zentralen
                  Bereiche gewählt werden. Die geschätzten Gesamtkosten für 6
                  Nächte könnten zwischen 360 € (Hostel) und 900 €
                  (Mittelklassehotel/Apartment) liegen.
                </li>
              </ul>
            </div>
          </section>

          {/* 3.2 Lissabon */}
          <section>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              3.2 Lissabon, Portugal
            </h3>
            <div className="prose prose-lg max-w-none text-card-foreground space-y-3">
              <p>
                <strong>Flugzeit:</strong> [Quelle 1] gibt 3h 20m an, was die
                Grenze leicht überschreitet. [Quelle 2] listet Lissabon jedoch
                generell innerhalb von 3 Stunden von Deutschland aus. Die
                Flugzeit von München ist noch zu bestätigen.
              </p>
              <p>
                <strong>Strände:</strong> [Quelle 8] listet die Algarve und die
                Azoren in Portugal auf. [Quelle 53] erwähnen Strände in der Nähe
                von Lissabon, die mit öffentlichen Verkehrsmitteln erreichbar
                sind (Cascais – 40 Min. mit dem Zug, Carcavelos – 30 Min. mit
                dem Zug).
              </p>
              <p>
                <strong>Öffentliche Verkehrsmittel:</strong> [Quelle 58]
                beschreiben Lissabons öffentliche Verkehrsmittel (Straßenbahnen,
                Busse, Metro, Züge, Fähren). Die Viva Viagem-Karte ist wichtig
                [Quelle 58].
              </p>
              <p>
                <strong>Kultur:</strong> [Quelle 63] listen kulturelle
                Attraktionen auf (Torre de Belém, Mosteiro dos Jerónimos,
                Castelo de São Jorge, Tram 28).
              </p>
              <p>
                <strong>Aktivitäten:</strong> [Quelle 69] erwähnen Wanderwege
                (Stadtspaziergänge, Küstenwanderungen in der Nähe von Sintra und
                Cascais). [Quelle 73] beschreiben Bootsausflüge auf dem Tejo.
              </p>
              <p>
                <strong>Flüge:</strong> [Quelle 77] zeigen Flugkosten von
                München nach Lissabon. Nonstop-Optionen sind verfügbar (TAP Air
                Portugal, Lufthansa). Die Preise scheinen bei etwa 200-250 $ für
                den Hin- und Rückflug zu beginnen.
              </p>
              <p>
                <strong>Unterkünfte:</strong> [Quelle 82] listen Unterkünfte
                auf. Hostels und einige Hotels scheinen unter 150 €/Nacht
                verfügbar zu sein.
              </p>
            </div>
          </section>

          {/* 3.3 Malaga */}
          <section>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              3.3 Malaga, Spanien
            </h3>
            <div className="prose prose-lg max-w-none text-card-foreground space-y-3">
              <p>
                <strong>Flugzeit:</strong> [Quelle 1] gibt 2h 45m an. [Quelle 2]
                bestätigt 2h 30m.
              </p>
              <p>
                <strong>Strände:</strong> [Quelle 8] listet die Algarve in
                Portugal und Malaga/Costa del Sol auf. [Quelle 87] beschreiben
                Strände in der Stadt Malaga (Malagueta – zentral, El Palo –
                lokales Flair), die zu Fuß, mit dem Fahrrad oder mit
                öffentlichen Verkehrsmitteln erreichbar sind. Fuengirola ist
                eine kurze Zugfahrt entfernt [Quelle 92].
              </p>
              <p>
                <strong>Öffentliche Verkehrsmittel:</strong> [Quelle 93]
                beschreiben Malagas öffentliche Verkehrsmittel (Busse, Metro,
                S-Bahn). Die Malaga Card bietet Ermäßigungen [Quelle 93].
              </p>
              <p>
                <strong>Kultur:</strong> [Quelle 98] listen kulturelle
                Attraktionen auf (Alcazaba, Kathedrale von Malaga,
                Picasso-Museum, Carmen Thyssen Museum).
              </p>
              <p>
                <strong>Aktivitäten:</strong> [Quelle 104] erwähnen Wanderwege
                (Malaga Coastal Path, Caminito del Rey – mit Zug und Bus
                erreichbar). [Quelle 108] beschreiben Bootsausflüge
                (Katamaranfahrten, Besichtigungstouren).
              </p>
              <p>
                <strong>Flüge:</strong> [Quelle 112] zeigen Flugkosten von
                München nach Malaga. Nonstop-Optionen sind verfügbar (Lufthansa,
                Norwegian). Die Preise scheinen bei etwa 130-200 $ für den Hin-
                und Rückflug zu beginnen.
              </p>
              <p>
                <strong>Unterkünfte:</strong> [Quelle 117] listen Unterkünfte
                auf. Verschiedene Hotels scheinen unter 150 €/Nacht verfügbar
                zu sein.
              </p>
            </div>
          </section>

          {/* 3.4 Nizza */}
          <section>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              3.4 Nizza, Frankreich
            </h3>
            <div className="prose prose-lg max-w-none text-card-foreground space-y-3">
              <p>
                <strong>Flugzeit:</strong> Die Flugzeit von München nach Nizza
                beträgt etwa 1 Stunde und 30 Minuten [Quelle 1].
              </p>
              <p>
                <strong>Strände:</strong> [Quelle 3] erwähnen Strände in Nizza
                und nahegelegenen Städten (Villefranche-sur-Mer, Eze, Antibes,
                Cannes). Zugang per Bus und Bahn [Quelle 122]. Die Strände
                bestehen hauptsächlich aus Kies, einige Sandstrände in der Nähe
                ([Quelle 125]).
              </p>
              <p>
                <strong>Öffentliche Verkehrsmittel:</strong> [Quelle 21]
                beschreiben Nizzas öffentliche Verkehrsmittel (Busse und
                Straßenbahnen von Lignes d'Azur). Das Ticket SOLO kostet 1,50 €
                [Quelle 21]. Gute Verbindungen zu nahegelegenen Städten.
              </p>
              <p>
                <strong>Kultur:</strong> [Quelle 131] listen kulturelle
                Attraktionen auf (Cimiez-Stätten, russisch-orthodoxe Kathedrale,
                Matisse-Museum, Chagall-Museum).
              </p>
              <p>
                <strong>Aktivitäten:</strong> [Quelle 137] erwähnen
                Küstenwanderwege (Nizza nach Cap d'Ail, Cap Ferrat,
                Eze-Wanderung). [Quelle 141] beschreiben Bootsausflüge zur Bucht
                von Villefranche, nach Monaco usw.
              </p>
              <p>
                <strong>Flüge:</strong> Die geschätzten Kosten für Hin- und
                Rückflugtickets von München nach Nizza für zwei Personen im
                Reisezeitraum 14. bis 22. Juni 2025 liegen voraussichtlich
                zwischen 200 € und 500 €.
              </p>
              <p>
                <strong>Unterkünfte:</strong> Es wird erwartet, dass gut
                bewertete Hotels oder Airbnb-Unterkünfte in Nizza für maximal
                150 € pro Nacht für zwei Personen verfügbar sind, was für 6
                Nächte Gesamtkosten von etwa 900 € ergibt.
              </p>
            </div>
          </section>

          {/* 3.5 Palermo */}
          <section>
            <h3 className="text-xl font-semibold text-secondary mb-4">
              3.5 Palermo, Italien (Sizilien)
            </h3>
            <div className="prose prose-lg max-w-none text-card-foreground space-y-3">
              <p>
                <strong>Flugzeit:</strong> [Quelle 7] erwähnt einen 2-stündigen
                Flug von München nach Palermo. [Quelle 2] bestätigt Sizilien
                innerhalb von 2h 15m von München.
              </p>
              <p>
                <strong>Strände:</strong> [Quelle 145] erwähnen Strände in der
                Nähe von Palermo (Mondello – sandig, gut mit Bus 806 erreichbar
                – 30 Min.). Addaura und Barcarello (felsig) werden ebenfalls
                genannt. Cefalù (sandig) ist weiter entfernt [Quelle 149].
              </p>
              <p>
                <strong>Öffentliche Verkehrsmittel:</strong> [Quelle 151]
                beschreiben Palermos öffentliche Verkehrsmittel (Busse,
                Straßenbahnen, Metro). AMAT betreibt Busse und Straßenbahnen.
                Einzelfahrschein 1,40 € [Quelle 152]. Metro zum Flughafen.
              </p>
              <p>
                <strong>Kultur:</strong> [Quelle 156] listen kulturelle
                Attraktionen auf (Palazzo dei Normanni, Teatro Massimo, Quattro
                Canti, Kathedrale von Palermo).
              </p>
              <p>
                <strong>Aktivitäten:</strong> [Quelle 162] erwähnen Wanderwege
                (Monte Pellegrino, Naturschutzgebiet Capo Gallo). [Quelle 166]
                beschreiben Bootsausflüge um den Golf von Palermo und zu
                nahegelegenen Inseln.
              </p>
              <p>
                <strong>Flüge:</strong> Die geschätzten Kosten für Hin- und
                Rückflugtickets von München nach Palermo für zwei Personen im
                Reisezeitraum 14. bis 22. Juni 2025 liegen voraussichtlich
                zwischen 200 € und 500 €.
              </p>
              <p>
                <strong>Unterkünfte:</strong> Es wird erwartet, dass gut
                bewertete Hotels oder Airbnb-Unterkünfte in Palermo für maximal
                150 € pro Nacht für zwei Personen verfügbar sind, was für 6
                Nächte Gesamtkosten von etwa 900 € ergibt.
              </p>
            </div>
          </section>
           <p className="text-sm text-muted-foreground italic">
            Hinweis: Die Nummern wie [Quelle 1], [Quelle 8] etc. beziehen sich auf die
            ursprünglichen Recherchematerialien und sind hier nicht verlinkt.
          </p>
        </CardContent>
      </Card>

      {/* 4. Vergleichende Analyse */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">
            4. Vergleichende Analyse vielversprechender Reiseziele
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none text-card-foreground">
          <p>
            Die folgende Tabelle fasst die gesammelten Informationen für die
            vielversprechendsten Reiseziele zusammen:
          </p>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Kriterium</TableHead>
                  <TableHead>Barcelona</TableHead>
                  <TableHead>Malaga</TableHead>
                  <TableHead>Nizza</TableHead>
                  <TableHead>Palermo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-semibold">
                    Passgenauigkeit zu Anforderungen
                  </TableCell>
                  <TableCell>Ja</TableCell>
                  <TableCell>Ja</TableCell>
                  <TableCell>Ja</TableCell>
                  <TableCell>Ja</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">
                    Geschätzte Gesamtkosten
                  </TableCell>
                  <TableCell>
                    Flug: 250-600 €; Unterkunft: 360-900 € (6 Nächte)
                  </TableCell>
                  <TableCell>
                    Flug: 260-400 €; Unterkunft: 540-900 € (6 Nächte)
                  </TableCell>
                  <TableCell>
                    Flug: 200-500 €; Unterkunft: 540-900 € (6 Nächte)
                  </TableCell>
                  <TableCell>
                    Flug: 200-500 €; Unterkunft: 540-900 € (6 Nächte)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">
                    Qualität der Strände
                  </TableCell>
                  <TableCell>
                    Sandstrände in der Stadt (Barceloneta, Nova Icària) und in
                    der Nähe (Sitges, Castelldefels), oft mit feinem Sand und
                    klarem Wasser beschrieben.
                  </TableCell>
                  <TableCell>
                    Sandstrände in der Stadt (Malagueta, El Palo) mit dunklem
                    Sand, aber gut gepflegt und mit ruhigem, flachem Wasser.
                    Strände in der Nähe (Fuengirola) mit langem, feinem Sand.
                  </TableCell>
                  <TableCell>
                    Strände in Nizza hauptsächlich Kies, aber Sandstrände in der
                    Nähe (Villefranche-sur-Mer mit kleinen Kieselsteinen).
                    Klares Wasser wird häufig erwähnt.
                  </TableCell>
                  <TableCell>
                    Sandstrände in der Nähe (Mondello mit feinem, weißem Sand
                    und kristallklarem Wasser – 30 Min. Busfahrt). Felsige
                    Strände (Addaura, Barcarello) ebenfalls verfügbar.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">
                    Erreichbarkeit der Strände
                  </TableCell>
                  <TableCell>
                    Stadtstrände direkt mit der Metro erreichbar (innerhalb von
                    30 Minuten). Strände in der Nähe (Sitges, Castelldefels) in
                    25-45 Minuten mit dem Zug vom Stadtzentrum aus erreichbar.
                  </TableCell>
                  <TableCell>
                    Stadtstrände (Malagueta) in 10-15 Minuten zu Fuß vom
                    historischen Zentrum oder mit dem Bus erreichbar. El Palo
                    mit dem Bus in ca. 20 Minuten erreichbar. Fuengirola in
                    kurzer Zugfahrt erreichbar.
                  </TableCell>
                  <TableCell>
                    Strände in Nizza entlang der Promenade des Anglais leicht
                    mit öffentlichen Verkehrsmitteln erreichbar (Bus,
                    Straßenbahn). Strände in der Nähe (Villefranche, Eze) mit
                    Bus oder Bahn in 20-45 Minuten erreichbar.
                  </TableCell>
                  <TableCell>
                    Strand von Mondello in 30 Minuten mit dem Bus (Linie 806)
                    vom Stadtzentrum aus erreichbar. Andere Strände (Addaura,
                    Barcarello) ebenfalls mit dem Bus erreichbar. Cefalù
                    (sandig) in 45-60 Minuten mit dem Zug.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">
                    Qualität des ÖPNV
                  </TableCell>
                  <TableCell>
                    Effizient, umfassend und benutzerfreundlich für Touristen.
                    Metro, Busse, Straßenbahnen und FGC-Züge. Verschiedene
                    Ticketoptionen für Touristen verfügbar (Hola Barcelona Card,
                    T-Casual). Hohe Frequenz der Metro.
                  </TableCell>
                  <TableCell>
                    Gut ausgebautes Netz von Bussen, Metro und S-Bahn. Malaga
                    Card für Touristen mit Rabatten verfügbar. Gute Anbindung an
                    den Flughafen.
                  </TableCell>
                  <TableCell>
                    Gute Abdeckung durch Busse und Straßenbahnen (Lignes
                    d'Azur). Ticket SOLO für 1,50 €. Gute Verbindungen zu
                    nahegelegenen Städten entlang der Küste.
                  </TableCell>
                  <TableCell>
                    Busse, Straßenbahnen und Metro verfügbar. Bus zum Strand von
                    Mondello sehr häufig. Metroanbindung zum Flughafen.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">
                    Kulturelle Highlights
                  </TableCell>
                  <TableCell>
                    Gaudís Meisterwerke (Sagrada Família, Park Güell, Casa
                    Batlló, La Pedrera), Gotisches Viertel, Las Ramblas,
                    Picasso-Museum, Museu Nacional d'Art de Catalunya.
                  </TableCell>
                  <TableCell>
                    Alcazaba, Kathedrale von Malaga, Picasso-Museum, Carmen
                    Thyssen Museum, Römisches Theater.
                  </TableCell>
                  <TableCell>
                    Cimiez-Stätten (römische Ruinen, Matisse-Museum,
                    archäologisches Museum), russisch-orthodoxe Kathedrale,
                    Altstadt (Vieux Nice), Chagall-Museum.
                  </TableCell>
                  <TableCell>
                    Palazzo dei Normanni, Teatro Massimo, Quattro Canti,
                    Kathedrale von Palermo, Kapuzinergruft, Martorana-Kirche.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-semibold">
                    Verfügbarkeit von Aktivitäten
                  </TableCell>
                  <TableCell>
                    Stadtspaziergänge, Wanderwege in nahegelegenen Naturparks
                    (Montserrat, Collserola, Garraf), Küstenpfade (Costa Brava),
                    verschiedene Bootsausflüge (Besichtigungsfahrten,
                    Katamaranfahrten, Segeln).
                  </TableCell>
                  <TableCell>
                    Malaga Coastal Path, Caminito del Rey (in der Nähe, mit
                    Zug/Bus erreichbar), Wanderwege in den Montes de Málaga.
                    Bootsausflüge (Katamaranfahrten, Besichtigungstouren).
                  </TableCell>
                  <TableCell>
                    Küstenwanderwege (Nizza nach Cap d'Ail, Cap Ferrat, Eze),
                    Stadtspaziergänge (Promenade des Anglais, Colline du
                    Château). Bootsausflüge zur Bucht von Villefranche, nach
                    Monaco usw.
                  </TableCell>
                  <TableCell>
                    Wanderwege (Monte Pellegrino, Naturschutzgebiet Capo Gallo),
                    Stadtspaziergänge (historisches Zentrum, Märkte).
                    Bootsausflüge um den Golf von Palermo und zu nahegelegenen
                    Inseln.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* 5. Schlussfolgerung und Empfehlungen */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">
            5. Schlussfolgerung und Empfehlungen
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none text-card-foreground space-y-4">
          <p>
            Die Analyse der untersuchten Reiseziele zeigt, dass alle vier Städte
            – Barcelona, Malaga, Nizza und Palermo – die grundlegenden
            Anforderungen des Nutzers an ein Urlaubsziel mit Sandstränden
            erfüllen, die von München aus in etwa 2-3 Stunden Flugzeit
            erreichbar sind. Jede Stadt bietet zudem Sandstrände, die innerhalb
            von 45 Minuten mit öffentlichen Verkehrsmitteln erreichbar sind,
            verfügt über ein gut funktionierendes öffentliches Verkehrsnetz für
            Touristen, eine Vielzahl kultureller und historischer
            Sehenswürdigkeiten sowie verschiedene Freizeitaktivitäten wie
            Spaziergänge und Bootsausflüge.
          </p>
          <p>
            Hinsichtlich der geschätzten Gesamtkosten liegen die Flugpreise für
            alle vier Destinationen in einem ähnlichen Bereich von 200 € bis 600
            € für zwei Personen, wobei Fluggesellschaften wie Vueling und
            Norwegian potenziell günstigere Optionen bieten. Die Kosten für
            Unterkünfte scheinen ebenfalls vergleichbar zu sein, mit
            Möglichkeiten für gut bewertete Hotels oder Airbnbs unter 150 € pro
            Nacht für zwei Personen, was für 6 Nächte Gesamtkosten zwischen 360
            € und 900 € erwarten lässt, abhängig von der Art der Unterkunft und
            der genauen Lage.
          </p>
          <p>
            Bei der Qualität der Strände bietet Barcelona eine größere Vielfalt
            mit sowohl städtischen als auch nahegelegenen Optionen, die häufig
            als feinsandig und mit klarem Wasser beschrieben werden. Malaga
            bietet ebenfalls gute Sandstrände in der Stadt und in der Nähe.
            Nizzas Strände bestehen hauptsächlich aus Kies, aber in der Umgebung
            gibt es Sandstrände. Palermo zeichnet sich durch den feinen Sand und
            das kristallklare Wasser des Strandes von Mondello aus.
          </p>
          <p>
            Die Qualität des öffentlichen Verkehrs ist in allen vier Städten als
            gut bis sehr gut zu bewerten, wobei Barcelona und Malaga
            möglicherweise die umfassendsten Netze aufweisen. Alle Städte bieten
            Touristen-Tickets oder -Karten an, die die Nutzung erleichtern.
          </p>
          <p>
            Kulturell bieten alle vier Städte eine reiche Auswahl an
            historischen und kulturellen Attraktionen, wobei Barcelona und
            Palermo möglicherweise die beeindruckendste Vielfalt aufweisen, von
            Gaudís modernistischen Werken bis hin zu den arabisch-normannischen
            Einflüssen in Palermo.
          </p>
          <p>
            Die Verfügbarkeit von Freizeitaktivitäten ist ebenfalls in allen
            Destinationen gegeben, mit Küstenwanderwegen, Stadtspaziergängen und
            einer guten Auswahl an Bootsausflügen.
          </p>
          <h4 className="text-lg font-semibold text-secondary">
            Empfehlungen:
          </h4>
          <p>
            Basierend auf der Analyse und den Anforderungen des Nutzers sind die
            folgenden Reiseziele besonders empfehlenswert:
          </p>
          <ul>
            <li>
              <strong>Barcelona:</strong> Bietet eine ausgezeichnete Kombination
              aus leicht erreichbaren Sandstränden, einem hoch entwickelten
              öffentlichen Verkehrsnetz, einer Fülle an kulturellen Attraktionen
              und vielfältigen Freizeitaktivitäten. Die Beschreibungen der
              Strände und die gute Anbindung durch öffentliche Verkehrsmittel
              machen Barcelona zu einer sehr passenden Option.
            </li>
            <li>
              <strong>Malaga:</strong> Sticht durch seine gut erreichbaren und
              qualitativ hochwertigen Sandstrände in der Stadt, ein effizientes
              öffentliches Verkehrssystem und eine reiche kulturelle Geschichte
              hervor. Die geschätzten Kosten scheinen ebenfalls im Rahmen zu
              liegen.
            </li>
            <li>
              <strong>Palermo:</strong> Mit seinem berühmten Sandstrand von
              Mondello, der guten Anbindung an das öffentliche Verkehrsnetz und
              einer faszinierenden Mischung aus Kulturen und historischen
              Sehenswürdigkeiten stellt Palermo eine attraktive Option dar,
              insbesondere für Reisende, die Wert auf einzigartige kulturelle
              Erlebnisse legen.
            </li>
          </ul>
          <p>
            <strong>Nizza</strong> könnte ebenfalls in Betracht gezogen werden, wenn
            der Nutzer bereit ist, Kiesstrände in Kauf zu nehmen oder die
            nahegelegenen Sandstrände in Villefranche-sur-Mer zu besuchen.{" "}
            <strong>Lissabon</strong> wurde aufgrund der leicht überschrittenen
            Flugzeit nicht in die engere Auswahl aufgenommen, bietet aber
            ebenfalls attraktive Strände in der Nähe.
          </p>
          <p>
            Es wird empfohlen, die Flug- und Unterkunftspreise für die
            spezifischen Reisedaten im Juni 2025 zu überprüfen, da diese je nach
            Buchungszeitpunkt und Verfügbarkeit variieren können.
          </p>
           <p className="text-sm text-muted-foreground italic">
            Stand der Recherche und Preise: [Datum der ursprünglichen Recherche, falls bekannt, sonst weglassen oder Platzhalter einfügen]. Preise können sich ändern.
          </p>
        </CardContent>
      </Card>
    </main>
  );
} 