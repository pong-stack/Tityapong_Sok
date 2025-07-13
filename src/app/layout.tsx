import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import PageTransition from "@/components/page-transition"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sok Tityapong | Portfolio",
    template: "%s | Sok Tityapong",
  },
  description: "Portfolio of Sok Tityapong, showcasing web development projects, skills, and experience in building modern, responsive, and user-friendly applications.",
  keywords: ["Sok Tityapong", "portfolio", "web developer", "frontend developer", "Next.js", "React", "software engineer"],
  authors: [{ name: "Sok Tityapong" }],
  openGraph: {
    title: "Sok Tityapong | Portfolio",
    description: "Explore the portfolio of Sok Tityapong, a web developer specializing in modern web technologies like Next.js and React.",
    url: "https://tityapong-dev.vercel.app",
    siteName: "Sok Tityapong Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists in your /public folder
        width: 1200,
        height: 630,
        alt: "Sok Tityapong Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sok Tityapong | Portfolio",
    description: "Discover the work of Sok Tityapong, a web developer building modern, responsive applications.",
    images: ["/og-image.png"], // Ensure this image exists
    creator: "@yourTwitterHandle", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tityapong-dev.vercel.app",
  },
  icons: {
    icon: [
      {
        url: "/pong.png",
        href: "/pong.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="sitemap" href="/sitemap.xml" />
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}