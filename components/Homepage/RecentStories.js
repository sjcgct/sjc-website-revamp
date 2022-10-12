import Heading from "../Heading";
import Canvas from "../Generic/Canvas";
import LargeStoryCard from "./LargeStoryCard";
import SmallStoryCard from "./SmallStoryCard";

const RecentStories = ({ stories }) => {
  // console.log(stories[0].data.author.data);
  const otherStories = [...stories.slice(0, 0), ...stories.slice(1)];
  return (
    <Canvas bgcolor="dominantbg">
      <Heading title="Recent Stories" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16	md:gap-y-8 md:my-4 p-1">
        <LargeStoryCard
          story={stories[0]}
          title={stories[0].data.title[0].text}
          featuredImage={stories[0].data.featured_image}
          author={stories[0].data.author.data}
          date={stories[0].data.date}
          excerpt={stories[0].data.excerpt}
          uid={stories[0].uid}
        />

        <div className="secondary-column py-4">
          <div className="flex flex-col items-start">
            {console.log(otherStories)}
            {otherStories &&
              otherStories.map((story) => {
                return (
                  <SmallStoryCard
                    story={story}
                    title={story.data.title[0].text}
                    featuredImage={story.data.featured_image}
                    author={story.data.author.data}
                    date={story.data.date}
                    excerpt={story.data.excerpt}
                    uid={story.uid}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </Canvas>
  );
};

export default RecentStories;
