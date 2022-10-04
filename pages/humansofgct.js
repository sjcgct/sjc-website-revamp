import Head from "next/head";
import React, { useState } from "react";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { client } from "../prismic-configuration";
import Link from "next/link";
import Canvas from "../components/Generic/Canvas";
import Heading from "../components/Heading";
import HogCard from "../components/Hogpage/HogCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { PuffLoader } from "react-spinners";

export default function StoriesPage({ articles, totalPages }) {
  const [stories, setStories] = useState(articles);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const getMoreStories = async () => {
    setCurrentPage(currentPage + 1);

    if (currentPage <= totalPages) {
      const storiesResponse = await client.getByType("hog", {
        page: currentPage + 1,
        pageSize: 10,
        orderings: {
          field: "my.hog.date",
          direction: "desc",
        },
        graphQuery: `{
            hog {
              date
              featured_image
              name
              title
            }
          }`,
      });
      setStories((story) => [...story, ...storiesResponse["results"]]);
    }
    console.log(totalPages + " " + currentPage);
    if (currentPage >= totalPages) {
      console.log("attained");
      setHasMore(false);
    }
  };

  return (
    <Canvas bgcolor="pinkbg">
      <Heading title="Humans of GCT" />
      <InfiniteScroll
        dataLength={stories.length}
        next={getMoreStories}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center align-center">
            <PuffLoader color="#36d7b7" speedMultiplier={1} />
          </div>
        }
        endMessage={<></>}
      >
        <div className="grid grid-cols-1 px-10 md:grid-cols-2 md:gap-x-24 md:gap-y-12 md:my-4">
          {stories.map((story) => (
            <HogCard
              key={story.id}
              uid={story.uid}
              title={story.data.title[0].text}
              date={story.data.date}
              name={story.data.name}
              image={story.data.featured_image.url}
            />
          ))}
        </div>
      </InfiniteScroll>

      {/* <HogCard />

        <HogCard />

        <HogCard /> */}
    </Canvas>

    // <Canvas bgcolor={"dominantbg"}>
    //   <InfiniteScroll
    //     dataLength={stories.length}
    //     next={getMoreStories}
    //     hasMore={hasMore}
    //     loader={
    //       <div className="flex justify-center align-center">
    //         <PuffLoader color="#36d7b7" speedMultiplier={1} />
    //       </div>
    //     }
    //     endMessage={<></>}
    //   >
    //     <Heading title={"Stories"} />
    //     {stories.map((story) => (
    //       <StoryCard
    //         key={story.id}
    //         uid={story.uid}
    //         title={story.data.title[0].text}
    //         date={story.data.date}
    //         authorInfo={story.data.author}
    //         categoryInfo={story.data.category}
    //         image={story.data.featured_image.url}
    //         excerpt={story.data.excerpt}
    //       />
    //     ))}
    //   </InfiniteScroll>
    // </Canvas>
  );
}

export async function getServerSideProps({ previewData }) {
  const hogs = await client.getByType("hog", {
    page: 1,
    pageSize: 10,
    orderings: {
      field: "my.hog.date",
      direction: "desc",
    },
    graphQuery: `{
        hog {
          date
          featured_image
          name
          title
        }
      }`,
  });

  // console.log(hogs);

  return {
    props: {
      articles: hogs.results,
      totalArticles: hogs.total_results_size,
      totalPages: hogs.total_pages,
    },
  };
}
