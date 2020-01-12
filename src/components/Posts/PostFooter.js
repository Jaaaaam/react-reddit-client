import React from 'react';
import copy from 'copy-to-clipboard';
import Swal from 'sweetalert2';
import { faComments, faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PostFooter({commentCount, url}) {
  const onShare = () => {
    copy(url);

    let timerInterval;
    Swal.fire({
      icon: 'success',
      title: 'Link Copied!',
      timer: 2000,
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (
        result.dismiss === Swal.DismissReason.timer
      ) {
        console.log('I was closed by the timer')
      }
    })
  }

  return (
    <div className="post-footer">
      <div className="post-buttons">
        <div className="post-button">
          <FontAwesomeIcon icon={faComments} className="icon" />
          {commentCount} Comments
        </div>
        <div className="post-button" onClick={() => onShare()}>
          <FontAwesomeIcon icon={faShare} className="icon" />
          Share
        </div>
      </div>
    </div>
  )
}

export default PostFooter;