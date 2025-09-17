import React from "react";
import type { T_Post } from "../../types/posts";

type T_Props = {
  activePost: T_Post;
  setActivePost: React.Dispatch<React.SetStateAction<T_Post | null>>;
};

function PostModal({ activePost, setActivePost }: T_Props) {
  const closeModal = () => setActivePost(null);

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={closeModal}>
          &times;
        </button>
        <img
          src={activePost.img}
          srcSet={activePost.img_2x}
          alt={activePost.tags}
          className="modal__image"
        />
        <h2 className="modal__title">{activePost.title}</h2>
        <p className="modal__meta">
          <strong>{activePost.autor}</strong> • {activePost.date} •{" "}
          {activePost.views}
        </p>
        <p className="modal__description">{activePost.text}</p>
      </div>
    </div>
  );
}

export default PostModal;
