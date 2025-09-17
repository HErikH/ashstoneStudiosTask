import React from "react";
import type { T_Post } from "../../types/posts";

type T_Props = {
  post: T_Post;
  setActivePost: React.Dispatch<React.SetStateAction<T_Post | null>>;
};

function PostItem({ post, setActivePost }: T_Props) {
  const openModal = (post: T_Post) => setActivePost(post);

  return (
    <div className="post-card" onClick={() => openModal(post)}>
      <img
        src={post.img}
        srcSet={post.img_2x}
        alt={post.tags}
        className="post-card__image"
      />
      <div className="post-card__content">
        <span className="post-card__category">{post.tags}</span>
        <h2 className="post-card__title">{post.title}</h2>
        <p className="post-card__meta">
          <span className="post-card__meta-strong">{post.autor}</span> •{" "}
          {post.date} • {post.views} Views
        </p>
        <p className="post-card__excerpt">{post.text}</p>
      </div>
    </div>
  );
}

export default PostItem;
