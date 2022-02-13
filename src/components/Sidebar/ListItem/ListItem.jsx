import "./ListItem.css"
import { Link } from "react-router-dom";

import AddBoxIcon from '@mui/icons-material/AddBox';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';

const ListItem = () => {
    return (
        <div className="sidebar-quickMenu-container">
            <h2 className='quickMenu-title'>Quick Menu</h2>
            <ul className="sidebar-listItem">
                <Link className="link-button" to="/users">
                    <li className='sidebar-listItem-el active'>
                    <AccountBoxIcon className='sidebar-icons' />
                    Users
                    </li>
                </Link>

                <li className='sidebar-listItem-el'>
                    <AddBoxIcon className='sidebar-icons' />
                    Add Movie
                </li>
                <li className='sidebar-listItem-el'>
                    <ViewListRoundedIcon className='sidebar-icons' />
                    Add List
                </li>
            </ul>
        </div>
    )
}

export default ListItem