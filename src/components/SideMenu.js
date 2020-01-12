import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menu } from '../constants/menu';
import '.././assets/scss/side-nav.scss';

function SideMenu({r, activeMenu, setActiveMenu,setPosts,...rest}) {

  const postsGetterFactory = {
    Hot: async() => (r.getHot({limit: 5})),
    New: async() => (r.getNew({limit: 5})),
    Controversial: async() => (r.getControversial({limit: 5})),
    Rising: async() => (r.getRising({limit: 5})),
    Top: async() => (r.getTop({limit: 5}))
  }
  const onMenuClick = async(name) => {
    if (name===activeMenu) return
    setActiveMenu(name)
    const result = await postsGetterFactory[name]()
    console.log(result, 'posts')
    setPosts(result)
  }

  const renderMenuItems = () => {
    return menu.map(({name, icon}) => (
      <div key={name} className={`menu-item ${(activeMenu === name) ? 'active' : ''}`} onClick={() => onMenuClick(name)}>
        <FontAwesomeIcon className="icon" icon={icon}/>
        {name}
      </div>
    ))
  }
  return (
    <div className="side-nav">
      <div className="menu">
        { renderMenuItems() }
      </div>
    </div>
  )
}

export default SideMenu;