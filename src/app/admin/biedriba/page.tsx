'use client';

import { useState } from 'react';

export default function BiedribaAdmin() {
  const [content, setContent] = useState({
    heroTitle: "Biedrība",
    heroSubtitle: "Rīgas Riharda Vāgnera biedrība",
    quote: "Esmu izvirzījis mērķi – dabūt atpakaļ pie dzīvības kādreizējo Rīgas operas teātri, kurā Rihards Vāgners savulaik strādāja. Atjaunot to zāli, kas savulaik Vāgneram iniciēja vairākas izcilas idejas, kuras viņš vēlāk izmantoja, veidojot savu operas teātri Baireitā.",
    quoteAuthor: "Māris Gailis, biedrības vadītājs",
    goals: [
      "Rekonstruēt Rīgas pilsētas teātra ēku Riharda Vāgnera ielā 4, atjaunojot tajā teātra zāli.",
      "Ēkas telpās izveidot Riharda Vāgnera muzeju.",
      "Padziļināt sapratni par Riharda Vāgnera darbiem un dzīvi.",
      "Izveidot Riharda Vāgnera stipendiju fondu, atbalstot Latvijas jauno mūziķu paaudzi."
    ]
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call to update WP ACF fields
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
            <h1 className="text-2xl font-bold">Biedrības lapa</h1>
            <p className="text-zinc-400">Headless Admin Content Manager</p>
          </div>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-accent hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-bold transition-all disabled:opacity-50 shadow-lg"
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
            </div>
          </section>

          {/* Quote Section */}
          <section>
            <h2 className="text-xl font-bold border-b pb-4 mb-6 text-zinc-800">Citāta Sadaļa</h2>
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Citāts</label>
                <textarea 
                  rows={4}
                  value={content.quote}
                  onChange={(e) => setContent({...content, quote: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Autors</label>
                <input 
                  type="text" 
                  value={content.quoteAuthor}
                  onChange={(e) => setContent({...content, quoteAuthor: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
            </div>
          </section>

          {/* Goals Section */}
          <section>
            <h2 className="text-xl font-bold border-b pb-4 mb-6 text-zinc-800">Mērķi</h2>
            <div className="space-y-4">
              {content.goals.map((goal, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <span className="w-10 h-10 flex items-center justify-center bg-accent rounded-full font-bold flex-shrink-0">{index + 1}</span>
                  <input 
                    type="text" 
                    value={goal}
                    onChange={(e) => {
                      const newGoals = [...content.goals];
                      newGoals[index] = e.target.value;
                      setContent({...content, goals: newGoals});
                    }}
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
