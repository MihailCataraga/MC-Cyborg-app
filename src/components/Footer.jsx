import React from 'react';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <div className='footer'>
        <p>Copyright &copy; 2036 <Link to='/' className='link'>Cyborg Gaming</Link> Company. All rights reserved.</p>
    </div>
  )
}

export default Footer