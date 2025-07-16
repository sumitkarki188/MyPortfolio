import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sumit Karki - Full Stack Developer',
  description: 'Modern portfolio showcasing creative development and 3D experiences',
  keywords: ['Sumit Karki', 'Full Stack Developer', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Sumit Karki' }],
  creator: 'Sumit Karki',
  publisher: 'Sumit Karki',
  openGraph: {
    title: 'Sumit Karki - Full Stack Developer',
    description: 'Modern portfolio showcasing creative development and 3D experiences',
    url: 'https://Sumit-Karki.dev',
    siteName: 'Sumit Karki Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumit Karki - Full Stack Developer',
    description: 'Modern portfolio showcasing creative development and 3D experiences',
    creator: '@Sumit_Karki',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}