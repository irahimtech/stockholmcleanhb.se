import React from "react";
import {
  FaMagic,
  FaShieldAlt,
  FaUndoAlt,
  FaCheckCircle,
  FaFileInvoiceDollar,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";

const ReturnPolicy = () => {
  return (
    <div className="bg-slate-50 font-sans text-gray-700 antialiased overflow-hidden pt-20">
      {/* SECTION 1: RETURN & REFUND HERO BANNER (High SEO Density trust Anchor) */}
      <section className="relative bg-gradient-to-r from-[#0D2B5C] to-blue-900 text-white pt-24 pb-28 px-6 border-b-4 border-amber-500">
        {/* Floating Magic Decor Element */}
        <div className="absolute top-12 right-12 text-amber-400 text-4xl opacity-20 animate-pulse">
          <FaMagic />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl border border-amber-500/30 backdrop-blur-md">
            <FaMagic className="animate-pulse text-amber-400" /> Stockholm Clean
            HB Kvalitetsgarantier
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Nöjd kund-garanti & <br />
            <span className="text-amber-400">policy för reklamationer</span>
          </h1>

          <p className="text-base md:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            Granska våra strikta kvalitetsgarantier för städtjänster, parametrar
            för reklamation samt finansiella återbetalningsprotokoll som är
            utformade helt i enlighet med svenskt konsumentskydd.
          </p>

          <div className="text-xs text-slate-300 font-medium border-t border-white/10 pt-4 max-w-md mx-auto">
            Garantisystem: Konfigurerat för säkra kommersiella tjänster och
            flyttstädningar
          </div>
        </div>
      </section>



      {/* SECTION 2: 48-HOUR NÖJD KUND GARANTI & REMEDIATION TERMS */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Summary Box matching your footer theme */}
          <div className="lg:col-span-4 bg-[#0D2B5C] text-white p-8 rounded-3xl shadow-xl space-y-6 border border-blue-950">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl">
              <FaUndoAlt />
            </div>
            <h3 className="text-xl font-black uppercase tracking-wide text-amber-400">
Kvalitetsindex            </h3>
            <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed">
              Stockholm Clean HB står helt bakom utförandet av våra fastighetstjänster. 
        Vi arbetar under svenskt standardiserat ramverk för kundnöjdhet, vilket 
        innebär att vi i första hand skickar ut personal för åtgärd innan en eventuell 
        finansiell återbetalning blir aktuell.
            </p>
            <div className="text-xs font-bold text-slate-200 bg-white/5 border border-white/10 p-4 rounded-xl space-y-2">
          <p>• Besiktningsfönster: 48 timmar</p>
        <p>• Åtgärdstid: Inom 24–48 timmar</p>
        <p>• Extra avgifter för kunden: Absolut noll</p>
            </div>
          </div>

          {/* Right Heavy Content Text Block */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <FaMagic className="text-amber-500 animate-pulse" /> Avsnitt 1.0 Kvalitetsgarantier
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-blue-950 tracking-tight">
          Standardiserad 48-timmars nöjd kund-garanti & åtgärdsklausuler
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light">
              <p>
                <strong>1.1 Ramverk för nöjd kund-garanti:</strong> Eftersom professionell 
          fastighetsskötsel och städning är en skräddarsydd manuell tjänst, erbjuder 
          Stockholm Clean HB inte direkta återbetalningar på initiala klagomål. Istället 
          skyddas varje kommersiellt avtal eller hemstädskontrakt av en strikt{" "}
          <span className="font-semibold text-blue-950">
            tjugofyra till fyrtioåtta (48) timmars kvalitetsgaranti
          </span>.
              </p>

              <p>
                <strong>1.2 Tidsgränser för reklamation:</strong> Om du eller din hyresvärd 
          upptäcker missade hörn, ränder på ytor eller brister som inte stämmer överens med 
          vår checklist, måste en reklamation registreras hos vår supportchef inom fyrtioåtta 
          (48) timmar efter avslutat arbete. Klagomål som inkommer efter denna tidsgräns är 
          juridiskt ogiltiga enligt standardregler för tjänstebesiktning.
              </p>

              <p>
                <strong>1.3 Kostnadsfri åtgärd (Kostnadsfri omstädning):</strong> Vid giltig 
          och godkänd reklamation kommer vår schemaläggning att skicka ut ett team som anländer 
          till platsen inom tjugofyra till fyrtioåtta (24–48) arbetstimmar. Teamet åtgärdar alla 
          anmärkta områden systematiskt till absolut noll extra kostnad för ditt konto.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 3: MONETARY REFUND THRESHOLDS, CANCELLATION CREDITS & COMPONENT CLOSURE */}
      <section className="bg-slate-100 py-20 px-6 border-t border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Text Block */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <FaMagic className="text-amber-500 animate-pulse" /> Avsnitt 2.0 Ekonomisk kompensation
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-blue-950 tracking-tight">
                          Ekonomiska justeringar, administrativa avgifter & regler för juridisk förlikning

              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light">
              <p>
                 <strong>2.1 Berättigande till ekonomisk återbetalning:</strong> En finansiell 
          återbetalning, fakturakreditering eller prisjustering godkänns endast om 
          Stockholm Clean HB misslyckas med att utföra den kostnadsfria omstädningen, 
          eller om en oberoende besiktning av fastigheten fastställer allvarlig 
          försummelse direkt orsakad av vår städpersonal.
              </p>

              <p>
                <strong>2.2 Hanteringstid för återbetalningar:</strong> När en kreditfaktura 
          eller finansiell återbetalning har godkänts formellt av vår ekonomiansvarige, 
          överförs beloppet elektroniskt. Medlen behandlas via säkra företagsbankgirosystem 
          eller direkt svensk banköverföring inom fjorton (14) kalenderdagar.
              </p>

              <p>
                <strong>2.3 Begränsningar för prisjustering:</strong> Återbetalningar gäller 
          strikt det värde för arbetskostnaden som beräknats på din ursprungliga 
          tjänstefaktura. Stockholm Clean HB tar inget ansvar eller ersättningsskyldighet 
          för externa administrativa förseningar, förlängningsavgifter för flyttbilar 
          eller indirekta kostnader i samband med fastighetsförsäljning.
              </p>
            </div>
          </div>

          {/* Right Summary Box matching your footer theme */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl shadow-xl space-y-6 border border-slate-200">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-2xl shadow-sm">
              <FaFileInvoiceDollar />
            </div>
            <h3 className="text-xl font-black text-blue-950 tracking-tight">
        Fakturaavräkningar
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
               Alla ekonomiska förfrågningar eller återbetalningsbedömningar hanteras via 
        centraliserade granskningsverktyg i enlighet med standardiserade svenska 
        konsumentriktlinjer.
            </p>
            <div className="pt-4 border-t border-slate-100 text-center">
              <a
                href="/contact"
                className="inline-block w-full px-5 py-3 bg-[#0D2B5C] text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-amber-500 hover:text-blue-950 transition-all duration-300 shadow-md"
              >
          Kontakta ekonomiavdelningen
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReturnPolicy;
