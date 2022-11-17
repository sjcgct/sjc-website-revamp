import Link from "next/link";
import { linkResolver } from "../../prismic-configuration";

const StoryCard = ({ story }) => {
  return (
    <div className="flex flex-row md:px-10 items-center justify-center mb-7 md:mb-10">
      <div className="basis-2/5 md:basis-1/4">
        <h3 className="text-[#37b113] text-xs md:text-base uppercase content-bold mb-1">
          {story.data.category.data.name}
        </h3>
        <Link href={linkResolver(story)} passHref>
          <a>
            <img
              className="w-full h-auto"
              src={story.data.featured_image.url}
            />
          </a>
        </Link>
      </div>
      <div className="mx-2 pt-[20px] md:pt-[28px] flex flex-col basis-2/3 md:basis-3/4 px-1 md:px-2 self-start">
        <Link href={linkResolver(story)} passHref>
          <a>
            <h2 className="text-base title md:text-2xl mb-1 h-[52px] md:h-[36px] overflow-hidden">
              {story.data.title[0].text}
            </h2>
          </a>
        </Link>
        <p className="md:block hidden mb-2 h-[48px] text-ellipsis overflow-hidden">
          {story.data.excerpt}
        </p>
        <div className="flex flex-row justify-start">
          <Link href={linkResolver(story.data.author)} passHref>
            <a>
              <img
                className="w-[24px] md:w-[32px] h-auto mr-2 p-[1px] rounded-full border-2 border-darkgreen"
                src={story.data.author.data.picture.url}
              />
            </a>
          </Link>
          <Link href={linkResolver(story.data.author)} passHref>
            <a className="self-center text-xs md:text-sm mr-3 md:mr-5">
              <p>{story.data.author.data.name}</p>
            </a>
          </Link>

          <p className="self-center text-xs md:text-xs text-grey-600">
            {story.data.date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
