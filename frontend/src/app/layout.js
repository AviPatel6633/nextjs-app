import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter, Roboto_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata = {
  title: "Dashboard",
  description: "Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${roboto_mono.variable} ${metadata.variable}`}>
          {children}
      </body>
    </html>
  );
}
