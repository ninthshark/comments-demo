import React from "react";

const CommentChildren = ({ comments }) =>
  comments.map(({ name, text, image, time }) => (
    <div className="comment">
      <div className="comment-image">
        <img src={image} alt={name} />
      </div>
      <div className="comment-content">
        <h4>{name}</h4>
        <p className="comment-time">{time}</p>
        <p>{text}</p>
      </div>
    </div>
  ));

export default CommentChildren;
