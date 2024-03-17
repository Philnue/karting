const OpeningHours = () => {
  return (
    <section id="opening-hours" className="p-8 pt-4">
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Öffnungszeiten</h2>
        <div className="space-y-2">
          <p>
            Montag – Freitag: <strong>14:00 Uhr – 22:00 Uhr</strong>
          </p>
          <p>
            Samstag, Sonn- und Feiertage: <strong>10:00 Uhr – 22:00 Uhr</strong>
          </p>
          <p>Kartfahren jederzeit ohne Voranmeldung möglich! *</p>
          <p>Reservationen ab 5 Personen möglich, ab 8 Personen erwünscht.</p>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
