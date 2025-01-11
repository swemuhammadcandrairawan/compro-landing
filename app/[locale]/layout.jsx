import { Inter, Syne } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {NextIntlClientProvider} from 'next-intl';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return {
    metadataBase: new URL('http://localhost:3000'),
    title: "Zenith",
    description: locale === "en" ? "A website dev agency" : "Agen web terbaik",
    openGraph: { images: ["/metadata-image.png"] },
  };
}

async function getSettings() {
  const response = await fetch(`${process.env.API_BASE_URL}/api/get-public-setting`,{
    cache:"force-cache"
  })
  return response.json()
}

export default async function RootLayout({ children, params }) {
  const {locale} = await params;
  const settings = await getSettings()

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${syne.variable} ${inter.variable} antialiased`}>
      <NextIntlClientProvider messages={messages}>
        <Navbar />
        {children}
        <Footer settings={settings?.data || {}} />
        <Toaster/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
