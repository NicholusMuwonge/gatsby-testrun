import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import { getImage } from "gatsby-plugin-image";
import FairMeta from "../../components/fairMeta";
import FairDescription from "../../components/fairDescription";
import { useFairData } from "../../hooks/useFairData";
import { useFairMeta } from "../../hooks/useFairMeta";
import Seo from "../../components/seo";

const BlogPostTemplate = ({ location, pageContext: { slug } }) => {
  const {fair, siteTitle} = useFairData(slug);
  const { frontmatter, html } = fair;
  const { title, description, link, image } = frontmatter;
  const fairImage = getImage(image);
  const { fairLocation, date } = useFairMeta(frontmatter);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={title} description={description} />
      <article className="min-h-screen flex items-center justify-center px-4 py-6 lg:w-3/4 rounded-lg mx-auto">
        <span>
          <h1 className="py-4 text-4xl font-bold leading-none tracking-tight text-[#0083bf] md:text-5xl lg:text-5xl dark:text-[#0083bf] text-start">
            {title}
          </h1>

          <FairMeta location={fairLocation} date={date} />

          <FairDescription description={description} htmlContent={html} link={link} fairImage={fairImage} title={title} />

          <section className="my-4">
            <Link to="/" className="bg-black text-white px-4 py-2 rounded-md inline-block">
              Back to all events
            </Link>
          </section>
        </span>
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;
