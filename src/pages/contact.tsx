import SEO from "@/Components/SEO";
import Contactc from "@/Components/Contact";
import {
  PAGE_SEO,
  buildWebPageSchema,
  buildBreadcrumbSchema,
} from "@/lib/seo";

const Contact = () => {
  return (
    <>
      <SEO
        seo={PAGE_SEO.contact}
        schema={[
          buildWebPageSchema(PAGE_SEO.contact),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <Contactc />
    </>
  );
};

export default Contact;
