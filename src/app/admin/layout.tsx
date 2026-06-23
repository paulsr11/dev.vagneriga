import "../[lang]/globals.css";

export const metadata = {
  title: "Admin - Vagneriga",
  description: "Admin panel",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lv">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gray-50">
        <header className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-gray-100 flex items-center px-8 z-50 justify-between">
          <div className="flex items-center gap-4">
            <span className="font-bold tracking-widest text-lg uppercase">Rīgas Vāgnera Nams Admin</span>
          </div>
          <div>
            <a href="/lv" className="text-zinc-600 hover:text-zinc-950 font-medium text-sm transition-colors">
              Atpakaļ uz lapu
            </a>
          </div>
        </header>
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
