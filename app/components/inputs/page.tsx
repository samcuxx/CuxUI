import React from "react";
import { Input } from "@/components/ui/Input";
import { Mail, Search, Lock, User } from "lucide-react";

export default function InputsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-[#101010] dark:text-[#94A9C9] mb-4">
          Inputs
        </h1>
        <p className="text-gray-500 dark:text-[#66768f] mb-8">
          A collection of input components with different states and variations.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Basic Input
        </h2>
        <div className="max-w-sm space-y-4">
          <Input placeholder="Enter your text" />
          <Input placeholder="Disabled input" disabled />
          <Input placeholder="With error" error="This field is required" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          With Icons
        </h2>
        <div className="max-w-sm space-y-4">
          <Input
            icon={<Search className="w-4 h-4" />}
            placeholder="Search..."
          />
          <Input
            icon={<Mail className="w-4 h-4" />}
            type="email"
            placeholder="Email address"
          />
          <Input
            icon={<Lock className="w-4 h-4" />}
            type="password"
            placeholder="Password"
          />
          <Input icon={<User className="w-4 h-4" />} placeholder="Username" />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Form Example
        </h2>
        <form className="max-w-sm space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#101010] dark:text-[#94A9C9] mb-2"
            >
              Name
            </label>
            <Input
              id="name"
              icon={<User className="w-4 h-4" />}
              placeholder="John Doe"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#101010] dark:text-[#94A9C9] mb-2"
            >
              Email
            </label>
            <Input
              id="email"
              icon={<Mail className="w-4 h-4" />}
              type="email"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#101010] dark:text-[#94A9C9] mb-2"
            >
              Password
            </label>
            <Input
              id="password"
              icon={<Lock className="w-4 h-4" />}
              type="password"
              placeholder="Enter your password"
            />
          </div>
        </form>
      </section>
    </div>
  );
}
