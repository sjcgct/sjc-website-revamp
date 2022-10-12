import Link from "next/link";
import { linkResolver } from "../../prismic-configuration";

const HogCard = ({ story }) => {
  return (
    <div className={`w-full h-auto md:basis-1/2 my-4 relative`}>
      <Link href={linkResolver(story)} passHref>
        <a>
          <img
            src={story.data.featured_image.url}
            className="border-b pb-3 mb-1"
            alt="Example image"
          />
        </a>
      </Link>
      <p className="test mt-1 text-xs">
        {story.data.title[0].text.split("-")[0]}
      </p>
      <Link href={linkResolver(story)} passHref>
        <a>
          <h2 className="content-bold text-lg">{story.data.name}</h2>
        </a>
      </Link>
    </div>
  );
};

export default HogCard;
