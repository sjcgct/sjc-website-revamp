import { client } from "../../prismic-configuration";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

export default function HogStory({ page }) {
  return (
    <div>
      {console.log(page)}
      <p>{page.uid}</p>
      <SliceZone slices={page.data.body} components={components} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const page = await client.getByUID("blogs", params.uid);

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const pages = await client.getAllByType("blogs");

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
