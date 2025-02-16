import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/global/Provider";
import { Inter, DynaPuff } from "next/font/google";
import { Toaster } from "sonner";
import Sidebar from "@/components/global/Sidebar";
import BgGlow from "@/components/ui/BgGlow";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import CursorEffect from "@/components/ui/CursorEffect";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const dynaPuff = DynaPuff({
  subsets: ["latin"],
  variable: "--font-dynapuff",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "SamComponents",
  description: "A collection of reusable React components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${dynaPuff.variable}`}
    >
      <body className="antialiased bg-sa-light-bg text-sa-light-accent dark:bg-sa-dark-bg dark:text-sa-dark-text-main min-h-screen relative">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BgGlow />
          <ScrollProgress />
          <CursorEffect />
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8">{children}</main>
          </div>
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
