import { memo, useEffect, useState } from "react";
import { getPosts } from "../../api/getPosts";
import type { T_Post } from "../../types/posts";
import Loading from "../ui/loading/Loading";
import PostItem from "./PostItem";
import PostModal from "./PostModal";
import "./style.scss";

type T_Props = {
  processedQuery: string;
};

function Posts({ processedQuery }: T_Props) {
  const [allPosts, setAllPosts] = useState<T_Post[]>([]);
  const [activePost, setActivePost] = useState<T_Post | null>(null);
  const [postsData, setPostsData] = useState<T_Post[] | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const data = await getPosts();

      if (data) {
        setAllPosts(data);
        setPostsData(data);
      }
    })();
  }, []);

  useEffect(() => {
    if (!processedQuery) {
      setPostsData(allPosts);
      return;
    }

    const filteredData = allPosts?.filter((post) =>
      [post.title, post.text, post.tags].some((field) =>
        field.toLowerCase().includes(processedQuery)
      )
    );

    setPostsData(filteredData);
  }, [processedQuery, allPosts]);

  return !postsData?.length ? (
    <Loading />
  ) : (
    <div className="post-list">
      {postsData.map((post, index) => (
        <PostItem post={post} key={index} setActivePost={setActivePost} />
      ))}

      {activePost && (
        <PostModal activePost={activePost} setActivePost={setActivePost} />
      )}
    </div>
  );
}

export default memo(Posts);
