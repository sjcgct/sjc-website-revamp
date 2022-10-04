import Head from "next/head";
import React, { useState } from "react";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { client } from "../prismic-configuration";
import Link from "next/link";
import Canvas from "../components/Generic/Canvas";
import Heading from "../components/Heading";
import StoryCard from "../components/Stories/StoryCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { PuffLoader } from "react-spinners";

export default function StoriesPage({ articles, totalPages }) {
  const [stories, setStories] = useState(articles);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const getMoreStories = async () => {
    setCurrentPage(currentPage + 1);

    if (currentPage <= totalPages) {
      const articlesResponse = await client.getByType("blogs", {
        page: currentPage + 1,
        pageSize: 5,
        orderings: {
          field: "my.blogs.date",
          direction: "desc",
        },
        graphQuery: `{
                blogs {
                  title
                  date
                  featured_image
                  excerpt
                  uid
                  author {
                    name
                    picture
                  }
                  category {
                    name
                  }
                }
              }`,
      });
      console.log(articlesResponse);
      setStories((post) => [...post, ...articlesResponse["results"]]);
    }
    console.log(totalPages + " " + currentPage);
    if (currentPage >= totalPages) {
      console.log("attained");
      setHasMore(false);
    }
  };

  return (
    <Canvas bgcolor={"dominantbg"}>
      {console.log(articles)}
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
        <Heading title={"Stories"} />
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            uid={story.uid}
            title={story.data.title[0].text}
            date={story.data.date}
            authorInfo={story.data.author.data}
            categoryInfo={story.data.category.data}
            image={story.data.featured_image.url}
            excerpt={story.data.excerpt}
          />
        ))}
      </InfiniteScroll>
    </Canvas>
  );
}

export async function getStaticProps() {
  const stories = await client.getByType("blogs", {
    page: 1,
    pageSize: 5,
    orderings: {
      field: "my.blogs.date",
      direction: "desc",
    },
    graphQuery: `{
            blogs {
              title
              date
              featured_image
              excerpt
              uid
              author {
                name
                picture
              }
              category {
                name
              }
            }
          }`,
  });

  //   const articlesResponse = await Client.getAllByType("blogs", {
  //     orderings: [
  //       { field: "my.blogs.publishDate", direction: "desc" },
  //       { field: "document.first_publication_date", direction: "desc" },
  //     ],
  //   });
  //   console.log(articlesResponse);
  // const trending = await Client().query(
  //   Prismic.Predicates.at("document.type", "trending")
  // );

  return {
    props: {
      articles: stories["results"],
      totalPages: stories["total_pages"],
    },
  };
}
