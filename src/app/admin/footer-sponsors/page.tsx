'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FooterSponsorsAdmin() {
  const [sponsors, setSponsors] = useState([
    {
      logo: "https://dev2.vagneriga.lv/wp-content/uploads/2026/01/logo_1_lat_2-300x59-1.png",
      link: "#"
    },
    {
      logo: "https://dev2.vagneriga.lv/wp-content/uploads/2026/01/images_lvm_lvm_logo_lat_1_png_1722109029_fit_1024_768-300x153-1.png",
      link: "#"
    },
    {
      logo: "https://dev2.vagneriga.lv/wp-content/uploads/2026/01/SCHWENK19_Basislogo-4c-300x31-1.png",
      link: "#"
    }
  ]);

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Sponsoru logo saglabāti!");
    }, 1000);
  };

  const addSponsor = () => {
    setSponsors([...sponsors, { logo: "", link: "#" }]);
  };

  const removeSponsor = (index: number) => {
    setSponsors(sponsors.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-32">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-zinc-900 p-8 text-white flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Sponsoru Logo</h1>
            <p className="text-zinc-400">Pārvaldiet logotipus mājaslapas kājenē</p>
          </div>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-accent hover:bg-opacity-90 text-black px-8 py-3 rounded-full font-bold transition-all disabled:opacity-50 shadow-lg"
          >
            {isSaving ? "Saglabā..." : "SAGLABĀT IZMAIŅAS"}
          </button>
        </div>

        <div className="p-8 space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-zinc-800">Logotipu saraksts</h2>
            <button 
              onClick={addSponsor}
              className="text-accent font-bold text-sm uppercase tracking-widest hover:underline"
            >
              + Pievienot logo
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="p-6 bg-zinc-50 rounded-xl border border-zinc-100 relative group">
                <button 
                  onClick={() => removeSponsor(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <div className="space-y-4">
                  <div className="relative h-20 w-full bg-white rounded-lg border border-zinc-200 overflow-hidden flex items-center justify-center p-4">
                    {sponsor.logo ? (
                      <Image src={sponsor.logo} alt={`Sponsor ${index + 1}`} fill className="object-contain p-2" />
                    ) : (
                      <p className="text-zinc-300 text-xs uppercase font-bold">Nav attēla</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">Logo URL</label>
                    <input 
                      type="text" 
                      value={sponsor.logo}
                      onChange={(e) => {
                        const newSponsors = [...sponsors];
                        newSponsors[index].logo = e.target.value;
                        setSponsors(newSponsors);
                      }}
                      className="w-full p-2 text-xs border border-zinc-200 rounded-lg outline-none focus:ring-2 focus:ring-accent"
                      placeholder="https://..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase mb-1">Saite (Link)</label>
                    <input 
                      type="text" 
                      value={sponsor.link}
                      onChange={(e) => {
                        const newSponsors = [...sponsors];
                        newSponsors[index].link = e.target.value;
                        setSponsors(newSponsors);
                      }}
                      className="w-full p-2 text-xs border border-zinc-200 rounded-lg outline-none focus:ring-2 focus:ring-accent"
                      placeholder="#"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sponsors.length === 0 && (
            <div className="text-center py-12 border-2 border-dashed border-zinc-100 rounded-xl">
              <p className="text-zinc-400 italic">Nav pievienots neviens logotips</p>
              <button onClick={addSponsor} className="mt-4 text-accent font-bold uppercase text-sm">Pievienot pirmo</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
