import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Dante Restaurant | Experiencia Gastronómica Exclusiva en Santa Fe',
  description: 'Reserve su mesa en Dante, un restaurante premium dentro de un histórico teatro en Santa Fe. Disfrute de cocina de autor, ambiente único y servicio impecable para ocasiones especiales.',
  keywords: ["restaurante, santa fe, dante, cocina de autor, premium, exclusivo, reservas, teatro, eventos, gastronomía, argentina"],
  openGraph: {
    "title": "Dante Restaurant | Experiencia Gastronómica Exclusiva en Santa Fe",
    "description": "Reserve su mesa en Dante, un restaurante premium dentro de un histórico teatro en Santa Fe. Disfrute de cocina de autor, ambiente único y servicio impecable para ocasiones especiales.",
    "url": "https://www.dante.com.ar",
    "siteName": "Dante Restaurant",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/architect-building-construction-design-real-state_53876-16473.jpg",
        "alt": "Dante Restaurant interior within a historic theater"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Dante Restaurant | Experiencia Gastronómica Exclusiva en Santa Fe",
    "description": "Reserve su mesa en Dante, un restaurante premium dentro de un histórico teatro en Santa Fe. Disfrute de cocina de autor, ambiente único y servicio impecable para ocasiones especiales.",
    "images": [
      "http://img.b2bpic.net/free-photo/architect-building-construction-design-real-state_53876-16473.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
