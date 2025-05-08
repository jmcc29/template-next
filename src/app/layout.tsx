import "@/utils/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";
import { Metadata } from "next";

import { Providers } from "./providers";

import { fontSans } from "@/utils/fonts";
import { Navbar } from "@/components/header/navbar";
import { getDeployEnvironment } from "@/utils/envs";

export const metadata: Metadata = {
  title: {
    default: "Nombre del sitio",
    template: `%s - nombre del sitio`,
  },
  description: "Descripción del sitio",
  icons: {
    icon: "/icono_muserpol.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            {getDeployEnvironment() === "dev" && (
              <footer className="fixed bottom-0 left-0 w-full bg-red-600 text-white text-center py-2 text-sm z-50">
                <span className="uppercase text-sm font-semibold">
                  Versión de pruebas
                </span>
              </footer>
            )}
          </div>
        </Providers>
      </body>
    </html>
  );
}
