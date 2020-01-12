import React from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import avatar from '../.././assets/images/avatar.png';
import '../../assets/scss/post-header.scss';

Date.prototype.subtractHours= function(h){
  this.setHours(this.getHours()-h);
  return this;
}

function PostHeader({created, category, authorName, ...rest}) {
  const timeAgo = distanceInWordsToNow(new Date(created * 1000).subtractHours(8));

  return (
    <div className="post-header">
      <img src={avatar} height={20} />
      <div className="post-category">
        { category }
      </div>
      <div className="post-author">Posted by {authorName}</div>
      <div>{timeAgo}</div>
    <div>{ }</div>
    </div>
  )
}

export default PostHeader