import type { LocalizedNewsArticle } from "@app/data/content";

function RMonogram({ size = 58 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="18" stroke="#fff" strokeWidth="1.6" />
      <path d="M14 27V13h6a4 4 0 0 1 0 8h-6m6 0 5 6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function NewsCard({ article }: { article: LocalizedNewsArticle }) {
  const color = article.tagColor;
  return (
    <a
      href={`?article=${article.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-[18px] border border-border bg-white shadow-[0_6px_20px_rgba(20,24,39,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(201,106,62,0.13)]"
    >
      {/* thumbnail: image OR branded placeholder */}
      <div className="relative h-[172px] overflow-hidden">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#f09f74] to-[#c96a3e]">
            <div
              aria-hidden
              className="absolute inset-0 opacity-50"
              style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1.5px)", backgroundSize: "16px 16px" }}
            />
            <RMonogram />
            <span className="absolute bottom-3 left-3.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/85">
              {article.tag}
            </span>
          </div>
        )}
        <span
          className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold text-white"
          style={{ background: color }}
        >
          {article.tag}
        </span>
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-5">
        <h3
          className="text-base font-bold leading-snug text-foreground"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {article.title}
        </h3>
        <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-[#7c7b86]">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-mono text-xs text-[#a7a4ad]">{article.date}</span>
          <span className="flex items-center gap-1.5 text-[12.5px] font-bold text-[#c96a3e]">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M17 7H8M17 7v9" /></svg>
          </span>
        </div>
      </div>
    </a>
  );
}