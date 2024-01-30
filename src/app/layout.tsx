import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/shared/ui/utils";
import { AppHeader } from "@/widgets/app-header/app-header";
import { ThemeProvider } from "@/features/theme/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider>
          <AppHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
