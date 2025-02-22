import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'SkeleCLI.dev - CLI tool for generating templates.',
  description: 'SkeleCLI is a CLI tool for generating templates for your projects. It is a simple and easy to use tool that helps you to generate templates for your projects.',
  keywords: 'SkeleCLI, SkeleCLI.dev,Sumangal Karan,Cli,CLI tool,CLI tool for generating templates,CLI tool for generating templates for your projects,CLI tool for generating templates for your projects easily,CLI tool for generating templates for your projects easily and quickly',
  authors: [{ name: 'Sumangal Karan', url: 'https://devsumangal.netlify.app/' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://skelecli.dev/',
    siteName: 'SkeleCLI.dev',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
        alt: 'SkeleCLI.dev - CLI tool for generating templates.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    creator: '@yourtwitterhandle',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                  <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

      </body>
    </html>
  );
}
