import './globals.css';
import SmoothWrapper from './components/SmoothWrapper'; 

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
        <SmoothWrapper>
          {children}
        </SmoothWrapper>
      </body>
    </html>
  );
}
