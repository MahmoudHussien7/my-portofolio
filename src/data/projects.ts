import { Source_Code_Pro } from "next/font/google";
import { describe } from "node:test";

export const projects = [
  {
    id: "1",
    title: "Aura Blogpost",
    description: "A brief overview of the first project.",
    image: "/gallery1.png",
    details:
      "This project was built using Reactjs, contextAPI and TailwindCSS and used Firebase for authentication and database.<br>The project is a blogpost where users can create, read, update and delete posts",
    source_code: "https://github.com/MahmoudHussien7/blog-post-react",
    Live_demo: "https://aura-blogpost.vercel.app/",
  },
  {
    id: "2",
    title: "BellaStore",
    description: "An advanced portfolio built with modern UI frameworks.",
    image: "/gallery2.png",
    details:
      "This project features dynamic routing using React and redux toolkit for state management and also used tailwindCss for Styling",
    source_code: "https://github.com/MahmoudHussien7/Bella-priv",
    Live_demo: "https://bella-priv.vercel.app/",
  },
  {
    id: "3",
    title: "OVZA LTD",
    description: "An offShore Company",
    image: "/gallery3.png",
    details:
      "This project was built using WordPress and HTML & CSS and JavaScript for the front-end and back-end. The project is a company website for OVZA LTD",
    source_code: "none",
    Live_demo: "https://ovza.com/",
  },
  {
    id: "4",
    title: "Gates of egypt",
    description:
      "Landing Page for the Gates of Egypt made with Nextj, TailwindCSS & Chakra UI and TypeScript",
    image: "/image.png",
    source_code: "https://github.com/MahmoudHussien7/gates-of-egypt",
    Live_demo: "https://gates-of-egypt.vercel.app/",
  },
  {
    id: "5",
    title: "ًNext + Wordpress as CMS",
    description:
      "it's not a project more than it's a practcing for using apollo client, graphql for using wordpress as Headless CMS, in other word wordpress is used as dashboard for adding articles to  the blog which making it easier and smooth for makin crud operations at articles ",
    image: "/Wordpress.png",
    source_code: "https://github.com/MahmoudHussien7/next15-wordpress-CMS",
    Live_demo: "none",
  },
  {
    id: "10",
    title: "The Hires Lab",
    descripiton: "An HR webiste with Blog ",
    image: "/hireslab.png",
    details:
      "An HR webiste with Blog included also a system Dashboard for dynamic content with reviews system and subscribtion to Newsletter to send the new updates to the clients who clicked subscribe website uses Nextjs and tailwind, Colloborating with Backend to link the projects with Api's ",
    source_code: "none",
    Live_demo: "https://hireslab.vercel.app/",
  },
  {
    id: "11",
    title: "Birds Marketing Agency",
    description: "A marketing agency website with a blog.",
    image: "/birds-agency.png",
    details:
      "A marketing agency website with a blog included also a system Dashboard for dynamic content with reviews system and subscribtion to Newsletter to send the new updates to the clients who clicked subscribe website uses Nextjs and tailwind, Colloborating with Backend to link the projects with Api's ",
    source_code: "none",
    Live_demo: "https://www.birds-marketingag.com/",
  },
];
