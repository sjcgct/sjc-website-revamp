const StoryCard = ({
  uid,
  title,
  date,
  authorInfo,
  categoryInfo,
  image,
  excerpt,
}) => {
  return (
    <div className="flex flex-row md:px-10 items-center justify-center mb-7 md:mb-10">
      <div className="basis-2/5 md:basis-1/4">
        <h3 className="text-orange text-xs md:text-base uppercase content-bold mb-1">
          {categoryInfo.name}
        </h3>
        <img className="w-full h-auto" src={image} />
      </div>
      <div className="mx-2 pt-[20px] md:pt-[28px] flex flex-col basis-2/3 md:basis-3/4 px-1 md:px-2 self-start">
        <h2 className="text-base title md:text-2xl mb-1 h-[52px] md:h-[36px] overflow-hidden">
          {title}
        </h2>
        <p className="md:block hidden mb-2 h-[48px] text-ellipsis overflow-hidden">
          {excerpt}
        </p>
        <div className="flex flex-row justify-start">
          <img
            className="w-[24px] md:w-[36px] h-auto mr-1 p-[1px] rounded-full border-2 border-darkgreen"
            src={authorInfo.picture.url}
          />
          <p className="self-center text-xs md:text-base mr-3 md:mr-5">
            {authorInfo.name}
          </p>{authorInfo.name}
          <p className="self-center text-xs md:text-base text-grey-600">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
