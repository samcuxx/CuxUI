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
  Search,
  ChevronRight,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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

interface SectionProps {
  section: {
    category: string;
    items: {
      name: string;
      href: string;
      icon: React.ReactNode;
    }[];
  };
  isCollapsed: boolean;
  onToggle: () => void;
  pathname: string;
  searchQuery: string;
}

function Section({
  section,
  isCollapsed,
  onToggle,
  pathname,
  searchQuery,
}: SectionProps) {
  const filteredItems = section.items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredItems.length === 0) return null;

  return (
    <div>
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-sm font-medium text-gray-500 dark:text-[#66768f] mb-2 hover:text-[#101010] dark:hover:text-[#94A9C9] transition-colors group"
      >
        <span>{section.category}</span>
        <ChevronRight
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            !isCollapsed && "rotate-90"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {!isCollapsed && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-1 overflow-hidden mb-6"
          >
            {filteredItems.map((item) => (
              <motion.li
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-all",
                    pathname === item.href
                      ? "bg-[#ffe400] bg-opacity-10 text-[#ffe400]"
                      : "text-[#101010] dark:text-[#94A9C9] hover:bg-gray-100 dark:hover:bg-[#1a2333]",
                    "hover:translate-x-1"
                  )}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [collapsedSections, setCollapsedSections] = useState<string[]>([]);

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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleSection = (category: string) => {
    setCollapsedSections((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  if (!isMounted) return null;

  return (
    <>
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

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <motion.div
        initial={false}
        animate={{
          x: isOpen ? 0 : -280,
          width: 280,
        }}
        className={cn(
          "fixed top-0 left-0 z-40 h-screen bg-white dark:bg-[#131C31] border-r border-gray-200 dark:border-[#222F43] lg:translate-x-0 lg:static",
          "p-4"
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="text-xl font-bold text-[#101010] dark:text-[#94A9C9]"
          >
            SamComponents
          </Link>
          <Theme />
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={cn(
              "w-full h-10 pl-9 pr-4 rounded-lg text-sm",
              "bg-gray-50 dark:bg-[#1a2333]",
              "border border-gray-200 dark:border-[#222F43]",
              "focus:outline-none focus:ring-2 focus:ring-[#ffe400] focus:border-transparent",
              "text-[#101010] dark:text-[#94A9C9]",
              "placeholder-gray-400 dark:placeholder-[#66768f]"
            )}
          />
        </div>

        <nav className="space-y-6 h-[calc(100vh-12rem)] overflow-y-auto">
          {components.map((section) => (
            <Section
              key={section.category}
              section={section}
              isCollapsed={collapsedSections.includes(section.category)}
              onToggle={() => toggleSection(section.category)}
              pathname={pathname}
              searchQuery={searchQuery}
            />
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <a
            href="https://github.com/yourusername/SamComponents"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
              "text-[#101010] dark:text-[#94A9C9]",
              "hover:bg-gray-100 dark:hover:bg-[#1a2333]",
              "border border-gray-200 dark:border-[#222F43]"
            )}
          >
            <Github className="w-4 h-4" />
            <span className="text-sm">View on GitHub</span>
          </a>
        </div>
      </motion.div>
    </>
  );
}
