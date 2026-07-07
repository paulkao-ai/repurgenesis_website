import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "@app/data/content";

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-2">
      {FAQS.map((faq, i) => (
        <div key={i} className="border border-border rounded-2xl overflow-hidden bg-card">
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-sm md:text-base cursor-pointer hover:bg-accent transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{faq.q}</span>
            {open === i ? <ChevronUp size={18} className="text-primary shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground shrink-0" />}
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
