import type { Metadata } from "next";
import { Inter, Raleway } from 'next/font/google'
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Crafy - Conecte sua marca com creators autênticos",
    template: "%s | Crafy"
  },
  description: "A plataforma completa para conectar marcas e criadores de conteúdo, criando campanhas autênticas e mensuráveis. Web Summit Lisboa 2024.",
  keywords: ["marketing de influência", "creators", "marcas", "campanhas", "portugal", "web summit"],
  authors: [{ name: "Crafy" }],
  creator: "Crafy",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "/",
    title: "Crafy - Conecte sua marca com creators autênticos",
    description: "A plataforma completa para conectar marcas e criadores de conteúdo, criando campanhas autênticas e mensuráveis.",
    siteName: "Crafy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crafy - Conecte sua marca com creators autênticos",
    description: "A plataforma completa para conectar marcas e criadores de conteúdo, criando campanhas autênticas e mensuráveis.",
    creator: "@crafy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${raleway.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
