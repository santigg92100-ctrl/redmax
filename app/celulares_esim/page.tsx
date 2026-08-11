import type { Metadata } from "next";
import { MessageCircle, ShieldCheck, Signal } from "lucide-react";
import Link from "next/link";
import {
  PrimaryButton,
  SectionLabel,
  SiteFooter,
  SiteHeader,
  whatsappUrl,
} from "../components/SiteChrome";
import devices from "./esim-devices.json";
import EsimDevicesClient, { type EsimDevice } from "./EsimDevicesClient";

export const metadata: Metadata = {
  title: "Celulares compatibles con eSIM",
  description:
    "Consulta la lista de celulares compatibles con eSIM en RedMax por marca, modelo y versión.",
  alternates: {
    canonical: "/celulares_esim",
  },
};

const esimDevices = devices as EsimDevice[];

export default function CelularesEsimPage() {
  return (
    <main className="min-h-screen bg-white text-gray-950">
      <SiteHeader />

      <section className="px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <SectionLabel>Celulares compatibles con eSIM</SectionLabel>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-gray-950 sm:text-6xl">
              Revisa si tu equipo puede activarse con eSIM.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Consulta la lista de equipos compatibles antes de iniciar tu
              activación. Puedes buscar por marca, modelo o versión del celular.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href={whatsappUrl}>
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Hablar por WhatsApp
              </PrimaryButton>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-950 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-4"
                href="/#planes"
              >
                Ver planes
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] bg-gray-950 p-7 text-white shadow-2xl shadow-gray-950/10 sm:p-8">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/15 text-blue-300">
              <Signal className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-7 text-5xl font-semibold tracking-tight">
              {esimDevices.length}
            </p>
            <p className="mt-2 text-sm font-medium text-gray-300">
              equipos compatibles registrados
            </p>
            <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-gray-300">
              La compatibilidad puede depender de la versión del equipo,
              región, operador, bloqueo, software o configuración del
              dispositivo.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl rounded-[1.5rem] border border-blue-100 bg-blue-50 p-5 text-blue-950">
          <div className="flex gap-3">
            <ShieldCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
              aria-hidden="true"
            />
            <p className="text-sm leading-6">
              Los equipos de esta tabla aparecen como compatibles con eSIM.
              Antes de activar, confirma que la versión exacta de tu celular y
              su configuración permitan usar eSIM.
            </p>
          </div>
        </div>
      </section>

      <EsimDevicesClient devices={esimDevices} />

      <SiteFooter />
    </main>
  );
}
