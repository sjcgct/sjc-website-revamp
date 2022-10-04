import Prismic from "prismic-javascript";
import { Client } from "../prismic-configuration";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState } from "react";


const Component = ({ articles, totalArticles, totalPages }) => {

  const [posts, setPosts] = useState(articles);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const getMorePost = async () => {
    setCurrentPage(currentPage+1);

    if(currentPage<=totalPages){
      const articlesResponse = await Client().query(
        Prismic.Predicates.at("document.type", "blogs"),
        {
          pageSize: 10,
          page: currentPage+1,
        }
      );
      console.log(articlesResponse);
      setPosts((post) => [...post, ...articlesResponse['results']]);
    }
    console.log(totalPages+" "+currentPage);
    if(currentPage>=totalPages){
      console.log('attained');
      setHasMore(false);
    }
  };

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={getMorePost}
      hasMore={hasMore}
      loader={<h3> Loading...</h3>}
      endMessage={<h4>Nothing more to show</h4>}
    >

      {posts.map((data) => (
          <div key={data['uid']}>
            {data['uid']}
          </div>
        ))}
      
    </InfiniteScroll>
  );
};

export async function getServerSideProps() {
  const articlesResponse = await Client().query(
    Prismic.Predicates.at("document.type", "blogs"),
    {
      pageSize: 10,
      page: 1,
    }
  );
  console.log(articlesResponse);
  // const trending = await Client().query(
  //   Prismic.Predicates.at("document.type", "trending")
  // );

  return {
    props: {
      articles: articlesResponse['results'],
      totalArticles: articlesResponse['total_results_size'],
      totalPages: articlesResponse['total_pages'],
    },
  };
}

export default Component;
