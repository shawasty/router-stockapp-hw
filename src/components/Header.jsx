import '../styles/Header.css'
import { NavLink } from 'react-router-dom'

const Header = ()=> {
    return (
        <div>
            <ul>
                <NavLink to = '/'>
                    <li>HOME</li>
                </NavLink>

                <NavLink to= '/stocks'>
                    <li>SEARCH STOCKS</li>
                </NavLink>

                <NavLink to = '/about'>
                    <li>ABOUT US</li>
                </NavLink>

            </ul>
        </div>

    )
}

export default Header;