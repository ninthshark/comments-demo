import React, { Component } from "react";
import "./comment.css";
import CommentChildren from "./CommentChildren";

import data from "./comments.json";

class Comment extends Component {
  render() {
    return data.comments.map(({ name, text, image, time, comments }) => (
      <div>
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
        <div className="comment-children">
          {comments ? <CommentChildren comments={comments} /> : null}
        </div>
      </div>
    ));
  }
}

export default Comment;
