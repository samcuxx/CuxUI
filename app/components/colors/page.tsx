"use client";

import React from "react";
import { Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const colorPalette = {
  primary: {
    title: "Primary",
    colors: [
      { name: "sa-light-primary", value: "#ffe400" },
      { name: "sa-dark-primary", value: "#ffe400" },
    ],
  },
  background: {
    title: "Background",
    colors: [
      { name: "sa-light-bg", value: "#ffffff" },
      { name: "sa-dark-bg", value: "#0b1121" },
    ],
  },
  accent: {
    title: "Accent",
    colors: [
      { name: "sa-light-accent", value: "#101010" },
      { name: "sa-dark-accent", value: "#94a9c9" },
    ],
  },
  foreground: {
    title: "Foreground",
    colors: [
      { name: "sa-light-foreground", value: "#f7f7f7" },
      { name: "sa-dark-foreground", value: "#131c31" },
    ],
  },
  text: {
    title: "Text",
    colors: [
      { name: "sa-light-text-main", value: "#101010" },
      { name: "sa-light-text-low", value: "#666666" },
      { name: "sa-dark-text-main", value: "#94a9c9" },
      { name: "sa-dark-text-low", value: "#66768f" },
    ],
  },
  blue: {
    title: "Blue",
    colors: [
      { name: "sa-blue", value: "#0ea5ea" },
      { name: "sa-blue2", value: "#0bd1d1" },
    ],
  },
};

function ColorCard({
  name,
  value,
  className,
}: {
  name: string;
  value: string;
  className?: string;
}) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      className={cn(
        "group relative rounded-lg border border-gray-200 dark:border-[#222F43] overflow-hidden",
        className
      )}
    >
      <div
        className="h-24 w-full transition-transform group-hover:scale-105"
        style={{ backgroundColor: value }}
      />
      <div className="p-4 bg-white dark:bg-[#131C31]">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-[#101010] dark:text-[#94A9C9]">
              {name}
            </p>
            <p className="text-sm text-gray-500 dark:text-[#66768f]">{value}</p>
          </div>
          <button
            onClick={() => copyToClipboard(value)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1a2333] transition-colors"
            title="Copy color value"
          >
            <Copy className="w-4 h-4 text-gray-500 dark:text-[#66768f]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ColorsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-[#101010] dark:text-[#94A9C9] mb-4">
          Colors
        </h1>
        <p className="text-gray-500 dark:text-[#66768f] mb-8">
          The color system is designed to be accessible, consistent, and
          adaptable across different themes and contexts.
        </p>
      </div>

      {Object.entries(colorPalette).map(([key, section]) => (
        <section key={key}>
          <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {section.colors.map((color) => (
              <ColorCard
                key={color.name}
                name={color.name}
                value={color.value}
              />
            ))}
          </div>
        </section>
      ))}

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Usage Guidelines
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <ul className="list-disc list-inside space-y-2 text-gray-500 dark:text-[#66768f]">
            <li>
              Use primary colors for main actions, highlights, and brand
              representation
            </li>
            <li>
              Background colors provide the foundation for different UI sections
              and themes
            </li>
            <li>
              Accent colors are used for interactive elements and important UI
              components
            </li>
            <li>
              Text colors ensure readability and hierarchy in both light and
              dark themes
            </li>
            <li>
              Blue variants can be used for links, progress indicators, and
              decorative elements
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
