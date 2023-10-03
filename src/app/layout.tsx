import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Providers } from "./providers";

const roboto = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "uree",
  description: "your on page assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
