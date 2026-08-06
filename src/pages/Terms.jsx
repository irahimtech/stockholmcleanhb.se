import React from "react";
import {
  FaMagic,
  FaShieldAlt,
  FaBalanceScale,
  FaHandshake,
  FaFileInvoiceDollar,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";

const Terms = () => {
  return (
    <div className="bg-slate-50 font-sans text-gray-700 antialiased overflow-hidden pt-20">
      {/* SECTION 1: TERMS & CONDITIONS HERO BANNER (Highly Visible Legal Context) */}
      <section className="relative bg-gradient-to-r from-[#0D2B5C] to-blue-900 text-white pt-24 pb-28 px-6 border-b-4 border-amber-500">
        {/* Floating Magic Decor Element */}
        <div className="absolute top-12 right-12 text-amber-400 text-4xl opacity-20 animate-pulse">
          <FaMagic />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl border border-amber-500/30 backdrop-blur-md">
            <FaMagic className="animate-pulse text-amber-400" /> Stockholm Clean
            HB Juridiska Regler{" "}
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Användarvillkor & Kommersiella villkor
            <br />
            <span className="text-amber-400">Operationella villkor</span>
          </h1>

          <p className="text-base md:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            Vänligen granska noggrant de bindande företagsparametrarna,
            faktureringsramarna och strukturella avbokningsreglerna som styr
            alla underhållstjänster för bostäder och kommersiella fastigheter
            som utförs av Stockholm Clean HB i Sverige.{" "}
          </p>

          <div className="text-xs text-slate-300 font-medium border-t border-white/10 pt-4 max-w-md mx-auto">
            Giltighetstid: Uppdaterad för verksamhetsansvar under nuvarande
            år{" "}
          </div>
        </div>
      </section>

      {/* SECTION 2: CORPORATE IDENTIFICATION, F-SKATT REGULATION & RUT TAX TERMS */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Summary Box matching your footer theme */}
          <div className="lg:col-span-4 bg-[#0D2B5C] text-white p-8 rounded-3xl shadow-xl space-y-6 border border-blue-950">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl">
              <FaBalanceScale />
            </div>
            <h3 className="text-xl font-black uppercase tracking-wide text-amber-400">
              Legal Registration
            </h3>
            <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed">
              Stockholm Clean HB operates as a fully incorporated commercial
              property care entity inside Stockholm County, Sweden. All active
              cleaning blueprints, single bookings, or recurring corporate
              subscription frameworks are strictly bound to these standard
              operational guidelines.
            </p>
            <div className="text-xs font-bold text-slate-200 bg-white/5 border border-white/10 p-4 rounded-xl space-y-2">
              <p>• Organisation Number: XXXXXX-XXXX</p>
              <p>• Corporate Status: Approved for F-skatt</p>
              <p>• Administrative Location: Stockholm, SE</p>
            </div>
          </div>

          {/* Right Heavy Content Text Block */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <FaMagic className="text-amber-500 animate-pulse" /> Avsnitt 1.0
                Allmänna bestämmelser
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-blue-950 tracking-tight">
                Bindande rättsligt ramverk & Regler för 30% rabatt{" "}
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light">
              <p>
                <strong>1.1 Avtalsenligt samtycke:</strong> Genom att använda
                den lokala elektroniska behandlingsterminalen på{" "}
                <span className="font-semibold text-blue-950">
                  stockholmcleanhb.se
                </span>
                , skicka in ett formulär för online-prissättning eller
                underteckna ett löpande städavtal, ger du ditt fullständiga
                samtycke till att juridiskt omfattas av dessa allmänna villkor.
              </p>

              <p>
                <strong>1.2 Krav för direktrabatt (30 %):</strong> För privata
                konsumentavtal tillämpar Stockholm Clean HB en direkt rabatt på
                30 % på arbetskostnaden direkt på tjänstefakturan via våra
                interna system. Det är helt och hållet kundens eget ansvar att
                kontrollera att de uppfyller villkoren för att erhålla denna
                rabatt under innevarande år.
              </p>

              <p>
                <strong>
                  1.3 Korrigering av faktura vid felaktiga uppgifter:
                </strong>{" "}
                Om rabatten inte kan tillämpas på grund av felaktiga
                personuppgifter eller om kunduppgifterna är ogiltiga,
                förbehåller sig Stockholm Clean HB den uttryckliga lagliga
                rätten att fakturera det återstående beloppet på 30 % direkt
                till kundens konto. Denna korrigerande faktura måste betalas
                inom tio (10) arbetsdagar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: BILLING STRUCTURES, PAYMENT WINDOWS & MOMS COMPLIANCE */}
      <section className="bg-slate-100 py-20 px-6 border-y border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Text Block */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <FaMagic className="text-amber-500 animate-pulse" /> Section 2.0
                Finansiella villkor
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-blue-950 tracking-tight">
                Faktureringsprotokoll, dröjsmålsränta & lagar om mervärdesskatt
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light">
              <p>
                <strong>2.1 Tillämpning av MOMS (mervärdesskatt):</strong> Alla
                standardmässiga kommersiella B2B-avtalsofferter som utfärdas via
                våra nätverk anges standardmässigt exklusive svensk
                mervärdesskatt (moms), vilken tillämpas med den lagstadgade
                skattesatsen på 25 % på den slutliga faktureringen. Offerter
                till privata privatkonsumenter visas uttryckligen inklusive
                moms, såvida inte annat anges.
              </p>

              <p>
                <strong>2.2 Standardiserade betalningsvillkor:</strong>{" "}
                Standardmässiga elektroniska fakturor till företag som genereras
                av Stockholm Clean HB har en strikt förfallotid på fjorton (14)
                kalenderdagar netto från det ursprungliga faktureringsdatumet.
                Storskaliga byggprojekt eller anpassade företagsavtal kan
                konfigureras med anpassade trettio (30) dagars betalningsvillkor
                efter godkänd kreditprövning.
              </p>

              <p>
                <strong>
                  2.3 Konsekvenser vid försenad betalning (Dröjsmålsränta):
                </strong>{" "}
                Betalningar som sker efter det angivna förfallodatumet är
                lagstadgat föremål för dröjsmålsränta i enlighet med den svenska
                räntelagen. En lagstadgad påminnelseavgift på för närvarande 60
                SEK kommer automatiskt att läggas till det utestående saldot,
                tillsammans med tillämpliga villkor för inkassohantering.
              </p>
            </div>
          </div>

          {/* Right Highlight Box matching your theme */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl shadow-xl space-y-6 border border-slate-200">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-2xl shadow-sm">
              <FaFileInvoiceDollar />
            </div>
            <h3 className="text-xl font-black text-blue-950 tracking-tight">
              Finansiell tidslinje
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Vi tillämpar strikta efterlevnadsparametrar gällande våra
              kommersiella faktureringscykler för att säkerställa en oavbruten
              tjänsteleverans för alla aktiva företagsprofiler.
            </p>
            <ul className="space-y-3 text-xs font-bold text-slate-700 border-t border-slate-100 pt-4">
              <li className="flex items-center gap-2 text-blue-950">
                ✓{" "}
                <strong>
                  Betalningsvillkor för privatkunder: 5 dagar netto
                </strong>
              </li>
              <li className="flex items-center gap-2 text-blue-950">
                ✓ <strong>B2B-fakturering för företag: 10 dagar netto</strong>
              </li>
              <li className="flex items-center gap-2 text-blue-950">
                ✓{" "}
                <strong>
                  Lagstadgad påminnelseavgift: 100 SEK fast avgift
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4: CANCELLATION POLICIES, RESCHEDULING WINDOWS & SERVICE ACCESS */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Feature Summary Box matching your theme */}
          <div className="lg:col-span-4 bg-[#0D2B5C] text-white p-8 rounded-3xl shadow-xl space-y-6 border border-blue-950">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl">
              <FaClock />
            </div>
            <h3 className="text-xl font-black uppercase tracking-wide text-amber-400">
              Tidslinje kontroller
            </h3>
            <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed">
              För att hålla våra mobila serviceteam i rullning utan avbrott i
              Stockholms alla kommuner, tillämpar vi standardiserade
              administrativa tidsgränser för alla ombokningar eller operativa
              tillträden.
            </p>
            <div className="text-xs font-bold text-slate-200 bg-white/5 border border-white/10 p-4 rounded-xl space-y-2">
              <p>• Minsta avbokningstid: 24 timmar</p>
              <p>• Sen avbokningsavgift: 100 % arbetskostnad</p>
              <p>• Tidsfönster för tillträde: 30 minuters gräns</p>
            </div>
          </div>

          {/* Right Heavy Content Text Block */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <FaMagic className="text-amber-500 animate-pulse" /> Avsnitt 3.0
                Verksamhetsgränser
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-blue-950 tracking-tight">
                Avbokningsvillkor, regler för tillträde & utelåsningsavgifter
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light">
              <p>
                <strong>3.1 24-timmars varsel för ombokning:</strong> Kunder
                behåller rätten att ändra, skjuta upp eller avboka en schemalagd
                fastighetsskötsel helt kostnadsfritt, förutsatt att
                ändringsbegäran registreras hos vår centrala supportavdelning
                via telefon eller e-post minst{" "}
                <span className="font-semibold text-blue-950">
                  tjugofyra (24) timmar
                </span>{" "}
                före det angivna servicetillfället.
              </p>

              <p>
                <strong>3.2 Straffavgifter vid sen avbokning:</strong> Om ett
                servicepass avbokas eller ombokas inom den administrativa
                tidsgränsen på tjugofyra (24) timmar, förbehåller sig Stockholm
                Clean HB den uttryckliga rätten att debitera upp till{" "}
                <span className="font-semibold text-blue-950">
                  100 % av de totalt beräknade arbetskostnaderna
                </span>
                . Denna strukturella policy kompenserar våra certifierade
                lokalvårdare för deras schemalagda arbetspass.
              </p>

              <p>
                <strong>
                  3.3 Protokoll för fastighetstillträde (Utelåsning):
                </strong>{" "}
                Kunden måste se till att våra lokalvårdare har obehindrat
                tillträde till den aktuella fastigheten vid det angivna
                ankomstfönstret (via nyckelhantering, portkoder eller närvaro på
                plats). Om vår personal blir utelåst och inte kan få tillträde
                inom en tidsgräns på trettio (30) minuter, kommer passet att
                avbrytas som en sen utelåsning, vilket medför standardmässiga
                grundfaktureringsavgifter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INSURANCE CLAUSES, LIABILITY BOUNDARIES & COMPONENT CLOSURE */}
      <section className="bg-slate-100 py-20 px-6 border-t border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Text Block */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <FaMagic className="text-amber-500 animate-pulse" /> Avsnitt 4.0
                Egendomsskydd
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-blue-950 tracking-tight">
                Trygg Hansa försäkringsskydd & kommersiella ansvarsbegränsningar
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light">
              <p>
                <strong>4.1 Högsta ansvarsförsäkringsskydd:</strong> Stockholm
                Clean HB innehar en aktiv och omfattande kommersiell
                ansvarsförsäkring för tredje part via Trygg Hansa upp till{" "}
                <span className="font-semibold text-blue-950">
                  10 000 000 SEK
                </span>
                . Denna strukturella policy är till för att täcka verifierade
                fysiska invändiga skador, strukturella ytskador eller materiella
                förluster som direkt orsakats av vår personal under pågående
                städpass.
              </p>

              <p>
                <strong>4.2 Ansvarsfriskrivning för befintliga skador:</strong>{" "}
                Vårt företag tar inget verksamhetsansvar eller betalningsansvar
                för oavsiktliga materiella fel som härrör från befintligt
                strukturellt slitage, åldrande infrastrukturinstallationer, ej
                förankrade ömtåliga väggramskonstruktioner eller ytor som är
                kemiskt skadade innan vårt team anländer till platsen.
              </p>

              <p>
                <strong>4.3 48-timmars tidsgräns för skadeanmälan:</strong> Alla
                driftsolyckor, invändiga skadeanmälningar eller tvister gällande
                städkvalitet måste formellt registreras hos vår centrala
                arbetsledare inom{" "}
                <span className="font-semibold text-blue-950">
                  fyrtioåtta (48) timmar
                </span>{" "}
                från det att arbetspasset avslutades. Skadeanmälningar som
                inkommer utanför denna tidsram förbigår interna
                granskningsprocesser och blir juridiskt ogiltiga.
              </p>
            </div>
          </div>

          {/* Right Summary Box matching your footer theme */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl shadow-xl space-y-6 border border-slate-200">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-2xl shadow-sm">
              <FaExclamationTriangle />
            </div>
            <h3 className="text-xl font-black text-blue-950 tracking-tight">
Riktlinjer för skadeanmälan            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Vänligen respektera strikt vår tidsram på 48 timmar för skadeanmälan för att 
  säkerställa giltiga processindex för strukturellt försäkringsskydd enligt 
  standardmässiga svenska riktlinjer för företagsförsäkringar.
            </p>
            <div className="pt-4 border-t border-slate-100 text-center">
              <a
                href="/contact"
                className="inline-block w-full px-5 py-3 bg-[#0D2B5C] text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-amber-500 hover:text-blue-950 transition-all duration-300 shadow-md"
              >
                Kontakta juridisk support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
