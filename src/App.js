import React, { useEffect, useState, Fragment } from 'react';
import TopNav from './components/TopNav';
import SideMenu from './components/SideMenu';
import Posts from './components/Posts/Posts';
import LoadMoreButton from './components/LoadMoreButton';
import Loader from './components/Loader';
import { clientId, clientSecret, accessToken } from './constants/config'
import './assets/scss/main.scss';
const snoowrap = require('snoowrap');

const r = new snoowrap({
  clientId,
  clientSecret,
  accessToken
});
function App() {
  const [posts, setPosts] = useState([]);
  //indicator for the load more button
  const [after, setAfter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Hot')

  useEffect(() => {
    const getHotPost = async () => {
      setIsLoading(true);
      const result = await r.getHot({limit: 5})
      setPosts(result)
      setIsLoading(false);
      setAfter(result._query.after);
    }
    getHotPost()
  }, []);

  return (
    <div className="container">
      <TopNav />
      <SideMenu 
        r={r}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        setPosts={setPosts}
        setAfter={setAfter} />
      <div className="main">
        <Posts posts={posts} r={r} />
        {
          isLoading ?
          <Loader />
          :
          <Fragment>
            <LoadMoreButton
              after={after}
              r={r}
              setPosts={setPosts}
              setAfter={setAfter}
              posts={posts}
              setIsLoading={setIsLoading}
              />
          </Fragment>
        }
      </div>
    </div>
  );
}

export default App;
