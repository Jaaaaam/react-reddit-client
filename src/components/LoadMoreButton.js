import React from 'react';
import '.././assets/scss/load-more-button.scss';

function LoadMoreButton({r, after, setPosts, setAfter, posts, setIsLoading, activeMenu,...rest}) {

  const postsGetterFactory = {
    Hot: async(after) => (r.getHot({limit: 5, setAfter})),
    New: async(after) => (r.getNew({limit: 5, after})),
    Controversial: async(after) => (r.getControversial({limit: 5, after})),
    Rising: async(after) => (r.getRising({limit: 5, after})),
    Top: async(after) => (r.getTop({limit: 5, after}))
  }

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