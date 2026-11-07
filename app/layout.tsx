import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Workflow Editor",
  description: "Build and manage AI workflows.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <ClerkProvider
          appearance={{
            theme: dark,
            variables: {
              colorBackground: "var(--background)",
              colorInput: "var(--background)",
              colorInputForeground: "var(--foreground)",
              colorPrimary: "var(--primary)",
              colorForeground: "var(--foreground)",
              colorMutedForeground: "var(--muted-foreground)",
              colorNeutral: "var(--muted)",
              fontFamily: "var(--font-sans)",
              fontFamilyButtons: "var(--font-sans)",
              fontFamilyMono: "var(--font-mono)",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}

