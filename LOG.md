# Work Log

## 2026-03-09

### Task: Restore and stabilize Footer + Ziedojumi
- Summary:
  - Restored footer style to approved older version and kept 7 sponsor logos.
  - Restored required EU/national plan info block in footer.
  - Fixed social links/icons in header and footer.
  - Migrated approved `ziedojumi2` version into `ziedojumi`.
  - Removed route `ziedojumi2` after promotion.

- Files changed:
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`
  - `src/app/[lang]/ziedojumi/page.tsx`
  - `src/app/[lang]/ziedojumi/ZiedojumiClient.tsx`
  - Removed:
    - `src/app/[lang]/ziedojumi2/page.tsx`
    - `src/app/[lang]/ziedojumi2/Ziedojumi2Client.tsx`

- Verification:
  - Production build succeeded.
  - PM2 restart succeeded.
  - `/lv/ziedojumi` loads.
  - `/lv/ziedojumi2` returns 404 after removal.

- Notes:
  - Temporary 502 can appear immediately after restart during warmup; subsequent checks were healthy.

## 2026-07-23

### Task: Restore original layout for Sponsori page
- Summary:
  - Preserved full conversation context and restored the original design layout for `/sponsori` matching reference design.
  - Re-implemented the classic 2-column Hero section (`Vāgnera Biedrības` subtitle, `SPONSORI` title, description text & building photo).
  - Re-implemented section dividers (`ATBALSTA`, `PARTNERI`, `ZIEDOTĀJI`) with side horizontal accent lines.
  - Fitted all current module content (Auswärtiges Amt, EKII, Strategic Partners, Wagner Societies, Corporate & Private Donors) into the original design structure.
  - Worked strictly on localhost.

- Files changed:
  - `src/components/blocks/SponsorsView.tsx`
  - `src/app/[lang]/sponsori/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - `http://localhost:3001/lv/sponsori` returns 200 OK.

### Task: Update SponsorsView subheading style & Kontakti working hours
- Summary:
  - Re-applied the new design to `SponsorsView.tsx` with subheading formatting updated to match the `Biedrība` page (`text-xs font-semibold tracking-[0.2em] uppercase text-gray-500`).
  - Updated `Kontakti` page working hours:
    - Biedrība: Saturday and Sunday changed permanently to `Slēgts` / `Closed` / `Geschlossen`.
    - Muzejs: Museum times updated temporarily to `Pēc ēkas atklāšanas` / `Coming after re-opening` / `Nach der Wiedereröffnung`.
  - Updated `Muzejs` page fallback working hours accordingly.

- Files changed:
  - `src/components/blocks/SponsorsView.tsx`
  - `src/app/[lang]/kontakti/page.tsx`
  - `src/app/[lang]/muzejs/page.tsx`

- Verification:
  - `npx tsc --noEmit` passed with 0 errors.
  - Routes `/lv/sponsori` and `/lv/kontakti` return 200 OK on localhost.

### Task: Menu reorganization & Rebuilding page hero styling
- Summary:
  - Added `ZIEDOJUMI` as a highlighted accent-colored item (`#af9f66`) at the end of the upper navigation bar.
  - Removed `Sākums` link and temporarily hid the lower secondary menu (preserving all code/design structure).
  - Vertically centered the upper navigation bar in the header.
  - On Rebuilding page (`/rebuilding`):
    - Added a subtle dark gradient overlay (`bg-gradient-to-t from-black/80 via-black/45 to-black/10`) to the hero image for enhanced text contrast.
    - Repositioned hero overlay text to the lower 1/3 of the hero image (`flex flex-col justify-end pb-10 md:pb-14`).
    - Reduced main title ("Vāgnera pirmais teātris. Pasaules nākamais.") font size by 2 heading levels (`text-xl md:text-3xl lg:text-4xl`).

