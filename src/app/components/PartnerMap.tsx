import { useMemo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { Minus, Plus, RotateCcw } from "lucide-react";
import {
  PARTNER_CATEGORY_STYLE,
  PARTNER_LOCATIONS,
  partnerCategories,
  type PartnerCategory,
  type PartnerLocation,
} from "@app/data/content";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type GeographyFeature = {
  rsmKey: string;
  [key: string]: unknown;
};

type MapPosition = {
  coordinates: [number, number];
  zoom: number;
};

const categories: Array<"All" | PartnerCategory> = [
  "All",
  ...partnerCategories,
];

function splitName(name: string) {
  const words = name.split(" ");

  if (words.length <= 1) {
    return [name];
  }

  const mid = Math.ceil(words.length / 2);

  return [
    words.slice(0, mid).join(" "),
    words.slice(mid).join(" "),
  ];
}

function MarkerTooltip({
  partner,
}: {
  partner: PartnerLocation;
}) {
  const style = PARTNER_CATEGORY_STYLE[partner.category];
  const name = partner.displayName ?? partner.name;
  const lines = splitName(name);

  return (
    <g transform="translate(-70 -54)">
      <rect
        x={0}
        y={0}
        width={140}
        height={42}
        rx={15}
        fill="#FFFFFF"
        stroke={style.color}
        strokeWidth={1.8}
        filter="drop-shadow(0px 10px 18px rgba(20, 24, 39, 0.15))"
      />

      <circle
        cx={23}
        cy={21}
        r={14}
        fill={style.bg}
      />

      {partner.logoUrl ? (
        <image
          href={partner.logoUrl}
          x={11}
          y={9}
          width={24}
          height={24}
          preserveAspectRatio="xMidYMid meet"
        />
      ) : (
        <text
          x={23}
          y={25}
          textAnchor="middle"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 8,
            fontWeight: 800,
            fill: style.color,
          }}
        >
          {partner.logoText}
        </text>
      )}

      <text
        x={44}
        y={17}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 10.5,
          fontWeight: 900,
          fill: "#141827",
        }}
      >
        <tspan x={44} dy={0}>
          {lines[0]}
        </tspan>

        {lines[1] && (
          <tspan x={44} dy={13}>
            {lines[1]}
          </tspan>
        )}
      </text>
    </g>
  );
}

