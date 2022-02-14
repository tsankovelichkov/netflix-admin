import "./ListItem.css"
import { Link } from "react-router-dom";

import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import LocalMoviesRoundedIcon from '@mui/icons-material/LocalMoviesRounded';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';

const ListItem = () => {
    return (
        <>
            <div className="sidebar-quickMenu-container">
                <h2 className='quickMenu-title'>Users</h2>
                <ul className="sidebar-listItem">
                    <Link className="link-button" to="/users">
                        <li className='sidebar-listItem-el active'>
                            <AccountBoxIcon className='sidebar-icons' />
                            Users
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="sidebar-quickMenu-container">
                <h2 className='quickMenu-title'>See Movies</h2>
                <ul className="sidebar-listItem">
                    <Link className="link-button" to="/movies">
                        <li className='sidebar-listItem-el'>
                            <LocalMoviesRoundedIcon className='sidebar-icons' />
                            Movies
                        </li>
                    </Link>
                    <Link className="link-button" to="/add-movie">
                        <li className='sidebar-listItem-el'>
                            <AddBoxIcon className='sidebar-icons' />
                            Add Movie
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="sidebar-quickMenu-container">
                <h2 className='quickMenu-title'>Lists</h2>
                <ul className="sidebar-listItem">
                <Link className="link-button" to="/lists">
                        <li className='sidebar-listItem-el'>
                            <ViewListRoundedIcon className='sidebar-icons' />
                            See List
                        </li>
                    </Link>
                    <Link className="link-button" to="/add-list">
                        <li className='sidebar-listItem-el'>
                            <PlaylistAddRoundedIcon className='sidebar-icons' />
                            Add List
                        </li>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default ListItem