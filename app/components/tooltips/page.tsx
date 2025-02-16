"use client";

import React from "react";
import Tooltip from "@/components/ui/Tooltip";
import { Button } from "@/components/ui/Button";
import { Info, Settings, HelpCircle, AlertCircle } from "lucide-react";

export default function TooltipsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-[#101010] dark:text-[#94A9C9] mb-4">
          Tooltips
        </h1>
        <p className="text-gray-500 dark:text-[#66768f] mb-8">
          Tooltips provide additional information about elements in your
          interface.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Basic Tooltips
        </h2>
        <div className="flex flex-wrap gap-4">
          <Tooltip content="This is a default tooltip">
            <Button>Hover me</Button>
          </Tooltip>

          <Tooltip content="Click to save your changes" position="bottom">
            <Button variant="secondary">Save</Button>
          </Tooltip>

          <Tooltip
            content="This tooltip appears with a delay"
            delay={1}
            position="right"
          >
            <Button variant="outline">Delayed</Button>
          </Tooltip>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Tooltip Positions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Tooltip content="Tooltip on top" position="top">
            <Button variant="outline" className="w-full">
              Top
            </Button>
          </Tooltip>

          <Tooltip content="Tooltip on bottom" position="bottom">
            <Button variant="outline" className="w-full">
              Bottom
            </Button>
          </Tooltip>

          <Tooltip content="Tooltip on left" position="left">
            <Button variant="outline" className="w-full">
              Left
            </Button>
          </Tooltip>

          <Tooltip content="Tooltip on right" position="right">
            <Button variant="outline" className="w-full">
              Right
            </Button>
          </Tooltip>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          With Icons
        </h2>
        <div className="flex flex-wrap gap-4">
          <Tooltip content="Get more information">
            <Button variant="ghost" size="icon">
              <Info className="h-4 w-4" />
            </Button>
          </Tooltip>

          <Tooltip content="Adjust your preferences" position="bottom">
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </Tooltip>

          <Tooltip content="Need help? Click here" position="right">
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </Tooltip>

          <Tooltip
            content="Warning: This action cannot be undone"
            position="left"
          >
            <Button variant="ghost" size="icon">
              <AlertCircle className="h-4 w-4" />
            </Button>
          </Tooltip>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Rich Content
        </h2>
        <div className="flex flex-wrap gap-4">
          <Tooltip
            content={
              <div className="space-y-2">
                <p className="font-semibold">Feature Overview</p>
                <ul className="list-disc list-inside text-sm opacity-90">
                  <li>Multiple positions</li>
                  <li>Customizable delay</li>
                  <li>Rich content support</li>
                </ul>
              </div>
            }
            maxWidth="250px"
          >
            <Button>Rich Content</Button>
          </Tooltip>

          <Tooltip
            content={
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-yellow-400" />
                <span>Important information</span>
              </div>
            }
          >
            <Button variant="secondary">With Icon</Button>
          </Tooltip>
        </div>
      </section>
    </div>
  );
}
