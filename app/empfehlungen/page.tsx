import React from "react";
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
import Image from "next/image";
// Import the structured report data
import { reportData } from "@/lib/report-data";

export default function EmpfehlungenPage() {
  const { introduction, candidates, analysis, comparison, recommendation } =
    reportData;

  // Hilfsfunktion zum Formatieren von Quellenreferenzen [Quelle X]
  const formatierText = (text: string) => {
    // Regulärer Ausdruck, der alle Vorkommen von [Quelle X] findet, wobei X eine beliebige Zahl sein kann
    const quellenPattern = /\[Quelle\s+\d+\]/g;

    // Text in Teile aufteilen: normaler Text und Quellenreferenzen
    const teile = text.split(quellenPattern);
    const quellenMatches = text.match(quellenPattern) || [];

    // Wenn keine Quellenreferenzen gefunden wurden, gibt den unveränderten Text zurück
    if (quellenMatches.length === 0) return text;

    // Erstellt ein Array mit abwechselnd Text und formatierte Quellenreferenzen
    return (
      <>
        {teile.map((teil, index) => (
          <React.Fragment key={index}>
            {teil}
            {index < quellenMatches.length && (
              <span className="text-xs italic text-muted-foreground">
                {quellenMatches[index]}
              </span>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <main className="container mx-auto space-y-12 px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-primary">
        Empfehlung für Urlaubsziele mit Sandstränden in Europa
      </h1>

      {/* 1. Einleitung */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">
            {introduction.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none space-y-4 text-card-foreground">
          {/* Render initial paragraphs */}
          {introduction.paragraphs.slice(0, 1).map((p, index) => (
            <p key={`intro-p1-${index}`}>{formatierText(p)}</p>
          ))}
          {/* Render the paragraph before the list */}
          <p>{formatierText(introduction.paragraphs[1])}</p>
          {/* Render the list */}
          {introduction.listItems && (
            <ul className="list-disc space-y-1 pl-6">
              {introduction.listItems.map((item, index) => (
                <li key={`intro-li-${index}`}>{formatierText(item)}</li>
              ))}
            </ul>
          )}
          {/* Render final paragraph */}
          {introduction.paragraphs.slice(2).map((p, index) => (
            <p key={`intro-p2-${index}`}>{formatierText(p)}</p>
          ))}
        </CardContent>
      </Card>

      {/* 2. Identifizierung anfänglicher Kandidatenstädte */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">
            {candidates.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none space-y-4 text-card-foreground">
          {/* Render paragraphs before the table placeholder */}
          {candidates.paragraphs.slice(0, 2).map((p, index) => (
            <p key={`cand-p1-${index}`}>{formatierText(p)}</p>
          ))}

          {/* Placeholder text for table */}
          <p>{formatierText(candidates.paragraphs[2])}</p>

          {/* Render Table */}
          {candidates.tableData && (
            <div className="not-prose my-4 overflow-x-auto">
              {" "}
              {/* Use not-prose to prevent prose styling on table */}
              <Table>
                <TableHeader>
                  <TableRow>
                    {candidates.tableData.headers.map((header) => (
                      <TableHead key={header}>{header}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {candidates.tableData.rows.map((row, rowIndex) => (
                    <TableRow key={`cand-row-${rowIndex}`}>
                      {row.map((cell, cellIndex) => (
                        <TableCell key={`cand-cell-${rowIndex}-${cellIndex}`}>
                          {cell}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {/* Render paragraphs after the table placeholder */}
          {candidates.paragraphs.slice(3).map((p, index) => (
            <p key={`cand-p2-${index}`}>{p}</p>
          ))}
          {candidates.note && (
            <p className="text-sm italic text-muted-foreground">
              {candidates.note}
            </p>
          )}
        </CardContent>
      </Card>

      {/* 3. Detaillierte Profile und Analysen */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">
            {analysis.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {analysis.destinations.map((dest) => (
            <section key={dest.id}>
              <h3 className="mb-4 text-xl font-semibold text-secondary">
                {dest.title}
              </h3>
              <div className="prose prose-lg max-w-none space-y-3 text-card-foreground">
                {dest.sections.map((section, idx) => (
                  <div key={`${dest.id}-section-${idx}`}>
                    {/* Use a simple div instead of h4 for subtitles to avoid prose styling issues */}
                    <div className="mb-1 font-semibold text-foreground">
                      {section.subtitle}
                    </div>
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={`${dest.id}-section-${idx}-p-${pIdx}`}>{p}</p>
                    ))}
                  </div>
                ))}
                {/* Render placeholder if sections are empty (for Malaga, Palermo, Nizza) */}
                {dest.sections.length === 0 && (
                  <p className="italic text-muted-foreground">
                    Details für {dest.title.split(",")[0].substring(4)}{" "}
                    folgen...
                  </p>
                )}
              </div>
            </section>
          ))}
        </CardContent>
      </Card>

      {/* 4. Vergleichende Zusammenfassung */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">
            {comparison.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none space-y-4 text-card-foreground">
          {/* Render paragraphs before the table placeholder */}
          {comparison.paragraphs.map((p, index) => (
            <p key={`comp-p-${index}`}>{p}</p>
          ))}

          {/* Render Comparison Table */}
          {comparison.tableData && (
            <div className="not-prose my-4 overflow-x-auto">
              {" "}
              {/* Use not-prose */}
              <Table>
                <TableHeader>
                  <TableRow>
                    {comparison.tableData.headers.map((header) => (
                      <TableHead key={header}>{header}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparison.tableData.rows.map((row, rowIndex) => (
                    <TableRow key={`comp-row-${rowIndex}`}>
                      {row.map((cell, cellIndex) => (
                        <TableCell key={`comp-cell-${rowIndex}-${cellIndex}`}>
                          {cell}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
          {comparison.note && (
            <p className="text-sm italic text-muted-foreground">
              {comparison.note}
            </p>
          )}
        </CardContent>
      </Card>

      {/* 5. Fazit und Empfehlung */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">
            {recommendation.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none space-y-4 text-card-foreground">
          {/* Render first paragraph */}
          {recommendation.paragraphs.slice(0, 1).map((p, index) => (
            <p key={`rec-p1-${index}`}>{p}</p>
          ))}

          {/* Render bullet list items (Barcelona/Malaga points) */}
          {recommendation.listItems && (
            <ul className="list-disc space-y-2 pl-6">
              {recommendation.listItems.map((item, index) => (
                // Use dangerouslySetInnerHTML for the <strong> tags. Be cautious with this in real apps.
                // Consider a markdown parser or safer rendering method if data comes from untrusted sources.
                <li
                  key={`rec-li-${index}`}
                  dangerouslySetInnerHTML={{ __html: item }}
                ></li>
              ))}
            </ul>
          )}

          {/* Render paragraphs between lists */}
          {recommendation.paragraphs.slice(1, 3).map((p, index) => (
            <p key={`rec-p2-${index}`}>{p}</p>
          ))}

          {/* Render paragraph before ordered list */}
          <p>{recommendation.paragraphs[3]}</p>
          {/* Render ordered list for final recommendation */}
          <ol className="list-decimal space-y-1 pl-6">
            {/* Manually define the two recommendation points here as they were part of the text */}
            <li>
              <strong>Malaga:</strong> Beste Kombination aus Strandqualität
              (Sand), Erreichbarkeit und Kosten. Guter Mix aus Strandurlaub und
              Kultur.
            </li>
            <li>
              <strong>Barcelona:</strong> Ideal für eine Städtereise mit sehr
              gutem Strandzugang und Top-Kulturangebot, wenn das leicht höhere
              Budget akzeptabel ist.
            </li>
          </ol>

          {/* Render final paragraph */}
          <p>{recommendation.paragraphs[4]}</p>
        </CardContent>
      </Card>
    </main>
  );
}
