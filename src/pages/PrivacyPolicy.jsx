import React from "react";
import {
  FaMagic,
  FaShieldAlt,
  FaLock,
  FaEye,
  FaDatabase,
  FaUserCheck,
  FaUserShield,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 font-sans text-gray-700 antialiased overflow-hidden pt-20">
      {/* SECTION 1: PRIVACY POLICY HERO BANNER (High Visibility Trust Factor) */}
      <section className="relative bg-gradient-to-r from-[#0D2B5C] to-blue-900 text-white pt-24 pb-28 px-6 border-b-4 border-amber-500">
        {/* Floating Magic Decor Element */}
        <div className="absolute top-12 right-12 text-amber-400 text-4xl opacity-20 animate-pulse">
          <FaMagic />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl border border-amber-500/30 backdrop-blur-md">
            <FaMagic className="animate-pulse text-amber-400" /> Efterlevnad av
            EU:s dataskyddsförordning (GDPR)
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Integritetspolicy & ramverk för <br />
            <span className="text-amber-400">skydd av personuppgifter</span>
          </h1>

          <p className="text-base md:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            Hos Stockholm Clean HB behandlar vi dina personuppgifter och
            kommersiella koordinater med absolut transparens och högsta
            säkerhetsstandard, i strikt enlighet med EU:s allmänna
            dataskyddsförordning (GDPR).
          </p>

          <div className="text-xs text-slate-300 font-medium border-t border-white/10 pt-4 max-w-md mx-auto">
            Datasäkerhetsmatris: Konfigurerad för säkra svenska hushållstjänster
          </div>
        </div>
      </section>

      {/* SECTION 2: DATA COLLECTION METRICS & STRUCTURAL PROCESSING PROFILES */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Summary Box matching your footer theme */}
          <div className="lg:col-span-4 bg-[#0D2B5C] text-white p-8 rounded-3xl shadow-xl space-y-6 border border-blue-950">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl">
              <FaDatabase />
            </div>
            <h3 className="text-xl font-black uppercase tracking-wide text-amber-400">
              Dataintegritet
            </h3>
            <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed">
              Stockholm Clean HB tillämpar strikt en strategi för minimal
              loggning av information. Vi sparar endast de absolut nödvändiga
              operativa uppgifter som krävs för att beräkna säkra
              faktureringsflöden eller skicka ut våra mobila lokalvårdare på ett
              smidigt sätt.
            </p>
            <div className="text-xs font-bold text-slate-200 bg-white/5 border border-white/10 p-4 rounded-xl space-y-2">
              <p>• Spårningspolicy: 100 % transparent</p>
              <p>• Tredjepartsdelning: Absolut noll</p>
              <p>• Krypteringsklass: SSL-säkrad</p>
            </div>
          </div>

          {/* Right Heavy Content Text Block */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <FaMagic className="text-amber-500 animate-pulse" /> Avsnitt 1.0
                Datakategorier
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-blue-950 tracking-tight">
                Personliga & kommersiella uppgifter vi systematiskt behandlar
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light">
              <p>
                <strong>1.1 Data från aktiva formulärinsändningar:</strong> När
                privata konsumenter eller representanter för kommersiella
                företag skickar in en förfrågan om prisofert online på{" "}
                <span className="font-semibold text-blue-950">
                  stockholmcleanhb.se
                </span>
                , registrerar våra system säkert uttryckliga
                identifieringsuppgifter, inklusive fullständiga namn,
                företagsenheter, aktiva telefonnummer, e-postadresser och
                specifika parametrar för fastighetens storlek i kvadratmeter.
              </p>

              <p>
                <strong>1.2 Geografiska lokaliseringsramverk:</strong> För att effektivt 
          konfigurera ruttplaner för våra mobila servicebilar lagrar vi strukturella 
          fastighetskoordinater, portkoder och postnummer. Dessa variabler behandlas 
          exklusivt inom våra säkra interna schemaläggningsmoduler.
              </p>

              <p>
                <strong>1.3 Verifiering av företagsrabatt och kampanjer:</strong> För 
          hushållskonton som använder vår direkta företagsrabatt på 30 %, registrerar 
          vår backend-motor relevanta kundidentitetsmått för att hantera giltigheten av 
          kampanjkraven. Dessa data hanteras via isolerade säkerhetslinjer av bankklass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DATA ENCRYPTION, RETENTION FRAMEWORKS & STORAGE SECURITY */}
      <section className="bg-slate-100 py-20 px-6 border-y border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Text Block */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <FaMagic className="text-amber-500 animate-pulse" /> Avsnitt 2.0 Säkerhetsprotokoll
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-blue-950 tracking-tight">
          SSL-skyddslager, automatiserad granskning & dataisolering
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light">
              <p>
                <strong>2.1 Krypterad SSL-överföring (Secure Socket Layer):</strong> Alla 
          datapaket, bokningsuppgifter och kontaktuppgifter för användare som överförs 
          via våra nätverk är standardmässigt krypterade med avancerade 256-bitars 
          SSL-algoritmer. Detta skyddsramverk skyddar data mot obehörig avlyssning 
          eller strukturella läckor under överföringen.
              </p>

              <p>
                 <strong>2.2 Lagringsperioder och tidsgränser:</strong> Stockholm Clean HB 
          tillämpar strikta gallringsrutiner för all aktiv klientinformation. Personuppgifter, 
          fastighetsstorlek i kvadratmeter och faktureringsposter lagras säkert endast under 
          den direkta tid som krävs för att slutföra affärsverksamheten eller uppfylla 
          lagstadgade krav enligt svensk bokförings- och skattelagstiftning.
              </p>

              <p>
                <strong>2.3 Isolerad databaslagring:</strong> Dina insamlade företagsuppgifter 
          och geografiska fastighetskartor lagras i mycket säkra, isolerade molnservermiljöer 
          konfigurerade med brandväggar och intrångsskydd. Anställdas tillgång är strikt 
          begränsad genom rollbaserade behörighetstokens för att förhindra interna 
          strukturella säkerhetsfel.
              </p>
            </div>
          </div>

          {/* Right Highlight Box matching your theme */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl shadow-xl space-y-6 border border-slate-200">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-2xl shadow-sm">
              <FaLock />
            </div>
            <h3 className="text-xl font-black text-blue-950 tracking-tight">
                      Säkerhetstidslinje

            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
             Vi tillämpar säkerhetskontroller av företagsklass gällande våra digitala 
        plattformar för och att upprätthålla en ren och trygg integritetsmiljö 
        för alla lokala kunder i Stockholm.
            </p>
            <ul className="space-y-3 text-xs font-bold text-slate-700 border-t border-slate-100 pt-4">
              <li className="flex items-center gap-2 text-blue-950">
                ✓ Kryptering: 256-bitars SSL-säkrad
              </li>
              <li className="flex items-center gap-2 text-blue-950">
                ✓ Åtkomstregel: Rollbaserad behörighet
              </li>
              <li className="flex items-center gap-2 text-blue-950">
                ✓ Lagringsnoder: Brandväggsskyddade servrar
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 4: YOUR RIGHTS UNDER GDPR & DATA DELETION FRAMEWORKS */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Feature Summary Box matching your theme */}
          <div className="lg:col-span-4 bg-[#0D2B5C] text-white p-8 rounded-3xl shadow-xl space-y-6 border border-blue-950">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl">
              <FaUserShield />
            </div>
            <h3 className="text-xl font-black uppercase tracking-wide text-amber-400">
        Användarrättigheter
            </h3>
            <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed">
              Under europeiska integritetsregler behåller du fullständig strukturell 
        kontroll över dina personuppgifter. Våra supportkanaler hanterar begäranden 
        om datautdrag, korrigering och radering med absolut prioritet.
            </p>
            <div className="text-xs font-bold text-slate-200 bg-white/5 border border-white/10 p-4 rounded-xl space-y-2">
          <p>• Dataexportfönster: Max 30 dagar</p>
        <p>• Korrigeringskörning: Omedelbart</p>
        <p>• Radering (Rätten att bli glömd): Absolut</p>
            </div>
          </div>

          {/* Right Heavy Content Text Block */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <FaMagic className="text-amber-500 animate-pulse" /> Avsnitt 3.0 Efterlevnadsrättigheter
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-blue-950 tracking-tight">
          Begäran om tillgång till data, korrigeringsregler & klausuler om fullständig radering

              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light">
              <p>
                <strong>3.1 Rätt till tillgång & dataportabilitet:</strong> Alla 
          registrerade konsumenter och B2B-avtalsinnehavare i Stockholm behåller den 
          uttryckliga lagliga rätten att begära ett omfattande digitalt utdrag av alla 
          personliga identifieringsnoder eller faktureringsplatser som för närvarande 
          bevaras i våra servermoduler. Dessa informationspaket kommer att sammanställas 
          och exporteras inom{" "}
          <span className="font-semibold text-blue-950">
            trettio (30) dagar
          </span>{" "}
          helt kostnadsfritt.
              </p>

              <p>
                <strong>3.2 Rätt till rättelse & uppdatering:</strong> Om dina aktiva 
          kontaktuppgifter, e-postadresser, postkoordinater eller företagsuppgifter 
          ändras, behåller du den fulla rätten att skicka en uppdateringsbegäran till vår 
          supportavdelning. Vårt team för systemjusteringar uppdaterar historiska 
          faktureringsposter och tjänstespårare omedelbart efter verifiering.
              </p>

              <p>
                <strong>3.3 Rätt till radering (Rätten att bli glömd):</strong>{" "}
          Du behåller den absoluta lagliga rätten att kräva fullständig radering och 
          borttagning av alla dina personliga filer från våra primära nätverk. Observera 
          att data som krävs för att följa lagstadgade svenska bokföringslagar 
          (Bokföringslagen) inte kan raderas förrän de lagstadgade tidsgränserna för 
          lagring har löpt ut.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 5: COOKIE INFRASTRUCTURE, DPO CONTACT COORDINATES & COMPONENT CLOSURE */}
      <section className="bg-slate-100 py-20 px-6 border-t border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Text Block */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
                <FaMagic className="text-amber-500 animate-pulse" /> Avsnitt 4.0 Spårningskontroller
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-blue-950 tracking-tight">
                          Ramverk för kakor (Cookies) & dedikerade kontaktlinjer till dataskyddsombud

              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-light">
              <p>
                <strong>4.1 Användning av kakor (Cookies):</strong> Den elektroniska 
          infrastrukturportalen på{" "}
          <span className="font-semibold text-blue-950">
            stockholmcleanhb.se
          </span>{" "}
          använder funktionella spårningsfiler (kakor/cookies) för att optimera 
          användarsessioner, komma ihåg systemval och samla in anonym layoutanalys [4.1]. 
          Du har absolut frihet att helt inaktiverka konfigurationer för kakor via 
          din webbläsares sekretessinställningar [4.1].
              </p>

              <p>
                <strong>4.2 Dynamic Policy Updates:</strong> Stockholm Clean HB
                maintains the explicit legal right to modify this personal data
                security framework to adapt to updated Scandinavian corporate
                legislations, server security improvements, or EU GDPR framework
                amendments. Structural modifications are displayed instantly
                across our system pages.
              </p>

              <p>
              <strong>4.3 Dataskyddsombudets (DPO) arbetsyta:</strong> För alla juridiska 
          förfrågningar gällande integritetsparametrar, aktiva registerutdrag eller 
          begäran om fullständig radering, kontakta vår dataskyddsansvariga direkt via 
          företagets e-postadress:{" "}
          <a
            href="mailto:info@stockholmcleanhb.se"
            className="text-[#0D2B5C] font-semibold hover:underline"
          >
            info@stockholmcleanhb.se
          </a>
          .
              </p>
            </div>
          </div>

          {/* Right Summary Box matching your footer theme */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl shadow-xl space-y-6 border border-slate-200">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-2xl shadow-sm">
              <FaUserCheck />
            </div>
            <h3 className="text-xl font-black text-blue-950 tracking-tight">
              Dataskydd
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Vänligen se över dina tekniska val gällande aktiva spårningsprofiler i webbläsaren 
        för att säkerställa en smidig och säker interaktion med vårt system.
            </p>
            <div className="pt-4 border-t border-slate-100 text-center">
              <a
                href="/contact"
                className="inline-block w-full px-5 py-3 bg-[#0D2B5C] text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-amber-500 hover:text-blue-950 transition-all duration-300 shadow-md"
              >
                Kontakta dataskyddsombudet
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
