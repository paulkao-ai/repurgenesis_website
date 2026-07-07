import { ExternalLink } from "lucide-react";
import { TAG_COLOR, type NewsArticle } from "@app/data/content";

export function NewsCard({ article }: { article: NewsArticle }) {
  const color = TAG_COLOR[article.tag] ?? "#f09f74";
  return (
    <div className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden flex flex-col hover:shadow-md transition-shadow cursor-pointer group">
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <span
            className="text-xs font-semibold pb-1 border-b-2"
            style={{ color, borderColor: color }}
          >
            {article.tag}
          </span>
        </div>
        <h3
          className="font-bold text-[15px] leading-snug text-[#141827] mb-2 group-hover:text-primary transition-colors"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {article.title}
        </h3>
        <p className="text-xs text-[#6b6a72] leading-relaxed flex-1">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-[#9ca3af]">{article.date}</span>
          {/* <span className="text-xs font-semibold flex items-center gap-1" style={{ color }}>
            Read more <ExternalLink size={10} />
          </span> */}
        </div>
      </div>
      {article.image && (
        <div className="h-40 overflow-hidden bg-[#f1f5f9] shrink-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
    </div>
  );
}
