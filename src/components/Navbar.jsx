import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const links = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Browse",
            path: "/browse",
        },
        {
            name: "Details",
            path: "/details",
        },
        {
            name: "Streams",
            path: "/streams",
        },
        {
            name: "Profile",
            path: "/profile",
        },
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }  
  return (
    <div className='nav-box'>
        <div className='navbar'>
            <div className='left'>
                <Link to='/' className='logo' >
                    <h1>
                        <span>
                            MC
                            <div className='bar1'></div>
                            <div className='bar2'></div>
                        </span>
                        CYBORG
                    </h1>
                </Link>
                <div className='search'>
                    <SearchOutlinedIcon className='icon' />
                    <input type="text" placeholder='Type Something'></input>
                </div>
            </div>
            <div className='right'>
                <div className='nav'>
                    <Link to="/" className='link'>Home</Link>
                    <Link to="/browse" className='link'>Browse</Link>
                    <Link to="/details" className='link'>Details</Link>
                    <Link to="/streams" className='link'>Streams</Link>
                </div>
                <Link to="/profile" className='profile'>
                    <p>Profile</p>
                    <img src="/img/profile-header.jpg" alt='' />
                </Link>
            </div>
            {
                showSidebar === false 
                ?<div className='nav-btn' onClick={()=> setShowSidebar(true)}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line1'></div>
                </div> 
                : <div className='nav-btn-close' onClick={closeSidebar}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                </div>
            }
        </div>
        { showSidebar &&
        <div className='min-navbar'>
            {links.map((link, index) => (
                <Link to={link.path} key={index} className="navbar-link" onClick={closeSidebar}>{link.name}</Link>
            ))}
        </div> 
        }
        
    </div>
    
  )
}

export default Navbar