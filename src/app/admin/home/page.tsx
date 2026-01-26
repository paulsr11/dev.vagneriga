'use client';

import { useState } from 'react';

export default function HomeAdmin() {
  const [content, setContent] = useState({
    heroSlides: [
      {
        title: "MŪZIKA ATGRIEŽAS<br />VĀGNERA NAMĀ",
        subtitle: "2026.gada sezonas atklāšana",
        buttonText: "Biļetes un koncerti"
      },
      {
        title: "KLEJOJOŠAIS<br />HOLANDIETIS",
        subtitle: "Operas uzvedums Vāgnera zālē",
        buttonText: "Uzzināt vairāk"
      }
    ],
    aboutTitle: "Par biedrību",
    aboutText: "Esmu izvirzījis mērķi – dabūt atpakaļ pie dzīvības kādreizējo Rīgas operas teātri, kurā Rihards Vāgners savulaik strādāja."
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Sākumlapas saturs saglabāts!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-zinc-900 p-8 text-white flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Sākumlapa</h1>
            <p className="text-zinc-400">Headless Admin Content Manager</p>
          </div>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-accent hover:bg-opacity-90 text-black px-8 py-3 rounded-full font-bold transition-all disabled:opacity-50 shadow-lg"
          >
            {isSaving ? "Saglabā..." : "SAGLABĀT IZMAIŅAS"}
          </button>
        </div>

        <div className="p-8 space-y-10">
          {/* Hero Slides */}
          <section>
            <h2 className="text-xl font-bold border-b pb-4 mb-6 text-zinc-800">Hero Slaidi</h2>
            <div className="space-y-6">
              {content.heroSlides.map((slide, index) => (
                <div key={index} className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 space-y-4">
                  <h3 className="font-bold text-zinc-600 uppercase text-xs">Slaids {index + 1}</h3>
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">Virsraksts</label>
                      <input 
                        type="text" 
                        value={slide.title}
                        onChange={(e) => {
                          const newSlides = [...content.heroSlides];
                          newSlides[index].title = e.target.value;
                          setContent({...content, heroSlides: newSlides});
                        }}
                        className="w-full p-3 border border-zinc-200 rounded-lg outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">Apakšvirsraksts</label>
                      <input 
                        type="text" 
                        value={slide.subtitle}
                        onChange={(e) => {
                          const newSlides = [...content.heroSlides];
                          newSlides[index].subtitle = e.target.value;
                          setContent({...content, heroSlides: newSlides});
                        }}
                        className="w-full p-3 border border-zinc-200 rounded-lg outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section>
            <h2 className="text-xl font-bold border-b pb-4 mb-6 text-zinc-800">Par biedrību</h2>
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Virsraksts</label>
                <input 
                  type="text" 
                  value={content.aboutTitle}
                  onChange={(e) => setContent({...content, aboutTitle: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Teksts</label>
                <textarea 
                  rows={4}
                  value={content.aboutText}
                  onChange={(e) => setContent({...content, aboutText: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
