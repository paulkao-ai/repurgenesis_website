import {
  useMemo,
  useState,
} from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

import {
  Minus,
  Plus,
  RotateCcw,
} from "lucide-react";

import type {
  Translator,
} from "@app/types";

import {
  PARTNER_CATEGORY_IDS,
  PARTNER_FILTERS,
  PARTNER_LOCATIONS,
  PARTNER_MAP_CONFIG,
  getPartnerCategory,
  localizePartnerLocation,
  type LocalizedPartnerLocation,
  type PartnerCategory,
  type PartnerFilter,
} from "@app/data/content";

type GeographyFeature = {
  rsmKey: string;
  [key: string]: unknown;
};

type MapPosition = {
  coordinates: [
    number,
    number,
  ];

  zoom: number;
};

function MarkerTooltip({
  partner,
}: {
  partner: LocalizedPartnerLocation;
}) {
  const category =
    getPartnerCategory(
      partner.category,
    );

  return (
    <g
      transform="translate(-48 -64)"
      pointerEvents="none"
    >
      <rect
        x={0}
        y={0}
        width={96}
        height={52}
        rx={16}
        fill={category.bg}
        stroke={category.color}
        strokeWidth={2.4}
        filter="
          drop-shadow(
            0px 8px 16px
            rgba(20, 24, 39, 0.14)
          )
        "
      />

      {partner.logoUrl ? (
        <image
          href={partner.logoUrl}
          x={13}
          y={7}
          width={70}
          height={27}
          preserveAspectRatio="xMidYMid meet"
        />
      ) : (
        <text
          x={48}
          y={28}
          textAnchor="middle"
          style={{
            fontFamily:
              "'Plus Jakarta Sans', sans-serif",

            fontSize: 16,
            fontWeight: 900,
            fill: category.color,
          }}
        >
          {partner.logoText}
        </text>
      )}

      <text
        x={48}
        y={44}
        textAnchor="middle"
        style={{
          fontFamily:
            "'DM Sans', sans-serif",

          fontSize: 7.5,
          fontWeight: 800,
          fill: "#141827",
        }}
      >
        {partner.city}, {partner.countryCode}
      </text>
    </g>
  );
}

