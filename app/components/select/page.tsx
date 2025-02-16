"use client";

import React, { useState } from "react";
import { Select, SelectGroup, SelectOption } from "@/components/ui/Select";

const frameworks: SelectOption[] = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];

const languages: SelectOption[] = [
  { value: "js", label: "JavaScript" },
  { value: "ts", label: "TypeScript" },
  { value: "py", label: "Python" },
  { value: "rb", label: "Ruby", disabled: true },
  { value: "go", label: "Go" },
];

export default function SelectPage() {
  const [framework, setFramework] = useState<string>();
  const [language, setLanguage] = useState<string>();
  const [grouped, setGrouped] = useState<string>();

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-[#101010] dark:text-[#94A9C9]">
        Select
      </h1>

      {/* Basic Example */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[#101010] dark:text-[#94A9C9]">
          Basic Select
        </h2>
        <div className="max-w-xs">
          <Select
            options={frameworks}
            value={framework}
            onChange={setFramework}
            placeholder="Select a framework"
          />
          <p className="mt-2 text-sm text-gray-500">
            Selected: {framework || "None"}
          </p>
        </div>
      </section>

      {/* Disabled Options */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[#101010] dark:text-[#94A9C9]">
          With Disabled Options
        </h2>
        <div className="max-w-xs">
          <Select
            options={languages}
            value={language}
            onChange={setLanguage}
            placeholder="Select a language"
          />
        </div>
      </section>

      {/* Disabled Select */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[#101010] dark:text-[#94A9C9]">
          Disabled Select
        </h2>
        <div className="max-w-xs">
          <Select
            options={frameworks}
            value={framework}
            onChange={setFramework}
            placeholder="Select a framework"
            disabled
          />
        </div>
      </section>

      {/* Grouped Options */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[#101010] dark:text-[#94A9C9]">
          Grouped Options
        </h2>
        <div className="max-w-xs">
          <Select
            options={[
              ...frameworks.map((option) => ({
                ...option,
                group: "Frameworks",
              })),
              ...languages.map((option) => ({
                ...option,
                group: "Languages",
              })),
            ].reduce<SelectOption[]>((acc, curr) => {
              const group = acc.find((item) => item.value === curr.group);
              if (!group) {
                acc.push({
                  value: curr.group,
                  label: curr.group,
                  disabled: true,
                });
              }
              acc.push(curr);
              return acc;
            }, [])}
            value={grouped}
            onChange={setGrouped}
            placeholder="Select an option"
          />
        </div>
      </section>

      {/* Custom Styling */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[#101010] dark:text-[#94A9C9]">
          Custom Styling
        </h2>
        <div className="max-w-xs">
          <Select
            options={frameworks}
            value={framework}
            onChange={setFramework}
            placeholder="Select a framework"
            className="bg-[#ffe400] bg-opacity-10 border-[#ffe400] text-[#101010] dark:text-[#94A9C9]"
          />
        </div>
      </section>
    </div>
  );
}
