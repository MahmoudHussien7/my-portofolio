import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mahmoudhussein-sigma.vercel.app"
).replace(/\/$/, "");

const STATIC_ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/projects", changefreq: "weekly", priority: "0.9" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
];

function absoluteUrl(routePath) {
  if (routePath === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${routePath.startsWith("/") ? routePath : `/${routePath}`}`;
}

function getProjectIds() {
  const projectsFile = fs.readFileSync(
    path.join(root, "src/data/projects.ts"),
    "utf8"
  );
  return [...projectsFile.matchAll(/id:\s*"([^"]+)"/g)].map((match) => match[1]);
}

function generateSitemap() {
  const lastmod = new Date().toISOString().split("T")[0];

  const staticUrls = STATIC_ROUTES.map(
    (route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  ).join("\n");

  const projectUrls = getProjectIds()
    .map(
      (id) => `  <url>
    <loc>${absoluteUrl(`/projects/${id}`)}</loc>
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
</urlset>
`;
}

function generateRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml")}
`;
}

const publicDir = path.join(root, "public");
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), generateSitemap(), "utf8");
fs.writeFileSync(path.join(publicDir, "robots.txt"), generateRobots(), "utf8");

console.log(`Generated sitemap.xml and robots.txt for ${SITE_URL}`);
