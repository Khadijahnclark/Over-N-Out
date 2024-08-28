import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (    
                <div className='navBar border border-blue-950'>
                    <div className='HomePage'>
                        <Link to="/">HomePage</Link>
                    </div>
                </div>
    )

}
export default Navbar;