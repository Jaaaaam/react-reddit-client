import React, { Fragment } from 'react';
import Modal from 'react-responsive-modal';
import PostHeader from './PostHeader';
import Loader from '../Loader';
import PostFooter from './PostFooter';
import Comments from './Comments';

function Post({modalIsOpen, closeModal, isLoading, activePost, ...rest}) {
  const { title, subreddit_name_prefixed, authorName, permalink, created_utc, ups, preview, commentCount, comments} = activePost;
  console.log(ups, 'UPS')
  console.log(activePost, 'activePosts')
  const renderPreview = () => {
    if (!preview) return;
    console.log(preview.images, 'imagesssss')
    return preview.images.map(({source, id}) => {
      return (
        <img key={id} src={source.url} className="post-image"/>
      )
    })
  }

  return (
    <Modal
      open={modalIsOpen}
      onClose={closeModal}
      styles={{
        modal: { minWidth: '800px', minHeight: '90%'}
      }}
    >
      {
        isLoading ?
          <Loader /> :
          (
            <Fragment>
              <PostHeader
                created={created_utc}
                ups={ups}
                category={subreddit_name_prefixed}
                authorName={authorName} />
              <div className="post-body-title">{title}</ div>
              <div className="post-link">
                <a href={`https://www.reddit.com${permalink}`} target="_blank">{permalink}</ a>
              </div>
              <div className="post-media">
                {renderPreview()}
              </div>
              <PostFooter commentCount={commentCount} url={`https://www.reddit.com${permalink}`}/>
              <br />
              <hr />
              <Comments comments={comments}/>
            </Fragment>
          )
      }
      
    </Modal>
  )
}

export default Post;