import React from "react";
import {
  FaMagic,
  FaCheck,
  FaBriefcase,
  FaPhoneAlt,
  FaClock,
  FaShieldAlt,
  FaDesktop,
  FaUsers,
  FaBuilding,
  FaPercent,
  FaCoins,
} from "react-icons/fa";

// Specific high-quality assets matching your project file structure
import officeCleanHero from "../assets/office-cleaning.jpg";
import deskSectionImg from "../assets/office-cleaning.jpg";
import conferenceSectionImg from "../assets/office-cleaning.jpg";
import commonSectionImg from "../assets/office-cleaning.jpg";

const OfficeCleaning = () => {
  return (
    <div className="bg-slate-50 font-sans text-gray-700 antialiased overflow-hidden pt-20">
      {/* SECTION 1: CORPORATE OFFICE CLEANING HERO BANNER (SEO Weight Heavy) */}
      <section
        className="relative bg-gradient-to-r from-[#0D2B5C] to-blue-900 text-white pt-28 pb-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(13, 43, 92, 0.96), rgba(30, 58, 138, 0.88)), url(${officeCleanHero})`,
        }}
      >
        {/* Magic Icon Floating Decor */}
        <div className="absolute top-12 right-12 text-amber-400 text-4xl opacity-20 animate-pulse">
          <FaMagic />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl border border-amber-500/30 backdrop-blur-md">
            <FaMagic className="animate-pulse text-amber-400" /> Premium
            Kontorsstädning Stockholm
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Professionell kontorsstädning <br />
            <span className="text-amber-400">
              Med transparent prissättning per kvadratmeter
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            Främja hälsan på arbetsplatsen, öka personalens produktivitet och
            presentera en fläckfri företagshygien för dina kunder. Våra
            specialiserade planer för kommersiellt underhåll (kontorsstädning)
            erbjuder transparenta tim- och kvadratmeterpriser skräddarsydda
            specifikt för företagsstrukturer över hela Stockholm.{" "}
          </p>

          <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto font-normal border-t border-white/10 pt-6">
            Utrustade med moderna miljömärkta kemikalier, tystgående
            industriella maskiner och fullt svenskt ansvarsförsäkringsskydd.
          </p>
        </div>
      </section>

      {/* SECTION 2: TRANSPARENT B2B COMMERCIAL PRICING STRATEGY MATRIX */}
      <section className="bg-amber-500 py-10 px-6 text-blue-950 shadow-inner relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text and Icon Side */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="p-4 bg-[#0D2B5C] rounded-2xl text-2xl text-amber-400 flex-shrink-0 shadow-md">
              <FaPercent className="animate-pulse" />
            </div>
            <div className="space-y-2">
              <h4 className="font-black text-xl md:text-2xl tracking-tight uppercase">
                Fixed Commercial Kontorsstädning Pricing index For Stockholm
                Businesses
              </h4>
              <p className="text-sm font-semibold text-blue-950/90 max-w-4xl leading-relaxed">
                Stockholm Clean HB strictly adheres to localized Swedish
                commercial standards with flat tax-deductible B2B pricing
                brackets starting from just{" "}
                <span className="underline font-black">
                  249 SEK / hour (Excl. MOMS)
                </span>{" "}
                or standardized square-meter contract rates. No hidden
                management costs or complex onboarding fees—just pure billing
                transparency.
              </p>
            </div>
          </div>

          {/* Pricing Grid Tags */}
          <div className="flex-shrink-0 w-full lg:w-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4">
            <div className="bg-[#0D2B5C] text-white p-4 px-6 rounded-xl border border-blue-950 shadow-sm text-center">
              <span className="block text-[10px] uppercase tracking-widest text-amber-400 font-extrabold">
                B2B Base Hourly Rate
              </span>
              <span className="text-lg font-black">
                249 SEK / Hr{" "}
                <span className="text-xs font-normal opacity-80">
                  (Excl. MOMS)
                </span>
              </span>
            </div>
            <div className="bg-white text-blue-950 p-4 px-6 rounded-xl border border-slate-100 shadow-md text-center">
              <span className="block text-[10px] uppercase tracking-widest text-green-600 font-extrabold">
                B2B Contract Rate
              </span>
              <span className="text-lg font-black text-green-600">
                From 12 SEK / Sqm
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PART 1 - TITLE & WORKSPACES CARD */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
            <FaMagic className="text-amber-500 animate-pulse" /> Corporate
            Specifications
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight leading-tight max-w-3xl mx-auto">
            Systematiska planer för företagshygien i varje kommersiell zon
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-light">
            Granska våra strikta uppdelningar för underhåll av arbetsplatser. Vi
            utför anpassade operativa städpass skräddarsydda efter ditt företags
            tidsscheman.{" "}
          </p>
        </div>
        {/* Start of 3-Column Office Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* CATEGORY 1: WORKSPACES & DESKS */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group">
            <div className="h-64 bg-slate-200 overflow-hidden relative">
              <img
                src={deskSectionImg}
                alt="Professional Office Workspaces & Desks detailing Dusting, Monitor wiping, Trash removal, and Chair vacuuming"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 right-4 bg-[#0D2B5C] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1">
                <FaDesktop className="text-amber-400" /> Arbetsplatser &
                skrivbord
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-slate-100 pb-3">
                  <h3 className="text-2xl font-black text-blue-950 tracking-tight">
                    Skrivbordsunderhåll
                  </h3>
                  <span className="text-xs font-extrabold text-blue-950 bg-blue-50 px-2.5 py-1 rounded-md">
                    B2B Standard
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  En modul för underhåll av högfrekventa kontaktytor utformad
                  för att eliminera dammpartiklar är att minska risken för
                  biologisk smittspridning bland anställda.{" "}
                </p>
                {/* Specific Target Checklist Nodes */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
              <span>Noggrann dammtorkning av ytor & fönsterbrädor</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
              <span>Skonsam avtorkning av datorskärmar & digitala enheter</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
              <span>Tömning av papperskorgar & byte av plastpåsar</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
              <span>Industriell HEPA-dammsugning av ergonomiska kontorsstolar</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">
Beräknat grundpris                </span>
                <span className="text-xl font-black text-blue-950">
Från 399 kr / timme                </span>
              </div>
            </div>
          </div>


          {/* CATEGORY 2: CONFERENCE ROOMS */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group">
            <div className="h-64 bg-slate-200 overflow-hidden relative">
              <img
                src={conferenceSectionImg}
                alt="Executive Conference Rooms detailing Table sanitizing, Glass cleaning, Carpet vacuuming, and Board wiping"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 right-4 bg-[#0D2B5C] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1">
                <FaUsers className="text-amber-400" /> Konferensrum
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-slate-100 pb-3">
                  <h3 className="text-2xl font-black text-blue-950 tracking-tight">
Ledningszoner                  </h3>
                  <span className="text-xs font-extrabold text-blue-950 bg-blue-50 px-2.5 py-1 rounded-md">
                    B2B-standard
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Noggrant presentationsunderhåll för viktiga kundmötesrum och 
                  presentationsmiljöer.
                </p>
                {/* Specific Target Checklist Nodes */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Djupdesinficering & polering av konferensbord</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Ränderfri rengöring av glaspartier & glasväggar</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>HEPA-dammsugning av mattor på högtrafikerade ytor</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Rengöring av whiteboard & avtorkning av pennspår</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">
                  Beräknat grundpris
                </span>
                <span className="text-xl font-black text-blue-950">
                  Från 399 kr / timme
                </span>
              </div>
            </div>
          </div>

          {/* CATEGORY 3: COMMON AREAS */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group">
            <div className="h-64 bg-slate-200 overflow-hidden relative">
              <img
                src={commonSectionImg}
                alt="Corporate Common Areas detailing Floor mopping, Water cooler cleaning, Door handles disinfection, and Cabinet wiping"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 right-4 bg-[#0D2B5C] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1">
                <FaBuilding className="text-amber-400" /> Gemensamma utrymmen
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-slate-100 pb-3">
                  <h3 className="text-2xl font-black text-blue-950 tracking-tight">
                    Gemensamma faciliteter
                  </h3>
                  <span className="text-xs font-extrabold text-blue-950 bg-blue-50 px-2.5 py-1 rounded-md">
                    B2B-standard
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Kontinuerliga saneringsramverk utformade för högtrafikerade 
                  zoner, fikarum och personalmatsalar.
                </p>
                {/* Specific Target Checklist Nodes */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Industriell golvmoppning & avfettning</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>
                      Ytdesinficering av vattenkylare & kaffemaskiner
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Klinisk desinficering av högfrekventa dörrhandtag</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Avtorkning av förvaringsskåp & bänkytor</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">
                  Beräknat grundpris
                </span>
                <span className="text-xl font-black text-blue-950">
                  Från 399 kr / timme
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Closing the grid layout safely */}
      </section>


      {/* SECTION 4: STOCKHOLM COMMERCIAL HUB GEO-TARGETING BOOSTER */}
      <section className="bg-slate-100 py-24 px-6 border-y border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <FaMagic className="text-amber-500 animate-pulse" /> CKommersiella logistiknoder
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight leading-tight">
                          Vi servar stora affärsdistrikt & företagshubbar över hela Stockholm

              </h2>
            </div>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
              Våra professionella lokalvårdare inom kommersiella fastigheter servar tusentals 
        kvadratmeter dagligen i Stockholms läns viktigaste ekonomiska nav. Med dedikerade 
        team positionerade nära stora företagsparker garanterar vi punktlighet och 
        kontinuerlig driftsäkerhet.
            </p>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
              Oavsett om du leder ett finansiellt huvudkontor över flera våningsplan eller driver 
        en lokal butik, anpassar Stockholm Clean HB sitt schemaläggningssystem för att 
        respektera ditt företags säkerhetskrav och arbetsflöden.
            </p>
          </div>

          {/* Right Area Grid Block */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Stockholm CBD
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Central Business District
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Kista Science City
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Tech & Innovation Hub
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Solna Business Park
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Corporate Headquarters
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Sundbyberg
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Commercial Zone
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Liljeholmen
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Office & Retail Sector
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Alvik & Bromma
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                West Commercial Hub
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Nacka Strand
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Maritime Corporate Sector
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Värtahamnen
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Logistics & Office Hub
              </span>
            </div>
            <div className="p-5 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-all duration-300 group">
              <span className="block font-extrabold text-blue-950 text-sm group-hover:text-[#0D2B5C]">
                Täby Centrum
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                North Commercial Hub
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 5: CORPORATE B2B QUOTE SUBMISSION FORM & COMPONENT CLOSURE */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative z-10">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-200/60 relative overflow-hidden">
          {/* Aesthetic background mesh nodes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full filter blur-[100px] opacity-10 pointer-events-none"></div>

          <div className="space-y-3 mb-10 text-center sm:text-left">
            <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1 rounded-md inline-flex items-center gap-1">
              <FaMagic className="text-amber-500 animate-pulse text-[10px]" />{" "}
        Verifierad kommersiell B2B-portal
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-blue-950 tracking-tight">
        Begär en kostnadsfri offert för kommersiell kontorsstädning
            </h3>
            <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed max-w-3xl">
              Redo att höja hygienstandarden på företaget? Skicka in specifikationerna för er 
        arbetsplats nedan. Vår avdelning för företagskonton granskar er förfrågan omedelbart 
        för att ta fram tydliga faktureringsunderlag med godkänd F-skatt.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
            Företagsnamn / Organisation
                </label>
                <input
                  type="text"
                  placeholder="e.g., Stockholm Tech AB"
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
            Företagets e-postadress
                </label>
                <input
                  type="email"
                  placeholder="e.g., facility@company.se"
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
Direkttelefonnummer                </label>
                <input
                  type="tel"
                  placeholder="e.g., 08 123 45 67"
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
            Total kontorsyta (kvm)
                </label>
                <input
                  type="number"
                  placeholder="e.g., 250"
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-blue-950 focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
            Städfrekvens / Intervall
                </label>
                <select className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-blue-950 focus:outline-none focus:bg-white focus:border-blue-950 transition-colors">
                    <option>Dagligt underhåll (Mån - Fre)</option>
            <option>Städning två gånger i veckan</option>
            <option>Veckostädning av kontor</option>
            <option>Anpassad flexibel företagsrotation</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
            Önskade städtider
                </label>
                <select className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-blue-950 focus:outline-none focus:bg-white focus:border-blue-950 transition-colors">
                 <option>Tidig morgon (05:00 - 08:00)</option>
            <option>Standard arbetstid (09:00 - 17:00)</option>
            <option>Kvällstid / Efter kontorstid (Från 18:00)</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100 mt-8">
              <div className="text-center sm:text-left space-y-1">
                <span className="block text-xs text-slate-400 font-medium">
            Behöver ni omedelbar hjälp av en B2B-koordinator?
                </span>
                <a
                  href="tel:+46721516306"
                  className="inline-flex items-center gap-2 text-sm font-black text-blue-950 hover:text-amber-500 transition-colors"
                >
                  <FaPhoneAlt className="text-xs text-amber-500" /> Ring vår säljlinje för företag
                </a>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-[#0D2B5C] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-amber-500 hover:text-blue-950 hover:shadow-xl transition-all duration-300"
              >
          Begär offertförfrågan (B2B)
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default OfficeCleaning;
