import React from "react";
import {
  FaMagic,
  FaPhoneAlt,
  FaHome,
  FaBriefcase,
  FaBroom,
  FaTruck,
  FaArrowRight,
  FaPercent,
  FaDollarSign,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

// Image assets matching your project file layout
import servicesHeroBg from "../assets/services-hero-stockholm.jpg";
import homeCleanImg from "../assets/residential-cleaning1.jpg";
import officeCleanImg from "../assets/office-cleaning1.jpg";
import finalCleanImg from "../assets/final-cleaning-stockholm.jpg";
import moveOutCleanImg from "../assets/move-out-cleaning1.jpg";

const Services = () => {
  return (
    <div className="bg-slate-50 font-sans text-gray-700 antialiased overflow-hidden pt-20">
      {/* SECTION 1: SERVICES HERO BANNER (Google SEO Ranking Heavy Content) */}
      <section
        className="relative bg-gradient-to-r from-[#0D2B5C] to-blue-900 text-white pt-28 pb-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(13, 43, 92, 0.95), rgba(30, 58, 138, 0.85)), url(${servicesHeroBg})`,
        }}
      >
        {/* Sparkle Decorative elements for professional looks */}
        <div className="absolute top-12 right-12 text-amber-400 text-4xl opacity-20 animate-pulse">
          <FaMagic />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl border border-amber-500/30 backdrop-blur-md">
            <FaMagic className="animate-spin text-amber-400" />
            Premiumritningar för fastighetsstädning
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Certifierad kommersiell & inrikes <br />
            <span className="text-amber-400">Städservice i Stockholm</span>
          </h1>

          <p className="text-base md:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            Utforska våra specialiserade städtjänster. Från regelbunden
            hemstädning till premium kontorsstädning – våra tjänster är
            anpassade efter strikta svenska hygienstandarder, och just nu får du
            30% rabatt direkt på priset helt utan RUT-krångel.
          </p>

          <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto font-normal border-t border-white/10 pt-6">
          Betrodd av både företagskunder och fastighetsägare. Varje tjänst inkluderar full ansvarsförsäkring, miljömärkta rengöringsprodukter och en komplett nöjd-kund-garanti.
          </p>
        </div>
      </section>

      {/* SECTION 2: TRANSPARENT PRICING STRATEGY & RUT BENEFIT MATRIX */}

      <section className="bg-amber-500 py-10 px-6 text-blue-950 shadow-inner relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="p-4 bg-[#0D2B5C] rounded-2xl text-2xl text-amber-400 flex-shrink-0 shadow-md">
              <FaPercent className="animate-pulse" />
            </div>
            <div className="space-y-2">
              <h4 className="font-black text-xl md:text-2xl tracking-tight uppercase">
Transparent lokal prissättning med 30% direkt rabatt              </h4>
              <p className="text-sm font-semibold text-blue-950/90 max-w-4xl leading-relaxed">
                Stockholm Clean HB följer strikt den svenska marknadens standardpriser, med start från endast{" "}
                <span className="underline font-black">
                  279 SEK / hour (inkl. moms)
                </span>
                . Vårt automatiserade system beräknar priset baserat på fastighetens exakta kvadratmeter för att förhindra dolda avgifter eller överraskningar på fakturan.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-full lg:w-auto text-center grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4">
            <div className="bg-[#0D2B5C] text-white p-3 px-5 rounded-xl border border-blue-950 shadow-sm text-center">
              <span className="block text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                Ordinarie Pris
              </span>
              <span className="text-lg font-black">From 398 SEK/hr</span>
            </div>
            <div className="bg-white text-blue-950 p-3 px-5 rounded-xl border border-slate-100 shadow-md text-center">
              <span className="block text-[10px] uppercase tracking-wider text-green-600 font-bold">
                Ditt Pris (30% Rabatt)
              </span>
              <span className="text-lg font-black text-green-600">
                From 279 SEK/hr
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES MATRIX PART 1 (Home & Office Cleaning Solutions) */}

      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
            <FaMagic className="text-amber-500 animate-spin" /> Se vad vi kan hjälpa dig med
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight leading-tight max-w-3xl mx-auto">
           Hitta rätt städning för ditt moderna hem
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed">
            Välj en städtjänst nedan för att se vad som ingår, våra checklistor och hur din direkt rabatt på 30% räknas ut.
          </p>
        </div>

        {/* Two-Column Grid for structural stability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* SERVICE CARD 4: MOVE-OUT CLEANING */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-lg shadow-slate-100/80 hover:shadow-2xl hover:shadow-blue-950/5 transition-all duration-500 flex flex-col group transform hover:-translate-y-1">
            <div className="h-72 bg-slate-200 overflow-hidden relative">
              <img
                src={moveOutCleanImg}
                alt="Deep Move-Out Cleaning (Flyttstädning) with structural landlord guarantee Stockholm"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent"></div>
              <span className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1.5">
                <FaTruck className="text-white" /> Flyttstädning
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-green-600 text-sm font-bold uppercase tracking-wider">
                  <FaMagic /> 100% godkänd besiktning
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-blue-950 tracking-tight group-hover:text-amber-500 transition-colors duration-300">
                   Flyttstädning (Move-Out Cleaning)
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                  Få tillbaka hela din deposition utan problem. Vår flyttstädning följer alla regler från Mäklarsamfundet. Vi städar noga bakom kyl och frys, gör rent mellan kakelplattor, tar bort damm från elskåp, torkar ur alla skåp och gör rent alla fönsterramar.
                </p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-between items-center text-xs mt-4">
                  <span className="text-slate-500 font-medium">
                    Pris för din flyttstädning
                  </span>
                  <span className="font-extrabold text-blue-950 bg-green-50 text-green-700 px-2.5 py-1 rounded-lg border border-green-200">
                    30% direkt rabatt på fakturan
                  </span>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <a
                  href="/move-out-cleaning"
                  className="w-full py-4 bg-[#0D2B5C] text-white font-extrabold text-sm uppercase tracking-widest rounded-xl hover:bg-amber-500 hover:text-blue-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-950/10 group-hover:shadow-amber-500/20"
                >
                  Gå vidare och välj dina tillval{" "}
                  <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* SERVICE CARD 2: OFFICE CLEANING */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-lg shadow-slate-100/80 hover:shadow-2xl hover:shadow-blue-950/5 transition-all duration-500 flex flex-col group transform hover:-translate-y-1">
            <div className="h-72 bg-slate-200 overflow-hidden relative">
              <img
                src={officeCleanImg}
                alt="Corporate Commercial Office Cleaning (Kontorsstädning) system operations Stockholm"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent"></div>
              <span className="absolute top-4 right-4 bg-[#0D2B5C] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1.5">
                <FaBriefcase className="text-amber-400" /> Kontorsstädning
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-500 text-sm font-bold uppercase tracking-wider">
                  <FaMagic /> Städtjänster för företag och kontor
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-blue-950 tracking-tight group-hover:text-amber-500 transition-colors duration-300">
                  Kontorsstädning (Office Cleaning)
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                Skapa en ren och säker arbetsmiljö för dina anställda varje dag. Vår personal städar kontor noga genom att göra rent skrivbord, desinficera mötesrum, torka av ytor i fikarummet och hålla entrén välkomnande med tysta och bra maskiner.
                </p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-between items-center text-xs mt-4">
                  <span className="text-slate-500 font-medium">
                    Få en gratis offert för ditt företag:
                  </span>
                  <span className="font-extrabold text-white bg-[#0D2B5C] px-2.5 py-1 rounded-lg shadow-sm">
                    Hitta rätt pris för storleken på ditt hem
                  </span>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <a
                  href="/office-cleaning"
                  className="w-full py-4 bg-[#0D2B5C] text-white font-extrabold text-sm uppercase tracking-widest rounded-xl hover:bg-amber-500 hover:text-blue-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-950/10 group-hover:shadow-amber-500/20"
                >
                  Gör en prisförfrågan för ditt kontor{" "}
                  <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* SERVICE CARD 1: HOME CLEANING */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-lg shadow-slate-100/80 hover:shadow-2xl hover:shadow-blue-950/5 transition-all duration-500 flex flex-col group transform hover:-translate-y-1">
            <div className="h-72 bg-slate-200 overflow-hidden relative">
              <img
                src={homeCleanImg}
                alt="Premium Residential Home Cleaning (Hemstädning) service framework in Stockholm"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent"></div>
              <span className="absolute top-4 right-4 bg-white/95 backdrop-blur text-blue-950 text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-1.5">
                <FaHome className="text-amber-500" /> Hemstädning
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-500 text-sm font-bold uppercase tracking-wider">
                  <FaMagic /> Regelbunden städning för ditt hem
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-blue-950 tracking-tight group-hover:text-amber-500 transition-colors duration-300">
                  Hemstädning (Home Cleaning)
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                Håll ditt hem rent och fint med städning varje, varannan eller var fjärde vecka av vår duktiga personal, så att du kan koppla av. Vi gör rent köket noga, torkar bort damm på alla lister, dammsuger alla golv och rengör hela badrummet ordentligt.
                </p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-between items-center text-xs mt-4">
                  <span className="text-slate-500 font-medium">
                    Här är ditt beräknade pris
                  </span>
                  <span className="font-extrabold text-blue-950 bg-amber-500/10 text-blue-950 px-2.5 py-1 rounded-lg border border-amber-500/20">
                    Från endast 279 kr / timme med 30% rabatt"
                  </span>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <a
                  href="/home-cleaning"
                  className="w-full py-4 bg-[#0D2B5C] text-white font-extrabold text-sm uppercase tracking-widest rounded-xl hover:bg-amber-500 hover:text-blue-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-950/10 group-hover:shadow-amber-500/20"
                >
                  Anpassa städning för ditt hem här{" "}
                  <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* SERVICE CARD 3: FINAL CLEANING */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-lg shadow-slate-100/80 hover:shadow-2xl hover:shadow-blue-950/5 transition-all duration-500 flex flex-col group transform hover:-translate-y-1">
            <div className="h-72 bg-slate-200 overflow-hidden relative">
              <img
                src={finalCleanImg}
                alt="Post-Construction Final Cleaning (Slutstädning / Byggstädning) service in Stockholm"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent"></div>
              <span className="absolute top-4 right-4 bg-amber-500 text-blue-950 text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm flex items-center gap-1.5">
                <FaBroom className="text-blue-950" /> Slutstädning
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-500 text-sm font-bold uppercase tracking-wider">
                  <FaMagic /> Post-Renovation & Construction
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-blue-950 tracking-tight group-hover:text-amber-500 transition-colors duration-300">
                 Slutstädning (Final Cleaning)
                </h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                  Gör rent ordentligt efter renovering, ombyggnad eller nybygge. Vår duktiga personal tar bort allt fint byggdamm från alla hörn, tar bort svåra färgfläckar, gör rent från murbruk och putsar alla fönster så att ditt hem eller kontor är helt redo att flytta in i direkt utan extra krångel.
                </p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex justify-between items-center text-xs mt-4">
                  <span className="text-slate-500 font-medium">
                    Pris för städning efter bygge
                  </span>
                  <span className="font-extrabold text-white bg-[#0D2B5C] px-2.5 py-1 rounded-lg shadow-sm">
                    Se ditt pris direkt utifrån storlek
                  </span>
                </div>
              </div>
              <div className="border-t border-slate-100 pt-6">
                <a
                  href="/final-cleaning"
                  className="w-full py-4 bg-[#0D2B5C] text-white font-extrabold text-sm uppercase tracking-widest rounded-xl hover:bg-amber-500 hover:text-blue-950 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-950/10 group-hover:shadow-amber-500/20"
                >
                  Boka din slutstädning här direkt{" "}
                  <FaArrowRight className="text-xs transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 5: ADVANCED TECHNICAL EQUIPMENT & QUALITY AUDIT CHECKLIST */}
      <section className="bg-slate-100 py-28 px-6 border-y border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Left Side: High Density Descriptive Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <FaMagic className="text-amber-500 animate-spin" /> Hög kvalitet i varje städning
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight leading-tight">
                Bra maskiner och miljövänliga produkter
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                Stockholm Clean HB använder inte vanliga dammsugare eller enkla verktyg för hemmet. För att göra helt rent använder vår personal moderna maskiner från Europa som skyddar dina möbler och tar bort allt fint damm och allergiframkallande partiklar.
              </p>
            </div>

            {/* Technical Hardware Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 bg-white rounded-2xl border border-slate-200/60 shadow-sm space-y-2">
                <h4 className="font-extrabold text-blue-950 text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>{" "}
                  Godkänd HEPA-filtrering
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Våra dammsugare tar bort 99,97% av allt damm i luften. Detta gör att luften blir ren och frisk att andas i alla rum.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-200/60 shadow-sm space-y-2">
                <h4 className="font-extrabold text-blue-950 text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>{" "}
                  Ångtvätt för kakel
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Vi gör rent mellan kakelplattor och runt fönster med het ånga helt utan kemikalier. Det tar bort svår smuts på ett säkert sätt.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-200/60 shadow-sm space-y-2">
                <h4 className="font-extrabold text-blue-950 text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>{" "}
                  Färgkodade städdukar
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                                    Vi har hårda regler för hygien. Vi använder olika färger på trasor för kök, skrivbord, badrum och toalett så att smuts inte sprids.

                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-slate-200/60 shadow-sm space-y-2">
                <h4 className="font-extrabold text-blue-950 text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>{" "}
                  Svanenmärkta produkter
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                                    Alla våra rengöringsmedel följer stränga regler i Skandinavien. De är miljövänliga och helt säkra för både barn och husdjur.

                </p>
              </div>
            </div>
          </div>

          {/* Right Side: High Conversion Value Matrix Panel */}
          <div className="lg:col-span-5 bg-[#0D2B5C] text-white p-8 rounded-3xl shadow-2xl border border-blue-950 relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 text-white/5 text-9xl font-black select-none pointer-events-none transform rotate-12">
              <FaMagic />
            </div>
            <h3 className="text-2xl font-black tracking-tight mb-4 text-white">
              Ingår i all städning
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed mb-6 font-light">
                           Vi städar mycket noga så att vår personal inte missar något hörn i ditt hem eller på ditt kontor.

            </p>
            <ul className="space-y-3.5 text-xs md:text-sm font-medium text-slate-200">
              <li className="flex items-center gap-3">
                <span className="text-amber-400">★</span>  Noggrann rengöring av alla fönsterramar
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-400">★</span> Borttagning av fett bakom kyl och frys i köket
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-400">★</span> Dammning av alla golvlister och ventilationer
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-400">★</span> Ordentlig golvtvätt även under stora möbler
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-400">★</span> Polering av speglar och borttagning av kalk på kakel
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <span className="inline-block bg-amber-500 text-blue-950 text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-md">
Fullt försäkrad hos Trygg-Hansa              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: HIGH-CONVERSION VISUAL CTA BANNER & COMPONENT CLOSURE */}
      <section className="bg-[#0D2B5C] text-white py-28 px-6 text-center relative overflow-hidden border-t-4 border-amber-500">
        {/* Dynamic Visual Layer Anchors */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          {/* Super Clear Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500 text-blue-950 text-xs md:text-sm font-black uppercase tracking-widest px-5 py-2.5 rounded-xl shadow-lg">
            <FaMagic className="animate-spin text-blue-950" />  Få 30% direkt rabatt på din bokning nu
          </div>

          {/* Bold, Highly Visible Header */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight max-w-3xl mx-auto leading-tight text-white">
            Vill du ha ett helt rent hem? <br />
            <span className="text-amber-400">Book Stockholm's Best Crews.</span>
          </h2>

          {/* Descriptive Content with Strong Visual Clarity */}
          <p className="text-slate-200 text-base md:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
                        Låt inte smutsiga rum störa dig i din vardag eller på ditt kontor. Vår fullt försäkrade personal är redo att hjälpa dig överallt i Stockholm redan idag. Vi ger dig 30% rabatt direkt på fakturan helt utan krångligt pappersarbete.

          </p>

          {/* Action-Driving Urgency Label */}
          <div className="text-sm md:text-base font-bold text-green-400 tracking-wide bg-white/5 border border-white/10 rounded-2xl p-4 max-w-xl mx-auto backdrop-blur-sm">
                        ✓ Inga dolda avgifter • ✓ 48 timmars garanti • ✓ Godkänd för F-skatt

          </div>

          {/* Large High-Contrast Conversion Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
            <a
              href="/contact"
              className="w-full sm:w-auto px-10 py-5 bg-amber-500 text-blue-950 font-black text-base uppercase tracking-wider rounded-xl shadow-2xl shadow-amber-500/20 hover:bg-amber-400 hover:scale-[1.02] transition-all duration-300"
            >
              Få en gratis offert direkt
            </a>
            <a
              href="tel:+46721516306"
              className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white font-extrabold text-base uppercase tracking-wider rounded-xl border-2 border-white/20 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3"
            >
              <FaPhoneAlt className="text-amber-400 animate-pulse text-sm" />{" "}
              Ring vår kundtjänst
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
