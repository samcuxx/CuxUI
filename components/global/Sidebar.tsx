"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Theme from "./Theme";
import {
  Layout,
  Type,
  MousePointer2,
  Box,
  AlertCircle,
  Table,
  FormInput,
  Palette,
  HelpCircle,
  ChevronDown,
  Maximize2,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const components = [
  {
    category: "Foundation",
    items: [
      {
        name: "Colors",
        href: "/components/colors",
        icon: <Palette className="w-4 h-4" />,
      },
      {
        name: "Typography",
        href: "/components/typography",
        icon: <Type className="w-4 h-4" />,
      },
      {
        name: "Layout",
        href: "/components/layout",
        icon: <Layout className="w-4 h-4" />,
      },
    ],
  },
  {
    category: "Components",
    items: [
      {
        name: "Buttons",
        href: "/components/buttons",
        icon: <MousePointer2 className="w-4 h-4" />,
      },
      {
        name: "Inputs",
        href: "/components/inputs",
        icon: <FormInput className="w-4 h-4" />,
      },
      {
        name: "Cards",
        href: "/components/cards",
        icon: <Box className="w-4 h-4" />,
      },
      {
        name: "Tables",
        href: "/components/tables",
        icon: <Table className="w-4 h-4" />,
      },
      {
        name: "Alerts",
        href: "/components/alerts",
        icon: <AlertCircle className="w-4 h-4" />,
      },
      {
        name: "Tooltips",
        href: "/components/tooltips",
        icon: <HelpCircle className="w-4 h-4" />,
      },
      {
        name: "Accordions",
        href: "/components/accordions",
        icon: <ChevronDown className="w-4 h-4" />,
      },
      {
        name: "Modals",
        href: "/components/modals",
        icon: <Maximize2 className="w-4 h-4" />,
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (!isMounted) return null;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-[#131C31] border border-gray-200 dark:border-[#222F43] hover:bg-gray-100 dark:hover:bg-[#1a2333] transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-[#101010] dark:text-[#94A9C9]" />
        ) : (
          <Menu className="w-5 h-5 text-[#101010] dark:text-[#94A9C9]" />
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-40 h-screen bg-white dark:bg-[#131C31] border-r border-gray-200 dark:border-[#222F43] transition-transform duration-300 lg:translate-x-0 lg:static",
          "w-[280px] p-4",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="text-xl font-bold text-[#101010] dark:text-[#94A9C9]"
          >
            <span className="text-[#ffe400]">Cux</span>UI
          </Link>
          <Theme />
        </div>

        <nav className="space-y-8 h-[calc(100vh-5rem)] overflow-y-auto">
          {components.map((section) => (
            <div key={section.category}>
              <h3 className="text-sm font-medium text-gray-500 dark:text-[#66768f] mb-4">
                {section.category}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                        pathname === item.href
                          ? "bg-[#ffe400] bg-opacity-10 text-[#ffe400]"
                          : "text-[#101010] dark:text-[#94A9C9] hover:bg-gray-100 dark:hover:bg-[#1a2333]"
                      )}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
