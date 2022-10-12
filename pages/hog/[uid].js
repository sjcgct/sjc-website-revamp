import { client } from "../../prismic-configuration";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import { PrismicNextImage } from "@prismicio/next";
import HogCard from "../../components/Hogpage/HogCard";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";

export default function HogStory({ page, otherStories }) {
  return (
    <div className="bg-pinkbg grid-col-1 align-center justify-center px-2 py-1">
      <article>
        <div className="flex flex-col justify-center w-full mx-auto md:max-w-4xl lg:max-w-5xl mx-auto pt-10 pb-6">
          <span className="content-bold mx-auto px-2 py-1 text-sm md:text-base text-dominantbg bg-grey-500 text-center uppercase mb-2">
            {page.data.title[0].text.split("-")[0]}
          </span>
          <h1 className="title text-center mx-auto text-3xl md:text-5xl py-1 mb-3">
            {page.data.title[0].text.substring(
              page.data.title[0].text.indexOf("-") + 1
            )}
          </h1>
          <div className="mx-auto px-2 py-1 text-center pb-1">
            <span className="">{`${page.data.name}.`}</span>
          </div>
        </div>
        <div className="w-full md:max-w-2xl mx-auto">
          <figure className="grid grid-cols-1 gap-4 bg-gray-100">
            {prismicH.isFilled.image(page.data.featured_image) && (
              <div>
                <PrismicNextImage
                  field={page.data.featured_image}
                  layout="responsive"
                />
              </div>
            )}
          </figure>
        </div>
        <div className="w-full mx-auto max-w-2xl px-1 py-8 md:pt-14 post-container flex flex-col align-center justify-center">
          <PrismicRichText field={page.data.story} />
        </div>
      </article>

      <div className="flex flex-col justify-center w-full mx-auto md:max-w-3xl lg:max-w-5xl mx-auto pt-8 pb-6">
        {/* {console.log(otherStories)} */}
        <h3 className="divider line razor title text-2xl md:text-3xl mx-auto">
          Other Stories
        </h3>
        <div className="grid grid-cols-1 mx-auto md:grid-cols-3 md:gap-x-16	md:gap-y-8 md:mb-4">
          {otherStories.map((story) => {
            return <HogCard key={story.id} story={story} />;
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const page = await client.getByUID("hog", params.uid);

  const otherStories = await client.getByType("hog", {
    page: 1,
    pageSize: 3,
    orderings: {
      field: "my.hog.date",
      direction: "desc",
    },
    graphQuery: `{
            hog {
              title
              date
              featured_image
              name
              uid
            }
          }`,
  });
  console.log(page.data.title);
  return {
    props: {
      page,
      otherStories: otherStories.results,
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
