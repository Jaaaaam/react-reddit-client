import React from 'react';
import Comments from './Comments';
import avatar from '../.././assets/images/avatar.png';

function Comment({comment}) {
  const { author, body, id, replies } = comment;
    return (
      (body === '[removed]') ? '' :
      <div className="comment" key={id}>
        <a className="avatar">
          <img src={avatar} alt="" />
        </a>
        <div className="content">
          <a className="author">{author.name}</a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">
            {body}
          </div>
          {/* <div className="actions">
            <a className="reply">View Replies</a>
          </div> */}
          <Comments comments={replies} />
        </div>
      </div>
    )
}

export default Comment;