- Files changed:
  - `src/components/Header.tsx`
  - `src/app/[lang]/rebuilding/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Routes `/lv` and `/lv/rebuilding` return 200 OK.

### Task: Fine-tune Rebuilding page hero text position & heading tag
- Summary:
  - Vertically centered the overlay text container inside the hero image frame so it is comfortably elevated and no longer sits too low against the bottom edge.
  - Converted the heading below the hero image ("Vāgnera pirmais teātris. Pasaules nākamais.") to an `<h5 />` tag (`text-black font-serif font-bold uppercase tracking-tight`).
  - Reset and tightened the margins (`m-0 mb-3`).

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - `/lv/rebuilding` returns 200 OK.

### Task: Position hero text in specified lower-middle area & update heading to h3
- Summary:
  - Repositioned hero overlay text and CTA button to sit precisely within the lower-middle zone highlighted in the screenshot (`justify-end pb-20 md:pb-28`).
  - Converted the lower heading ("Vāgnera pirmais teātris. Pasaules nākamais.") to an `<h3 />` tag (`text-xl md:text-2xl font-serif font-bold uppercase tracking-tight`).

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - `/lv/rebuilding` returns 200 OK.

### Task: Hero gradient overlay, lower text horizontal alignment & updated timeline texts
- Summary:
  - Added a stronger left-to-right gradient overlay over hero image (`bg-gradient-to-r from-black/70 via-black/45 to-black/20`) providing ~70%-40% dark contrast over text fading to ~20% on the right side.
  - Aligned lower text below the hero image horizontally with hero overlay heading (`px-8 md:px-[68px]`).
  - Updated timeline texts for all languages (LV, EN, DE) matching exact revised wording ("IN AUGUST 1837", "1837–1839", "1839", and concluding paragraph).

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - `/lv/rebuilding` returns 200 OK on localhost.

### Task: Hero overlay visibility fix, Section 3 mockup layout, Thetis CTA links & blueprint image
- Summary:
  - Fixed hero overlay visibility by setting `z-10` on the gradient overlay (`bg-gradient-to-r from-black/80 via-black/55 to-black/25`) and `z-20` on text content.
  - Aligned lower text below hero image horizontally to match hero overlay padding (`px-8 md:px-[68px]`).
  - Implemented Section 3 ("NOT A RESTORATION. A RESURRECTION.") matching mockup screenshot with gold eyebrow, main title, paragraph, feature items ("An opera theatre" and "A Wagner museum"), and image with vertical text caption ("The theatre today, under active reconstruction.").
  - Connected "How Riga made Wagner" CTA button to the actual post across all languages (`/jaunumi/[thetis-slug]`).
  - Replaced image for "This is where Richard Wagner discovered his calling" with historical 1877 blueprint (`/images/projekts/1877_p73-f2761-2apr-650lieta-12lapa.jpg`).

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - `/lv/rebuilding` returns 200 OK on localhost.

### Task: Rebuilding page: CTA update, side profile photo, vertical caption fix & Endorsed layout redesign
- Summary:
  - Updated Section 2 CTA button text to *"Read more about Wagner in Riga →"* (LV: *"Lasīt vairāk par Vāgneru Rīgā →"*, DE: *"Mehr über Wagner in Riga lesen →"*).
  - Replaced Section 2 photo with Wagner's side profile photo (`wagner_side_profile.jpg`).
  - Fixed Section 3 vertical side caption text orientation (`writing-mode: vertical-lr`) so it is clean, upright, and readable.
  - Redesigned Section 5: renamed heading to *"ENDORSED AT THE HIGHEST LEVEL"*, added patron photo cards (Frank-Walter Steinmeier, Egils Levits, Eva Wagner-Pasquier) with descriptive comments, visually highlighted Eva's quote in a dark banner, and added the Dr. Yasuhisa Toyota acoustics note at the bottom.

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`
  - `public/images/projekts/wagner_side_profile.jpg`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - `/lv/rebuilding` and `/en/rebuilding` return 200 OK on localhost.

### Task: Add full library photos for all patrons & founding partners
- Summary:
  - Formatted Section 5 patron grid into 4 patron & founding partner cards.
  - Added full-width aspect `4/3` photos and official logos for each figure from the library:
    - Frank-Walter Steinmeier (`/images/patrons/steinmeier.jpg`)
    - Egils Levits (`/images/patrons/levits.jpg`)
    - Eva Wagner-Pasquier (`/images/patrons/wagner.jpg`)
    - Messerschmitt Stiftung (`/images/sponsors/messerschmitt-stiftung.png`)
  - Preserved the highlighted Eva Wagner-Pasquier quote and Dr. Yasuhisa Toyota acoustics note.

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - `/lv/rebuilding` returns 200 OK on localhost.

