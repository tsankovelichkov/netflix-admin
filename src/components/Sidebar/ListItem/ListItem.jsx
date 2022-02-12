import React from 'react'

const ListItem = () => {
    return (
        <div className="sidebar-quickMenu-container">
            <h2 className='quickMenu-title'>Quick Menu</h2>
            <ul className="sidebar-listItem">
                <li className='sidebar-listItem-el'>Users</li>
                <li className='sidebar-listItem-el'>Add Movie</li>
                <li className='sidebar-listItem-el'>Add List</li>
            </ul>
        </div>
    )
}

export default ListItem