function PartnerLogoButton({
  partner,
  active,
  selected,
  onClick,
  onHover,
  onLeave,
}: {
  partner: PartnerLocation;
  active: boolean;
  selected: boolean;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
}) {
  const style = PARTNER_CATEGORY_STYLE[partner.category];
  const name = partner.displayName ?? partner.name;

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="
        rounded-2xl
        border
        bg-white
        px-4
        pt-3
        pb-4
        text-center
        transition-all
        duration-300
        hover:shadow-md
        hover:-translate-y-0.5
      "
      style={{
        borderColor: active ? style.color : undefined,
        boxShadow: active ? `0 12px 28px ${style.color}22` : undefined,
      }}
    >
      <div className="flex items-center gap-3 mb-2">
        <span
          className="h-px flex-1"
          style={{ background: style.color }}
        />

        <span
          className="
            text-[12px]
            font-extrabold
            uppercase
            tracking-[0.16em]
            whitespace-nowrap
          "
          style={{ color: style.color }}
        >
          {partner.category}
        </span>

        <span
          className="h-px flex-1"
          style={{ background: style.color }}
        />
      </div>

      <div
        className="
          mx-auto
          mb-1
          h-24
          w-full
          bg-transparent
          flex
          items-center
          justify-center
          overflow-visible
          px-1
        "
      >
        {partner.logoUrl ? (
          <img
            src={partner.logoUrl}
            alt={`${partner.name} logo`}
            className="max-h-24 max-w-full object-contain"
          />
        ) : (
          <span
            className="font-bold text-xl"
            style={{ color: style.color }}
          >
            {partner.logoText}
          </span>
        )}
      </div>

      <p
        className="
          mt-0
          font-bold
          text-base
          text-foreground
          leading-tight
        "
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {name}
      </p>

      {selected && (
        <div className="mt-4 border-t border-border pt-4 text-center">
          {partner.description && (
            <p className="text-xs text-muted-foreground leading-relaxed">
              {partner.description}
            </p>
          )}

          <div className="mt-4 flex justify-center flex-wrap gap-2">
            {partner.websiteUrl && (
              <a
                href={partner.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#141827]
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-white
                  hover:bg-[#24304a]
                  transition-colors
                "
              >
                Website
              </a>
            )}

            <a
              href={partner.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-primary
                px-4
                py-2
                text-xs
                font-semibold
                text-white
                hover:bg-[#e08860]
                transition-colors
              "
            >
              Google Maps
            </a>
          </div>
        </div>
      )}
    </button>
  );
}

export function PartnerMap() {
  const [activeCategories, setActiveCategories] = useState<PartnerCategory[]>([]);

  const firstPartnerId = PARTNER_LOCATIONS[0]?.id ?? "";

  const [hoveredPartnerId, setHoveredPartnerId] = useState<string | null>(null);

  const [selectedPartnerId, setSelectedPartnerId] = useState<string | null>(null);

  const [pinnedPartnerId, setPinnedPartnerId] = useState<string | null>(
    firstPartnerId,
    );

  const highlightedPartnerId = hoveredPartnerId ?? selectedPartnerId ?? pinnedPartnerId;

  const [mapPosition, setMapPosition] = useState<MapPosition>({
    coordinates: [20, 18],
    zoom: 1.08,
  });

  const visiblePartners = useMemo(() => {
    if (activeCategories.length === 0) {
        return PARTNER_LOCATIONS;
    }

    return PARTNER_LOCATIONS.filter((partner) =>
        activeCategories.includes(partner.category),
    );
  }, [activeCategories]);

  const handleCategoryChange = (category: "All" | PartnerCategory) => {
    if (category === "All") {
        const allAlreadySelected =
        activeCategories.length === partnerCategories.length;

        const nextCategories = allAlreadySelected ? [] : partnerCategories;

        setActiveCategories(nextCategories);

        const nextPartner = PARTNER_LOCATIONS[0];

        setSelectedPartnerId(null);
        setHoveredPartnerId(null);
        setPinnedPartnerId(nextPartner?.id ?? null);

        return;
    }

    setActiveCategories((current) => {
        const alreadySelected = current.includes(category);

        const nextCategories = alreadySelected
        ? current.filter((item) => item !== category)
        : [...current, category];

        const visibleAfterChange =
        nextCategories.length === 0
            ? PARTNER_LOCATIONS
            : PARTNER_LOCATIONS.filter((partner) =>
                nextCategories.includes(partner.category),
            );

        const nextPartner = visibleAfterChange[0];

        setSelectedPartnerId(null);
        setHoveredPartnerId(null);
        setPinnedPartnerId(nextPartner?.id ?? null);

        return nextCategories;
    });
    };

    const zoomIn = () => {
        setMapPosition((current) => ({
        ...current,
        zoom: Math.min(current.zoom + 0.35, 4),
        }));
    };

    const zoomOut = () => {
        setMapPosition((current) => ({
        ...current,
        zoom: Math.max(current.zoom - 0.35, 1),
        }));
    };

    const resetZoom = () => {
        setMapPosition({
        coordinates: [20, 18],
        zoom: 1.08,
        });
    };

    return (
        <div className="mt-12">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => {
                const isActive =
                 category === "All"
                    ? activeCategories.length === partnerCategories.length
                    : activeCategories.includes(category);

                const categoryStyle =
                category === "All" ? null : PARTNER_CATEGORY_STYLE[category];

                return (
                <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={`
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    transition-all
                    duration-300
                    border
                    ${
                        isActive
                        ? "bg-[#141827] text-white border-[#141827]"
                        : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
                    }
                    `}
                >
                    <span
                    className="inline-block w-2 h-2 rounded-full mr-2"
                    style={{
                        background: categoryStyle?.color ?? "#CBD5E1",
                    }}
                    />
                    {category}
                </button>
                );
            })}
            </div>

        <div className="relative max-w-7xl mx-auto">
            <div className="absolute right-0 top-0 z-20 flex items-center gap-2">
            <button
                type="button"
                aria-label="Zoom in"
                onClick={zoomIn}
                className="w-9 h-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-[#141827] hover:text-primary hover:border-primary transition"
            >
                <Plus size={16} />
            </button>

            <button
                type="button"
                aria-label="Zoom out"
                onClick={zoomOut}
                className="w-9 h-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-[#141827] hover:text-primary hover:border-primary transition"
            >
                <Minus size={16} />
            </button>

            <button
                type="button"
                aria-label="Reset map zoom"
                onClick={resetZoom}
                className="w-9 h-9 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-[#141827] hover:text-primary hover:border-primary transition"
            >
                <RotateCcw size={15} />
            </button>
            </div>

            <ComposableMap
            projection="geoEqualEarth"
            width={980}
            height={380}
            projectionConfig={{
                scale: 150,
            }}
            className="w-full h-auto"
            >
            <ZoomableGroup
                center={mapPosition.coordinates}
                zoom={mapPosition.zoom}
                minZoom={1}
                maxZoom={4}
                onMoveEnd={({ coordinates, zoom }) => {
                setMapPosition({
                    coordinates: coordinates as [number, number],
                    zoom,
                });
                }}
            >
                <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: GeographyFeature[] }) =>
                    geographies.map((geo) => (
                    <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#AAB7C6"
                        stroke="#F8FAFC"
                        strokeWidth={0.7}
                        style={{
                        default: { outline: "none" },
                        hover: {
                            fill: "#94A3B8",
                            outline: "none",
                        },
                        pressed: { outline: "none" },
                        }}
                    />
                    ))
                }
                </Geographies>

                {visiblePartners.map((partner) => {
                const style = PARTNER_CATEGORY_STYLE[partner.category];
                const isActive = partner.id === highlightedPartnerId;

                return (
                    <Marker key={partner.id} coordinates={partner.coordinates}>
                    <g
                        role="button"
                        tabIndex={0}
                        aria-label={`Show ${partner.name}`}
                        onClick={() => {
                        setSelectedPartnerId((current) =>
                            current === partner.id ? null : partner.id,
                        );

                        setPinnedPartnerId(partner.id);
                        setHoveredPartnerId(null);
                        }}
                        onMouseEnter={() => setHoveredPartnerId(partner.id)}
                        onMouseLeave={() => setHoveredPartnerId(null)}
                        onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                            setSelectedPartnerId((current) =>
                            current === partner.id ? null : partner.id,
                            );

                            setPinnedPartnerId(partner.id);
                            setHoveredPartnerId(null);
                        }
                        }}
                        className="cursor-pointer"
                    >
                        <circle
                        r={22}
                        fill="transparent"
                        />

                        {isActive && (
                        <circle
                            r={10}
                            fill={style.color}
                            opacity={0.22}
                        >
                            <animate
                            attributeName="r"
                            values="10;18;10"
                            dur="1.8s"
                            repeatCount="indefinite"
                            />
                            <animate
                            attributeName="opacity"
                            values="0.28;0.04;0.28"
                            dur="1.8s"
                            repeatCount="indefinite"
                            />
                        </circle>
                        )}

                        <circle
                        r={isActive ? 10 : 8.5}
                        fill="#FFFFFF"
                        stroke={style.color}
                        strokeWidth={2}
                        />

                        {partner.logoUrl ? (
                        <image
                            href={partner.logoUrl}
                            x={isActive ? -6.5 : -5.5}
                            y={isActive ? -6.5 : -5.5}
                            width={isActive ? 13 : 11}
                            height={isActive ? 13 : 11}
                            preserveAspectRatio="xMidYMid meet"
                            pointerEvents="none"
                        />
                        ) : (
                        <text
                            textAnchor="middle"
                            y={3}
                            pointerEvents="none"
                            style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 6,
                            fontWeight: 800,
                            fill: style.color,
                            }}
                        >
                            {partner.logoText}
                        </text>
                        )}

                        {hoveredPartnerId === partner.id && (
                        <MarkerTooltip partner={partner} />
                        )}
                    </g>
                    </Marker>
                );
                })}
            </ZoomableGroup>
            </ComposableMap>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                {visiblePartners.map((partner) => (
                <PartnerLogoButton
                    key={partner.id}
                    partner={partner}
                    active={partner.id === highlightedPartnerId}
                    selected={partner.id === selectedPartnerId}
                    onClick={() => {
                        setSelectedPartnerId((current) =>
                        current === partner.id ? null : partner.id,
                        );

                        setPinnedPartnerId(partner.id);
                        setHoveredPartnerId(null);
                    }}
                    onHover={() => setHoveredPartnerId(partner.id)}
                    onLeave={() => setHoveredPartnerId(null)}
                />
                ))}
            </div>

        </div>
    );
}