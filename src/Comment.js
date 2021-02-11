import React, { Component } from "react";
import "./comment.css";

import data from "./comments.json";

class Comment extends Component {
  render() {
    const { name, text, image, time, comments } = data.comments[1];
    return (
      <div className="comment">
        <div className="comment-image">
          <img src={image} alt={name} />
        </div>
        <div className="comment-content">
          <h4>{name}</h4>
          <p className="comment-time">{time}</p>
          <p>{text}</p>
          <button>Reply</button>
        </div>
      </div>
    );
  }
}

export default Comment;
