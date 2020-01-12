import React from 'react';
import Comment from './Comment';
import '../../assets/scss/comment.scss';

function Comments({comments}) {

  const renderComments = () => {
    if (!comments.length) return ''
    return comments.map((comment) => (
      <Comment comment={comment} key={comment.id}/>
    ))
  }
  return (
    <div className="comment-wrapper">
      {renderComments()}
    </div>
  )
}

export default Comments;