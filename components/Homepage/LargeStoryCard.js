const LargeStoryCard = () => {
  return (
    <div className="main-column place-items-center py-4">
      <div className="w-full h-auto">
        <img src="https://source.unsplash.com/random/900x600" />
      </div>
      <div className="heading-container py-2">
        <h2 className="title text-2xl md:text-3xl mb-2">
          The title of this goddamn long af post
        </h2>
        <p className="mb-3 text-sm md:text-base">
          lorem ipsum fw wghwehg wihgowehgw wghweorpweg ewghweoghwepghpweghewgh
          gheiwer ghwe whgw owh wieghw.
        </p>
        <div className="flex flex-row justify-start">
          <img
            className="w-[40px] h-auto mr-3 p-[1px] rounded-full border-2 border-darkgreen"
            src="https://source.unsplash.com/random/100x100"
          />
          <p className="self-center">Ajai Kannan</p>
        </div>
      </div>
    </div>
  );
};

export default LargeStoryCard;
