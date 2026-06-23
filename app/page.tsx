import {
  ArrowRight,
  Check,
  Headphones,
  MessageCircle,
  Phone,
  Rocket,
  ShieldCheck,
  Signal,
  Sparkles,
  Users,
} from "lucide-react";
import Image from "next/image";

const whatsappUrl =
  "https://wa.me/522223846617?text=Hola%20RedMax%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20planes.";

const benefits = [
  {
    title: "Conserva tu número",
    description: "Te acompañamos para portar tu línea sin complicaciones.",
    icon: Phone,
  },
  {
    title: "Cobertura nacional",
    description: "Mantente conectado en casa, trabajo y viajes por México.",
    icon: Signal,
  },
  {
    title: "Redes sociales incluidas",
    description: "Comparte, escribe y llama con tus apps favoritas.",
    icon: Users,
  },
  {
    title: "Atención personalizada",
    description: "Personas reales para resolver dudas antes y después de activar.",
    icon: Headphones,
  },
  {
    title: "Activación rápida",
    description: "Un proceso claro para comenzar a usar tu plan cuanto antes.",
    icon: Rocket,
  },
  {
    title: "Planes accesibles",
    description: "Opciones simples, transparentes y pensadas para tu rutina.",
    icon: ShieldCheck,
  },
];

const plans = [
  {
    name: "Pro 1",
    data: "22 GB",
    dataLabel: "para navegar",
    price: "$105",
    period: "/mes",
    promotion: "Promoción x3 meses",
    benefits: [
      "Redes sociales ilimitadas",
      "Llamadas y SMS ilimitados",
      "Hotspot incluido",
    ],
    recommended: false,
    accent: "blue",
  },
  {
    name: "Pro 20",
    data: "40 GB",
    dataLabel: "para navegar",
    price: "$155",
    period: "/mes",
    promotion: "Promoción x3 meses",
    benefits: [
      "Redes sociales ilimitadas",
      "Llamadas y SMS ilimitados",
      "Pasaporte Movistar",
      "México, EUA, Canadá y Puerto Rico",
      "Hotspot incluido",
    ],
    recommended: true,
    accent: "blue",
  },
  {
    name: "Pro 30",
    data: "60 GB",
    dataLabel: "para navegar",
    price: "$185",
    period: "/mes",
    promotion: "Promoción x6 meses",
    benefits: [
      "Redes sociales ilimitadas",
      "Llamadas y SMS ilimitados",
      "YouTube Premium x3 meses",
      "Hotspot incluido",
    ],
    recommended: false,
    accent: "purple",
  },
];

function Logo() {
  return (
    <a
      className="inline-flex h-20 min-w-64 items-center px-0 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-4"
      href="#inicio"
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
    </a>
  );
}

function BrandName() {
  return <span className="font-semibold text-blue-600">RedMax</span>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
      <Sparkles className="h-4 w-4" aria-hidden="true" />
      {children}
    </p>
  );
}

