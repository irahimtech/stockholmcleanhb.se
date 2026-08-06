import React from "react";
import {
  FaUsers,
  FaAward,
  FaHistory,
  FaHandshake,
  FaBullseye,
  FaCheck,
} from "react-icons/fa";

// Premium Image Assets for About Page
import bannerBg from "../assets/about-banner-stockholm.jpg";
import teamImg from "../assets/cleaning-team-stockholm.jpg";
import valuesImg from "../assets/corporate-values.jpg";

const About = () => {
  return (
    <div className="bg-slate-50 font-sans text-gray-700 antialiased overflow-hidden pt-20">
      {/* SECTION 1: HEAVY HERO BANNER (High SEO Density Cluster) */}
      <section
        className="relative bg-gradient-to-r from-[#0D2B5C] to-blue-900 text-white pt-28 pb-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(13, 43, 92, 0.95), rgba(30, 58, 138, 0.85)), url(${bannerBg})`,
        }}
      >
        {/* Decorative elements for professional looks */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500 rounded-full filter blur-[100px] opacity-10 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl border border-amber-500/30 backdrop-blur-md">
            🇸🇪 Certifierad städfirma i Stockholms län
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Banbrytande premiumstandard inom <br />
            <span className="text-amber-400">Svensk fastighetshygien</span>
          </h1>

          <p className="text-base md:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            Stockholm Clean HB är ett fullt integrerat och licensierat
            fastighetsserviceföretag. Vi är specialiserade på att utföra
            högteknologiska hushållsnära städtjänster, komplexa kommersiella
            hygienlösningar och noggranna flyttstädningsprocesser över
            Stockholms samtliga kommunala sektorer.
          </p>

          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto font-normal border-t border-white/10 pt-6">
            Fokuserade på miljöefterlevnad, rättvisa löner för personalen och
            smidig integration med Skatteverket för bekymmersfria
            kostnadsreduceringar för konsumenten.
          </p>
        </div>
      </section>

      {/* SECTION 2: COMPANY FOUNDATION & OPERATIONAL HISTORY (Heavy Text Asset) */}
      <section className="py-28 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
        {/* Left Side: Deep Editorial Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
              Vår företagsresa
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight leading-tight">
              Ett fullt licensierat fastighetsbolag byggt på förtroende
            </h2>
          </div>

          <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light">
            Stockholm Clean HB grundades för att fylla ett kritiskt tomrum i den
            lokala städbranschen: behovet av helt transparenta, certifierade och
            förstklassiga fastighetstjänster. Att verka inom Sveriges strikta
            administrativa ramverk kräver mer än bara vanliga städredskap – det
            kräver absolut efterlevnad av arbetssäkerhetsdirektiv,
            professionella miljöskyddsstandarder och rigorösa granskningscykler.
          </p>

          <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light">
            Under årens lopp har vi skalat upp vår verksamhet från specialiserad
            hemstädning till en heltäckande städpartner för företag. Genom att
            kombinera strikta bakgrundskontroller av vår personal, giftfria
            kliniska rengöringsvätskor och skräddarsydda hanteringsmoduler har
            vi blivit den föredragna leverantören för lokala
            fastighetsutvecklare, ägare av lyxlägenheter och företagskomplex
            över hela Stockholms län.
          </p>

          {/* Professional Credentials Checklist Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-xs group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <FaCheck />
              </div>
              <span className="text-sm font-bold text-blue-950">
                Registrerat svenskt handelsbolag
              </span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-xs group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <FaCheck />
              </div>
              <span className="text-sm font-bold text-blue-950">
                Active F-skatt Tax Approvals
              </span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-xs group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <FaCheck />
              </div>
              <span className="text-sm font-bold text-blue-950">
                10M SEK ansvarsförsäkring för företag
              </span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-6 h-6 rounded-lg bg-green-50 text-green-600 flex items-center justify-center text-xs group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <FaCheck />
              </div>
              <span className="text-sm font-bold text-blue-950">
                Mäklarsamfundets städstandard
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Team Visual Frame */}
        <div className="lg:col-span-5 relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500 to-blue-950 rounded-3xl blur-xl opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
            <img
              src={teamImg}
              alt="Stockholm Clean HB Professional Certified Cleaning Staff on Location"
              className="w-full h-auto object-cover transform scale-100 group-hover:scale-102 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
      {/* SECTION 3: STRATEGIC INDUSTRY PERFORMANCE STATS BANNER (SEO Authority Injection) */}
      <section className="bg-[#0D2B5C] text-white py-20 px-6 relative overflow-hidden">
        {/* Abstract background graphics to increase premium aesthetics */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-500 rounded-full filter blur-[100px] opacity-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center relative z-10">
          {/* Stat Box 1 */}
          <div className="space-y-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5">
            <div className="text-4xl md:text-5xl font-black text-amber-400 tracking-tight">
              100%
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-300 font-bold">
              Godkänd för RUT-avdrag
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[200px] mx-auto">
              Automatiserade moduler för Skatteverkets skattehantering är
              konfigurerade på alla kundfakturor.
            </p>
          </div>

          {/* Stat Box 2 */}
          <div className="space-y-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5">
            <div className="text-4xl md:text-5xl font-black text-amber-400 tracking-tight">
              4.9/5
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-300 font-bold">
              Verifierat Google-betyg
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[200px] mx-auto">
              Röstad gång på gång som Stockholms mest pålitliga team för
              fastighetsservice.
            </p>
          </div>

          {/* Stat Box 3 */}
          <div className="space-y-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5">
            <div className="text-4xl md:text-5xl font-black text-amber-400 tracking-tight">
              25+
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-300 font-bold">
              Områden vi täcker i Stockholm
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[200px] mx-auto">
              Fullständig transporttäckning som inkluderar City, Södermalm,
              Täby, Solna och Nacka.
            </p>
          </div>

          {/* Stat Box 4 */}
          <div className="space-y-3 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5">
            <div className="text-4xl md:text-5xl font-black text-amber-400 tracking-tight">
              0%
            </div>
            <div className="text-xs uppercase tracking-widest text-slate-300 font-bold">
              Inga skarpa rengöringsmedel
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-[200px] mx-auto">
              Vi använder exklusivt Svanenmärkta och allergivänliga 
  rengöringsprodukter för alla ytor.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: MISSION, VISION, & SUSTAINABLE VALUE DRIVERS (High Text Density) */}
      <section className="py-28 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center border-b border-slate-200 relative z-10">
        {/* Left Side: Sustainable Materials Image Frame */}
        <div className="lg:col-span-5 order-last lg:order-first relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-green-500/20 to-blue-950/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-4">
            <img
              src={valuesImg}
              alt="Sustainable allergen-free cleaning equipment used by Stockholm Clean HB"
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Right Side: Philosophy Text Pillars */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
              Företagsfilosofi
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight leading-tight">
              Fläckfria arbetsplatser. Återställda miljöer.
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
              Vår verksamhet kretsar kring absolut företagsmässig hållbarhet och 
  etiska arbetsvillkor. Vi anser att professionell fastighetsservice 
  bör skydda både människors hälsa och den lokala biologiska 
  mångfalden samtidigt.
            </p>
          </div>

          {/* Core Pillars Array with Premium Icons */}
          <div className="space-y-8">
            {/* Pillar 1 */}
            <div className="flex gap-5 group/item">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0D2B5C] flex items-center justify-center text-2xl flex-shrink-0 group-hover/item:bg-[#0D2B5C] group-hover/item:text-white transition-all duration-300 border border-slate-100 shadow-sm">
                <FaBullseye />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-blue-950 text-xl tracking-tight">
                  Vårt huvudsakliga uppdrag
                </h4>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                    Att eliminera städrelaterad stress för både privatbostadsägare och 
  företagsledare genom att utforma helt skräddarsydda och mycket 
  flexibla städscheman. Vi ser till att lokala fastigheter underhålls 
  med största noggrannhet samtidigt som vi främjar en ren luftkvalitet.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="flex gap-5 group/item">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0D2B5C] flex items-center justify-center text-2xl flex-shrink-0 group-hover/item:bg-[#0D2B5C] group-hover/item:text-white transition-all duration-300 border border-slate-100 shadow-sm">
                <FaAward />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-blue-950 text-xl tracking-tight">
                  Kompromisslös kvalitetskontroll
                </h4>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                 Vi avvisar genvägar och snabb avtorkning av ytor. Varje städare arbetar med standardiserade checklistor för operativa ändamål som matchar de högsta europeiska hygienstandarderna för fastigheter. Varje tjänst genomgår strikta inspektioner av chefen innan tekniska godkännanden.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="flex gap-5 group/item">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0D2B5C] flex items-center justify-center text-2xl flex-shrink-0 group-hover/item:bg-[#0D2B5C] group-hover/item:text-white transition-all duration-300 border border-slate-100 shadow-sm">
                <FaHandshake />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-blue-950 text-xl tracking-tight">
                  Pålitlig finansiell transparens
                </h4>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                  Ärliga företagspolicyer styr våra ekonomiska affärer. Från omedelbara online-verktyg för uppskattning till säker, direkt elektronisk fakturering som hanterar skatteförmåner transparent, håller vi våra villkor tydliga utan dolda administrativa marginaler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 5: FOUR-STEP SYSTEMATIC OPERATIONAL WORKFLOW */}
      <section className="bg-slate-200/60 py-28 px-6 border-b border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
              Operativ färdplan
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight text-center leading-tight">
              Så säkrar vi kvaliteten
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-light">
              En mycket optimerad, transparent servicepipeline utformad för att eliminera administrativa förseningar och säkerställa absolut rengöringsnoggrannhet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 relative group">
              <div className="text-4xl font-black text-slate-100 absolute top-4 right-4 group-hover:text-amber-500/10 transition-colors duration-300 select-none">
                01
              </div>
              <h4 className="font-extrabold text-blue-950 text-lg md:text-xl pr-8 tracking-tight">
                Direkt digital bokning
              </h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                Skicka in dina strukturella areakoordinater, kvadratmeter, och välj dina önskade datum via våra säkra online- behandlingskanaler.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 relative group">
              <div className="text-4xl font-black text-slate-100 absolute top-4 right-4 group-hover:text-amber-500/10 transition-colors duration-300 select-none">
                02
              </div>
              <h4 className="font-extrabold text-blue-950 text-lg md:text-xl pr-8 tracking-tight">
                Automatisk skattelättnad
              </h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                Vår interna faktureringsprogramvara ansluter till Skatteverkets noder för att automatiskt dra av 50 % av totala arbetskostnader direkt.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 relative group">
              <div className="text-4xl font-black text-slate-100 absolute top-4 right-4 group-hover:text-amber-500/10 transition-colors duration-300 select-none">
                03
              </div>
              <h4 className="font-extrabold text-blue-950 text-lg md:text-xl pr-8 tracking-tight">
                Miljöcertifierad polering
              </h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                Kontrollerade fastighetsskötare anländer utrustade med Svanencertifierade material för att hantera layouten systematiskt.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 relative group">
              <div className="text-4xl font-black text-slate-100 absolute top-4 right-4 group-hover:text-amber-500/10 transition-colors duration-300 select-none">
                04
              </div>
              <h4 className="font-extrabold text-blue-950 text-lg md:text-xl pr-8 tracking-tight">
                48-timmars fripass
              </h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                Inspektera din layout. Om något hörn inte uppfyller perfekta utförandemått, rengör vårt team det omedelbart utan några extra avgifter.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 6: CONCLUDING FOOT-PAGE VALUE DRIVER & COMPONENT CLOSURE */}
      <section className="py-32 px-6 text-center max-w-5xl mx-auto space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0D2B5C] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl border border-slate-100">
          ✨ Förstklassig kontinuitet i verksamheten sedan dag ett
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight leading-tight max-w-3xl mx-auto">
          Så gör vi för att ge dig en perfekt service
        </h2>

        <p className="text-slate-500 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto font-light">
          Följ hundratals privata husägare, fastighetsmäklare och företagsförvaltare över hela Stockholm som litar på Stockholm Clean HB för perfekta, försäkrade och pålitliga städscheman.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
          <a
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-blue-950 font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-amber-500/10 hover:bg-amber-400 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Boka verifierad personal
          </a>
          <a
            href="/services"
            className="w-full sm:w-auto px-8 py-4 bg-white text-blue-950 font-bold text-sm uppercase tracking-wider rounded-xl border border-slate-200 hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Se våra checklistor
          </a>
        </div>
      </section>
    </div>
  );
};
export default About;
