const SmallStoryCard = () => {
  return (
    <div class="flex items-center justify-center mb-4">
      <div class="basis-1/2">
        <img
          className="w-full h-auto"
          src="https://source.unsplash.com/random/600x400"
        />
      </div>
      <div class="p-2 flex flex-col self-start">
        <h1 className="text-sm md:text-lg title mb-2">
          Paris is one of the most beautiful cities in France.
        </h1>
        <div className="flex flex-row justify-start">
          <img
            className="w-[24px] h-auto mr-1 p-[1px] rounded-full border-2 border-darkgreen"
            src="https://source.unsplash.com/random/100x100"
          />
          <p className="self-center text-xs">Ajai Kannan</p>
        </div>
      </div>
    </div>
  );
};

export default SmallStoryCard;
