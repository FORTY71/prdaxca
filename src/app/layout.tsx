import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pradaxca - Wibu Programmer Portfolio",
  description: "Super cute and kawaii portfolio website for Pradaxca, a wibu programmer with pink pastel theme and anime aesthetic",
  keywords: ["Pradaxca", "portfolio", "wibu", "programmer", "anime", "kawaii", "pink", "pastel", "developer"],
  authors: [{ name: "Pradaxca" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Pradaxca - Wibu Programmer",
    description: "Super cute portfolio with pink pastel theme and anime vibes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradaxca - Wibu Programmer",
    description: "Super cute portfolio with pink pastel theme and anime vibes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
