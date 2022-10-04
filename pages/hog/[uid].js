import { client } from "../../prismic-configuration";

export default function HogStory({ page }) {
  return <div>{page.uid}</div>;
}

export async function getStaticProps({ params }) {
  const page = await client.getByUID("hog", params.uid);

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const pages = await client.getAllByType("hog");

  return {
    paths: pages.map((story) => {
      return {
        params: {
          uid: story.uid,
        },
      };
    }),
    fallback: false,
  };
}
