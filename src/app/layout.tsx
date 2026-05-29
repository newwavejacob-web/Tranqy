import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jacob — Systems Programmer",
  description:
    "Portfolio of Jacob, a systems programmer and CS student at UCF. Building distributed systems in Rust, compilers, shells, and games.",
  openGraph: {
    title: "Jacob — Systems Programmer",
    description:
      "Portfolio of Jacob, a systems programmer and CS student at UCF. Building distributed systems in Rust, compilers, shells, and games.",
    type: "website",
  },
  metadataBase: new URL("https://jacob.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (!theme && window.matchMedia('(prefers-color-scheme: light)').matches) {
                  document.documentElement.classList.remove('dark');
                }
              } catch {}
            `,
          }}
        />
      </head>
      <body className="bg-[#fafafa] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 antialiased transition-colors">
        {children}
      </body>
    </html>
  );
}
