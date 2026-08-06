import React from "react";
import {
  FaMagic,
  FaCheck,
  FaBroom,
  FaPhoneAlt,
  FaClock,
  FaShieldAlt,
  FaPercent,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";

// Specific high-quality assets matching your project file structure
import finalCleanHero from "../assets/final-cleaning-stockholm.jpg";
import debrisSectionImg from "../assets/final-cleaning-stockholm.jpg";
import polishingSectionImg from "../assets/final-cleaning-stockholm.jpg";
import floorSectionImg from "../assets/final-cleaning-stockholm.jpg";

const FinalCleaning = () => {
  return (
    <div className="bg-slate-50 font-sans text-gray-700 antialiased overflow-hidden pt-20">
      {/* SECTION 1: POST-CONSTRUCTION FINAL CLEANING HERO BANNER (SEO Powerhouse) */}
      <section
        className="relative bg-gradient-to-r from-[#0D2B5C] to-blue-900 text-white pt-28 pb-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(13, 43, 92, 0.96), rgba(30, 58, 138, 0.88)), url(${finalCleanHero})`,
        }}
      >
        {/* Magic Icon Floating Decor */}
        <div className="absolute top-12 right-12 text-amber-400 text-4xl opacity-20 animate-pulse">
          <FaMagic />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl border border-amber-500/30 backdrop-blur-md">
            <FaMagic className="animate-pulse text-amber-400" /> Premium
            Slutstädning & Byggstädning Stockholm
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Byggstädning & slutstädning <br />
            <span className="text-amber-400">
              Kompletta lösningar för fastighetsöverlämning
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            Eliminera mikrodamm, farliga renoveringsrester och byggavfall på ett
            fläckfritt sätt. Våra avancerade planer för strukturell slutstädning
            är utformade för att klara strikta besiktningar och överlämningar av
            byggnadsinspektörer överallt i Stockholm.
          </p>

          <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto font-normal border-t border-white/10 pt-6">
            Utrustade med kommersiella dammsugare, kraftfull
            skrapningsutrustning och fullt strukturellt ansvarsförsäkringsskydd
            på 10 miljoner SEK.
          </p>
        </div>
      </section>

      {/* SECTION 2: FIXED SQUARE METER PRICING BANNER MATRIX */}
      <section className="bg-amber-500 py-10 px-6 text-blue-950 shadow-inner relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text and Icon Block */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="p-4 bg-[#0D2B5C] rounded-2xl text-2xl text-amber-400 flex-shrink-0 shadow-md">
              <FaPercent className="animate-pulse" />
            </div>
            <div className="space-y-2">
              <h4 className="font-black text-xl md:text-2xl tracking-tight uppercase">
                Transparenta priser för slutstädning i Stockholm
              </h4>
              <p className="text-sm font-semibold text-blue-950/90 max-w-4xl leading-relaxed">
                Stockholm Clean HB eliminerar helt otydliga prissättningar. Våra
                priser för bygg- och renoveringsstädning är optimerade baserat
                på projektets totala storlek i kvadratmeter. Fullständig
                ansvarsförsäkring, säkerhetshantering av byggavfall och
                besiktningsgaranti ingår alltid i våra beräkningar.
              </p>
            </div>
          </div>

          {/* Explicit Pricing Grid Badges */}
          <div className="flex-shrink-0 w-full lg:w-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4">
            <div className="bg-[#0D2B5C] text-white p-4 px-6 rounded-xl border border-blue-950 shadow-sm text-center">
              <span className="block text-[10px] uppercase tracking-widest text-amber-400 font-extrabold">
                Kommersiell B2B-slutstädning
              </span>
              <span className="text-lg font-black">
                Från 60 kr / kvm{" "}
                <span className="text-xs font-normal opacity-80">
                  (Excl. MOMS)
                </span>
              </span>
            </div>
            <div className="bg-white text-blue-950 p-4 px-6 rounded-xl border border-slate-100 shadow-md text-center">
              <span className="block text-[10px] uppercase tracking-widest text-green-600 font-extrabold">
                Privat renovering (Med 30 % rabatt)
              </span>
              <span className="text-lg font-black text-green-600">
                Från 42 kr / kvm
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PART 1 - TITLE & DEBRIS & DUST REMOVAL CARD WITH EXPLICIT PRICING */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
            <FaMagic className="text-amber-500 data-pulse" /> Industriella
            checklistor
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight leading-tight max-w-3xl mx-auto">
            Kategorier för byggstädning med exakta kvadratmeterpriser
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-light">
            Granska våra strikta uppdelningar för överlämning av
            byggarbetsplatser. Vi utför kraftfull strukturell dammsugning
            skräddarsydd för fastighetsutvecklare i Stockholm.
          </p>
        </div>
        {/* Start of 3-Column Final Cleaning Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* CATEGORY 1: DEBRIS & DUST REMOVAL */}

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group">
            <div className="h-64 bg-slate-200 overflow-hidden relative">
              <img
                src={debrisSectionImg}
                alt="Industrial Debris & Fine Dust Removal detailing Wall wiping, High dusting, Ceiling fans, and Vent vacuuming"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 right-4 bg-[#0D2B5C] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1">
                <FaTools className="text-amber-400" /> Grov- & findammsanering
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-slate-100 pb-3">
                  <h3 className="text-2xl font-black text-blue-950 tracking-tight">
                    Findammssanering{" "}
                  </h3>
                  <span className="text-xs font-extrabold text-blue-950 bg-blue-50 px-2.5 py-1 rounded-md">
                    Grovarbete
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  En kraftfull modul för findammssanering med fokus på att
                  avlägsna mikrodamm och byggpartiklar från arkitektoniska ytor
                  efter renovering.
                </p>
                {/* Specific Target Checklist Nodes */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Statisk avtorkning av väggar för mikropartiklar</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>
                      Dammtorkning av arkitektoniska detaljer på hög höjd
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>
                      Rengöring och polering av takfläktar & belysning
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>
                      Intern dammsugning och extraktion av ventilationskanaler
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">
                  Baspris för denna kategori
                </span>
                <span className="text-xl font-black text-blue-950">
                  Från 60 kr / kvm
                </span>
              </div>
            </div>
          </div>

          {/* CATEGORY 2: SURFACE POLISHING WITH EXPLICIT PRICING */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group">
            <div className="h-64 bg-slate-200 overflow-hidden relative">
              <img
                src={polishingSectionImg}
                alt="Detailed Post-Construction Surface Polishing detailing Countertop shining, Fixture polishing, Baseboard cleaning, and Window track scraping"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 right-4 bg-[#0D2B5C] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1">
                <FaMagic className="text-amber-400" /> Ytpolering & finputsning
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-slate-100 pb-3">
                  <h3 className="text-2xl font-black text-blue-950 tracking-tight">
                    Detaljfinish
                  </h3>
                  <span className="text-xs font-extrabold text-blue-950 bg-blue-50 px-2.5 py-1 rounded-md">
                    Precisionspolering
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Noggrant borttagande av färg- och tejprester kombinerat med
                  skyddande ytbehandlingar för att lyfta fram förstklassiga
                  texturer.
                </p>
                {/* Specific Target Checklist Nodes */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Glansbehandling & mikroförsegling av bänkskivor</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Handpolering av krom- & metallarmaturer</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Detaljerad rengöring av golvlister & foder</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Grovskrapning & dammsugning av fönsterspår</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">
                  Baspris för denna kategori
                </span>
                <span className="text-xl font-black text-blue-950">
                  Från 60 kr / kvm
                </span>
              </div>
            </div>
          </div>

          {/* CATEGORY 3: DEEP FLOOR CARE WITH EXPLICIT PRICING */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group">
            <div className="h-64 bg-slate-200 overflow-hidden relative">
              <img
                src={floorSectionImg}
                alt="Post-Construction Deep Floor Care detailing Hardwood buffing, Tile scrubbing, Carpet deep vacuum, and Grout cleaning"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 right-4 bg-[#0D2B5C] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1">
                <FaLayerGroup className="text-amber-400" /> Djuprengöring av
                golv
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-slate-100 pb-3">
                  <h3 className="text-2xl font-black text-blue-950 tracking-tight">
                    Golvrestaurering
                  </h3>
                  <span className="text-xs font-extrabold text-blue-950 bg-blue-50 px-2.5 py-1 rounded-md">
                    Grovarbete{" "}
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Industriella metoder för golvvård utformade för att säkert
                  avlägsna kemiska rester och fastsuttet betongdamm efter
                  byggnation.
                </p>
                {/* Specific Target Checklist Nodes */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Polering & skyddsförsegling av trägolv</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Mekanisk maskinskurning av klinkers & kakel</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>
                      Djupgående industriell HEPA-dammsugning av mattor
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>
                      Kemisk rengöring av kakelfogar och fläckborttagning
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">
                  Baspris för denna kategori
                </span>
                <span className="text-xl font-black text-blue-950">
                  Från 60 kr / kvm
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Closing the grid layout safely */}
      </section>

      {/* SECTION 4: STOCKHOLM SITE TRANSIT GEO-TARGETING BOOSTER */}
      <section className="bg-slate-100 py-24 px-6 border-y border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <FaMagic className="text-amber-500 animate-pulse" />{" "}
                Byggprojektlogistik{" "}
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight leading-tight">
                Vi servar fastighetsöverlämningar & byggplatser över hela
                Stockholm
              </h2>
            </div>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
              Våra kraftfulla och dynamiska team för byggstädning servar stora
              bostadskomplex, butiksetableringar och utbyggnader av bostäder.
              Med dedikerade servicebilar aktiva nära stora expansionszoner
              säkerställer vi snabba överlämningar.
            </p>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
              Oavsett om du leder ett snabbt kontorsomvandlingsprojekt eller
              vill ha en nypolerad utbyggnad av ett kök i en privatbostad,
              anpassar Stockholm Clean HB sin maskinpark och logistik för att
              säkerställa snabba och godkända besiktningar.
            </p>
          </div>

          {/* Right Area Grid Block */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Norrmalm & CBD
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                City Handover Sectors
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Solna & Sundbyberg
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Headquarters Extensions
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Kista Cluster
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Industrial Renovation Hubs
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Vasastan Core
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Apartment Turnovers
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Kungsholmen Sector
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Residential New Builds
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Bromma & Alvik
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Villa Architecture Runs
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Nacka Strand
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Waterfront Fit-Outs
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Östermalm
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Luxury Interior Cleans
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Södermalm
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Commercial Retail Spaces
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: POST-CONSTRUCTION QUOTE SUBMISSION FORM & COMPONENT CLOSURE */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative z-10">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-200/60 relative overflow-hidden">
          {/* Aesthetic background mesh nodes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full filter blur-[100px] opacity-10 pointer-events-none"></div>

          <div className="space-y-3 mb-10 text-center sm:text-left">
            <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1 rounded-md inline-flex items-center gap-1">
              <FaMagic className="text-amber-500 animate-pulse text-[10px]" />{" "}
              Verifierad portal för slutstädning (B2B/B2C)
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-blue-950 tracking-tight">
              Begär en kostnadsfri offert för fastighetsöverlämning
            </h3>
            <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed max-w-3xl">
              Redo att bli av med allt byggdamm? Skicka in specifikationerna för
              din fastighet nedan. Vår planeringsavdelning granskar din
              förfrågan omedelbart för att ta fram tydliga faktureringsunderlag
              med godkänd F-skatt.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
                  Kund- / Företagsnamn
                </label>
                <input
                  type="text"
                  placeholder="e.g., Stockholm Builders AB"
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
                  Primär e-postadress
                </label>
                <input
                  type="email"
                  placeholder="e.g., project@builders.se"
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
                  Direkttelefonnummer
                </label>
                <input
                  type="tel"
                  placeholder="e.g., 08 555 12 34"
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
                  Fastighetsstorlek (kvm)
                </label>
                <input
                  type="number"
                  placeholder="e.g., 180"
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-blue-950 focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
                  Typ av fastighetsprofil
                </label>
                <select className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-blue-950 focus:outline-none focus:bg-white focus:border-blue-950 transition-colors">
                  <option>Kommersiell fastighet / Nyproduktion</option>
                  <option>
                    Privatbostad / Stor renovering (Med 30 % direktrabatt)
                  </option>
                  <option>Butik / Kommersiell lokal</option>
                  <option>
                    Skräddarsydd lägenhetsstädning efter byggnation
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
                  Prioritetsnivå / Brådskande
                </label>
                <select className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-blue-950 focus:outline-none focus:bg-white focus:border-blue-950 transition-colors">
                  <option>Standard besiktningsfönster (Inom 3–5 dagar)</option>
                  <option>Snabb överlämning (Inom nästa 48 timmar)</option>
                  <option>Akut städning / Samma dag vid nödsituation</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100 mt-8">
              <div className="text-center sm:text-left space-y-1">
                <span className="block text-xs text-slate-400 font-medium">
                  Behöver du omedelbar arbetsledning till platsen?
                </span>
                <a
                  href="tel:+46721516306"
                  className="inline-flex items-center gap-2 text-sm font-black text-blue-950 hover:text-amber-500 transition-colors"
                >
                  <FaPhoneAlt className="text-xs text-amber-500" /> Ring vår
                  akutlinje för överlämningar
                </a>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-[#0D2B5C] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-amber-500 hover:text-blue-950 hover:shadow-xl transition-all duration-300"
              >
                Skicka offertförfrågan
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FinalCleaning;
