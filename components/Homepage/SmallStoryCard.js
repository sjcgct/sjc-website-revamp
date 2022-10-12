import Link from "next/link";
import { linkResolver } from "../../prismic-configuration";

const SmallStoryCard = ({ story }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <Link href={linkResolver(story)} passHref>
        <a>
          <div>
            <img
              className="max-w-[150px] h-auto"
              src={story.data.featured_image.url}
              alt={story.data.featured_image.alt}
            />
          </div>
        </a>
      </Link>

      <div className="p-2 flex flex-col self-start">
        <Link href={linkResolver(story)} passHref>
          <a>
            <h2 className="text-base h-[48px] md:h-auto md:max-h-[60px] overflow-hidden md:text-lg title mb-2">
              {story.data.title[0].text}
            </h2>
          </a>
        </Link>

        <div className="flex flex-row justify-start">
          <Link href={linkResolver(story.data.author)} passHref>
            <a>
              <img
                className="w-[24px] h-auto mr-1 p-[1px] rounded-full border-2 border-darkgreen"
                src={story.data.author.data.picture.url}
              />
            </a>
          </Link>
          <Link href={linkResolver(story.data.author)} passHref>
            <a className="self-center text-sm">
              <p>{story.data.author.data.name}</p>
            </a>
          </Link>
        </div>
      </div>
    </div>
    // <div>hi</div>
  );
};

export default SmallStoryCard;
