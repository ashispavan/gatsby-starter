import React from 'react'
import { Link } from 'gatsby';

function Menu() {
    return (
        <div>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/page-2'>Page 2</Link></li>
                <li><Link to='/about'>About</Link></li>

            </ul>
        </div>
    )
}

export default Menu;
