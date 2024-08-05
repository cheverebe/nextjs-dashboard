import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Toaster } from "react-hot-toast";
import { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  title: {
    default: 'Tailor Made News',
    template: '%s | Tailor Made News',
  },
  description: 'Tailor Made News.',
  metadataBase: new URL('https://tailormadenews.com'),
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
          <Toaster position="bottom-center" />
          <SessionProvider>
            {children}
          </SessionProvider>
      </body>
    </html>
  );
}
