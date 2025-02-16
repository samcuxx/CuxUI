"use client";
import React from "react";
import {
  Package,
  Palette,
  Zap,
  Repeat2,
  Github,
  ExternalLink,
  Code2,
  Sparkles,
  Shield,
  Laptop,
} from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";
import { AnimatedTitle, AnimatedParagraph } from "@/components/ui/AnimatedText";
import MagneticLink from "@/components/ui/MagneticLink";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: <Package className="w-6 h-6 text-[#ffe400]" />,
    title: "Modern Components",
    description:
      "A comprehensive collection of beautifully crafted, customizable React components.",
  },
  {
    icon: <Palette className="w-6 h-6 text-[#ffe400]" />,
    title: "Stunning Design",
    description:
      "Thoughtfully designed with modern aesthetics and smooth animations.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#ffe400]" />,
    title: "Performance First",
    description:
      "Optimized for speed and efficiency, ensuring a seamless user experience.",
  },
  {
    icon: <Repeat2 className="w-6 h-6 text-[#ffe400]" />,
    title: "Highly Reusable",
    description:
      "Components built with flexibility and reusability in mind for any project.",
  },
];

const highlights = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "TypeScript Ready",
    description: "Built with TypeScript for better development experience",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Dark Mode",
    description: "Seamless light and dark mode support out of the box",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Accessible",
    description: "ARIA-compliant components for inclusive applications",
  },
  {
    icon: <Laptop className="w-5 h-5" />,
    title: "Responsive",
    description: "Mobile-first design that works on all devices",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-24">
        <div className="mb-8">
          <AnimatedTitle
            text="Welcome to"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#101010] dark:text-[#94A9C9] mb-4"
            delay={200}
          />
          <TypewriterText
            phrases={[
              "CuxUI",
              "Modern Design",
              "Beautiful UI",
              "React Components",
            ]}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ffe400]"
            cursorStyle="bar"
          />
        </div>
        <AnimatedParagraph
          text="A modern, beautiful, and accessible React component library. Build stunning user interfaces with ease."
          className="text-gray-500 dark:text-[#66768f] text-lg md:text-xl max-w-3xl mx-auto mb-12"
          delay={500}
        />
        <div className="flex flex-wrap justify-center gap-4">
          <MagneticLink href="/components/buttons">
            <Button size="lg" className="font-medium px-8">
              Get Started
            </Button>
          </MagneticLink>
          <MagneticLink href="https://github.com/samcuxx/CuxUI">
            <Button size="lg" variant="outline" className="font-medium px-8">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </MagneticLink>
        </div>
      </div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-8 mb-24"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="p-8 bg-white dark:bg-[#131C31] rounded-xl border border-gray-100 
              dark:border-[#222F43] hover:border-[#ffe400] dark:hover:border-[#ffe400] 
              transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#ffe400] bg-opacity-10 rounded-lg group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-[#66768f]">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Highlights Section */}
      <div className="text-center mb-24">
        <AnimatedTitle
          text="Why Choose CuxUI?"
          className="text-3xl font-bold text-[#101010] dark:text-[#94A9C9] mb-12"
          delay={200}
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-4 gap-8"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-white dark:bg-[#131C31] rounded-lg border border-gray-100 
                dark:border-[#222F43] hover:border-[#ffe400] dark:hover:border-[#ffe400] 
                transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-[#ffe400] bg-opacity-10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#101010] dark:text-[#94A9C9] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-[#66768f]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-24">
        <div className="max-w-3xl mx-auto p-8 bg-[#ffe400] bg-opacity-5 rounded-2xl border border-[#ffe400] border-opacity-20">
          <AnimatedTitle
            text="Start Building Beautiful UIs Today"
            className="text-2xl md:text-3xl font-bold text-[#101010] dark:text-[#94A9C9] mb-4"
            delay={200}
          />
          <AnimatedParagraph
            text="Join the community of developers creating stunning applications with CuxUI."
            className="text-gray-500 dark:text-[#66768f] mb-8"
            delay={400}
          />
          <div className="flex flex-wrap justify-center gap-4">
            <MagneticLink href="/components/installation">
              <Button size="lg" className="font-medium px-8">
                Documentation
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </MagneticLink>
          </div>
        </div>
      </div>
    </div>
  );
}