### Task: Patron photo fixes (.webp), section 3 caption line & final black CTA section restoration
- Summary:
  - Fixed patron photos to use high-performance `.webp` format (`/images/patrons/steinmeier.webp`, `/images/patrons/levits.webp`, `/images/patrons/wagner.webp`).
  - Restored Messerschmitt Stiftung to the endorsements list card in its original design.
  - Converted Section 3 image caption from vertical text to a standard text line under the picture (`mt-3 text-sm text-gray-500 italic font-sans`), matching Section 2.
  - Restored the final black CTA section `support` ("Put your name in the building that outlasts you." / "Ieraksti savu vārdu ēkā, kas tevi pārdzīvos.") with its dark background, gold titles, support items grid, and action button.

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - `/lv/rebuilding` returns 200 OK on localhost.

### Task: Hero explicit inline gradient, taller patron portrait ratio & black framed CTA card
- Summary:
  - Added an explicit dual `linear-gradient` overlay with `z-10` directly to hero image overlay (`background: linear-gradient(180deg, ...)`), guaranteeing dark contrast over the hero image.
  - Increased patron portrait ratio from 4:3 landscape to 3:4 portrait (`aspect-[3/4]`), making the 3 patron pictures taller and more prominent.
  - Formatted the final CTA section (`#support`) into a framed black card matching Section 7 ("Where it stands today") 1:1 with a 2px gold border (`border-2 border-[#af9f66] bg-black text-white`).

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - `/lv/rebuilding` returns 200 OK on localhost.

### Task: Footer sponsors strip logo reordering & language-specific links
- Summary:
  - Added EKII logo as the very first logo in the footer supporters strip.
  - Reordered German logos: Auswärtiges Amt first, followed by Deutsche Botschaft Riga.
  - Wrapped each sponsor logo in clickable links (`<a target="_blank">`) with language-specific URLs (LV, EN, DE) matching user instructions:
    - EKII: `ekii.lv` (LV) / `ekii.lv/index.php?page=news` (EN, DE)
    - Auswärtiges Amt: `auswaertiges-amt.de/en` (LV, EN) / `auswaertiges-amt.de/de` (DE)
    - Deutsche Botschaft: `riga.diplo.de/lv-lv` (LV) / `riga.diplo.de/lv-de` (EN, DE)
    - Messerschmitt: `messerschmitt-stiftung.com`
    - Frankfurte: `rwv-ffm.de`
    - Rīgas dome: `riga.lv/lv`
    - Schwenk: `schwenk.lv` (LV) / `schwenk.lv/en` (EN, DE)
    - LVM: `lvm.lv`

- Files changed:
  - `src/components/Footer.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Routes `/lv` and `/lv/rebuilding` return 200 OK on localhost.

### Task: Footer contacts information update
- Summary:
  - Updated footer contact details to include all specified fields:
    - **Theatre location**: Riharda Vāgnera iela 4, Rīga, LV-1050
    - **Postal address**: Balasta dambis 66A, Rīga, LV-1048
    - **E-mail**: info@vagneriga.lv
    - **Phone**: +371 26549664
  - Removed unused/commented hidden navigation code blocks in `Header.tsx`.

- Files changed:
  - `src/components/Footer.tsx`
  - `src/components/Header.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Routes `/lv` and `/lv/rebuilding` return 200 OK on localhost.

### Task: Footer navigation restructuring & updated 13-item compact timeline
- Summary:
  - Updated Footer navigation columns:
    - Renamed House column to **FUNDRAISING** (`FINANSĒJUMS` / `FUNDRAISING`).
    - Moved **Sponsors**, **Donations**, and **Room Rental** under Fundraising.
    - Cleaned **Association** column to include menu pages (*Par mums*, *Jaunumi*, *Galerija*, *Kontakti*), removing *Donations*.
    - Cleaned **Terms** column (*Privātuma politika*, *Sīkdatņu politika*), removing *Ticket purchase*.
  - Updated Section 6 Timeline with all 13 historic events (spanning 1782 to 2023) across LV, EN, and DE.
  - Adjusted timeline font sizing and vertical event spacing (`space-y-6`) so all 13 events take up a compact, balanced vertical space on the page.

