import Link from "next/link";
import { linkResolver } from "../../prismic-configuration";

const HogCard = ({ hog }) => {
  return (
    <div className="w-[250px] h-auto mx-2 my-4 relative z-1">
      <Link href={linkResolver(hog)} passHref>
        <a>
          <img
            src={hog.data.featured_image.url}
            className="border-b pb-3 mb-1"
            alt="Example image"
          />
        </a>
      </Link>

      <p className="test">Test subject</p>

      <Link href={linkResolver(hog)} passHref>
        <a>
          <h2 className="content-bold text-lg overflow-hidden max-h-[24px]">
            {hog.data.name}
          </h2>
        </a>
      </Link>
    </div>
  );
};

export default HogCard;
