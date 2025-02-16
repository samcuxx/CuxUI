"use client";

import React from "react";
import { cn } from "@/lib/utils";

const fontSamples = [
  {
    title: "Display",
    variant: "text-5xl",
    weight: "font-bold",
    description: "Used for main headlines and hero sections",
    sample: "Display Text",
  },
  {
    title: "Heading 1",
    variant: "text-4xl",
    weight: "font-bold",
    description: "Primary section headings",
    sample: "Heading One",
  },
  {
    title: "Heading 2",
    variant: "text-3xl",
    weight: "font-semibold",
    description: "Secondary section headings",
    sample: "Heading Two",
  },
  {
    title: "Heading 3",
    variant: "text-2xl",
    weight: "font-semibold",
    description: "Subsection headings",
    sample: "Heading Three",
  },
  {
    title: "Heading 4",
    variant: "text-xl",
    weight: "font-medium",
    description: "Card titles and smaller headings",
    sample: "Heading Four",
  },
  {
    title: "Large Text",
    variant: "text-lg",
    weight: "font-normal",
    description: "Emphasized body text and introductions",
    sample: "Large body text for important content",
  },
  {
    title: "Body",
    variant: "text-base",
    weight: "font-normal",
    description: "Default body text",
    sample: "Regular body text for general content",
  },
  {
    title: "Small",
    variant: "text-sm",
    weight: "font-normal",
    description: "Helper text and secondary information",
    sample: "Small text for additional details",
  },
  {
    title: "Tiny",
    variant: "text-xs",
    weight: "font-normal",
    description: "Labels and metadata",
    sample: "Tiny text for minimal impact",
  },
];

const fontFamilies = [
  {
    name: "Inter",
    variable: "font-sans",
    description: "Primary font for UI elements and body text",
    sample: "The quick brown fox jumps over the lazy dog",
  },
  {
    name: "DynaPuff",
    variable: "font-dynapuff",
    description: "Display font for playful headings and accents",
    sample: "The quick brown fox jumps over the lazy dog",
  },
];

function TypeScale({
  title,
  variant,
  weight,
  description,
  sample,
}: {
  title: string;
  variant: string;
  weight: string;
  description: string;
  sample: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 py-4 border-b border-gray-200 dark:border-[#222F43]">
      <div className="w-48 shrink-0">
        <h3 className="font-medium text-[#101010] dark:text-[#94A9C9]">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-[#66768f]">
          {description}
        </p>
      </div>
      <div className="flex-1">
        <p
          className={cn(variant, weight, "text-[#101010] dark:text-[#94A9C9]")}
        >
          {sample}
        </p>
      </div>
      <div className="w-32 shrink-0 text-sm text-gray-500 dark:text-[#66768f]">
        {variant}
      </div>
    </div>
  );
}

export default function TypographyPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-[#101010] dark:text-[#94A9C9] mb-4">
          Typography
        </h1>
        <p className="text-gray-500 dark:text-[#66768f] mb-8">
          Typography guidelines and scale for consistent and readable text
          across the interface.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Font Families
        </h2>
        <div className="space-y-6">
          {fontFamilies.map((font) => (
            <div
              key={font.name}
              className="p-6 rounded-lg border border-gray-200 dark:border-[#222F43] bg-white dark:bg-[#131C31]"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-medium text-[#101010] dark:text-[#94A9C9]">
                    {font.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-[#66768f]">
                    {font.description}
                  </p>
                </div>
                <code className="px-2 py-1 text-sm bg-gray-100 dark:bg-[#1a2333] rounded">
                  {font.variable}
                </code>
              </div>
              <p
                className={cn(
                  "text-2xl text-[#101010] dark:text-[#94A9C9]",
                  font.variable
                )}
              >
                {font.sample}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Type Scale
        </h2>
        <div className="rounded-lg border border-gray-200 dark:border-[#222F43] bg-white dark:bg-[#131C31] divide-y divide-gray-200 dark:divide-[#222F43]">
          {fontSamples.map((sample) => (
            <TypeScale key={sample.title} {...sample} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Usage Guidelines
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <ul className="list-disc list-inside space-y-2 text-gray-500 dark:text-[#66768f]">
            <li>
              Use Inter for all UI elements to maintain consistency and
              readability
            </li>
            <li>
              DynaPuff can be used sparingly for playful accents and special
              headings
            </li>
            <li>
              Maintain proper hierarchy by using appropriate text sizes and
              weights
            </li>
            <li>
              Ensure sufficient contrast between text and background colors
            </li>
            <li>
              Use appropriate line heights and letter spacing for optimal
              readability
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
