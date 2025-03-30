/**
 * Studio Ghibli inspirierte Farbpalette
 * Diese Farben reflektieren die sanften, natürlichen und pastelligen Töne,
 * die für Studio Ghibli-Filme charakteristisch sind.
 */

export const ghibliColors = {
  // Hauptfarben
  background: {
    light: "#fcfaf6", // Sanftes Creme
    dark: "#183141", // Dunkles Blaugrau
  },
  foreground: {
    light: "#2d5a70", // Mattes Blaugrau
    dark: "#eee9dd", // Helles Beige
  },

  // UI-Elemente
  card: {
    light: "#f8f5ed", // Leichtes Sandbeige
    dark: "#1e3a4e", // Leicht helleres Blaugrau
  },
  primary: {
    main: "#e6a277", // Warmes Terrakotta
    hover: "#d48a5d", // Dunkleres Terrakotta
  },
  secondary: {
    light: "#8adbce", // Teal/Türkis
    dark: "#70c7b8", // Gedämpftes Teal
  },
  accent: {
    light: "#f599a3", // Sanftes Rosa
    dark: "#f1737f", // Dunkleres Rosa
  },

  // Unterstützende Farben
  muted: {
    light: "#ebe6da", // Helles Beige
    dark: "#2d5a70", // Mittleres Blaugrau
  },
  border: {
    light: "#dbd4c5", // Helles Sandgrau
    dark: "#355c72", // Dunkles Blaugrau
  },

  // Zusätzliche Farben für spezifische Anwendungsfälle
  nature: {
    green: "#94c9a9", // Sanftes Grün für Naturdarstellungen
    blue: "#7cc6e5", // Himmelblau für Luft/Himmel
    earth: "#cba78b", // Erdton
  },

  // Status-Farben
  status: {
    success: "#8fc0a9", // Helles Grün
    warning: "#f8b195", // Orangeton
    error: "#f67280", // Rötlicher Ton
    info: "#a5c7e4", // Helles Blau
  },
};

// Mapping-Funktion um HSL-Werte aus globals.css in HEX umzuwandeln
export function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r, g, b;

  if (0 <= h && h < 60) {
    [r, g, b] = [c, x, 0];
  } else if (60 <= h && h < 120) {
    [r, g, b] = [x, c, 0];
  } else if (120 <= h && h < 180) {
    [r, g, b] = [0, c, x];
  } else if (180 <= h && h < 240) {
    [r, g, b] = [0, x, c];
  } else if (240 <= h && h < 300) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }

  const toHex = (value: number) => {
    const hex = Math.round((value + m) * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
