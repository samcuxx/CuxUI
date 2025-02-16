"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

export default function AccordionsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-[#101010] dark:text-[#94A9C9] mb-4">
          Accordions
        </h1>
        <p className="text-gray-500 dark:text-[#66768f] mb-8">
          Accordions display a list of high-level options that can
          expand/collapse to reveal more information.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Basic Accordion
        </h2>
        <Accordion className="max-w-2xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is SamComponents?</AccordionTrigger>
            <AccordionContent>
              SamComponents is a modern, customizable, and accessible component
              library built with React and TailwindCSS. It provides a collection
              of reusable UI components for building beautiful user interfaces.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How do I get started?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <p>
                  Getting started with SamComponents is easy. Just follow these
                  steps:
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Install the package using npm or yarn</li>
                  <li>Import the components you need</li>
                  <li>Start building your UI</li>
                </ol>
                <Button variant="outline" size="sm">
                  View Documentation
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Is it customizable?</AccordionTrigger>
            <AccordionContent>
              Yes! SamComponents is highly customizable. You can customize
              colors, typography, spacing, and other design tokens to match your
              brand. Each component also accepts custom className props for
              additional styling.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Multiple Sections
        </h2>
        <Accordion type="multiple" className="max-w-2xl">
          <AccordionItem value="feature-1">
            <AccordionTrigger>Responsive Design</AccordionTrigger>
            <AccordionContent>
              All components are designed to work seamlessly across different
              screen sizes and devices, ensuring a consistent user experience.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="feature-2">
            <AccordionTrigger>Dark Mode Support</AccordionTrigger>
            <AccordionContent>
              Built-in dark mode support with smooth transitions and carefully
              chosen color palettes for both light and dark themes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="feature-3">
            <AccordionTrigger>Accessibility</AccordionTrigger>
            <AccordionContent>
              Components follow WAI-ARIA guidelines and are thoroughly tested
              for keyboard navigation, screen readers, and other accessibility
              tools.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          With Default Value
        </h2>
        <Accordion defaultValue={["settings-1"]} className="max-w-2xl">
          <AccordionItem value="settings-1">
            <AccordionTrigger>Account Settings</AccordionTrigger>
            <AccordionContent>
              Manage your account settings, including profile information,
              notification preferences, and privacy options.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="settings-2">
            <AccordionTrigger>Security</AccordionTrigger>
            <AccordionContent>
              Configure security settings, two-factor authentication, and review
              login history.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="settings-3" disabled>
            <AccordionTrigger>Advanced Settings (Disabled)</AccordionTrigger>
            <AccordionContent>
              This section is currently disabled and cannot be accessed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
