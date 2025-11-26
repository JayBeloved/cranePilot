import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata: Metadata = {
  title: 'CRANE JLA Consults | Research Simplified. Impact Scaled.',
  description: 'Premium Research Assistance, Practical guides, AI-powered tools, and frameworks for African entrepreneurs, researchers, and data professionals.',
  icons: {
    icon: '/3dlogo.png',
    shortcut: '/3dlogo.png',
    apple: '/3dlogo.png',
  },
  openGraph: {
    title: 'CRANE JLA Consults | Research Simplified. Impact Scaled.',
    description: 'Premium Research Assistance, Practical guides, AI-powered tools, and frameworks for African entrepreneurs, researchers, and data professionals.',
    url: 'https://crane.johnjaylawal.org',
    siteName: 'CRANE JLA Consults',
    images: [
      {
        url: 'https://crane.johnjaylawal.org',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRANE JLA Consults | Research Simplified. Impact Scaled.',
    description: 'Premium Research Assistance, Practical guides, AI-powered tools, and frameworks for African entrepreneurs, researchers, and data professionals.',
    creator: '@cranejla',
    images: ['https://crane.johnjaylawal.org'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
