"use client";

import { useState } from "react";
import { type FAQItem } from "@/data/faq";

interface AccordionProps {
  items: FAQItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-graphite-100">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="py-2">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-accent-600"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium text-graphite-900 md:text-lg">
                {item.question}
              </span>
              <span
                className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-graphite-200 text-graphite-500 transition-transform duration-300 ${
                  isOpen ? "rotate-45 bg-accent-50 border-accent-200 text-accent-600" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pr-10 text-base leading-relaxed text-graphite-600">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
