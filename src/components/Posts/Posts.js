import React, { useState } from 'react';
import Post from './Post';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import placeholder from '../.././assets/images/placeholder.png'
import '../.././assets/scss/posts.scss';

function Posts({posts, r, ...rest}) {
  const [modalIsOpen,setIsOpen] = useState(false);
  const [activePost, setActivePost] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  const getPost = async(id, name, commentCount) => {
    setIsLoading(true);
    await r.getSubmission(id).fetch().then((post) => {
      setActivePost({...post, authorName: name, commentCount})
      setIsLoading(false)
    });
  }

  const openModal = (id, name, num_comments) => {
    getPost(id, name, num_comments);
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const renderPreview = (thumbnail) => {
    const image = !(thumbnail==='self' || thumbnail==='default' || thumbnail==='nsfw') ? thumbnail: placeholder
    return (
      <img src={image} height={70} />
    )
  }

  const renderPosts = () => {
    return (
      posts.map(({id, title, thumbnail, subreddit_name_prefixed, num_comments, ups,permalink, created, author: {name}}) =>
        (
          <div className="post" key={id}>
            <PostHeader 
              created={created}
              ups={ups}
              category={subreddit_name_prefixed }
              authorName={name} />
            <div className="post-body">
              <div className="post-title" onClick={() => openModal(id, name, num_comments)}>
                {title}
              </div>
              { renderPreview(thumbnail) }
            </div>
            <PostFooter commentCount={num_comments} url={`https://www.reddit.com${permalink}`}/>
          </div>
        )
      )
    )
  }
  return (
    <div className="posts">
      { renderPosts() }
      <Post
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        isLoading={isLoading}
        activePost={activePost} />
    </div>

  )
}

export default Posts;