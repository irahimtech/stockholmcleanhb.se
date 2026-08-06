import React, { useState } from "react";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaPercent,
  FaShieldAlt,
  FaStar,
  FaLeaf,
  FaMagic,
  FaExclamationTriangle,
} from "react-icons/fa";

// Image assets matching your project setup
import heroBg from "../assets/hero-cleaning-stockholm.jpg";
import residentialImg from "../assets/residential-cleaning.jpg";
import moveOutImg from "../assets/move-out-cleaning.jpg";
import officeImg from "../assets/office-cleaning.jpg";
import trustImg from "../assets/trustworthy-cleaners-stockholm.jpg";

const Home = () => {
  // --- STATE CONTROLLERS FOR LIVE INTERACTIVE ALERTS ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    postalCode: "",
    service: "Residential Cleaning (Hemstädning)",
  });
  const [status, setStatus] = useState("idle"); // Options: idle | loading | success | error
  const [alertMessage, setAlertMessage] = useState("");

  // Handle value tracking without updating static templates
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // --- AUTOMATED REGIONAL VALIDATION MATRIX ---
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    // 1. Full Name Compliance Run
    if (!formData.name.trim() || formData.name.length < 3) {
      setStatus("error");
      setAlertMessage(
        "Please enter your valid full name (Minimum 3 characters required).",
      );
      return;
    }

    // 2. Standard Email Verification Filter
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setAlertMessage(
        "Please check your email address format (e.g., info@domain.se).",
      );
      return;
    }

    // 3. Swedish Postal Code Validation (e.g., 112 44 or 11244)
    const cleanPostal = formData.postalCode.replace(/\s+/g, "");
    if (cleanPostal.length !== 5 || isNaN(cleanPostal)) {
      setStatus("error");
      setAlertMessage(
        "Please enter a valid 5-digit Stockholm postal code (e.g., 112 44).",
      );
      return;
    }

    // Secure Data Transmission Engine Simulation
    setTimeout(() => {
      setStatus("success");
      setAlertMessage(
        `Tack, ${formData.name}! Your automated estimation has been computed. Check your email console for full billing outlines.`,
      );
      // Safely clear variable fields on complete cycle
      setFormData({
        name: "",
        email: "",
        postalCode: "",
        service: "Residential Cleaning (Hemstädning)",
      });
    }, 1500);
  };

  return (
    <div className="bg-slate-50 font-sans text-gray-700 antialiased overflow-hidden">
      {/* SECTION 1: HERO BANNER & INSTANT QUOTE FORM WITH ACTIVE STATUSES */}
      <section
        className="relative bg-gradient-to-r from-[#0D2B5C] to-blue-900 text-white pt-24 pb-28 px-6 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(13, 43, 92, 0.95), rgba(30, 58, 138, 0.85)), url(${heroBg})`,
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-amber-500/30">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Topprankad städservice i Stockholm
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Fläckfria hem och kontor <br />
              <span className="text-amber-400">Tvärs över Stockholm</span>
            </h1>
            <p className="text-lg text-slate-200 max-w-2xl font-light leading-relaxed">
              Upplev Stockholms mest pålitliga och miljövänliga professionella
              städtjänster. Från omfattande städning av bostäder till stressfri
              flyttstädning levererar Stockholm Clean HB felfria resultat med
              modern utrustning och 100 % nöjdhetsgaranti.{" "}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-amber-500 text-blue-950 font-bold text-center rounded-xl shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Boka en städning online
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-transparent border-2 border-white/80 text-white font-bold text-center rounded-xl hover:bg-white hover:text-blue-950 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Utforska våra tjänster
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-2xl shadow-2xl text-gray-800 border border-slate-100 relative">
            <div className="absolute -top-4 -right-4 bg-green-500 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-md transform rotate-3 select-none">
              Få 30% rabatt på bokningar nu
            </div>
            <h3 className="text-blue-950 font-bold text-xl mb-4">
              Begär en gratis offert direkt{" "}
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Inga dolda avgifter. Transparenta, lokaliserade priser beräknade
              för svenska hushåll.
            </p>

            {/* DYNAMIC REAL-TIME NOTIFICATION POPUPS */}
            {status === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-xs md:text-sm font-semibold flex items-start gap-2.5 animate-fadeIn">
                <FaCheckCircle className="text-green-500 text-base flex-shrink-0 mt-0.5 animate-pulse" />
                <span>{alertMessage}</span>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs md:text-sm font-semibold flex items-start gap-2.5 animate-shake">
                <FaExclamationTriangle className="text-red-500 text-base flex-shrink-0 mt-0.5" />
                <span>{alertMessage}</span>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleFormSubmit}>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                  Namn
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-950 font-medium"
                  disabled={status === "loading"}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.se"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-950 font-medium"
                    disabled={status === "loading"}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                    Postnummer (t.ex. 111 22)
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="112 44"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-blue-950 font-medium"
                    disabled={status === "loading"}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">
                  Service typ
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:border-blue-950 font-bold text-blue-950"
                  disabled={status === "loading"}
                >
                  <option>Flyttstädning (Move-out Cleaning)</option>
                  <option>Hemstädning (Residential Cleaning)</option>
                  <option>Kontorsstädning (Office Cleaning )</option>
                  <option>Nödstädning (24/7 Emergency Cleaning)</option>
                </select>
              </div>

              <button
                type="submit"
                className={`w-full py-4 bg-[#0D2B5C] text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === "loading"
                    ? "opacity-70 cursor-wait"
                    : "hover:bg-blue-950 shadow-md"
                }`}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <FaMagic className="animate-spin text-amber-400" />{" "}
                    Processing Security Routing...
                  </>
                ) : (
                  "Se priser nu"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE SWEDISH RUT TAX ADVANTAGE VALUE PROP */}
      <section className="bg-amber-500 py-8 px-6 text-blue-950 shadow-inner relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="p-4 bg-white/20 rounded-2xl text-2xl text-blue-950 flex-shrink-0 shadow-sm">
              <FaPercent />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-xl md:text-2xl tracking-tight">
                Spara 30% på den totala städkostnaden för alla bokningar
              </h4>
              <p className="text-sm font-medium text-blue-950/90 max-w-3xl leading-relaxed">
                Vi hanterar alla rabattberäkningar automatiskt. Din faktura för
                företags- eller hemstädning visar 30% rabatt direkt — inga dolda
                avgifter eller krångliga villkor.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-auto text-center">
            <a
              href="/about"
              className="inline-block w-full sm:w-auto px-7 py-3 bg-[#0D2B5C] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-blue-950 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Så funkar det
            </a>
          </div>
        </div>
      </section>
      {/* SECTION 3: CORE CLEANING SERVICES CORE CARDS */}
      <section className="py-28 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
            Se vårt kompletta premiumutbud
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight max-w-3xl mx-auto leading-tight">
            Professionell strukturell rengöring byggd för Stockholms ekosystem
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-light">
            Skräddarsydda arbetsflöden för fastighetsstädning som uppfyller
            Sveriges strikta nationella riktlinjer. Vi erbjuder noggrant
            granskade ritningar för detaljerade bostadsområden,
            företagsfastigheter med hög beläggning och lokala butiksfasader.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Card 1: Residential Cleaning */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md shadow-slate-100/60 hover:shadow-2xl hover:shadow-blue-950/5 transition-all duration-500 flex flex-col group transform hover:-translate-y-1">
            <div className="h-64 bg-slate-200 overflow-hidden relative">
              <img
                src={residentialImg}
                alt="Professional Residential Home Cleaning (Hemstädning) in Stockholm City"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 right-4 bg-white/95 backdrop-blur text-blue-950 text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm border border-slate-100">
                Veckovis / Varannan vecka
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-blue-950 tracking-tight group-hover:text-amber-500 transition-colors duration-300">
                  Professionell hemstädning i Stockholm
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-normal">
                  Håll ditt hem fläckfritt med anpassade städscheman som
                  hanteras av bakgrundskontrollerad personal. Vår
                  premium-checklist omfattar grundlig sanering av kök,
                  dammtorkning av känsliga belysningsarmaturer, HEPA-dammsugning
                  av golv, detaljerad badrumsrengöring och ytpolering.
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Optimerad för yrkesverksamma över hela Södermalm och Vasastan
                  som kräver högsta städkvalitet utan administrativ stress.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                <a
                  href="/services"
                  className="text-sm font-bold text-[#0D2B5C] hover:text-amber-500 inline-flex items-center gap-1 group/link"
                >
                  Visa detaljerad checklist{" "}
                  <span className="transform group-hover/link:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </a>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                  30% rabatt ingår
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Move-Out Cleaning */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md shadow-slate-100/60 hover:shadow-2xl hover:shadow-blue-950/5 transition-all duration-500 flex flex-col group transform hover:-translate-y-1">
            <div className="h-64 bg-slate-200 overflow-hidden relative">
              <img
                src={moveOutImg}
                alt="Deep Move-Out Cleaning (Flyttstädning) with Inspection Guarantee Sweden"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 right-4 bg-[#0D2B5C] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm">
                100% besiktningsgaranti
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-blue-950 tracking-tight group-hover:text-amber-500 transition-colors duration-300">
                  Professionell flyttstädning i Stockholm
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-normal">
                  Flytta ut från din hyresrätt eller villa smidigt och utan
                  tvister med hyresvärden. Våra noggranna
                  flyttstädningsprocesser följer strikta riktlinjer enligt
                  Mäklarsamfundets regionala branschstandard. Vi städar bakom
                  tunga vitvaror, tömmer och torkar ur skåp, putsar fönster
                  invändigt och utvändigt, skrubbar ventilationsgaller och
                  polerar golvlister.
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Inkluderar fullständig ansvarsförsäkring, skyddande
                  djupbehandlingar och en omfattande 3-dagarsgaranti för absolut
                  trygghet.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                <a
                  href="/services"
                  className="text-sm font-bold text-[#0D2B5C] hover:text-amber-500 inline-flex items-center gap-1 group/link"
                >
                  Se våra villkor{" "}
                  <span className="transform group-hover/link:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </a>
                <span className="text-xs font-semibold text-blue-950 bg-blue-50 px-2 py-1 rounded-md">
                  Full täckning
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Office Cleaning */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md shadow-slate-100/60 hover:shadow-2xl hover:shadow-blue-950/5 transition-all duration-500 flex flex-col group transform hover:-translate-y-1">
            <div className="h-64 bg-slate-200 overflow-hidden relative">
              <img
                src={officeImg}
                alt="Corporate Commercial Office Cleaning (Kontorsstädning) Stockholm Operations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 right-4 bg-amber-500 text-blue-950 text-xs font-bold px-3 py-1.5 rounded-xl shadow-sm">
                Företag B2B
              </span>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-blue-950 tracking-tight group-hover:text-amber-500 transition-colors duration-300">
                  Professionell kontorsstädning i Stockholm
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-normal">
                  Maximera medarbetarnas hälsa och öka produktiviteten med
                  specialiserade kommersiella städavtal. Vårt skickliga team
                  underhåller konferensrum, gemensamma sällskapsytor,
                  ergonomiska skrivbordszoner och digitala serverrum. Vi
                  använder tystgående professionell utrustning för att minimera
                  störningar.
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Flexibel schemaläggning utanför arbetstid, anpassad för
                  dynamiska arbetsplatser, butiker och kliniker över hela Solna
                  och Kista.
                </p>
              </div>
              <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                <a
                  href="/services"
                  className="text-sm font-bold text-[#0D2B5C] hover:text-amber-500 inline-flex items-center gap-1 group/link"
                >
                  B2B-portal{" "}
                  <span className="transform group-hover/link:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </a>
                <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-md">
                  Skräddarsy schema
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US / TRUST SYMBOLS WITH HEAVY CONTENT */}
      <section className="bg-slate-100 py-28 px-6 border-y border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Visual Side Container */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500 to-[#0D2B5C] rounded-3xl blur-xl opacity-10 group-hover:opacity-15 transition-opacity duration-500"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
              <img
                src={trustImg}
                alt="Trusted Cleaning Professionals Team executing high quality cleaning in Stockholm"
                className="w-full h-auto object-cover transform scale-100 group-hover:scale-102 transition-transform duration-700"
              />
            </div>
            {/* Functional Eco Floating Anchor Tag Counter */}
            <div className="absolute -bottom-8 -left-6 bg-white p-5 rounded-2xl shadow-xl shadow-blue-950/5 border border-slate-100 flex items-center gap-4 z-20 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="w-14 h-14 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-2xl flex-shrink-0">
                <FaLeaf />
              </div>
              <div>
                <h5 className="font-extrabold text-base text-blue-950">
                  100% miljövänligt
                </h5>
                <p className="text-xs text-slate-400 font-medium">
                  Svanenmärkta rengöringsmedel
                </p>
              </div>
            </div>
          </div>

          {/* Text Content Columns */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
                Kompromisslös operativ standard
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight leading-tight">
                Det säkra och ansvarsfulla valet för dina privata fastigheter
              </h2>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                Stockholm Clean HB prioriterar juridiskt ansvar, strikta
                säkerhetsprotokoll och noggrann detaljrikedom. Vi förvaltar
                lokala fastigheter med förstklassig omsorg och sätter endast in
                personal med verifierad bakgrundskontroll som arbetar under
                strukturerade checklistor för kvalitetskontroll.
              </p>
            </div>

            {/* Feature Blocks Matrix with High Text Density */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              <div className="flex gap-4 group/item">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-xl flex-shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                  <FaShieldAlt />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-blue-950 text-lg tracking-tight">
                    Fullt försäkrade tillgångar (Trygg-Hansa)
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Omfattande ansvarsförsäkring upp till 10 000 000 SEK täcker
                    din fysiska interiör, dyra maskiner och exklusiva material
                    mot oavsiktliga olyckor eller skador under arbetets gång.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group/item">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-xl flex-shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                  <FaCheckCircle />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-blue-950 text-lg tracking-tight">
                    Verifierad personalstruktur
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Bakgrundskontrollerad personal med utdrag ur
                    belastningsregistret som genomgår en rigorös lokal teknisk
                    utbildning. Varje städare är utbildad för att använda
                    specifika, skonsamma rengöringsmedel för alla typer av ytor.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group/item">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-xl flex-shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                  <FaStar />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-blue-950 text-lg tracking-tight">
                    48-timmars nöjdkundgaranti
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Är du missnöjd med ett specifikt ställe eller hörn? Meddela
                    vår kundtjänst inom 48 timmar så skickar vi ett team för att
                    städa om området omedelbart – helt utan extra kostnad för
                    dig.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group/item">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-xl flex-shrink-0 group-hover/item:bg-amber-500 group-hover/item:text-white transition-all duration-300 shadow-sm">
                  <FaLeaf />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-blue-950 text-lg tracking-tight">
                    Miljövänlig (Eco) Focus
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Vi använder strikt giftfria, miljöcertifierade och
                    biologiskt nedbrytbara medel som skapar rena och fräscha
                    ytor. Säkert för barn, husdjur, allergiker och vårt
                    gemensamma ekosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 5: REAL STOCKHOLM CUSTOMER REVIEWS */}
      <section className="py-28 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
            Vad våra kunder säger
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight text-center">
            Vad våra kunder i Stockholm säger om oss
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-light">
            Äkta kundfeedback insamlad direkt via oberoende företagsrecensioner
            och lokala Google-verifieringar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col justify-between space-y-8 relative">
            <div className="space-y-4">
              <div className="flex text-amber-400 gap-1 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-sm md:text-base text-slate-600 italic leading-relaxed font-light">
                Utmärkt flyttstädning i Vasastan! Besiktningen med hyresvärden
                gick helt felfritt. Teamet var mycket professionellt, kom med
                kompletta checklistor och lämnade varje hörn skinande rent.
                Rekommenderar starkt Stockholm Clean HB!
              </p>
            </div>
            <div className="border-t border-slate-100 pt-5 flex justify-between items-center text-xs font-medium">
              <span className="font-bold text-blue-950 text-sm">
                Elin Andersson
              </span>
              <span className="text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                Vasastan, Stockholm
              </span>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col justify-between space-y-8 relative">
            <div className="space-y-4">
              <div className="flex text-amber-400 gap-1 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-sm md:text-base text-slate-600 italic leading-relaxed font-light">
                Vi har använt deras hemstädning varannan vecka i över sex
                månader nu. Mycket pålitlig och punktlig personal som tar hand
                om vårt hem med stor omsorg. Dessutom gör den automatiska
                rabatten på 30 % det otroligt prisvärt!
              </p>
            </div>
            <div className="border-t border-slate-100 pt-5 flex justify-between items-center text-xs font-medium">
              <span className="font-bold text-blue-950 text-sm">
                Lars Bergqvist
              </span>
              <span className="text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                Södermalm, Stockholm
              </span>
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col justify-between space-y-8 relative">
            <div className="space-y-4">
              <div className="flex text-amber-400 gap-1 text-sm">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-sm md:text-base text-slate-600 italic leading-relaxed font-light">
                Enastående kontorsstädning! Våra kommersiella arbetsplatser
                känns fantastiskt fräscha och sanerade varje morgon. Deras
                fingertoppskänsla för städdetaljer är oöverträffad i Stockholm.
                Utmärkt kommunikation från deras kundansvariga team.
              </p>
            </div>
            <div className="border-t border-slate-100 pt-5 flex justify-between items-center text-xs font-medium">
              <span className="font-bold text-blue-950 text-sm">
                Sofia K. (Tech Operations)
              </span>
              <span className="text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                Solna, Stockholm
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 6: FAQ STRATEGIC EXPANSION GRID (High Professional Finish & High SEO Density) */}
      <section className="bg-slate-100 py-28 px-6 border-t border-slate-200 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase text-amber-500 tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
              Tekniskt resurscenter{" "}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight leading-tight">
              Vanliga frågor och städregler
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-light">
              Tydliga företagssvar gällande svenska skatteavdrag,
              försäkringspolicys och anpassade tjänster.
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h4 className="font-extrabold text-blue-950 text-lg md:text-xl mb-3 flex items-center justify-between gap-4 group-hover:text-[#0D2B5C] transition-colors duration-200">
                <span>
                  Hur exakt fungerar rabatten på 30 % för era tjänster?
                </span>
                <span className="text-amber-500 text-2xl font-light select-none group-hover:scale-110 transition-transform duration-200">
                  —
                </span>
              </h4>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal pt-2 border-t border-slate-50 mt-2">
                Vår rabatt på 30 % gäller för alla bokningar utan några
                krångliga eller dolda villkor. Stockholm Clean HB hanterar hela
                rabattberäkningen automatiskt för dig. Besparingen räknas av och
                dras ifrån direkt på din faktura, oavsett om det gäller hem-
                eller kontorsstädning.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h4 className="font-extrabold text-blue-950 text-lg md:text-xl mb-3 flex items-center justify-between gap-4 group-hover:text-[#0D2B5C] transition-colors duration-200">
                <span>
                  Behöver kunder tillhandahålla maskiner eller rengöringsmedel?
                </span>
                <span className="text-amber-500 text-2xl font-light select-none group-hover:scale-110 transition-transform duration-200">
                  —
                </span>
              </h4>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal pt-2 border-t border-slate-50 mt-2">
                För omfattande flyttstädning och kommersiella
                kontorsstädningsavtal anländer vår personal fullt utrustad med
                tunga industridammsugare, specialstegar och standardiserade
                miljömärkta rengöringskit. För vanlig regelbunden hemstädning
                kan vi enkelt anpassa upplägget utifrån dina önskemål och
                administrativa preferenser.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
              <h4 className="font-extrabold text-blue-950 text-lg md:text-xl mb-3 flex items-center justify-between gap-4 group-hover:text-[#0D2B5C] transition-colors duration-200">
                <span>
                  Vilka specifika geografiska områden i Stockholm täcker ni?
                </span>
                <span className="text-amber-500 text-2xl font-light select-none group-hover:scale-110 transition-transform duration-200">
                  —
                </span>
              </h4>
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-normal pt-2 border-t border-slate-50 mt-2">
                Vi erbjuder tjänster över hela Storstockholmsområdet. Detta
                inkluderar bostads- och affärsområden som Stockholm City,
                Vasastan, Östermalm, Södermalm, Kungsholmen, Solna, Kista, Täby,
                Nacka, Danderyd, Huddinge och Bromma. Om dina koordinater ligger
                strax utanför dessa regioner, vänligen ring vår kundtjänst för
                att se om vi kan ordna skräddarsydda rutter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CALL TO ACTION (CTA BANNER & COMPONENT CLOSURE) */}
      <section className="bg-[#0D2B5C] text-white py-24 px-6 text-center relative overflow-hidden border-t border-blue-950">
        {/* Modern Blur Gradients for Premium Agency Aesthetics */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full filter blur-[120px] opacity-10 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-[120px] opacity-10 transform -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 text-amber-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
            ⚡ Direktavdrag på fakturan tillämpat
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto leading-tight">
            Är du redo att uppleva en helt fläckfri fastighet?
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light">
            CFå ditt kostnadsfria och personliga prisförslag idag. 
  Utnyttja vår direktavdragna rabatt på 30 % och få tillgång till 
  verifierade premium-hembiträden var som helst i Stockholm.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 pt-4">
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-blue-950 font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-xl shadow-amber-500/10 hover:bg-amber-400 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Få en snabb offert
            </a>
            <a
              href="tel:+46721516306"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white font-bold text-sm uppercase tracking-wider rounded-xl border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <FaPhoneAlt className="text-amber-400 text-xs animate-bounce" />{" "}
              Ring kundtjänst
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
