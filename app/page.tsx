import React from "react";
import { Package, Palette, Zap, Repeat2 } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";
import { AnimatedTitle, AnimatedParagraph } from "@/components/ui/AnimatedText";
import MagneticLink from "@/components/ui/MagneticLink";
import { Button } from "@/components/ui/Button";

const features = [
  {
    icon: <Package className="w-6 h-6 text-[#ffe400]" />,
    title: "Ready-to-use Components",
    description:
      "A comprehensive collection of pre-built, customizable components for your next project.",
  },
  {
    icon: <Palette className="w-6 h-6 text-[#ffe400]" />,
    title: "Customizable Design",
    description:
      "Easily customize colors, typography, and other design tokens to match your brand.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#ffe400]" />,
    title: "Performance Optimized",
    description:
      "Built with performance in mind, ensuring fast load times and smooth interactions.",
  },
  {
    icon: <Repeat2 className="w-6 h-6 text-[#ffe400]" />,
    title: "Reusable & Consistent",
    description:
      "Maintain consistency across your projects with reusable, well-documented components.",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#101010] dark:text-[#94A9C9] mb-4">
          <AnimatedTitle text="Welcome to" delay={200} />{" "}
          <TypewriterText
            phrases={[
              "SamComponents",
              "Beautiful UI",
              "Modern Design",
              "Reusable Code",
            ]}
            className="text-[#ffe400]"
            cursorStyle="bar"
          />
        </h1>
        <AnimatedParagraph
          text="A modern, customizable, and accessible component library built with React and TailwindCSS. Perfect for building beautiful user interfaces."
          className="text-gray-500 dark:text-[#66768f] text-lg max-w-2xl mx-auto"
          delay={500}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-[#131C31] rounded-xl border border-gray-100 
              dark:border-[#222F43] hover:border-[#ffe400] dark:hover:border-[#ffe400] 
              transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#ffe400] bg-opacity-10 rounded-lg">
                {feature.icon}
              </div>
              <div>
                <AnimatedTitle
                  text={feature.title}
                  className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-2"
                  delay={700 + index * 100}
                />
                <AnimatedParagraph
                  text={feature.description}
                  className="text-gray-500 dark:text-[#66768f]"
                  delay={900 + index * 100}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center space-y-6">
        <AnimatedParagraph
          text="Get started by exploring our components in the sidebar."
          className="text-gray-500 dark:text-[#66768f]"
          delay={1500}
        />
        <div className="flex justify-center gap-4">
          <MagneticLink href="/components/buttons">
            <Button size="lg" className="font-medium">
              View Components
            </Button>
          </MagneticLink>
          <MagneticLink href="https://github.com/yourusername/SamComponents">
            <Button size="lg" variant="outline" className="font-medium">
              GitHub Repository
            </Button>
          </MagneticLink>
        </div>
      </div>
    </div>
  );
}
