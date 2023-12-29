import { ReactNode } from 'react';
import type { Metadata } from 'next'
import { Header } from "@/components/common/Header/Header";
import { Footer } from "@/components/common/Footer";
import './globals.css'
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Caba Landing Page',
  description: 'Caba Landing Page',
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta name="google-site-verification" content="iMZLeUSzoSOfFPj_502Pp3QRZhYYg53JCE1zdEsAcIc" />
    </head>

    <body>
      <Head>
        <title>
          Humanize Commerce with Video
        </title>

        <meta
          name="description"
          content="Engage your customers & boost sales with face-to-face video consultations. Offer demos, customer support, generate leads and close deals — all in the moment or conveniently scheduled by your users."
          key="desc"
        />
      </Head>

      <div id='hero'></div>
      <div>
        <Header/>
        <div>{children}</div>
        <Footer/>
      </div>
    </body>
  </html>
)

export default RootLayout