import { Rubik } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "IP Address Tracker",
  description: "Display an IP address location on a map.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <script
          src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
          integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
          crossOrigin=""
        ></script>
      </head>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
