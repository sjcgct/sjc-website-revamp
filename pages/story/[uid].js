import { client, predicate } from "../../prismic-configuration";
import { SliceZone } from "@prismicio/react";
import { components } from "../../slices";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import OtherStoriesCard from "../../components/Stories/OtherStoriesCard";

{
  /* <SliceZone
            className=""
            slices={page.data.body}
            components={components}
          /> */
}

export default function Story({ page, disclaimer, otherStories }) {
  return (
    <div className="bg-dominantbg grid-col-1 align-center justify-center px-2 py-1">
      <article>
        <div className="flex flex-col justify-center w-full mx-auto md:max-w-4xl lg:max-w-5xl mx-auto pt-10 pb-6">
          <span className="content-bold mx-auto px-2 py-1 text-sm md:text-base text-dominantbg bg-grey-500 text-center uppercase mb-2">
            {page.data.category.data.name}
          </span>
          <h1 className="title text-center mx-auto text-3xl md:text-5xl py-1 mb-3">
            <PrismicText field={page.data.title} />
          </h1>
          <div className="mx-auto px-2 py-1 text-center pb-1">
            <span className="">{`${page.data.author.data.name}, `}</span>
            <time>{page.data.date}</time>
          </div>
        </div>
        <div className="w-full md:max-w-4xl mx-auto">
          <figure className="grid grid-cols-1 gap-4 bg-gray-100">
            {prismicH.isFilled.image(page.data.featured_image.hero) && (
              <div>
                <PrismicNextImage
                  field={page.data.featured_image.hero}
                  variation={"hero"}
                  layout="responsive"
                />
              </div>
            )}
          </figure>
        </div>
        <div className="w-full mx-auto max-w-2xl px-1 border-b-[1px] border-grey-500 py-8 md:pt-14 post-container flex flex-col align-center justify-center">
          <SliceZone slices={page.data.body} components={components} />
          <p>
            lorem10 dskgkls wohowi oiwdfio sadofhsoai oiafo oidfoi aoifiaos c8uw
            jwefu <strong>fallback</strong> <a href="/">Hi bo</a>
          </p>
        </div>
      </article>

      <div className="w-full mx-auto max-w-2xl px-1 border-grey-500 md:text-justify disclaimer-container flex flex-col align-center justify-center">
        <div className=" border-b-[1px] pt-8 pb-8">
          <p className="content-italic md:text-lg md:leading-loose sm:text-base sm:leading-loose">
            <PrismicText field={disclaimer.data["disclaimer_text"]} />
          </p>
        </div>
        <div className="px-4 pt-6 pb-2 mb-8 mx-auto w-full flex mt-8 flex-col bg-[#e1dcd5]">
          <span className="content mx-auto text-center leading-slug uppercase text-sm md:text-base">
            Author
          </span>

          <h4 className="title text-xl text-center uppercase mb-2">
            {page.data.author.data.name}
          </h4>

          {prismicH.isFilled.keyText(page.data.author.data.about) && (
            <p className="text-center text-base mb-2">
              {page.data.author.data.about}
            </p>
          )}

          <a
            href="/"
            className="mx-auto text-green content-bold text-sm md:text-base uppercase underline"
          >
            View Full Profile
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center w-full mx-auto md:max-w-4xl lg:max-w-5xl mx-auto pt-8 pb-6">
        {console.log(otherStories)}
        <h3 className="divider line razor title text-2xl md:text-3xl mx-auto">
          Recent Stories
        </h3>
        <div className="grid grid-cols-1 mx-auto md:grid-cols-3 md:gap-x-16	md:gap-y-8 md:mb-4">
          {otherStories.map((story) => {
            return (
              <OtherStoriesCard
                key={story.id}
                uid={story.uid}
                title={story.data.title[0].text}
                date={story.data.date}
                authorInfo={story.data.author.data}
                categoryInfo={story.data.category.data}
                image={story.data.featured_image.url}
                excerpt={story.data.excerpt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const page = await client.getByUID("blogs", params.uid, {
    // fetchLinks: ["author.name", "author.uid"],
    graphQuery: `{
    blogs {
      title
      date
      body
      featured_image
      excerpt
      uid
      author {
        name
        picture
        about
      }
      category {
        name
      }
    }
  }`,
  });
  // console.log("hi", page.data.category.id);
  const disclaimer = await client.getSingle("disclaimer");

  const otherStories = await client.getByType("blogs", {
    page: 1,
    pageSize: 3,
    orderings: {
      field: "my.blogs.date",
      direction: "desc",
    },
    predicates: [
      predicate.at("document.type", "blogs"),
      predicate.at("my.blogs.category", page.data.category.id),
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

  console.log("here", otherStories);

  return {
    props: {
      page,
      disclaimer,
      otherStories: otherStories.results,
    },
  };
}

export async function getStaticPaths() {
  const pages = await client.getAllByType("blogs", {
    graphQuery: `{
      blogs {
        uid
      }
    }`,
  });

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
