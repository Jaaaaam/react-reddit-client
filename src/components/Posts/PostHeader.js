import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import avatar from '../.././assets/images/avatar.png';
import '../../assets/scss/post-header.scss';

Date.prototype.subtractHours= function(h){
  this.setHours(this.getHours()-h);
  return this;
}

function PostHeader({created, category, authorName, ups, ...rest}) {
  const timeAgo = distanceInWordsToNow(new Date(created * 1000).subtractHours(8));
  console.log(ups, 'ups')
  return (
    <div className="post-header">
      <img src={avatar} height={20} />
      <div className="post-category">
        { category }
      </div>
      <div className="post-author">Posted by {authorName}</div>
      <div>{timeAgo}</div>
      <div className="upvotes">
        <FontAwesomeIcon className="icon-upvote" icon={faCaretUp}/>
          {ups}
        <FontAwesomeIcon className="icon-upvote" icon={faCaretDown}/>
      </div>
    </div>
  )
}

export default PostHeader