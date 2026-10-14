import React from 'react';
import { MapPin, Navigation, Train, Clock, ExternalLink } from 'lucide-react';
import { CONTACT_INFO, TRANSLATIONS } from '../data/content';
import { SupportedLanguage } from '../types';

const officeFacadeImg = '/images/milan_facade_real.jpg';

interface OfficeSectionProps {
  currentLang: SupportedLanguage;
}

export const OfficeSection: React.FC<OfficeSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    CONTACT_INFO.address
  )}`;

  return (
    <section id="ufficio" className="py-28 bg-[#0D1624] text-white border-t border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Office description & Transit info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#C5A880]">
              <span className="w-6 h-[1.5px] bg-[#C5A880]" />
              <span>{t.officeHeading.kicker}</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight text-balance">
              {t.officeHeading.title}
            </h2>

            <p className="text-base text-[#E7DED4]/80 leading-relaxed font-light">
              Il nostro ufficio a Milano si trova nella prestigiosa e tranquilla zona di Città Studi, facilmente raggiungibile con la metropolitana e con tutti i principali mezzi pubblici. Riceviamo su appuntamento per dedicare a ciascun fascicolo il tempo e l'attenzione necessari.
            </p>

            {/* Address & Quick Cards in Dark Luxury Theme */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#080D16] border border-white/10 flex items-start gap-3.5 shadow-lg">
                <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C5A880]">Indirizzo dello Studio</span>
                  <p className="text-sm font-semibold text-white">{CONTACT_INFO.address}</p>
                  <p className="text-xs text-[#E7DED4]/70">Zona Città Studi / Piola - Milano Est</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#080D16] border border-white/10 flex items-start gap-3.5 shadow-lg">
                <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C5A880]">Orari di Ricevimento</span>
                  <p className="text-xs text-[#E7DED4]/80 leading-relaxed">{CONTACT_INFO.hours}</p>
                  <p className="text-[11px] text-[#DFC7A5]">Si raccomanda la prenotazione anticipata dell'appuntamento.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#080D16] border border-white/10 flex items-start gap-3.5 shadow-lg">
                <Train className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C5A880]">Trasporti e Collegamenti</span>
                  <ul className="text-xs text-[#E7DED4]/80 space-y-1 font-light">
                    <li><strong className="text-white">Metropolitana:</strong> Linea M2 (Verde) — Stazioni Piola (5 min) o Lambrate FS (7 min a piedi).</li>
                    <li><strong className="text-white">Treno:</strong> Stazione FS Milano Lambrate (collegamenti regionali e suburbani).</li>
                    <li><strong className="text-white">Linee bus & tram:</strong> Linee 39, 54, 62, 93 a pochi passi.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Direct Directions Button */}
            <div className="pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#080D16] bg-white hover:bg-[#F3EFEA] rounded-xs transition-all shadow-xl"
              >
                <Navigation className="w-4 h-4 text-[#080D16]" />
                <span>Apri indicazioni su Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Building Facade Photograph & Map embed */}
          <div className="lg:col-span-6 space-y-6">
            {/* Building Photo */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#C5A880]/30 bg-[#080D16]">
              <img
                src={officeFacadeImg}
                alt="Palazzo storico milanese in cui ha sede l'ufficio di Italia Immigrazione"
                className="w-full h-72 sm:h-80 object-cover filter brightness-[0.92] contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#080D16] text-white flex items-center justify-between text-xs border-t border-white/10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C5A880]" />
                  <span className="font-semibold text-white">{CONTACT_INFO.address}</span>
                </div>
                <span className="text-[#C5A880] font-mono text-[11px]">MILANO</span>
              </div>
            </div>

            {/* Map Frame (OpenStreetMap embed for Milan, Via Ampère) */}
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl bg-[#080D16]">
              <div className="p-3 bg-[#080D16] border-b border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold text-white">Mappa della zona · Via Ampère 126</span>
                <span className="text-[11px] text-[#C5A880] font-mono">Milano Lambrate / Città Studi</span>
              </div>
              <iframe
                title="Mappa Sede Italia Immigrazione Milano"
                width="100%"
                height="240"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.openstreetmap.org/export/embed.html?bbox=9.222%2C45.478%2C9.238%2C45.488&amp;layer=mapnik&amp;marker=45.4831%2C9.2304"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
