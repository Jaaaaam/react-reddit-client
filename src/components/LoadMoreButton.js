import React from 'react';
import '.././assets/scss/load-more-button.scss';

function LoadMoreButton({r, after, setPosts, setAfter, posts, setIsLoading, activeMenu,...rest}) {

  const postsGetterFactory = {
    Hot: async(afterStr) => (r.getHot({limit: 5, after: afterStr})),
    New: async(afterStr) => (r.getNew({limit: 5, after: afterStr})),
    Controversial: async(afterStr) => (r.getControversial({limit: 5, after: afterStr})),
    Rising: async(afterStr) => (r.getRising({limit: 5, after: afterStr})),
    Top: async(afterStr) => (r.getTop({limit: 5, after: afterStr}))
  }

  const loadMorePosts = async() => {
    setIsLoading(true);
    const result = await postsGetterFactory[activeMenu](after)
      setPosts([...posts, ...result]);
      console.log(result._query.after, 'afteeeeeeer')
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