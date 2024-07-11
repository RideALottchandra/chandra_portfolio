import { JetBrains_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsmono"
});

export const metadata = {
  title: "Chandra",
  description: "It's my own personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="portfolio, Chandra, app developer, projects, chandu, chandra, app developer, software, ASP.NET, SQL, sql, engineer" />
        <meta name="author" content="Chandrakrishna" />
      </Head>
      <body className={jetBrainsmono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
