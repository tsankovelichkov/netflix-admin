import './Header.css';
import { Avatar } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';


const Header = () => {
  return (
    <header className='header'>
      <div className="header-logo-container">
        <div className="logo-image-container">
          <img src='netflix-n.jpg' />
        </div>
        <span className='admin-logo-part'>Admin</span>
      </div>
      <div className="header-user-container">
        <div className="header-avatar-icon-container">
        <Avatar className='header-avatar-icon' alt="Remy Sharp" src="65897299_2578090805534807_5521529261892042752_n (2).jpg" />
        </div>
        <LogoutIcon />
      </div>
    </header>
  )
}

export default Header