- Files changed:
  - `src/components/Footer.tsx`
  - `src/app/[lang]/rebuilding/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Routes `/lv` and `/lv/rebuilding` return 200 OK on localhost.

### Task: Timeline CSS Grid column fix & Webwoork producer mark subfooter link
- Summary:
  - Fixed timeline overlap bug by replacing fragile absolute positioning with a responsive CSS Grid layout (`grid grid-cols-1 md:grid-cols-[140px_1fr]`), isolating date numbers into their own 140px left column.
  - Reduced timeline item headings (`ev.label`) to a clean, small uppercase label (`text-xs font-bold uppercase tracking-wider text-black`), while keeping body text readable (`text-sm text-gray-600 font-sans`).
  - Added the Webwoork producer mark (`Izstrādāts / Made by webwoork.com`) with link to `https://webwoork.com` in the subfooter strip per the Webwoork Source of Truth System.

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`
  - `src/components/Footer.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Routes `/lv` and `/lv/rebuilding` return 200 OK on localhost.

### Task: Footer Terms/Fundraising navigation update & original timeline design restoration with smaller headings
- Summary:
  - Updated Footer navigation:
    - Added **Contacts** (`/kontakti`) to the **Terms** (`NOTEIKUMI`) column.
    - Removed **Room rental** (`/telpu-noma`) from the **Fundraising** (`FINANSĒJUMS`) column.
  - Restored original Timeline visual design in `rebuilding/page.tsx`:
    - Preserved original vertical border line with gold bullet dots (`w-4 h-4 rounded-full bg-[#af9f66] border-4 border-white`) and serif date typography (`text-xl md:text-2xl text-[#af9f66]`).
    - Increased container left margin (`md:ml-40` with `md:-left-40 md:w-32`) so date ranges like `1988–2007` sit cleanly in the left margin without overlapping the heading text.
    - Reduced timeline item heading size to small uppercase tracking font (`text-xs md:text-sm font-bold uppercase tracking-wider text-black`), keeping body text readable (`text-sm md:text-base text-gray-700`).

