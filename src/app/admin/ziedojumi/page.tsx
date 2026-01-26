'use client';

import { useState } from 'react';

export default function ZiedojumiAdmin() {
  const [content, setContent] = useState({
    heroTitle: "Ziedo Vāgnera nama atjaunošanai",
    heroSubtitle: "Palīdzi atjaunot vienu no nozīmīgākajiem kultūras namiem Latvijā un Eiropā. Tava iesaiste palīdz saglabāt Vāgnera nama vērtību nākamajām paaudzēm.",
    heroCta: "ZIEDOT TAGAD",
    heroNote: "Katrs ziedojums ir solis tuvāk Vāgnera nama atdzimšanai.",
    doneTitle: "Ceļš uz Vāgnera nama atjaunošanu",
    doneText: "Vāgnera nams ir unikāls kultūras piemineklis ar bagātu vēsturi, kas šobrīd atrodas atjaunošanas procesā. Pēdējos gados ir sperti nozīmīgi soļi, lai nodrošinātu nama saglabāšanu, juridisko un kultūras pamatu tā atdzimšanai.\n\nZiedojumi ļauj mums strādāt sistemātiski un atbildīgi – sagatavojot projektus, piesaistot speciālistus, veidojot sadarbības un uzturot biedrības darbību, kas ir priekšnoteikums nama atjaunošanai nākotnē.",
    transparencyTitle: "Atklātība un atbildība",
    transparencyIntro: "Mums ir svarīgi, lai katrs ziedotājs skaidri zinātu, kā tiek izmantoti ziedotie līdzekļi.",
    finalCtaTitle: "Atbalsti Vāgnera nama nākotni jau šodien",
    finalCtaText: "Tavs ziedojums palīdz saglabāt kultūras mantojumu un veidot telpu, kurā mūzika un māksla atgriežas pilsētas sirdī."
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Ziedojumu lapas saturs saglabāts!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-zinc-900 p-8 text-white flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Ziedojumu lapa</h1>
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
                <textarea 
                  rows={3}
                  value={content.heroSubtitle}
                  onChange={(e) => setContent({...content, heroSubtitle: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Pogas teksts</label>
                  <input 
                    type="text" 
                    value={content.heroCta}
                    onChange={(e) => setContent({...content, heroCta: e.target.value})}
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Piezīme zem pogas</label>
                  <input 
                    type="text" 
                    value={content.heroNote}
                    onChange={(e) => setContent({...content, heroNote: e.target.value})}
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* How it helps Section */}
          <section>
            <h2 className="text-xl font-bold border-b pb-4 mb-6 text-zinc-800">Kā palīdz ziedojums</h2>
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Virsraksts</label>
                <input 
                  type="text" 
                  value={content.doneTitle}
                  onChange={(e) => setContent({...content, doneTitle: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Apraksta teksts</label>
                <textarea 
                  rows={6}
                  value={content.doneText}
                  onChange={(e) => setContent({...content, doneText: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
            </div>
          </section>

          {/* Transparency Section */}
          <section>
            <h2 className="text-xl font-bold border-b pb-4 mb-6 text-zinc-800">Atklātība</h2>
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Virsraksts</label>
                <input 
                  type="text" 
                  value={content.transparencyTitle}
                  onChange={(e) => setContent({...content, transparencyTitle: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Ievada teksts</label>
                <input 
                  type="text" 
                  value={content.transparencyIntro}
                  onChange={(e) => setContent({...content, transparencyIntro: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section>
            <h2 className="text-xl font-bold border-b pb-4 mb-6 text-zinc-800">Noslēguma aicinājums</h2>
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Virsraksts</label>
                <input 
                  type="text" 
                  value={content.finalCtaTitle}
                  onChange={(e) => setContent({...content, finalCtaTitle: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Teksts</label>
                <textarea 
                  rows={3}
                  value={content.finalCtaText}
                  onChange={(e) => setContent({...content, finalCtaText: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none transition-all"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
