import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Head from "next/head";

export const metadata = {
  title: "Advik Bhatt | The Paper Portfolio",
  description: "A featured selection of work — crafted with data, design, and code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
