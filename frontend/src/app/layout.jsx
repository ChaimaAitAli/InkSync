import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import Navbar from "../components/Navbar"; // If you have a Navbar component

export const metadata = {
  title: "InkSyn",
  description: "SaaS Platform for Real-Time Document Collaboration",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata */}
        <title>InkSyn</title>
        <meta name="description" content="SaaS Platform for Real-Time Document Collaboration" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ backgroundColor: "#f8f8f7" }}>
        <main>{children}</main>
      </body>
    </html>
  );
}
