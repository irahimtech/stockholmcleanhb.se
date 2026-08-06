import React from "react";
import {
  FaMagic,
  FaCheck,
  FaPercent,
  FaPhoneAlt,
  FaClock,
  FaShieldAlt,
  FaUtensils,
  FaBath,
  FaBed,
  FaArrowRight,
} from "react-icons/fa";

// Specific high-quality assets matching your project file structure
import homeCleanHero from "../assets/residential-cleaning.jpg";
import kitchenAddonImg from "../assets/residential-cleaning.jpg"; // Customize inside your assets later
import bathroomAddonImg from "../assets/residential-cleaning.jpg";
import roomsAddonImg from "../assets/residential-cleaning.jpg";

const HomeCleaning = () => {
  return (
    <div className="bg-slate-50 font-sans text-gray-700 antialiased overflow-hidden pt-20">
      {/* SECTION 1: HIGH-DENSITY HOME CLEANING HERO BANNER */}
      <section
        className="relative bg-gradient-to-r from-[#0D2B5C] to-blue-900 text-white pt-28 pb-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(13, 43, 92, 0.96), rgba(30, 58, 138, 0.88)), url(${homeCleanHero})`,
        }}
      >
        {/* Magic Icon Floating Decor */}
        <div className="absolute top-12 right-12 text-amber-400 text-4xl opacity-20 animate-pulse">
          <FaMagic />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl border border-amber-500/30 backdrop-blur-md">
            <FaMagic className="animate-pulse text-amber-400" /> Premium
            Hemstädning Stockholm
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
      Professionell hemstädning <br />
      <span className="text-amber-400">Med specifierad prissättning för tilläggstjänster</span>

          </h1>

          <p className="text-base md:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            Ta tillbaka din värdefulla tid med Stockholms mest transparenta system för hemstädning. 
      Vi döljer inga parametrar. Utforska vår transparenta köksrengöring, steriliseringspaket 
      för badrum och djupgående checklistor för sällskapsrum skräddarsydda specifikt för 
      svenska lägenheter och villor.
          </p>

          <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto font-normal border-t border-white/10 pt-6">
            Helt integrerat med våra egna system. Din direkta företagsrabatt på 30 % beräknas omedelbart 
      utan att det krävs något extra pappersarbete från din sida.
            part.
          </p>
        </div>
      </section>

      {/* SECTION 2: PART 1 - TITLE & KITCHEN MODULE CARD */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
            <FaMagic className="text-amber-500 animate-pulse" /> Detaljerade målsättningar
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight leading-tight max-w-3xl mx-auto">
      Transparenta prismodeller anpassade för specifika bostadszoner
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-light">
            Skräddarsy din hemstädningsplan genom granskning av exakta arbetsfördelningar. 
      Inga gissningar, inga schablonmässiga genomsnitt – bara tydliga checklistor för hygien.
          </p>
        </div>
        {/* Start of 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* CATEGORY 1: KITCHEN DETAIL */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group">
            <div className="h-64 bg-slate-200 overflow-hidden relative">
              <img
                src={kitchenAddonImg}
                alt="Intensive Kitchen Deep Cleaning including Oven, Fridge, Cabinets, and Sinks"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 right-4 bg-blue-950 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1">
                <FaUtensils className="text-amber-400" /> Köksmodul
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-slate-100 pb-3">
                  <h3 className="text-2xl font-black text-blue-950 tracking-tight">
              Djuprengöring av kök
                  </h3>
                  <span className="text-sm font-black text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
              30 % rabatt ingår
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                   Ett omfattande hygienprotokoll med stort fokus på fettborttagning och 
            underhållszoner för djupgående rengöring av köksutrustning.
                </p>
                {/* Specific Target Checklist Nodes */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
              <span>Invändig & utvändig avfettning av ugn</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
              <span>Sanering & rengöring av kyl och frys</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
              <span>Rengöring av skåpsluckor & invändiga hyllor</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
              <span>Polering av diskbänk & avkalkning av kromdetaljer</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">
            Beräknat grundpris
                </span>
                <span className="text-xl font-black text-blue-950">
            Från 349 kr / timme
                </span>
              </div>
            </div>
          </div>

          
          {/* CATEGORY 2: BATHROOM SANITIZATION */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group">
            <div className="h-64 bg-slate-200 overflow-hidden relative">
              <img
                src={bathroomAddonImg}
                alt="Clinical Bathroom Sterilization covering Toilet, Shower Basin, Tiles, and Mirrors"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 right-4 bg-blue-950 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1">
                <FaBath className="text-amber-400" /> Badrumsmodul
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-slate-100 pb-3">
                  <h3 className="text-2xl font-black text-blue-950 tracking-tight">
          Sanitär klinisk städning
                  </h3>
                  <span className="text-sm font-black text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
          30 % rabatt ingår
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Eliminera envisa kalkavlagringar och biologiska bakterier med exakta 
        och effektiva desinfektionsmedel.
                </p>
                {/* Specific Target Checklist Nodes */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
          <span>Desinficering & skrubbning av toalett</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
          <span>Avkalkning av duschkabin & badkar</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
          <span>Behandling & tvättning av golvfogar</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
          <span>Putsning av spegelglas & polering av kromdetaljer</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">
        Beräknat grundpris
                </span>
                <span className="text-xl font-black text-blue-950">
        Från 349 kr / timme
                </span>
              </div>
            </div>
          </div>


          {/* CATEGORY 3: LIVING AREAS & ROOMS UPKEEP */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group">
            <div className="h-64 bg-slate-200 overflow-hidden relative">
              <img
                src={roomsAddonImg}
                alt="Living Rooms Maintenance detailing HEPA Vacuums, Mopping, Windows framing, and Dusting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 right-4 bg-blue-950 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1">
                <FaBed className="text-amber-400" /> Rumsmodul
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-slate-100 pb-3">
                  <h3 className="text-2xl font-black text-blue-950 tracking-tight">
Bostadsytor                  </h3>
                  <span className="text-sm font-black text-green-600 bg-green-50 px-2.5 py-1 rounded-lg">
                    30 % rabatt ingår
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  Komplett dammsugning och dammsanering utformad för att återställa 
                  en optimal och hälsosam inomhusluft.
                </p>
                {/* Specific Target Checklist Nodes */}
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>HEPA-dammsugning av mattor och textilytor</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Moppning & polering av trä- och parkettgolv</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Invändig fönsterputsning & rengöring av fönsterkarmar</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 font-semibold">
                    <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-600 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    <span>Noggrann dammtorkning av ytor & fönsterbrädor</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center">
                <span className="block text-[10px] uppercase font-bold text-slate-400">
                  Beräknat grundpris
                </span>
                <span className="text-xl font-black text-blue-950">
                  Från 349 kr / timme
                </span>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Closing the grid layout safely */}
      </section>


      {/* SECTION 3: STOCKHOLM GEO-TARGETING REGIONAL LOCATION BOOSTER */}
      <section className="bg-slate-100 py-24 px-6 border-y border-slate-200/80 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <FaMagic className="text-amber-500 animate-pulse" /> Lokal servicetäckning
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight leading-tight">
          Vi servar alla bostadsområden i Storstockholm
              </h2>
            </div>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
              Våra mobila och professionella städteam är strategiskt utplacerade över 
        hela Stockholms län. Denna geografiska närvaro gör att vi kan garantera 
        noll reseavgifter och snabba inställelsetider för akuta städförfrågningar.
            </p>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-normal">
             Oavsett om du har en lägenhet i innerstaden eller äger en stor familjevilla 
        i förorterna, är våra certifierade lokalvårdare aktiva nära dig varje dag.
            </p>
          </div>

          {/* Right Area Grid Block */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-colors duration-300">
              <span className="block font-extrabold text-blue-950 text-sm">
                Stockholm City
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Norrmalm & Center
              </span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-colors duration-300">
              <span className="block font-extrabold text-blue-950 text-sm">
                Södermalm
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                South District Hub
              </span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-colors duration-300">
              <span className="block font-extrabold text-blue-950 text-sm">
                Vasastan
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Inner City Core
              </span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-colors duration-300">
              <span className="block font-extrabold text-blue-950 text-sm">
                Östermalm
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Premium Residential
              </span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-colors duration-300">
              <span className="block font-extrabold text-blue-950 text-sm">
                Kungsholmen
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                West City Sector
              </span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-colors duration-300">
              <span className="block font-extrabold text-blue-950 text-sm">
                Solna & Kista
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                North Tech Precinct
              </span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-colors duration-300">
              <span className="block font-extrabold text-blue-950 text-sm">
                Täby & Danderyd
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Suburban Subdivisions
              </span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-colors duration-300">
              <span className="block font-extrabold text-blue-950 text-sm">
                Nacka & Värmdö
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                East Coast sectors
              </span>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#0D2B5C] transition-colors duration-300">
              <span className="block font-extrabold text-blue-950 text-sm">
                Huddinge & Botkyrka
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                Greater South Region
              </span>
            </div>
          </div>
        </div>
      </section>
      



      {/* SECTION 4: INSTANT HOME CLEANING QUOTE INPUT FORM & COMPONENT CLOSURE */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative z-10">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-200/60 relative overflow-hidden">
          {/* Aesthetic background mesh nodes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full filter blur-[100px] opacity-10 pointer-events-none"></div>

          <div className="space-y-3 mb-10 text-center sm:text-left">
            <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1 rounded-md inline-flex items-center gap-1">
              <FaMagic className="text-amber-500 data-pulse text-[10px]" /> {" "}
        Säker bokning – 30 % direktrabatt ingår
            </span>
            <h3 className="text-2xl md:text-4xl font-black text-blue-950 tracking-tight">
        Få en kostnadsfri och direkt prisförfrågan för hemstädning
            </h3>
            <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed max-w-3xl">
              Redo för ett skinande rent hem? Skicka in specifikationerna för din bostad direkt 
        nedan. Vår planeringsavdelning i Stockholm granskar din förfrågan omedelbart för 
        att ta fram tydliga prisklasser med godkänd F-skatt.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
            Ditt fullständiga naam
                </label>
                <input
                  type="text"
                  placeholder="e.g., Johan Nilsson"
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
            E-postadress
                </label>
                <input
                  type="email"
                  placeholder="e.g., johan@outlook.se"
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
            Mobilnummer
                </label>
                <input
                  type="tel"
                  placeholder="e.g., 072 987 65 43"
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
            Bostadsstorlek (kvm)
                </label>
                <input
                  type="number"
                  placeholder="e.g., 85"
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-blue-950 focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
            Önskat städintervall
                </label>
                <select className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-blue-950 focus:outline-none focus:bg-white focus:border-blue-950 transition-colors">
                 <option>Veckostädning (Abonnemang varje vecka)</option>
            <option>Städning varannan vecka (Bi-weekly)</option>
            <option>Månadsstädning / Djuprengöring</option>
            <option>Engångsstädning / Intensiv första städning</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
            Önskad tidpunkt
                </label>
                <select className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-blue-950 focus:outline-none focus:bg-white focus:border-blue-950 transition-colors">
                  <option>Morgonpasset (Från kl. 08:00)</option>
            <option>Eftermiddagspasset (Från kl. 13:00)</option>
            <option>Flexibla tidslotter under helger</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100 mt-8">
              <div className="text-center sm:text-left space-y-1">
                <span className="block text-xs text-slate-400 font-medium">
            Behöver du omedelbar rådgivning eller boka direkt?
                </span>
                <a
                  href="tel:+46721516306"
                  className="inline-flex items-center gap-2 text-sm font-black text-blue-950 hover:text-amber-500 transition-colors"
                >
                  <FaPhoneAlt className="text-xs text-amber-500" /> Ring vår kundtjänst för hemstädning
                </a>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-[#0D2B5C] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-amber-500 hover:text-blue-950 hover:shadow-xl transition-all duration-300"
              >
            Boka prisförfrågan
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomeCleaning;
