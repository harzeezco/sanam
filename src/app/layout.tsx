import { ReactNode } from "react";
import { Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import config from "@/config";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import { getSEOTags } from "@/src/libs/seo";
import ClientLayout from "@/src/components/LayoutClient";
 

const font = Inter({ subsets: ["latin"] });

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default async function RootLayout({ children, params: {locale} }: { children: ReactNode, params: {locale: string}; }) {
  const messages = await getMessages()

  return (
    <html lang={locale} data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          <PlausibleProvider domain={config.domainName} />
        </head>
      )}
      <body>
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <NextIntlClientProvider messages={messages}>
          <ClientLayout>
            Header
            {children}
            Footer
          </ClientLayout>
       </NextIntlClientProvider>
      </body>
    </html>
  );
}
