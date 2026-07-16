import {
  CONTACT_BRAND,
  CONTACT_MAPS,
} from "@app/data/content";
import type { Language } from "@app/types";

export function ContactMap({
  language,
  title,
  companyName,
  logoAlt,
  addressLine1,
  addressLine2,
  addressFull,
  openMapLabel,
}: {
  language: Language;
  title: string;
  companyName: string;
  logoAlt: string;
  addressLine1?: string;
  addressLine2?: string;
  addressFull?: string;
  openMapLabel: string;
}) {
  const map = CONTACT_MAPS[language];
  
  return (
    <div
      className="
        relative
        h-full
        min-h-[420px]
        w-full
        overflow-hidden
      "
    >
      <iframe
        key={language}
        title={title}
        src={map.embedUrl}
        className="
          absolute
          inset-0
          h-full
          min-h-[420px]
          w-full
        "
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        style={{ border: 0 }}
      />
    </div>
  );
}