import { Outfit } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Artfolio® – Portfolio Website',
  description: 'Premium Portfolio Website portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={outfit.variable}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
