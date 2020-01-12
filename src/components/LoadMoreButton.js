import React from 'react';
import '.././assets/scss/load-more-button.scss';

function LoadMoreButton({r, after, setPosts, setAfter, posts, setIsLoading,...rest}) {

  const loadMorePosts = async() => {
    setIsLoading(true);
    const result = await r.getHot({limit: 5, after})
      setPosts([...posts, ...result]);
      setAfter(result._query.after);
      setIsLoading(false);

  }
  return(
    <div className="load-more-wrapper">
      <button className="load-button" onClick={()=> loadMorePosts()}> Load More </button>
    </div>
  )
}

export default LoadMoreButton;