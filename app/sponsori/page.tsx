import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sponsori | Webwoork",
  description: "Sponsoru un atbalstītāju lapa.",
};

const supportItems = [
  {
    image: "/api/wp-media/2025/09/AA_2017_Office_Farbe_de-650x385-1.jpg",
    text: "Projektu “Siltumnīcefekta gāzu emisiju samazināšana “Rīgas Vāgnera namā”, Riharda Vāgnera ielā 4, Rīgā, LV-1050, atjaunojot un restaurējot Rīgas Vāgnera namu” 5 000 000 eiro apmērā līdzfinansē Vācijas Ārlietu ministrija.",
  },
  {
    image: "/api/wp-media/2025/09/LOGO_EKII-pa-labi_CMYK-1.jpg",
    text: "Projektu “Siltumnīcefekta gāzu emisiju samazināšana “Rīgas Vāgnera namā”, Riharda Vāgnera ielā 4, Rīgā, LV-1050, atjaunojot un restaurējot Rīgas Vāgnera namu” 15 000 000 eiro apmērā finansē emisijas kvotu izsolīšanas instruments.",
  },
];

const partners = [
  "/api/wp-media/2025/09/logo_1_lat_2-300x59-1.png",
  "/api/wp-media/2025/09/images_lvm_lvm_logo_lat_1_png_1722109029_fit_1024_768-300x153-1.png",
  "/api/wp-media/2025/09/SCHWENK19_Basislogo-4c-300x31-1.png",
  "/api/wp-media/2025/09/Messerschmitt_Logo-removebg-300x81-1.png",
];

export default function SponsoriPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
        <div className="animate-on-load space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Vagnera biedriba
          </p>
          <h1 className="text-4xl font-semibold uppercase tracking-tight md:text-5xl">
            Sponsori
          </h1>
          <p className="border-l-4 border-zinc-900 pl-6 text-lg leading-relaxed text-zinc-700">
            Rigas Vagnera nams, uzcelts 1782. gada, sakotneji tika deveets par Rigas Pilsetas teatri.
            Perioda no 1837. lidz 1839. gadam, kad par galveno teatra dirigentu tika iecelts Rihards
            Vagners, nams kluva par Rigas kulturas dzives centru.
          </p>
        </div>
        <div className="animate-on-load relative overflow-hidden rounded-2xl">
          <Image
            src="/api/wp-media/2025/09/vagnera_nams-1.jpg"
            alt="Vagnera nams"
            width={900}
            height={900}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-zinc-50 py-16">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <h2 className="text-2xl font-semibold uppercase tracking-[0.14em]">Atbalsta</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {supportItems.map((item, index) => (
              <article
                key={item.image}
                className="ui-transition rounded-2xl border border-zinc-200 bg-white p-6 hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="relative mb-5 h-24 w-full">
                  <Image
                    src={item.image}
                    alt={`Atbalsta logotips ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 180px, 220px"
                    className="object-contain object-left"
                    loading="lazy"
                  />
                </div>
                <p className="leading-relaxed text-zinc-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl space-y-10 px-6">
          <h2 className="text-2xl font-semibold uppercase tracking-[0.14em]">Partneri</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((logo, index) => (
              <article
                key={logo}
                className="ui-transition rounded-2xl border border-zinc-200 p-5 hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={logo}
                    alt={`Partnera logotips ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 140px, 220px"
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
