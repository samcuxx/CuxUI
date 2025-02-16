"use client";

import React from "react";
import { Settings, User, LogOut, ChevronRight, Mail, Bell } from "lucide-react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownSeparator,
} from "@/components/ui/Dropdown";
import { Button } from "@/components/ui/Button";

export default function DropdownsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-[#101010] dark:text-[#94A9C9]">
        Dropdowns
      </h1>

      {/* Basic Example */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[#101010] dark:text-[#94A9C9]">
          Basic Dropdown
        </h2>
        <div className="flex gap-4 items-start">
          <Dropdown trigger={<DropdownTrigger>Options</DropdownTrigger>}>
            <DropdownItem>
              <span className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </span>
            </DropdownItem>
            <DropdownItem>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Profile
              </span>
            </DropdownItem>
            <DropdownSeparator />
            <DropdownItem>
              <span className="flex items-center gap-2 text-red-500">
                <LogOut className="w-4 h-4" />
                Logout
              </span>
            </DropdownItem>
          </Dropdown>
        </div>
      </section>

      {/* Alignment */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[#101010] dark:text-[#94A9C9]">
          Alignment
        </h2>
        <div className="flex gap-4 items-start">
          <Dropdown
            align="left"
            trigger={<DropdownTrigger>Left Aligned</DropdownTrigger>}
          >
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem>Option 3</DropdownItem>
          </Dropdown>

          <Dropdown
            align="right"
            trigger={<DropdownTrigger>Right Aligned</DropdownTrigger>}
          >
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem>Option 3</DropdownItem>
          </Dropdown>
        </div>
      </section>

      {/* Custom Trigger */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[#101010] dark:text-[#94A9C9]">
          Custom Trigger
        </h2>
        <div className="flex gap-4 items-start">
          <Dropdown
            trigger={
              <Button>
                Custom Button
                <ChevronRight className="w-4 h-4" />
              </Button>
            }
          >
            <DropdownItem>Option 1</DropdownItem>
            <DropdownItem>Option 2</DropdownItem>
            <DropdownItem>Option 3</DropdownItem>
          </Dropdown>

          <Dropdown
            trigger={
              <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#1a2333] cursor-pointer">
                <Bell className="w-5 h-5" />
              </div>
            }
          >
            <div className="p-2">
              <h3 className="font-medium mb-2">Notifications</h3>
              <DropdownItem>
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-1" />
                  <div>
                    <p className="font-medium">New Message</p>
                    <p className="text-xs text-gray-500">
                      You have a new message from User
                    </p>
                  </div>
                </div>
              </DropdownItem>
              <DropdownSeparator />
              <DropdownItem>View All</DropdownItem>
            </div>
          </Dropdown>
        </div>
      </section>

      {/* Disabled State */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4 text-[#101010] dark:text-[#94A9C9]">
          Disabled Items
        </h2>
        <div className="flex gap-4 items-start">
          <Dropdown
            trigger={<DropdownTrigger>With Disabled Items</DropdownTrigger>}
          >
            <DropdownItem>Enabled Option</DropdownItem>
            <DropdownItem disabled>Disabled Option</DropdownItem>
            <DropdownItem>Enabled Option</DropdownItem>
          </Dropdown>
        </div>
      </section>
    </div>
  );
}
