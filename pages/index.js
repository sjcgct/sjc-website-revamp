import Head from "next/head";
// import Prismic from "prismic-javascript";
// import { RichText } from "prismic-reactjs";
import { client } from "../prismic-configuration";
import Link from "next/link";
// import Heading from "../components/Heading";
import RecentStories from "../components/Homepage/RecentStories";
import HumansOfGct from "../components/Homepage/HumansOfGct";
import AbcChannel from "../components/Homepage/AbcChannel";
import AlumSpace from "../components/Homepage/AlumSpace";
import Internview from "../components/Homepage/InternView";
// import Layout from "../components/Layout";

export default function Home({ stories, hogs }) {
  return (
    <div>
      <RecentStories stories={stories} />

      <HumansOfGct hogs={hogs} />

      <AlumSpace />

      <AbcChannel />

      <Internview />
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  const stories = await client.getByType("blogs", {
    page: 1,
    pageSize: 5,
    orderings: {
      field: "my.blogs.date",
      direction: "desc",
    },
    graphQuery: `{
        blogs {
          title
          date
          featured_image
          excerpt
          uid
          author {
            name
            picture
          }
          category {
            name
          }
        }
      }`,
  });

  const hogs = await client.getByType("hog", {
    page: 1,
    pageSize: 3,
    orderings: {
      field: "my.hog.date",
      direction: "desc",
    },
    graphQuery: `{
        hog {
          date
          featured_image
          name
          title
        }
      }`,
  });

  // console.log(hogs);

  return {
    props: {
      stories: stories.results,
      hogs: hogs.results,
    },
  };
}
