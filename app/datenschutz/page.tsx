export default function DatenschutzPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Datenschutzerklärung</h1>
      <p className="text-muted-foreground">[Hier stehen die Datenschutzinformationen]</p>
      
      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-bold text-foreground">Verantwortlicher</h2>
        <p className="text-muted-foreground">[Name und Kontaktdaten des Verantwortlichen]</p>
        
        <h2 className="text-xl font-bold text-foreground mt-6">Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p className="text-muted-foreground">[Informationen zur Datenerhebung und -verarbeitung]</p>
        
        <h2 className="text-xl font-bold text-foreground mt-6">Cookies</h2>
        <p className="text-muted-foreground">[Informationen zur Cookie-Nutzung]</p>
        
        <h2 className="text-xl font-bold text-foreground mt-6">Ihre Rechte</h2>
        <p className="text-muted-foreground">[Informationen zu Betroffenenrechten]</p>
      </div>
    </main>
  );
} 