- Files changed:
  - `src/components/Footer.tsx`
  - `src/app/[lang]/rebuilding/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Routes `/lv` and `/lv/rebuilding` return 200 OK on localhost.

### Task: Hero overlay lighting softening & timeline left margin expansion
- Summary:
  - Softened the hero image overlay gradient to a light, subtle 40% bottom gradient (`background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.4) 100%)`), restoring natural brightness to the image and keeping all text below untouched.
  - Expanded timeline container left margin to `md:ml-48` and date offset to `md:-left-48 md:w-40 pr-4`, creating a 192px left margin that guarantees long date ranges like `1988–2007`, `1837–1839`, and `1787–1939` sit completely outside and to the left of the heading text.

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Route `/lv/rebuilding` returns 200 OK on localhost.

### Task: Hero overlay stacking, timeline CSS grid isolation, patron photo restoration, CTA width & acoustics emoji fix
- Summary:
  - Fixed Hero overlay stacking: wrapped hero text in `relative z-30` above the `z-10` soft gradient overlay, ensuring the overlay sits strictly behind the text.
  - Fixed CTA button width: added `px-10 md:px-12 whitespace-nowrap min-w-max` so the button text ("SEE HOW TO SUPPORT →") never wraps and fits comfortably.
  - Fixed Timeline date overlap permanently: migrated timeline items to a 2-column CSS Grid (`grid-cols-[120px_1fr] md:grid-cols-[150px_1fr]`), physically separating date numbers into Column 1 and heading/body text into Column 2 while preserving the original vertical line and gold bullet dots.
  - Restored Patron photos: updated image sources to `/images/patrons/steinmeier.jpg`, `levits.jpg`, `wagner.jpg` with `unoptimized={true}` to prevent Next.js optimizer caching issues.
  - Removed golden background circle behind the acoustics musical note symbol (`♪`), displaying it as a clean gold serif symbol next to the text.

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Route `/lv/rebuilding` returns 200 OK on localhost.

### Task: Hero overlay bottom positioning, 3-column timeline flex isolation & patron image explicit height
- Summary:
  - Fixed Hero overlay: scoped gradient overlay strictly to the bottom 2/3 (`bottom-0 h-2/3 z-10`), leaving the top and upper image completely clear, bright, and untouched, with drop shadow on the white title text.
  - Fixed Timeline point and year overlap permanently: refactored timeline items into 3 separate flex columns (Column 1: Right-aligned Date, Column 2: Centered Gold Bullet Dot & Line, Column 3: Heading & Paragraph), physically separating dates, dots, and headings so they can never overlap. Scaled headings down to clean, small sans-serif uppercase tracking font (`font-sans text-xs md:text-sm font-bold uppercase tracking-wider`).
  - Fixed 3 Patron pictures: gave image wrapper containers an explicit height (`h-[280px] md:h-[320px]`) and standard `<img>` tags with `object-cover object-top`, preventing Flexbox zero-height collapse and guaranteeing 100% visibility.

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Route `/lv/rebuilding` returns 200 OK on localhost.

### Task: Hero full dark gradient overlay, patron Next.js image restoration, extra-wide CTA & 3-column timeline exact alignment
- Summary:
  - Fixed Hero overlay: restored full `absolute inset-0 z-10` dark gradient overlay (`rgba(0,0,0,0.1)` to `rgba(0,0,0,0.8)`), providing rich dark contrast across the hero image behind the white title text (`z-20`).
  - Fixed Patron pictures: updated patron image cards to use Next.js `<Image unoptimized fill sizes="320px" className="object-cover object-top" />` inside explicit height wrappers (`h-[280px] md:h-[320px]`), guaranteeing 100% visible loading in Next.js.
  - Fixed CTA button width: expanded CTA button to `min-w-[280px] md:min-w-[340px] px-12 md:px-16 text-center whitespace-nowrap`, fitting all text comfortably on a single line.
  - Fixed Timeline horizontal alignment & heading size: isolated dates to a fixed 160px right-aligned box (`w-32 md:w-40 shrink-0 text-right`), so date length (`2023` vs `1988–2007`) never pushes or shifts the content. Headings (`text-[11px] md:text-xs font-bold uppercase tracking-widest`) and subtext (`text-xs md:text-sm text-gray-600`) now start at the exact same horizontal column position for all 13 items.

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Route `/lv/rebuilding` returns 200 OK on localhost.

### Task: Deployment of fundraising branch to live server (dev2.vagneriga.lv)
- Summary:
  - Created and pushed new `fundraising` branch to GitHub repository (`paulsr11/dev.vagneriga`).
  - Switched live production host (`204.168.171.251` / `dev2.vagneriga.lv`) to `fundraising` branch.
  - Executed `pnpm run build` cleanly on live server and restarted `dev2-vagneriga` systemd service.
  - Preserved original `dev` branch on server and GitHub for fast rollback when needed.

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`
  - `src/app/[lang]/globals.css`
  - `LOG.md`

- Verification:
  - GitHub branch `fundraising` active and up to date.
  - Live server route `https://dev2.vagneriga.lv/en/rebuilding` returning 200 OK.

### Task: Global color system update — brand blue (#002142) and gold (#B49661)
- Summary:
  - Updated global design tokens in `globals.css`: accent gold updated to `#B49661` (`--accent`, `--color-accent`) and brand blue set to `#002142` (`--brand-blue`).
  - Added `.logo-blue` CSS filter class (`invert(9%) sepia(85%) saturate(3478%) hue-rotate(193deg) brightness(97%) contrast(107%)`), rendering the header and about logos in brand blue `#002142`.
  - Updated main footer background to `#002142` (`Footer.tsx`).
  - Updated black background cards, quote boxes, CTA panels, timeline headings, borders, and lines across `rebuilding/page.tsx`, `Header.tsx`, `Footer.tsx`, and block components to brand blue `#002142` and gold `#B49661`.

- Files changed:
  - `src/app/[lang]/globals.css`
  - `src/components/Header.tsx`
  - `src/components/Footer.tsx`
  - `src/app/[lang]/rebuilding/page.tsx`
  - `src/components/blocks/InfoGrid.tsx`
  - `src/components/blocks/EventsList.tsx`
  - `src/components/blocks/FAQSection.tsx`
  - `src/components/blocks/ConcertsSection.tsx`
  - `src/components/blocks/AboutSection.tsx`
  - `src/components/blocks/Hero.tsx`
  - `src/components/blocks/SponsorsView.tsx`
  - `src/app/[lang]/ziedojumi2/page.tsx`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Local dev server (`http://localhost:3001/en/rebuilding`) returning 200 OK.

