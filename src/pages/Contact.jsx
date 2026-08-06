import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaMagic,
  FaShieldAlt,
  FaPercent,
  FaCheckCircle,
} from "react-icons/fa";

// Image asset matching your layout pattern
import contactHeroBg from "../assets/contact-hero-stockholm.jpg";

const Contact = () => {
  return (
    <div className="bg-slate-50 font-sans text-gray-700 antialiased overflow-hidden pt-20">
      {/* SECTION 1: CONTACT HERO BANNER (High Visibility & Clear Messaging) */}
      <section
        className="relative bg-gradient-to-r from-[#0D2B5C] to-blue-900 text-white pt-28 pb-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(13, 43, 92, 0.95), rgba(30, 58, 138, 0.85)), url(${contactHeroBg})`,
        }}
      >
        {/* Decorative Magic Icon Node */}
        <div className="absolute top-12 right-12 text-amber-400 text-4xl opacity-20 animate-pulse">
          <FaMagic />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl border border-amber-500/30 backdrop-blur-md">
            <FaMagic className="animate-pulse text-amber-400" /> Snabba svar på
            din bokning
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Låt oss göra rent hos dig <br />
            <span className="text-amber-400">
              Cleaning Transformation Today
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
            Har du frågor om våra checklistor, priser eller vår direkt-rabatt på
            30%? Kontakta Stockholm Clean HB:s kundtjänst direkt. Vårt team
            svarar dig mycket snabbt och hjälper dig vidare.
          </p>

          <p className="text-xs md:text-sm text-slate-300 max-w-xl mx-auto font-normal border-t border-white/10 pt-6">
            Vi har öppet dygnet runt för akuta städningar åt företag och
            schemalagd hemstädning på helger i hela Stockholm.
          </p>
        </div>
      </section>

      {/* SECTION 2: DIRECT CONTACT CHANNELS & CORPORATE CREDENTIALS */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
            <FaMagic className="text-amber-500 animate-pulse" /> Immediate
            Channels
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight leading-tight">
            Kontakta oss direkt och se våra öppettider
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-light">
            Slipp väntetid. Ring eller mejla oss direkt för att boka en tid, få
            ett gratis prisförslag eller ändra din bokning.
          </p>
        </div>

        {/* 4-Column Professional Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Phone */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-2xl group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
              <FaPhoneAlt />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-blue-950 text-lg md:text-xl tracking-tight">
                Ring oss
              </h4>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                Svar direkt
              </p>
              <a
                href="tel:+46721516306"
                className="block text-blue-950 font-black text-lg hover:text-amber-500 transition-colors pt-2"
              >
                +46 72 1516306
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0D2B5C] flex items-center justify-center text-2xl group-hover:bg-[#0D2B5C] group-hover:text-white transition-all duration-300">
              <FaEnvelope />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-blue-950 text-lg md:text-xl tracking-tight">
                Mejla oss
              </h4>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                Pris och offert
              </p>
              <a
                href="mailto:info@stockholmcleanhb.se"
                className="block text-blue-950 font-black text-sm md:text-base hover:text-amber-500 transition-colors pt-2 break-all"
              >
                info@stockholmcleanhb.se
              </a>
            </div>
          </div>

          {/* Card 3: Address */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0D2B5C] flex items-center justify-center text-2xl group-hover:bg-[#0D2B5C] group-hover:text-white transition-all duration-300">
              <FaMapMarkerAlt />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-blue-950 text-lg md:text-xl tracking-tight">
                Vårt kontor
              </h4>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                Stockholm, Sweden
              </p>
              <p className="text-blue-950 font-extrabold text-sm pt-2 leading-relaxed">
                Storskiftesvägen 180, Norsborg, <br />
                145 60 Stockholm, Sweden
              </p>
            </div>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-4 group">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-2xl group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
              <FaClock />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-blue-950 text-lg md:text-xl tracking-tight">
                Öppettider
              </h4>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                Kundtjänst
              </p>
              <p className="text-blue-950 font-extrabold text-sm pt-2 leading-relaxed">
                Mån - Fre: 08:00 - 17:00 <br />
                Lör - Sön: Stängt
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Trust Anchors (Org.nr Matching Footer Style) */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-100 border border-slate-200 text-center flex flex-col sm:flex-row justify-center items-center gap-4 text-xs font-bold text-slate-500">
          <span>✓ Organisationsnummer: 969804-5573</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>✓ Godkänd för F-skatt</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>✓ Säker moms-fakturering</span>
        </div>
      </section>

      {/* SECTION 3: PREMIUM INTUITIVE QUOTE FORM & SOCIAL CONNECT GRID */}
      <section className="bg-slate-200/40 py-24 px-6 border-t border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Block: High Conversion Quote Input Engine */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200/60">
            <div className="space-y-2 mb-8">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/20 px-3 py-2 rounded-md">
                Säker hantering
              </span>
              <h3 className="text-2xl md:text-3xl mt-4 font-black text-blue-950 tracking-tight">
                Få ett gratis prisförslag för din städning
              </h3>
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                Fyll i dina uppgifter nedan. Vårt system räknar ut ett bra pris
                för marknaden i Stockholm, med din direkt-rabatt på 30% inräknad
                på en gång.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
                    Fullständigt namn/ Företagsnamn
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Lars Andersson"
                    className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
                    E-postadress
                  </label>
                  <input
                    type="email"
                    placeholder="e.g., lars@domain.se"
                    className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g., 070 123 45 67"
                    className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
                    Postnummer
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 112 44"
                    className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
                    Välj typ av städning
                  </label>
                  <select className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-bold text-blue-950 focus:outline-none focus:bg-white focus:border-blue-950 transition-colors">
                    <option>Flyttstädning (Move-Out Cleaning)</option>
                    <option>Kontorsstädning (Office Cleaning)</option>
                    <option>Hemstädning (Residential Cleaning)</option>
                    <option>Slutstädning (Final Cleaning)</option>
                    <option>Akut städning (24/7 Emergency Cleaning)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
                    Storlek på bostad (Sqm)
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 75"
                    className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2 tracking-wide">
                  Egna önskemål eller meddelande
                </label>
                <textarea
                  rows="4"
                  placeholder="Skriv här om du har speciella önskemål, husdjur, portkod eller önskade datum för städningen..."
                  className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-950 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#0D2B5C] text-white font-black text-sm uppercase tracking-widest rounded-xl hover:bg-amber-500 hover:text-blue-950 hover:shadow-xl transition-all duration-300"
              >
                Skicka förfrågan säkert
              </button>
            </form>
          </div>

          {/* Right Block: Professional Social Connect & Trust Layout */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0D2B5C] text-white p-8 rounded-3xl shadow-xl space-y-6">
              <h4 className="text-xl font-black uppercase tracking-wide text-amber-400">
                Följ oss på sociala medier
              </h4>
              <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed">
                Följ Stockholm Clean HB på våra sociala medier för att se videor
                från när vi städar, våra moderna maskiner, smarta städtips och
                extra bra rabatter.
              </p>

              {/* Exact 2-Column Grid Layout Matching Footer Structure For Continuity */}
              <div className="grid grid-cols-2 gap-8 text-xs pt-6">
               
                <a
                  href="https://facebook.com/stockholmcleanhb"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 bg-white hover:bg-blue-600 text-slate-700 hover:text-white rounded-lg border border-slate-200 shadow-sm transition-all duration-300 font-bold"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>{" "}
                  Facebook
                </a>
                <a
                  href="https://instagram.com/stockholmcleanhb"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 bg-white hover:bg-pink-600 text-slate-700 hover:text-white rounded-lg border border-slate-200 shadow-sm transition-all duration-300 font-bold"
                >
                  <span className="w-2 h-2 rounded-full bg-pink-500"></span>{" "}
                  Instagram
                </a>

               

                <a
                  href="https://www.tiktok.com/@stockholmcleanhb"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 bg-white hover:bg-black text-slate-700 hover:text-white rounded-lg border border-slate-200 shadow-sm transition-all duration-300 font-bold"
                >
                  <span className="w-2 h-2 rounded-full bg-slate-800"></span>{" "}
                  TikTok
                </a>

                <a
                  href="https://twitter.com/stockholmcleanhb"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 bg-white  hover:bg-black text-slate-700 hover:text-white rounded-lg border border-slate-200 shadow-sm transition-all duration-300 font-bold"
                >
                  <span className="w-2 h-2 rounded-full bg-black"></span> Twiter
                </a>

                <a
                  href="https://www.youtube.com/@stockholmcleanhb"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 bg-white  hover:bg-red-600 text-slate-700 hover:text-white rounded-lg border border-slate-200 shadow-sm transition-all duration-300 font-bold"
                >
                  <span className="w-2 h-2 rounded-full bg-red-800"></span>{" "}
                  Youtube
                </a>

                <a
                  href="https://maps.app.goo.gl/KJFdcsEpTCtJZjAFA"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 bg-white hover:bg-amber-500 text-slate-700 hover:text-white rounded-lg border border-slate-200 shadow-sm transition-all duration-300 font-bold"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>{" "}
                  Google
                </a>

              </div>
            </div>

            {/* Direct Value Injection Panel */}
            <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-md space-y-5">
              <h4 className="font-extrabold text-blue-950 text-lg tracking-tight">
                Our Operational Assurances
              </h4>
              <div className="space-y-3.5 text-xs text-slate-500">
                <div className="flex items-start gap-3 pt-2">
                  <FaCheckCircle className="text-green-500 text-sm mt-0.5 flex-shrink-0" />
                  <span className="tracking-wider">
                    <strong className="text-blue-950 tracking-widest font-bold">
                      Svar inom 2 timmar:{" "}
                    </strong>{" "}
                    Våra samordnare i Stockholm går igenom alla formulär och
                    svarar dig inom två arbetstimmar.
                  </span>
                </div>
                <div className="flex items-start gap-3 pt-4">
                  <FaShieldAlt className="text-amber-500 text-sm mt-0.5 flex-shrink-0" />
                  <span className="tracking-wider">
                    <strong className="text-blue-950 tracking-widest font-bold">
                      Säker data (GDPR):{" "}
                    </strong>{" "}
                    Dina personuppgifter, företagsuppgifter och adresser är helt
                    säkra hos oss enligt lagen om GDPR.{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 4: CONTACT SUPPORT FAQ & COMPONENT CLOSURE */}
      <section className="py-24 px-6 max-w-4xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 inline-flex items-center gap-1.5">
            <FaMagic className="text-amber-500 animate-pulse" /> Vanliga frågor
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight leading-tight">
            Vanliga frågor om bokning
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-light">
                        Här hittar du snabba svar om hur vårt prissystem fungerar, regler för avbokning och hur du bokar städning.

          </p>
        </div>

        <div className="space-y-6">
          {/* Support FAQ 1 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-extrabold text-blue-950 text-base md:text-lg mb-2">
                           Hur snabbt får jag mitt prisförslag efter att jag har skickat formuläret?

            </h4>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light pt-2 border-t border-slate-100 mt-2">
                            Vår personal kontrollerar alla inkommande formulär hela tiden. Du kan förvänta dig ett prisförslag med 30% direkt rabatt skickat till din e-post inom två vanliga arbetstimmar.

            </p>
          </div>

          {/* Support FAQ 2 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300">
            <h4 className="font-extrabold text-blue-950 text-base md:text-lg mb-2">
                            Kan jag ändra eller avboka min städning online?

            </h4>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light pt-2 border-t border-slate-100 mt-2">
                            Ja, absolut. Om du vill ändra datum eller avboka din städning måste du kontakta oss via e-post eller telefon minst 24 timmar före städningen börjar. Om du gör det i tid kostar det ingenting extra.

            </p>
          </div>
        </div>

        {/* Closing Visual Node Banner to drive customer trust */}
        <div className="text-center pt-8 border-t border-slate-200/60 max-w-xl mx-auto">
          <p className="text-xs md:text-sm font-bold text-[#0D2B5C] leading-relaxed">
                        Behöver du akuthjälp direkt dygnet runt? Vänta inte på formuläret – ring vår kundtjänst direkt på vårt telefonnummer för snabb hjälp.

          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
