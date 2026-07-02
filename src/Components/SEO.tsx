import Head from "next/head";
import {
  SITE_NAME,
  SITE_LOCALE,
  absoluteUrl,
  type PageSEO,
} from "@/lib/seo";

interface SEOProps {
  seo: PageSEO;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEO({ seo, schema }: SEOProps) {
  const canonical = absoluteUrl(seo.path);
  const ogImage = absoluteUrl(seo.ogImage || "/mahmoud1.png");
  const schemas = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && (
        <meta name="keywords" content={seo.keywords.join(", ")} />
      )}
      <link rel="canonical" href={canonical} />
      {seo.noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={SITE_LOCALE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </Head>
  );
}
