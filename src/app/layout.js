// src/app/layout.js
import './globals.css';

export const metadata = {
  title: 'Advik Bhatt | The Portfolio',
  description: 'A featured selection of work — crafted with data, design, and code.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
