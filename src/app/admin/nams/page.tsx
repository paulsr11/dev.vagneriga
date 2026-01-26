'use client';

import { useState } from 'react';

export default function NamsAdmin() {
  const [content, setContent] = useState({
    heroTitle: "Nams",
    heroSubtitle: "Vāgnera",
    heroText: "Rīgas Vāgnera nams, uzcelts 1782. gadā, sākotnēji tika dēvēts par Rīgas Pilsētas teātri. Periodā no 1837. līdz 1839. gadam, kad par galveno teātra diriģentu tika iecelts Rihards Vāgners, nams kļuva par Rīgas kultūras dzīves centru.",
    vestureTitle: "Vēsture",
    vestureText: "Jaunais gads iezīmējis otro Vāgnera nama atjaunošanas projekta būvdarbu gadu. Ģeotehniskās inženierijas uzņēmuma “Keller” vadībā turpinās ēkas pamatu pastiprināšanas darbi, bet šoreiz Rīgas Riharda Vāgnera biedrība (RRVB) vēlas piedāvāt ieskatu teātra zāles vēsturē un atjaunošanas vīzijā.\n\nDaudziem ir pārsteigums, ka zem telpas, kas plašāk pazīstama kā Vāgnera vai Musses zāle, reiz atradies vesels teātris ar parteru un diviem balkoniem. Tieši šeit no 1837. līdz 1839. strādāja jaunais komponists Rihards Vāgners.",
    celtniecibaTitle: "Celtniecība",
    celtniecibaText: "Jaunais gads iezīmējis otro Vāgnera nama atjaunošanas projekta būvdarbu gadu. Ģeotehniskās inženierijas uzņēmuma “Keller” vadībā turpinās ēkas pamatu pastiprināšanas darbi, bet šoreiz Rīgas Riharda Vāgnera biedrība (RRVB) vēlas piedāvāt ieskatu teātra zāles vēsturē un atjaunošanas vīzijā.\n\nDaudziem ir pārsteigums, ka zem telpas, kas plašāk pazīstama kā Vāgnera vai Musses zāle, reiz atradies vesels teātris ar parteru un diviem balkoniem. Tieši šeit no 1837. līdz 1839. strādāja jaunais komponists Rihards Vāgners."
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
            <h1 className="text-2xl font-bold">Nama lapa</h1>
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
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Apakšvirsraksts</label>
                <input 
                  type="text" 
                  value={content.heroSubtitle}
                  onChange={(e) => setContent({...content, heroSubtitle: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Teksts</label>
                <textarea 
                  rows={4}
                  value={content.heroText}
                  onChange={(e) => setContent({...content, heroText: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
            </div>
          </section>

          {/* Vēsture Section */}
          <section>
            <h2 className="text-xl font-bold border-b pb-4 mb-6 text-zinc-800">Vēsture</h2>
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Virsraksts</label>
                <input 
                  type="text" 
                  value={content.vestureTitle}
                  onChange={(e) => setContent({...content, vestureTitle: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Teksts</label>
                <textarea 
                  rows={6}
                  value={content.vestureText}
                  onChange={(e) => setContent({...content, vestureText: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
            </div>
          </section>

          {/* Celtniecība Section */}
          <section>
            <h2 className="text-xl font-bold border-b pb-4 mb-6 text-zinc-800">Celtniecība</h2>
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Virsraksts</label>
                <input 
                  type="text" 
                  value={content.celtniecibaTitle}
                  onChange={(e) => setContent({...content, celtniecibaTitle: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Teksts</label>
                <textarea 
                  rows={6}
                  value={content.celtniecibaText}
                  onChange={(e) => setContent({...content, celtniecibaText: e.target.value})}
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
