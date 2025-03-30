export default function ImpressumPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Impressum</h1>
      <p className="text-muted-foreground">Angaben gemäß § 5 TMG:</p>
      <p className="text-muted-foreground">[Hier stehen die Impressumsangaben]</p>
      
      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-bold text-foreground">Kontakt</h2>
        <p className="text-muted-foreground">Telefon: [Telefonnummer]</p>
        <p className="text-muted-foreground">E-Mail: [E-Mail-Adresse]</p>
        
        <h2 className="text-xl font-bold text-foreground mt-6">Verantwortlich für den Inhalt</h2>
        <p className="text-muted-foreground">[Name der verantwortlichen Person]</p>
      </div>
    </main>
  );
} 