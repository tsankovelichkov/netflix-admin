import React from 'react'
import './Sidebar.css'

import ListItem from './ListItem/ListItem'

const Sidebar = () => {
  return (
    <aside className='aside'>
        <div className="sidebar-wrapper">
          <ListItem />
        </div>
    </aside>
  )
}

export default Sidebar