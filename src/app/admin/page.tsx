import Link from 'next/link';

export default function AdminDashboard() {
  const adminPages = [
    { name: 'Sākumlapa', href: '/admin/home', description: 'Hero slaidi, par biedrību' },
    { name: 'Jaunumi', href: '/admin/jaunumi', description: 'Jaunumu lapas galvene' },
    { name: 'Galerija', href: '/admin/galerija', description: 'Galerijas lapas galvene' },
    { name: 'Biedrība', href: '/admin/biedriba', description: 'Hero, citāts, mērķi' },
    { name: 'Muzejs', href: '/admin/muzejs', description: 'Darba laiki, biļetes, kontakti' },
    { name: 'Nams', href: '/admin/nams', description: 'Vēsture, celtniecība' },
    { name: 'Pasākumi', href: '/admin/pasakumi', description: 'Pasākumu lapas galvene' },
    { name: 'Sponsori', href: '/admin/sponsori', description: 'Atbalstītāji, partneri, ziedotāji' },
    { name: 'Ziedojumi', href: '/admin/ziedojumi', description: 'Ziedošanas mērķi, iespējas, rekvizīti' },
    { name: 'Kontakti', href: '/admin/kontakti', description: 'Rekvizīti, darba laiki, karte' },
  ];

  const globalSettings = [
    { name: 'Biežāk uzdotie jautājumi', href: '/admin/faq', description: 'Globālais FAQ saraksts' },
    { name: 'Sponsoru Logo', href: '/admin/footer-sponsors', description: 'Logotipi mājaslapas kājenē' },
    { name: 'Kājenes saites', href: '/admin/footer-links', description: 'Saites un kontakti kājenē' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-32">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 mb-2">Admin Panelis</h1>
          <p className="text-zinc-500">Pārvaldiet dev2.vagneriga.lv saturu</p>
        </div>

        <div className="mb-16">
          <h2 className="text-lg font-bold text-zinc-400 uppercase tracking-widest mb-6">Lapas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {adminPages.map((page) => (
              <Link 
                key={page.href} 
                href={page.href}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-accent hover:shadow-md transition-all group"
              >
                <h2 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-accent transition-colors">
                  {page.name}
                </h2>
                <p className="text-zinc-500 text-sm">{page.description}</p>
                <div className="mt-6 flex items-center text-accent font-bold text-xs uppercase tracking-widest">
                  Rediģēt <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-lg font-bold text-zinc-400 uppercase tracking-widest mb-6">Globālie iestatījumi</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {globalSettings.map((page) => (
              <Link 
                key={page.href} 
                href={page.href}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-accent hover:shadow-md transition-all group"
              >
                <h2 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-accent transition-colors">
                  {page.name}
                </h2>
                <p className="text-zinc-500 text-sm">{page.description}</p>
                <div className="mt-6 flex items-center text-accent font-bold text-xs uppercase tracking-widest">
                  Pārvaldīt <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-zinc-900 rounded-2xl text-white">
          <h2 className="text-xl font-bold mb-4">WordPress CMS</h2>
          <p className="text-zinc-400 mb-6">
            Lai pārvaldītu bloga rakstus, pasākumus un medijus, lūdzu, izmantojiet WordPress administratora paneli.
          </p>
          <a 
            href="https://dev2.vagneriga.lv/wp-admin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-bold transition-all"
          >
            ATVĒRT WP-ADMIN
          </a>
        </div>
      </div>
    </div>
  );
}