function PrimaryButton({
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

function SecondaryButton({
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

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm" aria-hidden="true">
      <div className="absolute inset-4 rounded-[3rem] bg-blue-200 blur-3xl" />
      <div className="relative rounded-[3rem] border border-gray-200 bg-gray-950 p-3 shadow-2xl shadow-blue-900/15">
        <div className="overflow-hidden rounded-[2.35rem] bg-white">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <div>
              <p className="text-xs font-medium text-blue-600">RedMax</p>
              <p className="text-sm font-semibold text-gray-950">Conectado</p>
            </div>
            <div className="flex items-center gap-1 text-blue-600">
              <Signal className="h-4 w-4" />
              <span className="text-xs font-semibold">5G</span>
            </div>
          </div>
          <div className="soft-grid px-5 py-7">
            <div className="rounded-3xl bg-white p-5 shadow-xl shadow-blue-900/10">
              <div className="mb-5 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-white">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Activo
                </span>
              </div>
              <p className="text-2xl font-semibold tracking-tight text-gray-950">
                40 GB
              </p>
              <p className="mt-1 text-sm text-gray-500">Pro 20</p>
              <div className="mt-6 space-y-3">
                <div className="h-2 rounded-full bg-blue-100">
                  <div className="h-2 w-3/5 rounded-full bg-blue-600" />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Uso mensual</span>
                  <span>9.2 GB libres</span>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {["Familia", "Trabajo"].map((item) => (
                <div key={item} className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="mb-3 h-2 w-10 rounded-full bg-blue-100" />
                  <p className="text-sm font-semibold text-gray-950">{item}</p>
                  <p className="mt-1 text-xs text-gray-500">Siempre cerca</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-950">
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/85 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8"
          aria-label="Principal"
        >
          <Logo />
          <div className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <a className="hover:text-blue-700" href="#beneficios">
              Beneficios
            </a>
            <a className="hover:text-blue-700" href="#planes">
              Planes
            </a>
            <a className="hover:text-blue-700" href="#contacto">
              Contacto
            </a>
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

      <section id="inicio" className="overflow-hidden px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <SectionLabel>Conectando Personas</SectionLabel>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
              Conecta con lo que más importa.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              En <BrandName /> creemos que una buena conexión va más allá de
              los datos. Por eso ofrecemos planes simples, cobertura confiable
              y atención personalizada.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#planes">Ver Planes</PrimaryButton>
              <SecondaryButton href={whatsappUrl}>
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Hablar por WhatsApp
              </SecondaryButton>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-gray-100 pt-6">
              {[
                ["24h", "Activación ágil"],
                ["5G", "Lista para crecer"],
                ["MX", "Cobertura nacional"],
              ].map(([value, label]) => (
                <div key={value}>
                  <p className="text-2xl font-semibold text-gray-950">{value}</p>
                  <p className="mt-1 text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <PhoneMockup />
        </div>
      </section>

      <section id="beneficios" className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <SectionLabel>Simple desde el primer día</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              ¿Por qué <BrandName />?
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-sm shadow-gray-950/[0.03] transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/[0.06]"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-950">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 leading-7 text-gray-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionLabel>Nuestra misión</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              Más que datos, conexiones.
            </h2>
          </div>
          <div className="rounded-[2rem] bg-gray-950 p-8 text-white shadow-2xl shadow-gray-950/10 sm:p-10">
            <div className="space-y-3 text-2xl font-medium tracking-tight sm:text-4xl">
              <p>Cada llamada.</p>
              <p>Cada mensaje.</p>
              <p>Cada videollamada.</p>
            </div>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300">
              Detrás de todo eso hay algo más importante: personas. Por eso
              nuestra misión es simple:
            </p>
            <p className="mt-6 text-3xl font-semibold tracking-tight text-blue-300 sm:text-5xl">
              Conectar personas.
            </p>
          </div>
        </div>
      </section>

      <section id="planes" className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Portabilidad Movistar</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              Planes de Portabilidad
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Cámbiate a Movistar con <BrandName /> y disfruta más datos, redes
              ilimitadas y beneficios incluidos.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-[1.75rem] border bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 ${
                  plan.recommended
                    ? "border-blue-500 shadow-2xl shadow-blue-600/15"
                    : plan.accent === "purple"
                      ? "border-purple-200 shadow-purple-900/[0.05]"
                      : "border-gray-100 shadow-gray-950/[0.03]"
                }`}
              >
                {plan.recommended ? (
                  <span className="absolute right-6 top-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                    Más recomendado
                  </span>
                ) : null}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Plan móvil
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-gray-950">
                      {plan.name}
                    </h3>
                  </div>
                </div>
                <p className="mt-8 text-5xl font-semibold tracking-tight text-gray-950">
                  {plan.data}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-500">
                  {plan.dataLabel}
                </p>
                <p
                  className={`mt-6 text-4xl font-semibold tracking-tight ${
                    plan.accent === "purple" ? "text-purple-700" : "text-blue-600"
                  }`}
                >
                  {plan.price}
                  <span className="text-base font-medium text-gray-500">
                    {plan.period}
                  </span>
                </p>
                <p
                  className={`mt-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    plan.accent === "purple"
                      ? "bg-purple-50 text-purple-700"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {plan.promotion}
                </p>
                <ul className="mt-8 space-y-4">
                  {plan.benefits.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          plan.accent === "purple"
                            ? "text-purple-600"
                            : "text-blue-600"
                        }`}
                        aria-hidden="true"
                      />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <a
                    className={`inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-offset-4 ${
                      plan.accent === "purple"
                        ? "bg-purple-700 hover:bg-purple-800 focus:ring-purple-600"
                        : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-600"
                    }`}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lo quiero
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full text-sm font-semibold text-gray-600 transition hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-4"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Consultar disponibilidad
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-gray-500">
            Precios y promociones sujetos a disponibilidad y validación de
            portabilidad. Consulta términos con <BrandName />.
          </p>
        </div>
      </section>

      <section id="contacto" className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-xl shadow-gray-950/[0.04] sm:p-8">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-blue-600">
              <MessageCircle className="h-7 w-7" aria-hidden="true" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-gray-950">
              Escríbenos por WhatsApp
            </h3>
            <p className="mt-3 leading-7 text-gray-600">
              Te ayudamos a elegir tu plan, resolver dudas y comenzar tu
              cambio de línea desde una conversación directa.
            </p>
            <div className="mt-7 grid gap-3">
              {[
                "Cuéntanos qué plan te interesa.",
                "Te orientamos con cobertura y beneficios.",
                "Coordinamos la activación o portabilidad.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <a
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-4"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Abrir WhatsApp
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

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
    </main>
  );
}
