import React from 'react';
import avatar from '../.././assets/images/avatar.png';
import '../../assets/scss/post-header.scss';

function PostHeader({category, authorName, ...rest}) {
  return (
    <div className="post-header">
      <img src={avatar} height={20} />
      <div className="post-category">
        { category }
      </div>
      <div className="post-author">Posted by {authorName}</div>
      <div>About 3 hours ago</div>
    </div>
  )
}

export default PostHeader