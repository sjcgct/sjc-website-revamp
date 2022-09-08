import Head from "next/head";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { Client } from "../prismic-configuration";
import Link from "next/link";
// import Heading from "../components/Heading";
import RecentStories from "../components/Homepage/RecentStories";
// import Layout from "../components/Layout";

export default function Politics({ articles }) {
  return (
    <div>
      <RecentStories />
      {articles.results.map((article, index) => (
        <div className="mb-10" key={article.uid}>
          <Link href={`article/${article.uid}`}>
            <h1 className="bold text-3xl text-blue-600 cursor-pointer">
              {RichText.asText(article.data.title)}
            </h1>
          </Link>
          {/* <img
                  className="w-2/3 "
                  src={article.data.feature_image.url}
                  alt="img"
                /> */}

          {/* <h1> {RichText.render(article.data["preview-info"])}</h1> */}
        </div>
      ))}
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const articles = await Client().query(
    Prismic.Predicates.at("document.type", "blogs")
  );
  // const trending = await Client().query(
  //   Prismic.Predicates.at("document.type", "trending")
  // );

  return {
    props: {
      articles: articles,
    },
  };
}
