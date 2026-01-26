interface EventsListProps {
  title?: string;
  lang?: string;
}

const labels: Record<string, { [key: string]: string }> = {
  biletes: { lv: 'Biļetes', en: 'Tickets', de: 'Tickets' },
  skatit_visas: { lv: 'Skatīt visas', en: 'View all', de: 'Alle ansehen' },
  pasakumi: { lv: 'Pasākumi', en: 'Events', de: 'Veranstaltungen' },
  pirmdiena: { lv: 'Pirmdiena', en: 'Monday', de: 'Montag' },
  otrdiena: { lv: 'Otrdiena', en: 'Tuesday', de: 'Dienstag' },
  tresdiena: { lv: 'Trešdiena', en: 'Wednesday', de: 'Mittwoch' },
  ceturtdiena: { lv: 'Ceturtdiena', en: 'Thursday', de: 'Donnerstag' },
  piektdiena: { lv: 'Piektdiena', en: 'Friday', de: 'Freitag' },
  sestdiena: { lv: 'Sestdiena', en: 'Saturday', de: 'Samstag' },
  svetdiena: { lv: 'Svētdiena', en: 'Sunday', de: 'Sonntag' },
};

export default function EventsList({ title, lang = 'lv' }: EventsListProps) {
  const sectionTitle = title || labels.pasakumi[lang];

  const events = [
    { day: labels.piektdiena[lang], date: "25.06", time: "19:00", title: lang === 'lv' ? "Klejojošais holandietis" : lang === 'en' ? "The Flying Dutchman" : "Der fliegende Holländer" },
    { day: labels.sestdiena[lang], date: "26.06", time: "18:00", title: lang === 'lv' ? "Traviata" : lang === 'en' ? "La Traviata" : "La Traviata" },
    { day: labels.svetdiena[lang], date: "27.06", time: "17:00", title: lang === 'lv' ? "Don Giovanni" : lang === 'en' ? "Don Giovanni" : "Don Giovanni" },
    { day: labels.pirmdiena[lang], date: "28.06", time: "20:00", title: lang === 'lv' ? "Madame Butterfly" : lang === 'en' ? "Madame Butterfly" : "Madame Butterfly" },
    { day: labels.otrdiena[lang], date: "29.06", time: "19:30", title: lang === 'lv' ? "Figaro kāzas" : lang === 'en' ? "The Marriage of Figaro" : "Die Hochzeit des Figaro" },
  ];

  return (
    <section 
      className="vag-container"
      style={{ paddingBlock: 'var(--section-padding)' }}
    >
      <div className="mb-12 flex items-center justify-center text-center">
         <h2 className="tracking-[0.1em] text-black">{sectionTitle}</h2>
      </div>

      <div className="w-full overflow-hidden border-t-[3px] border-black">
        {events.map((event, i) => (
          <div 
            key={i} 
            className="grid grid-cols-2 items-center gap-4 border-b-[3px] border-black py-5 md:grid-cols-5"
          >
            <span className="font-medium text-black">{event.day}</span>
            <span className="font-medium text-black md:text-center">{event.date}</span>
            <span className="font-medium text-black md:text-center">{event.time}</span>
            <span className="col-span-2 font-serif font-bold uppercase tracking-[0.05em] md:col-span-1">{event.title}</span>
            <div className="col-span-2 flex justify-end md:col-span-1">
              <button className="flex items-center gap-2 font-bold uppercase tracking-widest hover:text-accent transition-colors" style={{ fontSize: 'var(--ui-nav)' }}>
                {labels.biletes[lang]} <span className="text-xl text-[#af9f66] font-bold leading-none">›</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="font-bold uppercase underline decoration-1 underline-offset-4 tracking-widest hover:text-accent transition-colors" style={{ fontSize: 'var(--ui-nav)' }}>
          {labels.skatit_visas[lang]}
        </button>
      </div>
    </section>
  );
}
