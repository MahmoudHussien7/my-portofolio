import SEO from "@/Components/SEO";
import About from "../Components/About";
import {
  PAGE_SEO,
  buildPersonSchema,
  buildWebPageSchema,
  buildBreadcrumbSchema,
} from "@/lib/seo";

const AboutPage = () => {
  return (
    <>
      <SEO
        seo={PAGE_SEO.about}
        schema={[
          buildWebPageSchema(PAGE_SEO.about),
          buildPersonSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <main className="px-8 md:px-16 py-28 max-w-[1440px] mx-auto">
        <About />
      </main>
    </>
  );
};

export default AboutPage;