### Task: Generate exact #002142 logo PNG and restore genuine patron JPEG photos
- Summary:
  - Generated dedicated PNG image file `public/images/VR_logo_blue.png` with exact RGB `(0, 33, 66)` (`#002142`) recolored from `VR_logo_white.png` preserving smooth alpha transparency.
  - Updated `Header.tsx` and `AboutSection.tsx` to display `public/images/VR_logo_blue.png` directly, removing CSS filter dependency.
  - Downloaded genuine high-resolution portrait JPEG files for all 3 patrons into `public/images/patrons/`:
    - `steinmeier.jpg` (960x1340 JPEG, Frank-Walter Steinmeier)
    - `levits.jpg` (450x625 JPEG, Egils Levits)
    - `wagner.jpg` (960x1280 JPEG, Eva Wagner-Pasquier)

- Files changed:
  - `public/images/VR_logo_blue.png` [NEW]
  - `public/images/patrons/steinmeier.jpg`
  - `public/images/patrons/levits.jpg`
  - `public/images/patrons/wagner.jpg`
  - `src/components/Header.tsx`
  - `src/components/blocks/AboutSection.tsx`
  - `LOG.md`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - All 4 images return `HTTP/1.1 200 OK` with valid binary JPEG/PNG data on local server.

### Task: Replace patron photos with exact user-provided images
- Summary:
  - Replaced `public/images/patrons/levits.jpg` with the user-provided 400x600 portrait photo of Egils Levits.
  - Replaced `public/images/patrons/wagner.jpg` with the user-provided 400x400 portrait photo of Eva Wagner-Pasquier.
  - Converted `public/images/patrons/steinmeier.jpg` from the original 1000x1000 WebP asset.

- Files changed:
  - `public/images/patrons/steinmeier.jpg`
  - `public/images/patrons/levits.jpg`
  - `public/images/patrons/wagner.jpg`
  - `LOG.md`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - All patron images load with 200 OK on `http://localhost:3001`.

### Task: Patron cards vertical eye/face level alignment
- Summary:
  - Adjusted `objectPosition` on Steinmeier's image to `50% 35%` (shifting his face lower into the frame to align with Eva Wagner).
  - Adjusted `objectPosition` on Levits' image to `50% 0%` (top aligned, shifting his face higher in the card frame).
  - Kept Eva Wagner's image at `50% 0%` (`top`).

- Files changed:
  - `src/app/[lang]/rebuilding/page.tsx`
  - `LOG.md`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Local dev server (`http://localhost:3001/en/rebuilding`) returning 200 OK.

### Task: Re-frame Steinmeier image with natural headroom and set Levits 50% 15%
- Summary:
  - Re-framed `public/images/patrons/steinmeier.jpg` with natural top background headroom (matching background `#e9edf0`) so his face sits lower naturally without top-cutting or negative offset gaps.
  - Set Levits (`levits.jpg`) `objectPosition: '50% 15%'` per user specification.
  - Set Steinmeier (`steinmeier.jpg`) `objectPosition: '50% 0%'` (`top`).

- Files changed:
  - `public/images/patrons/steinmeier.jpg`
  - `src/app/[lang]/rebuilding/page.tsx`
  - `LOG.md`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Local dev server (`http://localhost:3001/en/rebuilding`) returning 200 OK.

### Task: Replace Steinmeier image with new high-res official portrait
- Summary:
  - Replaced `public/images/patrons/steinmeier.jpg` with the new 767x930 official portrait image provided by user.
  - Preserved `objectPosition: '50% 0%'` (`top`) in `src/app/[lang]/rebuilding/page.tsx`.

- Files changed:
  - `public/images/patrons/steinmeier.jpg`
  - `LOG.md`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - New image serving with 200 OK on `http://localhost:3001/images/patrons/steinmeier.jpg`.

### Task: Deployment of updated fundraising branch to live server (dev2.vagneriga.lv)
- Summary:
  - Pushed updated `fundraising` and `dev` branches to GitHub repository (`paulsr11/dev.vagneriga`).
  - Fetched and hard-reset `fundraising` branch on live server (`/home/deploy/sites/dev2.vagneriga.lv`).
  - Executed `pnpm run build` cleanly on live host and restarted `dev2-vagneriga` systemd service.
  - Verified live routes and all image assets.

