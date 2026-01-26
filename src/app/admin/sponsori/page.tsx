'use client';

import { useState } from 'react';

export default function SponsoriAdmin() {
  const [content, setContent] = useState({
    heroTitle: "Sponsori",
    heroSubtitle: "Vāgnera biedrības",
    heroText: "Rīgas Vāgnera nams, uzcelts 1782. gadā, sākotnēji tika dēvēts par Rīgas Pilsētas teātri. Periodā no 1837. līdz 1839. gadam, kad par galveno teātra diriģentu tika iecelts Rihards Vāgners, nams kļuva par Rīgas kultūras dzīves centru.",
    supportItems: [
      {
        title: "Vācijas Ārlietu ministrija",
        text: "Projektu “Siltumnīcefekta gāzu emisiju samazināšana “Rīgas Vāgnera namā”, Riharda Vāgnera ielā 4, Rīgā, LV-1050, atjaunojot un restaurējot Rīgas Vāgnera namu” 5 000 000 eiro apmērā līdzfinansē Vācijas Ārlietu ministrija."
      },
      {
        title: "EKII",
        text: "Projektu “Siltumnīcefekta gāzu emisiju samazināšana “Rīgas Vāgnera namā”, Riharda Vāgnera ielā 4, Rīgā, LV-1050, atjaunojot un restaurējot Rīgas Vāgnera namu” 15 000 000 eiro apmērā finansē emisijas kvotu izsolīšanas instruments."
      }
    ]
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Satura izmaiņas saglabātas!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-zinc-900 p-8 text-white flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Sponsoru lapa</h1>
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
          {/* Hero Section */}
          <section>
            <h2 className="text-xl font-bold border-b pb-4 mb-6 text-zinc-800">Hero Sadaļa</h2>
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Virsraksts</label>
                <input 
                  type="text" 
                  value={content.heroTitle}
                  onChange={(e) => setContent({...content, heroTitle: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Apakšvirsraksts</label>
                <input 
                  type="text" 
                  value={content.heroSubtitle}
                  onChange={(e) => setContent({...content, heroSubtitle: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Teksts</label>
                <textarea 
                  rows={4}
                  value={content.heroText}
                  onChange={(e) => setContent({...content, heroText: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
            </div>
          </section>

          {/* Support Items */}
          <section>
            <h2 className="text-xl font-bold border-b pb-4 mb-6 text-zinc-800">Atbalsta vienumi</h2>
            <div className="space-y-8">
              {content.supportItems.map((item, index) => (
                <div key={index} className="p-6 bg-zinc-50 rounded-xl border border-zinc-100">
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">Nosaukums</label>
                      <input 
                        type="text" 
                        value={item.title}
                        onChange={(e) => {
                          const newItems = [...content.supportItems];
                          newItems[index].title = e.target.value;
                          setContent({...content, supportItems: newItems});
                        }}
                        className="w-full p-3 border border-zinc-200 rounded-lg outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">Apraksts</label>
                      <textarea 
                        rows={3}
                        value={item.text}
                        onChange={(e) => {
                          const newItems = [...content.supportItems];
                          newItems[index].text = e.target.value;
                          setContent({...content, supportItems: newItems});
                        }}
                        className="w-full p-3 border border-zinc-200 rounded-lg outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
