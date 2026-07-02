import type { GetServerSideProps } from "next";
import { absoluteUrl } from "@/lib/seo";

function RobotsTxt() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robots = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml")}
`;

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate"
  );
  res.write(robots);
  res.end();

  return { props: {} };
};

export default RobotsTxt;
