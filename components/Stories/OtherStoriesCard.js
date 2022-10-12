const OtherStoriesCard = ({
  uid,
  title,
  date,
  authorInfo,
  categoryInfo,
  image,
  excerpt,
}) => {
  return (
    <div className="place-items-center py-4 md:py-2">
      <h3 className="text-orange text-sm md:text-base uppercase content-bold mb-1">
        {categoryInfo.name}
      </h3>
      <div className="w-full h-auto">
        <img src={image} />
      </div>
      <div className="py-2">
        <h2 className="title text-xl mb-3 max-h-[56px] overflow-hidden">
          {title}
        </h2>
        <div className="flex flex-row justify-start">
          {/* <img
            className="w-[40px] md:w-[36px] h-auto mr-1 p-[1px] rounded-full border-2 border-darkgreen"
            src={authorInfo.picture.url}
          /> */}
          <p className="self-center text-sm md:text-sm mr-3 md:mr-5">
            {authorInfo.name}
          </p>
          <p className="self-center text-xs md:text-sm text-grey-600">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default OtherStoriesCard;
