"use client";

import { CheckCircle2, Search, Smartphone, X } from "lucide-react";
import { useMemo, useState } from "react";

export type EsimDevice = {
  id: string;
  brand: string;
  model: string;
  versions: string[];
  esim: boolean;
  source: string;
};

type EsimDevicesClientProps = {
  devices: EsimDevice[];
};

export default function EsimDevicesClient({ devices }: EsimDevicesClientProps) {
  const [query, setQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Todas");

  const brands = useMemo(
    () => ["Todas", ...Array.from(new Set(devices.map((device) => device.brand))).sort()],
    [devices],
  );

  const filteredDevices = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return devices.filter((device) => {
      const matchesBrand =
        selectedBrand === "Todas" || device.brand === selectedBrand;
      const searchableText = [
        device.brand,
        device.model,
        device.versions.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return matchesBrand && searchableText.includes(normalizedQuery);
    });
  }, [devices, query, selectedBrand]);

  const hasActiveFilters = query.trim() !== "" || selectedBrand !== "Todas";

  return (
    <section className="bg-slate-50 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 rounded-[1.75rem] border border-gray-100 bg-white p-5 shadow-xl shadow-gray-950/[0.04] lg:grid-cols-[1fr_auto] lg:items-end">
          <label className="block">
            <span className="text-sm font-semibold text-gray-950">
              Buscar por marca, modelo o versión
            </span>
            <span className="mt-2 flex min-h-12 items-center gap-3 rounded-full border border-gray-200 bg-white px-4 text-gray-500 focus-within:border-blue-300 focus-within:ring-4 focus-within:ring-blue-50">
              <Search className="h-5 w-5 shrink-0" aria-hidden="true" />
              <input
                className="min-w-0 flex-1 bg-transparent text-sm font-medium text-gray-950 outline-none placeholder:text-gray-400"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ej. iPhone 15, Samsung, Motorola"
              />
            </span>
          </label>

          <div className="grid gap-3 sm:grid-cols-[minmax(180px,240px)_auto]">
            <label className="block">
              <span className="text-sm font-semibold text-gray-950">
                Filtrar por marca
              </span>
              <select
                className="mt-2 h-12 w-full rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-950 outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                value={selectedBrand}
                onChange={(event) => setSelectedBrand(event.target.value)}
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </label>

            <button
              className="inline-flex h-12 items-center justify-center gap-2 self-end rounded-full border border-gray-200 bg-white px-5 text-sm font-semibold text-gray-700 transition hover:border-blue-200 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-4 disabled:cursor-not-allowed disabled:opacity-45"
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedBrand("Todas");
              }}
              disabled={!hasActiveFilters}
            >
              <X className="h-4 w-4" aria-hidden="true" />
              Limpiar
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Mostrando{" "}
            <span className="font-semibold text-gray-950">
              {filteredDevices.length}
            </span>{" "}
            de <span className="font-semibold text-gray-950">{devices.length}</span>{" "}
            equipos compatibles con eSIM.
          </p>
          <p className="font-medium text-blue-700">
            Fuente: Terminales eSIM 20 Ene 2026
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-sm shadow-gray-950/[0.03]">
          <div className="overflow-x-auto">
            <table className="min-w-[760px] w-full border-collapse text-left">
              <thead className="bg-gray-950 text-white">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold">Marca</th>
                  <th className="px-5 py-4 text-sm font-semibold">Modelo</th>
                  <th className="px-5 py-4 text-sm font-semibold">
                    Versiones compatibles
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold">
                    Compatibilidad eSIM
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredDevices.map((device) => (
                  <tr
                    key={device.id}
                    className="align-top transition hover:bg-blue-50/45"
                  >
                    <td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-gray-950">
                      {device.brand}
                    </td>
                    <td className="px-5 py-4 text-sm font-medium text-gray-900">
                      <span className="inline-flex items-center gap-2">
                        <Smartphone
                          className="h-4 w-4 shrink-0 text-blue-600"
                          aria-hidden="true"
                        />
                        {device.model}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm leading-6 text-gray-600">
                      {device.versions.join(", ")}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        Compatible
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredDevices.length === 0 ? (
            <div className="border-t border-gray-100 px-5 py-12 text-center">
              <p className="text-lg font-semibold text-gray-950">
                No encontramos equipos con esos filtros.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Intenta con otra marca, modelo o limpia la búsqueda.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
