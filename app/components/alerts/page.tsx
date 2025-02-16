"use client";
import React, { useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/Alert";
import { Terminal, Rocket, AlertTriangle, Info } from "lucide-react";

export default function AlertsPage() {
  const [visibleAlerts, setVisibleAlerts] = useState({
    default: true,
    success: true,
    info: true,
  });

  const handleClose = (alertKey: keyof typeof visibleAlerts) => {
    setVisibleAlerts((prev) => ({
      ...prev,
      [alertKey]: false,
    }));
  };

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-[#101010] dark:text-[#94A9C9] mb-4">
          Alerts
        </h1>
        <p className="text-gray-500 dark:text-[#66768f] mb-8">
          Alert components for displaying important messages and notifications.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Alert Variants
        </h2>
        <div className="space-y-4 max-w-2xl">
          <Alert>
            <AlertTitle>Default Alert</AlertTitle>
            <AlertDescription>
              This is a default alert — check it out!
            </AlertDescription>
          </Alert>

          <Alert variant="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your changes have been saved successfully.
            </AlertDescription>
          </Alert>

          <Alert variant="error">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Oops! Something went wrong. Please try again.
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Please backup your data before proceeding.
            </AlertDescription>
          </Alert>

          <Alert variant="info">
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              A new software update is available.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          With Custom Icons
        </h2>
        <div className="space-y-4 max-w-2xl">
          <Alert icon={<Terminal className="h-4 w-4" />}>
            <AlertTitle>Command Executed</AlertTitle>
            <AlertDescription>
              The command has been executed successfully in the terminal.
            </AlertDescription>
          </Alert>

          <Alert variant="success" icon={<Rocket className="h-4 w-4" />}>
            <AlertTitle>Project Deployed</AlertTitle>
            <AlertDescription>
              Your project has been deployed to production.
            </AlertDescription>
          </Alert>

          <Alert variant="warning" icon={<AlertTriangle className="h-4 w-4" />}>
            <AlertTitle>System Update Required</AlertTitle>
            <AlertDescription>
              Your system needs to be updated to the latest version.
            </AlertDescription>
          </Alert>

          <Alert variant="info" icon={<Info className="h-4 w-4" />}>
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              You can customize the appearance of alerts using the variant prop.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-[#101010] dark:text-[#94A9C9] mb-4">
          Dismissible Alerts
        </h2>
        <div className="space-y-4 max-w-2xl">
          {visibleAlerts.default && (
            <Alert onClose={() => handleClose("default")}>
              <AlertTitle>Dismissible Alert</AlertTitle>
              <AlertDescription>
                This alert can be dismissed by clicking the close button.
              </AlertDescription>
            </Alert>
          )}

          {visibleAlerts.success && (
            <Alert variant="success" onClose={() => handleClose("success")}>
              <AlertTitle>Task Completed</AlertTitle>
              <AlertDescription>
                The task has been completed successfully. Click the X to
                dismiss.
              </AlertDescription>
            </Alert>
          )}

          {visibleAlerts.info && (
            <Alert variant="info" onClose={() => handleClose("info")}>
              <AlertTitle>New Feature</AlertTitle>
              <AlertDescription>
                We&apos;ve added new features to the platform. Dismiss this
                message once you&apos;ve read it.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </section>
    </div>
  );
}
