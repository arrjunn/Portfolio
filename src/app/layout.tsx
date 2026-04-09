import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif, Bebas_Neue } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import KonamiWrapper from "@/components/KonamiWrapper";
import BootScreen from "@/components/BootScreen";
import CustomCursor from "@/components/CustomCursor";
import ConsoleEasterEgg from "@/components/ConsoleEasterEgg";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arjun Varshney — AI Product Manager & Builder",
  description:
    "Personal portfolio of Arjun Varshney, an aspiring AI Product Manager. Exploring the intersection of artificial intelligence, product strategy, and human-centered design.",
  keywords: [
    "AI Product Manager",
    "Portfolio",
    "Product Strategy",
    "Machine Learning",
    "UX",
  ],
  openGraph: {
    title: "Arjun Varshney — AI Product Manager & Builder",
    description:
      "Building at the intersection of AI, product, and design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} ${bebasNeue.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased grain">
        <ThemeProvider>
          <BootScreen />
          <CustomCursor />
          <ConsoleEasterEgg />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-subtle)",
                color: "var(--text-primary)",
                fontSize: "13px",
              },
            }}
          />
          <KonamiWrapper />
          <ScrollProgress />
          <CommandPalette />
          <Navigation />
          <PageTransition>
            {children}
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
