'use client';

import { useState } from 'react';

export default function PasakumiAdmin() {
  const [content, setContent] = useState({
    title: "Pasākumi",
    subtitle: "Rīgas Vāgnera Nams",
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Pasākumu lapas saturs saglabāts!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-zinc-900 p-8 text-white flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Pasākumu lapa</h1>
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
          <section>
            <h2 className="text-xl font-bold border-b pb-4 mb-6 text-zinc-800">Lapas Galvene</h2>
            <div className="grid gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Virsraksts</label>
                <input 
                  type="text" 
                  value={content.title}
                  onChange={(e) => setContent({...content, title: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Apakšvirsraksts</label>
                <input 
                  type="text" 
                  value={content.subtitle}
                  onChange={(e) => setContent({...content, subtitle: e.target.value})}
                  className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-500 italic">
              Piezīme: Paši pasākumi tiek pārvaldīti caur WordPress "Projects" sadaļu.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