- Files changed:
  - `LOG.md`

- Verification:
  - GitHub branch `fundraising` up to date (`849f69d`).
  - Live server routes `https://dev2.vagneriga.lv/en/rebuilding`, `VR_logo_blue.png`, `steinmeier.jpg`, `levits.jpg`, and `wagner.jpg` returning HTTP 200 OK.

### Task: Update Ziedojumi2 page with hero heading, endorsed patrons section, and WAYS TO SUPPORT heading
- Summary:
  - Added hero `<h1>` heading `"Put your name in the building that outlasts you"` above the first paragraph on `Ziedojumi2` (`src/app/[lang]/ziedojumi2/page.tsx`).
  - Updated section title from `"TWO WAYS TO SUPPORT"` to `"WAYS TO SUPPORT"` across all languages (`lv`, `en`, `de`).
  - Added `"ENDORSED AT THE HIGHEST LEVEL"` patron section above the partner logos box with exact same formatting, 3 patron cards, photos, role titles, and descriptions as the `rebuilding` page.

- Files changed:
  - `src/app/[lang]/ziedojumi2/page.tsx`
  - `LOG.md`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Local dev server routes `/en/ziedojumi2` and `/lv/ziedojumi2` returning HTTP 200 OK.

### Task: Implement 2-step choice donation widget in Section 5 on Ziedojumi2
- Summary:
  - Created interactive `FriendDonationWidget` ([FriendDonationWidget.tsx](file:///Users/paulsromans/Documents/Webwoork/Vagneriga/dev.vagneriga/src/components/blocks/FriendDonationWidget.tsx)) with a clean 2-step structure:
    - **Step 1**: Choose frequency (`Monthly` vs `One-time donation`) and amount (`€10`, `€25`, `€50`), with **`€50`** selected by default per user requirement. Updated `/ year` label to `/ month`.
    - **Step 2**: Clear CTA button **`Donate now`** displaying current selection (e.g. `Donate now (€50 / month)`).
  - Integrated `FriendDonationWidget` into Section 5 on `Ziedojumi2Page` ([page.tsx](file:///Users/paulsromans/Documents/Webwoork/Vagneriga/dev.vagneriga/src/app/[lang]/ziedojumi2/page.tsx)).

- Files changed:
  - `src/components/blocks/FriendDonationWidget.tsx` [NEW]
  - `src/app/[lang]/ziedojumi2/page.tsx`
  - `LOG.md`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Local dev server routes `/en/ziedojumi2` and `/lv/ziedojumi2` returning HTTP 200 OK.

### Task: Integrate Stripe checkout links & align design system colors on Ziedojumi2
- Summary:
  - **Stripe Checkout Links Mapped**:
    - Monthly €50: `https://buy.stripe.com/14A4gB1zJ2ZEfUeeS85ZC00`
    - Monthly €25: `https://donate.stripe.com/5kQbJ30vF8jY23o9xO5ZC01`
    - Monthly €10: `https://donate.stripe.com/aFacN73HR43IgYi25m5ZC02`
    - One-time donation: `https://buy.stripe.com/4gM7sN2DNcAe4bwcK05ZC06`
    - Chair €5,000: `https://donate.stripe.com/7sY14pfqz43I37s6lC5ZC03`
    - Chair €3,000: `https://donate.stripe.com/cNi5kF3HR6bQdM611i5ZC04`
    - Chair €1,000: `https://donate.stripe.com/cNi3cx7Y70Rw5fA9xO5ZC05`
  - **Widget Behavior Updates**:
    - Changed default monthly selection to **`€25`** in `FriendDonationWidget`.
    - Hidden preset amount buttons when `One-time donation` option is selected, linking directly to the one-time Stripe checkout URL.
  - **Global Design Language Color Alignment**:
    - Updated Sponsor a Chair button to Brand Blue (`#002142`).
    - Made each Chair Sponsorship tier a clickable interactive card with hover states in Brand Blue and Gold Accent (`#B49661`).
    - Replaced all remaining plain black buttons/accents with Brand Blue (`#002142`).

- Files changed:
  - `src/components/blocks/FriendDonationWidget.tsx`
  - `src/app/[lang]/ziedojumi2/page.tsx`
  - `LOG.md`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Local dev server routes `/en/ziedojumi2` and `/lv/ziedojumi2` returning HTTP 200 OK.

### Task: Redesign donation card in Section 5 to full-width Brand Blue (#002142) with Gold (#B49661) border
- Summary:
  - Redesigned Section 5 on `Ziedojumi2Page` ([page.tsx](file:///Users/paulsromans/Documents/Webwoork/Vagneriga/dev.vagneriga/src/app/[lang]/ziedojumi2/page.tsx)) into a full-width container (`max-w-5xl`).
  - Updated `FriendDonationWidget` ([FriendDonationWidget.tsx](file:///Users/paulsromans/Documents/Webwoork/Vagneriga/dev.vagneriga/src/components/blocks/FriendDonationWidget.tsx)) into a full-width Brand Blue (`#002142`) card with 2px Gold (`#B49661`) border matching the Rebuilding page CTA style.
  - Integrated 2-step donation controls (Frequency switcher & Amount buttons) and supporter benefits list in unified grid columns inside the Brand Blue card.

- Files changed:
  - `src/components/blocks/FriendDonationWidget.tsx`
  - `src/app/[lang]/ziedojumi2/page.tsx`
  - `LOG.md`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Local dev server routes `/en/ziedojumi2` and `/lv/ziedojumi2` returning HTTP 200 OK.

### Task: Fix FriendDonationWidget layout squishing and typography overlaps
- Summary:
  - Replaced `<h4 ...>` heading tag in `FriendDonationWidget` ([FriendDonationWidget.tsx](file:///Users/paulsromans/Documents/Webwoork/Vagneriga/dev.vagneriga/src/components/blocks/FriendDonationWidget.tsx)) with a `<p ...>` tag to eliminate global Playfair serif heading CSS overrides that caused huge text overlaps.
  - Replaced `btn-flood` class with explicit Tailwind flex/grid styling to remove button height constraints that squeezed text vertically.
  - Refactored grid system to `grid-cols-1 lg:grid-cols-12` (`lg:col-span-7` and `lg:col-span-5`), ensuring generous spacing and clean responsive stacking across all screen sizes.

- Files changed:
  - `src/components/blocks/FriendDonationWidget.tsx`
  - `LOG.md`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Local dev server routes `/en/ziedojumi2` and `/lv/ziedojumi2` returning HTTP 200 OK.

### Task: Make Ziedojumi2 default Ziedojumi page, archive old one, translate patron roles, and deploy to live
- Summary:
  - **Archived Old Page**: Moved old ziedojumi page to `src/app/[lang]/ziedojumi-archive/page.tsx` ([page.tsx](file:///Users/paulsromans/Documents/Webwoork/Vagneriga/dev.vagneriga/src/app/[lang]/ziedojumi-archive/page.tsx)).
  - **Promoted New Page to Default**: Copied new ziedojumi page to `src/app/[lang]/ziedojumi/page.tsx` ([page.tsx](file:///Users/paulsromans/Documents/Webwoork/Vagneriga/dev.vagneriga/src/app/[lang]/ziedojumi/page.tsx)).
  - **Patron Role Translations**: Added complete `steinmeierRole`, `levitsRole`, and `evaRole` translations across all 3 languages (`LV`, `EN`, `DE`) on both `Ziedojumi` and `Rebuilding` pages.
  - **Live Site Deployment**:
    - Committed & pushed changes to GitHub repository (`paulsr11/dev.vagneriga` on `fundraising` and `dev` branches).
    - Executed clean `pnpm run build` on live host (`dev2.vagneriga.lv`) and restarted `dev2-vagneriga` systemd service.

- Files changed:
  - `src/app/[lang]/ziedojumi/page.tsx`
  - `src/app/[lang]/ziedojumi2/page.tsx`
  - `src/app/[lang]/rebuilding/page.tsx`
  - `src/app/[lang]/ziedojumi-archive/page.tsx` [NEW]
  - `LOG.md`

- Verification:
  - `npx tsc --noEmit` clean with 0 errors.
  - Live server routes `https://dev2.vagneriga.lv/en/ziedojumi`, `https://dev2.vagneriga.lv/lv/ziedojumi`, `https://dev2.vagneriga.lv/de/ziedojumi`, and `https://dev2.vagneriga.lv/en/rebuilding` returning `HTTP 200 OK`.



































