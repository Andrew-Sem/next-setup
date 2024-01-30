import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/shared/ui/utils";
import { AppProvider } from "./_providers/app-provider";

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
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
