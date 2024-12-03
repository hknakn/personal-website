import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Hakan Akin | Senior React Native Developer",
  description: "Senior React Native Developer with over 6 years of experience in building high-quality mobile applications",
  metadataBase: new URL('https://hakanakin.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hakan Akin | Senior React Native Developer',
    description: 'Senior React Native Developer with over 6 years of experience in building high-quality mobile applications',
    url: 'https://hakanakin.dev',
    siteName: 'Hakan Akin',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Hakan Akin | Senior React Native Developer',
    card: 'summary_large_image',
    description: 'Senior React Native Developer with over 6 years of experience in building high-quality mobile applications',
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
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
