import { client, predicate } from "../../prismic-configuration";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Canvas from "../../components/Generic/Canvas";
import { PrismicNextImage } from "@prismicio/next";

export default function Author({ author, stories }) {
  return (
    <Canvas bgcolor="purplebg">
      <div className="flex flex-col justify-center align-center items-center">
        <div className="mx-auto">
          <img src="https://source.unsplash.com/random/200x200" />
        </div>
      </div>
    </Canvas>
  );
}

export async function getStaticProps({ params }) {
  const author = await client.getByUID("author", params.uid, {
    // fetchLinks: ["author.name", "author.uid"],
    graphQuery: `{
      author {
        name
        picture
        about
      }
    }`,
  });

  const stories = await client.getByType("blogs", {
    page: 1,
    pageSize: 100,
    orderings: {
      field: "my.blogs.date",
      direction: "desc",
    },
    predicates: [
      predicate.at("document.type", "blogs"),
      predicate.at("my.blogs.author", author.id),
    ],
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

  return {
    props: {
      author,
      stories: stories.results,
    },
  };
}

export async function getStaticPaths() {
  const pages = await client.getAllByType("author", {
    graphQuery: `{
        author {
          uid
        }
      }`,
  });

  return {
    paths: pages.map((author) => {
      console.log(author);
      return {
        params: {
          uid: author.uid,
        },
      };
    }),
    fallback: false,
  };
}
