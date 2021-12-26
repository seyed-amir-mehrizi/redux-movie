import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import userImage from '../../images/user.png'
export default function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <div className='logo'>Movie App</div>
            </Link>
            <div className='user-image'>
                <img src={userImage} alt='user' />
            </div>
        </div>
    )
}
