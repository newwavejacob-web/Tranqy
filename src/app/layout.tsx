import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tranqy.com"),
  title: {
    default: "Tranqy — websites that ship",
    template: "%s · Tranqy",
  },
  description:
    "Tranqy builds fast, no-nonsense websites and custom web apps for small businesses. Based in Orlando, FL.",
  openGraph: {
    title: "Tranqy — websites that ship",
    description:
      "Tranqy builds fast, no-nonsense websites and custom web apps for small businesses. Based in Orlando, FL.",
    type: "website",
    url: "https://tranqy.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0f14",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
