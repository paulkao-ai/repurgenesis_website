import {
  BRAND_ASSETS,
} from "@app/data/content";

type BrandLogoProps = {
  variant?: "navbar" | "footer";
  light?: boolean;
  footerTone?: "white" | "orange";
  className?: string;
};

type LogoPairProps = {
  logoSrc: string;
  textSrc: string;
  alt: string;
  footer?: boolean;
};

function LogoPair({
  logoSrc,
  textSrc,
  alt,
  footer = false,
}: LogoPairProps) {
  return (
    <span
      className={`
        relative
        inline-flex
        items-center

        ${
          footer
            ? "gap-[7px]"
            : "top-[3px] gap-[6px]"
        }
      `}
    >
      <img
        src={logoSrc}
        alt=""
        aria-hidden="true"
        className={`
          shrink-0
          object-contain

          ${
            footer
              ? "h-[46px] w-[46px]"
              : "h-[38px] w-[38px]"
          }
        `}
      />

      <img
        src={textSrc}
        alt={alt}
        className={`
          w-auto
          object-contain

          ${
            footer
              ? "h-[27px]"
              : "h-[23px]"
          }
        `}
      />
    </span>
  );
}

export function BrandLogo({
  variant = "navbar",
  light = false,
  footerTone = "white",
  className = "",
}: BrandLogoProps) {
  if (variant === "footer") {
    const footerAssets =
      footerTone === "white"
        ? BRAND_ASSETS.navbar.light
        : BRAND_ASSETS.navbar.color;

    return (
      <span
        className={`
          inline-flex
          items-center
          ${className}
        `}
      >
        <LogoPair
          logoSrc={footerAssets.logo}
          textSrc={footerAssets.text}
          alt="Repurgenesis"
          footer
        />
      </span>
    );
  }

  return (
    <span
      className={`
        relative
        inline-flex
        h-12
        w-[170px]
        shrink-0
        items-center
        ${className}
      `}
    >
      {/* White homepage version */}
      <span
        className={`
          absolute
          left-0
          top-1/2
          -translate-y-1/2
          transition-opacity
          duration-300

          ${
            light
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <LogoPair
          logoSrc={
            BRAND_ASSETS.navbar.light.logo
          }
          textSrc={
            BRAND_ASSETS.navbar.light.text
          }
          alt="Repurgenesis"
        />
      </span>

      {/* Orange version */}
      <span
        className={`
          absolute
          left-0
          top-1/2
          -translate-y-1/2
          transition-opacity
          duration-300

          ${
            light
              ? "pointer-events-none opacity-0"
              : "opacity-100"
          }
        `}
      >
        <LogoPair
          logoSrc={
            BRAND_ASSETS.navbar.color.logo
          }
          textSrc={
            BRAND_ASSETS.navbar.color.text
          }
          alt="Repurgenesis"
        />
      </span>
    </span>
  );
}