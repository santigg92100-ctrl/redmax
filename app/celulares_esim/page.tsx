import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Celulares compatibles con eSIM",
  description:
    "Consulta la lista de celulares compatibles con eSIM en RedMax por marca, modelo y versión.",
  alternates: {
    canonical: "/celulares_esim",
  },
};

export default function CelularesEsimPage() {
  redirect("/#celulares_esim");
}
