/**
 * Represents the structure for a single European beach destination.
 */
export interface Destination {
  /**
   * A unique identifier for the destination, used in URLs.
   * Example: "crete"
   */
  slug: string;

  /**
   * The display name of the destination.
   * Example: "Kreta"
   */
  name: string;

  /**
   * Typical flight duration from a central European location.
   * Example: "ca. 3 Stunden"
   */
  flightTime: string;

  /**
   * Information about the beaches at the destination.
   */
  beach: {
    /**
     * Description of the beach quality (sand type, water clarity, etc.).
     * Example: "Feiner Sand, kristallklares Wasser"
     */
    quality: string;
    /**
     * Information on how easily the beaches can be reached.
     * Example: "Gut erreichbar, teils abgelegene Buchten"
     */
    accessibility: string;
  };

  /**
   * Information about local transportation options.
   * Example: "Mietwagen empfohlen, Busnetz vorhanden"
   */
  transport: string;

  /**
   * Description of the local culture and historical significance.
   * Example: "Minoische Paläste, venezianische Häfen"
   */
  culture: string;

  /**
   * Overview of available activities beyond the beach.
   * Example: "Wandern in Schluchten, Wassersport, Archäologie"
   */
  activities: string;

  /**
   * Estimated cost factors for the destination.
   */
  costs: {
    /**
     * General indication of flight costs.
     * Example: "Mittel bis Hoch (Saisonabhängig)"
     */
    flights: string;
    /**
     * General indication of accommodation costs.
     * Example: "Vielfältig, von günstig bis luxuriös"
     */
    accommodation: string;
  };
}

/**
 * Array containing the data for various European beach destinations.
 * Data based on general knowledge and interface examples, assuming source from research document.
 */
export const destinations: Destination[] = [
  {
    slug: "barcelona",
    name: "Barcelona, Spanien",
    flightTime: "ca. 2 Stunden",
    beach: {
      quality: "Stadtstrände, gute Wasserqualität",
      accessibility: "Sehr gut erreichbar mit öffentlichen Verkehrsmitteln",
    },
    transport: "Exzellentes öffentliches Verkehrsnetz (Metro, Bus)",
    culture: "Gaudi-Architektur, Gotisches Viertel, Museen",
    activities: "Stadtbesichtigung, Tapas, Nachtleben, Shopping",
    costs: {
      flights: "Günstig bis Mittel",
      accommodation: "Vielfältig, von Hostels bis Luxushotels",
    },
  },
  {
    slug: "malaga",
    name: "Málaga, Spanien (Costa del Sol)",
    flightTime: "ca. 2.5 - 3 Stunden",
    beach: {
      quality: "Lange Sandstrände, Palmenpromenaden",
      accessibility: "Gut erreichbar, teils direkt in der Stadt",
    },
    transport: "Gutes Busnetz, Mietwagen für Ausflüge sinnvoll",
    culture: "Picasso-Museum, Alcazaba, Römische Theater",
    activities: "Sonnenbaden, Wassersport, Andalusische Küche, Weiße Dörfer",
    costs: {
      flights: "Günstig bis Mittel",
      accommodation: "Gute Auswahl in allen Preisklassen",
    },
  },
  {
    slug: "palermo",
    name: "Palermo, Italien (Sizilien)",
    flightTime: "ca. 2 - 2.5 Stunden",
    beach: {
      quality: "Schöne Buchten in der Nähe (z.B. Mondello), Stadtstrand ok",
      accessibility: "Mondello gut per Bus erreichbar, sonst Mietwagen/Roller",
    },
    transport: "Innerstädtisch Bus/zu Fuß, für Umgebung Mietwagen",
    culture: "Normannenpalast, Kathedrale, Märkte (Vucciria), Mafia-Geschichte",
    activities: "Kultur, Street Food, Bootsausflüge, Ätna (Tagesausflug)",
    costs: {
      flights: "Mittel",
      accommodation: "Eher günstig bis mittelpreisig",
    },
  },
  {
    slug: "nice",
    name: "Nizza, Frankreich (Côte d'Azur)",
    flightTime: "ca. 1.5 - 2 Stunden",
    beach: {
      quality: "Kiesstrand (Promenade des Anglais), Sandstrände in der Nähe",
      accessibility: "Stadtstrand sehr gut erreichbar, andere per Bus/Zug",
    },
    transport: "Gutes Bus-/Tramnetz, Zug entlang der Küste",
    culture: "Altstadt (Vieux Nice), Matisse Museum, Chagall Museum, russisch-orthodoxe Kathedrale",
    activities: "Promenade, Märkte, Ausflüge (Monaco, Cannes), Kunst",
    costs: {
      flights: "Mittel bis Hoch",
      accommodation: "Eher gehobenes Preisniveau",
    },
  },
];

/**
 * Retrieves a specific destination from the `destinations` array based on its slug.
 * @param slug The unique identifier (slug) of the destination to find.
 * @returns The `Destination` object if found, otherwise `undefined`.
 */
export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug);
} 