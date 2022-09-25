import Heading from "../Heading";
import Canvas from "../Generic/Canvas";
import LargeStoryCard from "./LargeStoryCard";
import SmallStoryCard from "./SmallStoryCard";

const RecentStories = () => {
  return (
    <Canvas bgcolor="dominantbg">
      <Heading title="Recent Stories" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16	md:gap-y-8 md:my-4 p-1">
        <LargeStoryCard />

        <div className="secondary-column py-4">
          <div className="flex flex-col items-start">
            <SmallStoryCard />

            <SmallStoryCard />

            <SmallStoryCard />

            <SmallStoryCard />
          </div>
        </div>
      </div>
    </Canvas>
  );
};

export default RecentStories;
