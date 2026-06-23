import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://redmax.mx"),
  title: {
    default: "RedMax | Conectando Personas",
    template: "%s | RedMax",
  },
  description:
    "Planes móviles simples, cobertura confiable y atención personalizada. RedMax conecta personas con una experiencia móvil clara y cercana.",
  keywords: [
    "RedMax",
    "telefonía móvil",
    "planes móviles",
    "conserva tu número",
    "cobertura nacional",
  ],
  openGraph: {
    title: "RedMax | Conectando Personas",
    description:
      "Conecta con lo que más importa con planes simples, cobertura confiable y atención personalizada.",
    url: "https://redmax.mx",
    siteName: "RedMax",
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/redmax-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
