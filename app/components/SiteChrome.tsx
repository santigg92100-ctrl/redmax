import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const whatsappUrl =
  "https://wa.me/522223846617?text=Hola%20RedMax%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20planes.";

export function Logo() {
  return (
    <Link
      className="inline-flex h-20 min-w-64 items-center px-0 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-4"
      href="/#inicio"
      aria-label="RedMax inicio"
    >
      <span className="relative block h-16 w-56">
        <Image
          src="/redmax-logo.png"
          alt="RedMax"
          fill
          priority
          className="object-contain object-left"
        />
      </span>
    </Link>
  );
}

export function BrandName() {
  return <span className="font-semibold text-blue-600">RedMax</span>;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
      <Sparkles className="h-4 w-4" aria-hidden="true" />
      {children}
    </p>
  );
}

export function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-4"
      href={href}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

export function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-950 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-4"
      href={href}
    >
      {children}
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
        aria-label="Principal"
      >
        <Logo />
        <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
          <Link className="hover:text-blue-700" href="/#beneficios">
            Beneficios
          </Link>
          <Link className="hover:text-blue-700" href="/#planes">
            Planes
          </Link>
          <Link className="hover:text-blue-700" href="/celulares_esim">
            eSIM
          </Link>
          <Link className="hover:text-blue-700" href="/#contacto">
            Contacto
          </Link>
        </div>
        <a
          className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-gray-950 px-4 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-4"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-100 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-gray-500">Conectando Personas</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-600">
          <a
            className="hover:text-blue-700"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            className="hover:text-blue-700"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </a>
          <a className="hover:text-blue-700" href="#">
            Aviso de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}
