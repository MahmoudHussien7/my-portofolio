import { Html, Head, Main, NextScript } from "next/document";
import { SITE_NAME, SITE_DESCRIPTION, absoluteUrl } from "@/lib/seo";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="author" content={SITE_NAME} />
        <meta name="application-name" content={SITE_NAME} />
        <meta
          name="google-site-verification"
          content="ffNWRjvmLuoW9V3JT8OG8SA862dSKu67EVobT-miqDE"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={absoluteUrl("/mahmoud1.png")} />
      </Head>
      <body className="antialiased bg-background text-foreground">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
