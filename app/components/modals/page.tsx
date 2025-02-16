"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalContent,
  ModalFooter,
} from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { AlertCircle } from "lucide-react";

export default function ModalsPage() {
  const [basicModal, setBasicModal] = useState(false);
  const [sizeModal, setSizeModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [currentSize, setCurrentSize] = useState<
    "sm" | "md" | "lg" | "xl" | "full"
  >("md");

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-[#101010] dark:text-[#94A9C9] mb-4">
          Modals
        </h1>
        <p className="text-gray-500 dark:text-[#66768f] mb-8">
          Modal dialogs for displaying content, forms, and confirmations in an
          overlay.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Basic Modal
        </h2>
        <div className="space-y-4">
          <p className="text-gray-500 dark:text-[#66768f]">
            A simple modal with header, content, and footer sections.
          </p>
          <Button onClick={() => setBasicModal(true)}>Open Modal</Button>

          <Modal isOpen={basicModal} onClose={() => setBasicModal(false)}>
            <ModalHeader>
              <ModalTitle>Welcome to SamComponents</ModalTitle>
            </ModalHeader>
            <ModalContent>
              <p className="text-gray-500 dark:text-[#66768f]">
                This is a basic modal example. You can use it to display
                information, alerts, or any other content that needs to be shown
                in an overlay.
              </p>
            </ModalContent>
            <ModalFooter>
              <Button variant="outline" onClick={() => setBasicModal(false)}>
                Close
              </Button>
              <Button onClick={() => setBasicModal(false)}>Continue</Button>
            </ModalFooter>
          </Modal>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Modal Sizes
        </h2>
        <div className="space-y-4">
          <p className="text-gray-500 dark:text-[#66768f]">
            Modals come in different sizes to accommodate various content types.
          </p>
          <div className="flex flex-wrap gap-4">
            {(["sm", "md", "lg", "xl", "full"] as const).map((size) => (
              <Button
                key={size}
                variant="outline"
                onClick={() => {
                  setCurrentSize(size);
                  setSizeModal(true);
                }}
              >
                {size.toUpperCase()} Modal
              </Button>
            ))}
          </div>

          <Modal
            isOpen={sizeModal}
            onClose={() => setSizeModal(false)}
            size={currentSize}
          >
            <ModalHeader>
              <ModalTitle>{currentSize.toUpperCase()} Modal</ModalTitle>
            </ModalHeader>
            <ModalContent>
              <p className="text-gray-500 dark:text-[#66768f]">
                This modal demonstrates the {currentSize} size variant. Choose
                the appropriate size based on your content needs.
              </p>
            </ModalContent>
            <ModalFooter>
              <Button onClick={() => setSizeModal(false)}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Form Modal
        </h2>
        <div className="space-y-4">
          <p className="text-gray-500 dark:text-[#66768f]">
            Modals can contain forms and interactive elements.
          </p>
          <Button onClick={() => setFormModal(true)}>Open Form</Button>

          <Modal isOpen={formModal} onClose={() => setFormModal(false)}>
            <ModalHeader>
              <ModalTitle>Create Account</ModalTitle>
            </ModalHeader>
            <ModalContent>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#101010] dark:text-[#94A9C9] mb-2"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="Enter your name" />
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
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </form>
            </ModalContent>
            <ModalFooter>
              <Button variant="outline" onClick={() => setFormModal(false)}>
                Cancel
              </Button>
              <Button onClick={() => setFormModal(false)}>Create</Button>
            </ModalFooter>
          </Modal>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Confirmation Modal
        </h2>
        <div className="space-y-4">
          <p className="text-gray-500 dark:text-[#66768f]">
            Use modals to confirm important actions.
          </p>
          <Button variant="outline" onClick={() => setConfirmModal(true)}>
            Delete Item
          </Button>

          <Modal
            isOpen={confirmModal}
            onClose={() => setConfirmModal(false)}
            size="sm"
          >
            <ModalHeader>
              <ModalTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-500" />
                Confirm Deletion
              </ModalTitle>
            </ModalHeader>
            <ModalContent>
              <p className="text-gray-500 dark:text-[#66768f]">
                Are you sure you want to delete this item? This action cannot be
                undone.
              </p>
            </ModalContent>
            <ModalFooter>
              <Button variant="outline" onClick={() => setConfirmModal(false)}>
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() => setConfirmModal(false)}
              >
                Delete
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </section>
    </div>
  );
}