function PartnerLogoCard({
  partner,
  active,
  selected,
  t,
  onClick,
  onHover,
  onLeave,
}: {
  partner: LocalizedPartnerLocation;
  active: boolean;
  selected: boolean;
  t: Translator;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
}) {
  const category =
    getPartnerCategory(
      partner.category,
    );

  return (
    <article
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="
        overflow-hidden
        rounded-[30px]
        border-2
        bg-white
        text-center
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-md
      "
      style={{
        borderColor:
          active
            ? category.color
            : "#E2E8F0",

        boxShadow:
          active
            ? `0 14px 32px ${category.color}26`
            : undefined,
      }}
    >
      <button
        type="button"
        onClick={onClick}
        aria-expanded={selected}
        className="
          block
          w-full
          cursor-pointer
          px-4
          pb-4
          pt-3
          text-center
        "
      >
        <div className="mb-2 flex items-center gap-3">
          <span
            className="h-[2px] flex-1 rounded-full"
            style={{
              background:
                category.color,
            }}
          />

          <span
            className="
              whitespace-nowrap
              text-[12px]
              font-black
              uppercase
              tracking-[0.18em]
            "
            style={{
              color:
                category.color,
            }}
          >
            {t(category.labelKey)}
          </span>

          <span
            className="h-[2px] flex-1 rounded-full"
            style={{
              background:
                category.color,
            }}
          />
        </div>

        <div
          className="
            mx-auto
            mb-1
            flex
            h-20
            w-full
            items-center
            justify-center
            overflow-visible
            bg-transparent
            px-2
          "
        >
          {partner.logoUrl ? (
            <img
              src={partner.logoUrl}
              alt={`${partner.name} ${t(
                "partners.map.logo",
              )}`}
              className="
                max-h-20
                max-w-full
                object-contain
              "
            />
          ) : (
            <span
              className="
                text-2xl
                font-black
                leading-none
              "
              style={{
                color:
                  category.color,

                fontFamily:
                  "'Plus Jakarta Sans', sans-serif",
              }}
            >
              {partner.logoText}
            </span>
          )}
        </div>

        <p
          className="
            text-base
            font-black
            leading-tight
            text-foreground
          "
          style={{
            fontFamily:
              "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {partner.displayName}
        </p>
      </button>

      {selected && (
        <div
          className="
            border-t
            border-border
            px-4
            pb-4
            pt-4
            text-center
          "
        >
          {partner.description && (
            <p
              className="
                text-xs
                leading-relaxed
                text-muted-foreground
              "
            >
              {partner.description}
            </p>
          )}

          {partner.address && (
            <p
              className="
                mt-3
                text-xs
                leading-relaxed
                text-muted-foreground
              "
            >
              {partner.address}
            </p>
          )}

          <div
            className="
              mt-4
              flex
              flex-wrap
              justify-center
              gap-2
            "
          >
            {partner.websiteUrl && (
              <a
                href={partner.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
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
                  transition-colors
                  hover:bg-[#24304a]
                "
              >
                {t(
                  "partners.map.website",
                )}
              </a>
            )}

            {partner.mapsUrl && (
              <a
                href={partner.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
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
                  transition-colors
                  hover:bg-[#e08860]
                "
              >
                {t(
                  "partners.map.googleMaps",
                )}
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

export function PartnerMap({
  t,
}: {
  t: Translator;
}) {
  /*
    Empty selection means no filter is active,
    but every partner remains visible.
  */
  const [
    activeCategories,
    setActiveCategories,
  ] = useState<PartnerCategory[]>([]);

  const localizedPartners =
    useMemo(
      () =>
        PARTNER_LOCATIONS.map(
          (partner) =>
            localizePartnerLocation(
              partner,
              t,
            ),
        ),
      [t],
    );

  const firstPartnerId =
    localizedPartners[0]?.id ?? "";

  const [
    hoveredPartnerId,
    setHoveredPartnerId,
  ] = useState<string | null>(null);

  const [
    selectedPartnerId,
    setSelectedPartnerId,
  ] = useState<string | null>(null);

  const [
    pinnedPartnerId,
    setPinnedPartnerId,
  ] = useState<string | null>(
    firstPartnerId,
  );

  const highlightedPartnerId =
    hoveredPartnerId ??
    selectedPartnerId ??
    pinnedPartnerId;

  const [
    mapPosition,
    setMapPosition,
  ] = useState<MapPosition>({
    coordinates:
      PARTNER_MAP_CONFIG.initialCoordinates,

    zoom:
      PARTNER_MAP_CONFIG.initialZoom,
  });

  const visiblePartners =
    useMemo(() => {
      if (
        activeCategories.length === 0
      ) {
        return localizedPartners;
      }

      return localizedPartners.filter(
        (partner) =>
          activeCategories.includes(
            partner.category,
          ),
      );
    }, [
      activeCategories,
      localizedPartners,
    ]);

  const allCategoriesSelected =
    activeCategories.length ===
    PARTNER_CATEGORY_IDS.length;

  const resetPartnerSelection = (
    nextCategories: PartnerCategory[],
  ) => {
    const nextVisiblePartners =
      nextCategories.length === 0
        ? localizedPartners
        : localizedPartners.filter(
            (partner) =>
              nextCategories.includes(
                partner.category,
              ),
          );

    setSelectedPartnerId(null);
    setHoveredPartnerId(null);

    setPinnedPartnerId(
      nextVisiblePartners[0]?.id ??
        null,
    );
  };

  const handleCategoryChange = (
    filter: PartnerFilter,
  ) => {
    let nextCategories:
      PartnerCategory[];

    if (filter === "all") {
      nextCategories =
        allCategoriesSelected
          ? []
          : [...PARTNER_CATEGORY_IDS];
    } else {
      nextCategories =
        activeCategories.includes(filter)
          ? activeCategories.filter(
              (category) =>
                category !== filter,
            )
          : [
              ...activeCategories,
              filter,
            ];
    }

    setActiveCategories(
      nextCategories,
    );

    resetPartnerSelection(
      nextCategories,
    );
  };

  const handlePartnerClick = (
    partnerId: string,
  ) => {
    setSelectedPartnerId(
      (current) =>
        current === partnerId
          ? null
          : partnerId,
    );

    setPinnedPartnerId(
      partnerId,
    );

    setHoveredPartnerId(null);
  };

  const zoomIn = () => {
    setMapPosition((current) => ({
      ...current,

      zoom: Math.min(
        current.zoom +
          PARTNER_MAP_CONFIG.zoomStep,

        PARTNER_MAP_CONFIG.maxZoom,
      ),
    }));
  };

  const zoomOut = () => {
    setMapPosition((current) => ({
      ...current,

      zoom: Math.max(
        current.zoom -
          PARTNER_MAP_CONFIG.zoomStep,

        PARTNER_MAP_CONFIG.minZoom,
      ),
    }));
  };

  const resetZoom = () => {
    setMapPosition({
      coordinates:
        PARTNER_MAP_CONFIG.initialCoordinates,

      zoom:
        PARTNER_MAP_CONFIG.initialZoom,
    });
  };

  return (
    <div className="mt-12">
      {/* Category filters */}
      <div
        className="
          mb-8
          flex
          flex-wrap
          justify-center
          gap-2
        "
      >
        {PARTNER_FILTERS.map(
          (filter) => {
            const isActive =
              filter.id === "all"
                ? allCategoriesSelected
                : activeCategories.includes(
                    filter.id,
                  );

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() =>
                  handleCategoryChange(
                    filter.id,
                  )
                }
                className={`
                  rounded-full
                  border
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        border-[#141827]
                        bg-[#141827]
                        text-white
                      `
                      : `
                        border-border
                        bg-white
                        text-muted-foreground
                        hover:border-primary
                        hover:text-primary
                      `
                  }
                `}
              >
                <span
                  className="
                    mr-2
                    inline-block
                    h-2
                    w-2
                    rounded-full
                  "
                  style={{
                    background:
                      filter.color,
                  }}
                />

                {t(filter.labelKey)}
              </button>
            );
          },
        )}
      </div>

      {/* World map */}
      <div
        className="
          relative
          mx-auto
          max-w-7xl
        "
      >
        <div
          className="
            absolute
            right-0
            top-0
            z-20
            flex
            items-center
            gap-2
          "
        >
          <button
            type="button"
            aria-label={t(
              "partners.map.zoomIn",
            )}
            onClick={zoomIn}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-white
              text-[#141827]
              shadow-sm
              transition
              hover:border-primary
              hover:text-primary
            "
          >
            <Plus size={16} />
          </button>

          <button
            type="button"
            aria-label={t(
              "partners.map.zoomOut",
            )}
            onClick={zoomOut}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-white
              text-[#141827]
              shadow-sm
              transition
              hover:border-primary
              hover:text-primary
            "
          >
            <Minus size={16} />
          </button>

          <button
            type="button"
            aria-label={t(
              "partners.map.resetZoom",
            )}
            onClick={resetZoom}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-border
              bg-white
              text-[#141827]
              shadow-sm
              transition
              hover:border-primary
              hover:text-primary
            "
          >
            <RotateCcw size={15} />
          </button>
        </div>

        <ComposableMap
          projection="geoEqualEarth"
          width={
            PARTNER_MAP_CONFIG.width
          }
          height={
            PARTNER_MAP_CONFIG.height
          }
          projectionConfig={{
            scale:
              PARTNER_MAP_CONFIG.projectionScale,
          }}
          className="h-auto w-full"
        >
          <ZoomableGroup
            center={
              mapPosition.coordinates
            }
            zoom={
              mapPosition.zoom
            }
            minZoom={
              PARTNER_MAP_CONFIG.minZoom
            }
            maxZoom={
              PARTNER_MAP_CONFIG.maxZoom
            }
            onMoveEnd={({
              coordinates,
              zoom,
            }) => {
              setMapPosition({
                coordinates:
                  coordinates as [
                    number,
                    number,
                  ],

                zoom,
              });
            }}
          >
            <Geographies
              geography={
                PARTNER_MAP_CONFIG.geoUrl
              }
            >
              {({
                geographies,
              }: {
                geographies:
                  GeographyFeature[];
              }) =>
                geographies.map(
                  (geography) => (
                    <Geography
                      key={
                        geography.rsmKey
                      }
                      geography={
                        geography
                      }
                      fill="#AAB7C6"
                      stroke="#F8FAFC"
                      strokeWidth={0.7}
                      style={{
                        default: {
                          outline:
                            "none",
                        },

                        hover: {
                          fill:
                            "#94A3B8",

                          outline:
                            "none",
                        },

                        pressed: {
                          outline:
                            "none",
                        },
                      }}
                    />
                  ),
                )
              }
            </Geographies>

            {visiblePartners.map(
              (partner) => {
                const category =
                  getPartnerCategory(
                    partner.category,
                  );

                const isActive =
                  partner.id ===
                  highlightedPartnerId;

                return (
                  <Marker
                    key={partner.id}
                    coordinates={
                      partner.coordinates
                    }
                  >
                    <g
                      role="button"
                      tabIndex={0}
                      aria-label={`${t(
                        "partners.map.showPartner",
                      )}: ${
                        partner.displayName
                      }`}
                      onClick={() =>
                        handlePartnerClick(
                          partner.id,
                        )
                      }
                      onMouseEnter={() =>
                        setHoveredPartnerId(
                          partner.id,
                        )
                      }
                      onMouseLeave={() =>
                        setHoveredPartnerId(
                          null,
                        )
                      }
                      onKeyDown={(
                        event,
                      ) => {
                        if (
                          event.key ===
                            "Enter" ||
                          event.key ===
                            " "
                        ) {
                          event.preventDefault();

                          handlePartnerClick(
                            partner.id,
                          );
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
                          fill={
                            category.color
                          }
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
                        r={
                          isActive
                            ? 10
                            : 8.5
                        }
                        fill="#FFFFFF"
                        stroke={
                          category.color
                        }
                        strokeWidth={2}
                      />

                      {partner.logoUrl ? (
                        <image
                          href={
                            partner.logoUrl
                          }
                          x={
                            isActive
                              ? -6.5
                              : -5.5
                          }
                          y={
                            isActive
                              ? -6.5
                              : -5.5
                          }
                          width={
                            isActive
                              ? 13
                              : 11
                          }
                          height={
                            isActive
                              ? 13
                              : 11
                          }
                          preserveAspectRatio="xMidYMid meet"
                          pointerEvents="none"
                        />
                      ) : (
                        <text
                          textAnchor="middle"
                          y={3}
                          pointerEvents="none"
                          style={{
                            fontFamily:
                              "'DM Sans', sans-serif",

                            fontSize: 6,
                            fontWeight: 800,

                            fill:
                              category.color,
                          }}
                        >
                          {
                            partner.logoText
                          }
                        </text>
                      )}

                      {hoveredPartnerId ===
                        partner.id && (
                        <MarkerTooltip
                          partner={
                            partner
                          }
                        />
                      )}
                    </g>
                  </Marker>
                );
              },
            )}
          </ZoomableGroup>
        </ComposableMap>
      </div>

      {/* Partner cards */}
      <div
        className="
          mt-6
          grid
          grid-cols-1
          gap-2
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {visiblePartners.map(
          (partner) => (
            <PartnerLogoCard
              key={partner.id}
              partner={partner}
              t={t}
              active={
                partner.id ===
                highlightedPartnerId
              }
              selected={
                partner.id ===
                selectedPartnerId
              }
              onClick={() =>
                handlePartnerClick(
                  partner.id,
                )
              }
              onHover={() =>
                setHoveredPartnerId(
                  partner.id,
                )
              }
              onLeave={() =>
                setHoveredPartnerId(
                  null,
                )
              }
            />
          ),
        )}
      </div>
    </div>
  );
}