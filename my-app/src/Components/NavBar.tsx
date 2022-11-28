import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <header className='header'>
                <div className='containerBox'>
                    <nav className='nav'>
                        <ul style={{ display: 'flex', gap: '10px' }}>
                            <li>
                                <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                            </li>
                            <li>
                                Book
                            </li>
                        </ul>
                        <ul style={{ display: 'flex', gap: '10px' }}>
                            <li >
                                <Link to="/login" style={{ textDecoration: 'none' }}>login</Link>
                            </li>
                            <li>
                                <Link to="/signup" style={{ textDecoration: 'none' }}>Signup</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default NavBar
