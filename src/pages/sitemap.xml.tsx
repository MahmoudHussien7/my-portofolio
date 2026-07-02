import type { GetServerSideProps } from "next";
import { projects } from "@/data/projects";
import { SITE_URL, STATIC_ROUTES, absoluteUrl } from "@/lib/seo";

function generateSiteMap() {
  const lastmod = new Date().toISOString().split("T")[0];

  const staticUrls = STATIC_ROUTES.map(
    (route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  ).join("\n");

  const projectUrls = projects
    .map(
      (project) => `  <url>
    <loc>${absoluteUrl(`/projects/${project.id}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${projectUrls}
</urlset>`;
}

function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  if (!SITE_URL.startsWith("http")) {
    console.warn("NEXT_PUBLIC_SITE_URL is not set; sitemap URLs may be invalid.");
  }

  const sitemap = generateSiteMap();
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate"
  );
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default SiteMap;
