import React from "react";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Mail, Plus } from "lucide-react";

export default function ButtonsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-[#101010] dark:text-[#94A9C9] mb-4">
          Buttons
        </h1>
        <p className="text-gray-500 dark:text-[#66768f] mb-8">
          A collection of button components with different variants and sizes.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Button Variants
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Button Sizes
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small Button</Button>
          <Button>Default Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          With Icons
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button>
            <Mail className="mr-2 h-4 w-4" /> Email
          </Button>
          <Button variant="secondary">
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          States
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
          <Button isLoading>Loading</Button>
        </div>
      </section>
    </div>
  );
}
