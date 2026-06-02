import type { Metadata } from "next";
import "./globals.css";
import { plexMono, plexSans, plexSerif } from "./fonts";
import { SvgDefs } from "@/components/SvgDefs";
import { UiProvider } from "@/components/UiProvider";

export const metadata: Metadata = {
  title: "SIRIS Academy — Patient capital, patiently taught",
  description:
    "Structured courses, live market news, and a community of traders and long-horizon investors. An independent school for traders and investors. Free to join — new track opens August 1, 2026.",
  icons: {
    icon: "/favicon.svg",
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
      className={`${plexMono.variable} ${plexSans.variable} ${plexSerif.variable}`}
    >
      <body>
        <SvgDefs />
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  );
}
