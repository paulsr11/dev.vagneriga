'use client';

import { useState } from 'react';

export default function FooterLinksAdmin() {
  const [links, setLinks] = useState({
    nams: [
      { labelKey: 'pasakumi', href: '/pasakumi' },
      { labelKey: 'muzejs', href: '/muzejs' },
      { labelKey: 'telpu_noma', href: '/telpu-noma' },
    ],
    biedriba: [
      { labelKey: 'par_mums', href: '/par-mums' },
      { labelKey: 'jaunumi', href: '/jaunumi' },
      { labelKey: 'ziedojumi', href: '/ziedojumi' },
    ],
    noteikumi: [
      { labelKey: 'bilesu_iegade', href: '/biletes' },
      { labelKey: 'privatuma_politika', href: '/privatums' },
      { labelKey: 'sidatnu_politika', href: '/sikdatnes' },
    ],
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Kājenes saites saglabātas!");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-zinc-900 p-8 text-white flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Kājenes saites</h1>
            <p className="text-zinc-400">Pārvaldiet saites mājaslapas apakšdaļā</p>
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
          {Object.entries(links).map(([section, items]) => (
            <section key={section}>
              <h2 className="text-xl font-bold border-b pb-4 mb-6 text-zinc-800 uppercase tracking-widest text-sm">{section}</h2>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">Tulkojuma atslēga (Label Key)</label>
                      <input 
                        type="text" 
                        value={item.labelKey}
                        onChange={(e) => {
                          const newLinks = {...links};
                          (newLinks as any)[section][index].labelKey = e.target.value;
                          setLinks(newLinks);
                        }}
                        className="w-full p-2 text-sm border border-zinc-200 rounded-lg outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">Saite (Href)</label>
                      <input 
                        type="text" 
                        value={item.href}
                        onChange={(e) => {
                          const newLinks = {...links};
                          (newLinks as any)[section][index].href = e.target.value;
                          setLinks(newLinks);
                        }}
                        className="w-full p-2 text-sm border border-zinc-200 rounded-lg outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
