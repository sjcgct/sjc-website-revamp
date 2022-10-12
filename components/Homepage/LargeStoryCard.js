import { PrismicLink } from "@prismicio/react";
import Link from "next/link";
import { linkResolver } from "../../prismic-configuration";

const LargeStoryCard = ({ story }) => {
  return (
    <div className="main-column place-items-center py-4">
      <Link href={linkResolver(story)} passHref>
        <a>
          <div className="w-full h-auto">
            <img
              src={story.data.featured_image.url}
              alt={story.data.featured_image.alt}
            />
          </div>
        </a>
      </Link>

      <div className="heading-container py-2">
        <Link href={linkResolver(story)} passHref>
          <a>
            <h2 className="title text-2xl md:text-3xl mb-2">
              {story.data.title[0].text}
            </h2>
          </a>
        </Link>

        <p className="mb-3 text-sm md:text-base max-h-[64px] md:max-h-[50px] overflow-hidden">
          {story.data.excerpt}
        </p>
        <div className="flex flex-row justify-start">
          <Link href={linkResolver(story.data.author)} passHref>
            <a>
              <img
                className="w-[40px] h-auto mr-3 p-[1px] rounded-full border-2 border-darkgreen"
                src={story.data.author.data.picture.url}
              />
            </a>
          </Link>

          <Link href={linkResolver(story.data.author)} passHref>
            <a className="self-center">
              <p>{story.data.author.data.name}</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LargeStoryCard;
