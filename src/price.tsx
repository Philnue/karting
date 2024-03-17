const Price = () => {
  return (
    <section id="prices" className="p-8 pt-4">
      <div className="bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Preise und Angebote
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Standard Tarife</h3>
              <p>Eine Fahrt à 10 Minuten: CHF 24.00</p>
              <p className="mt-2">Memberkarte: CHF 3.00 (1 Jahr gültig)</p>
              <p className="mt-2">Kopfhaube: CHF 3.00*</p>
              <p className="mt-4 italic">
                Nehmt genügend Zeit mit - das ganze Spektakel geht eher 30
                Minuten, inklusive Briefing/Einführung, Erklärung der Karts und
                Strecke, Auswertung der Rundenzeiten, etc.
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Spezialtarife</h3>
              <p>
                Kinder bis 14 Jahre (Mo-Do, 14:00 - 17:00): CHF 20.00 pro 10
                Minuten Training
              </p>
              <p className="mt-4">
                Freitagabend Special (ab 20:00 Uhr): CHF 75.00 für 10 Minuten
                Warm-Up, 10 Minuten Qualifying, 12 Minuten Rennen
              </p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Gruppen und Events</h3>
              <p>
                Gruppen / Bahnmiete: CHF 1’440.00 für 1 Stunde (9 Karts, 5
                Runden, Apéro)
              </p>
              <p className="mt-2">
                Firmen-Angebote und Weihnachtsessen: Kontaktieren Sie uns für
                weitere Infos.
              </p>
              <p className="mt-2">
                Weitere individuelle Gruppen-/Firmenanlässe, auch inkl.
                Catering, auf Anfrage.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm">
              *Kopfhauben sind aus hygienischen Gründen obligatorisch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
