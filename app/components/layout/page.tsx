"use client";

import React from "react";
import { cn } from "@/lib/utils";

const spacingScale = [
  { name: "px", value: "1px", description: "Pixel-perfect borders" },
  { name: "0.5", value: "0.125rem", description: "2px - Minimal spacing" },
  { name: "1", value: "0.25rem", description: "4px - Tight spacing" },
  { name: "2", value: "0.5rem", description: "8px - Default compact spacing" },
  { name: "3", value: "0.75rem", description: "12px - Default spacing" },
  { name: "4", value: "1rem", description: "16px - Standard spacing" },
  { name: "6", value: "1.5rem", description: "24px - Comfortable spacing" },
  { name: "8", value: "2rem", description: "32px - Section spacing" },
  { name: "12", value: "3rem", description: "48px - Large section spacing" },
  { name: "16", value: "4rem", description: "64px - Extra large spacing" },
];

const breakpoints = [
  { name: "sm", value: "640px", description: "Small devices" },
  { name: "md", value: "768px", description: "Medium devices" },
  { name: "lg", value: "1024px", description: "Large devices" },
  { name: "xl", value: "1280px", description: "Extra large devices" },
  { name: "2xl", value: "1536px", description: "2X large devices" },
];

const containers = [
  { name: "Default", className: "container" },
  { name: "Small", className: "container max-w-sm" },
  { name: "Medium", className: "container max-w-md" },
  { name: "Large", className: "container max-w-lg" },
  { name: "Extra Large", className: "container max-w-xl" },
  { name: "2X Large", className: "container max-w-2xl" },
];

function SpacingExample({
  name,
  value,
  description,
}: {
  name: string;
  value: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-24 shrink-0">
        <code className="text-sm font-mono bg-gray-100 dark:bg-[#1a2333] px-2 py-1 rounded">
          {name}
        </code>
      </div>
      <div className="flex-1 flex items-center gap-4">
        <div
          className="bg-[#ffe400] bg-opacity-20"
          style={{ width: value, height: value }}
        />
        <div>
          <p className="text-sm font-medium text-[#101010] dark:text-[#94A9C9]">
            {value}
          </p>
          <p className="text-sm text-gray-500 dark:text-[#66768f]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function GridExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((n) => (
        <div
          key={n}
          className="h-24 rounded-lg bg-[#ffe400] bg-opacity-10 flex items-center justify-center text-[#ffe400]"
        >
          Column {n}
        </div>
      ))}
    </div>
  );
}

function ContainerExample({
  name,
  className,
}: {
  name: string;
  className: string;
}) {
  return (
    <div className="relative py-4">
      <div
        className={cn(
          "mx-auto bg-[#ffe400] bg-opacity-10 h-12 rounded-lg",
          className
        )}
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 px-4">
          <p className="text-sm font-medium text-[#101010] dark:text-[#94A9C9]">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LayoutPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-[#101010] dark:text-[#94A9C9] mb-4">
          Layout
        </h1>
        <p className="text-gray-500 dark:text-[#66768f] mb-8">
          Layout guidelines for consistent spacing, responsive design, and
          component organization.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Spacing Scale
        </h2>
        <div className="space-y-6 p-6 rounded-lg border border-gray-200 dark:border-[#222F43] bg-white dark:bg-[#131C31]">
          {spacingScale.map((space) => (
            <SpacingExample key={space.name} {...space} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Breakpoints
        </h2>
        <div className="space-y-4 p-6 rounded-lg border border-gray-200 dark:border-[#222F43] bg-white dark:bg-[#131C31]">
          {breakpoints.map((breakpoint) => (
            <div
              key={breakpoint.name}
              className="flex items-center justify-between"
            >
              <div>
                <code className="text-sm font-mono bg-gray-100 dark:bg-[#1a2333] px-2 py-1 rounded">
                  {breakpoint.name}
                </code>
                <p className="mt-1 text-sm text-gray-500 dark:text-[#66768f]">
                  {breakpoint.description}
                </p>
              </div>
              <div className="text-sm text-[#101010] dark:text-[#94A9C9]">
                {breakpoint.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Grid System
        </h2>
        <div className="p-6 rounded-lg border border-gray-200 dark:border-[#222F43] bg-white dark:bg-[#131C31]">
          <p className="text-sm text-gray-500 dark:text-[#66768f] mb-4">
            Responsive grid layout that adapts to different screen sizes
          </p>
          <GridExample />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Container Sizes
        </h2>
        <div className="space-y-6 p-6 rounded-lg border border-gray-200 dark:border-[#222F43] bg-white dark:bg-[#131C31]">
          {containers.map((container) => (
            <ContainerExample key={container.name} {...container} />
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
              Use consistent spacing values from the spacing scale for margins
              and padding
            </li>
            <li>
              Design responsive layouts that adapt gracefully across different
              breakpoints
            </li>
            <li>Utilize the grid system for consistent column-based layouts</li>
            <li>
              Choose appropriate container sizes based on content and context
            </li>
            <li>
              Maintain proper spacing hierarchy to improve visual organization
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
