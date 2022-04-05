import '../styles/Header.css'
import { NavLink } from 'react-router-dom'

const Header = ()=> {
    return (
        <div>
            <ul>
                <NavLink to = '/' style={{textDecorationLine:'none'}}>
                    <li>HOME</li>
                </NavLink>

                <NavLink to= '/stocks' style={{textDecorationLine:'none'}}>
                    <li>SEARCH STOCKS</li>
                </NavLink>

                <NavLink to = '/about' style={{textDecorationLine:'none'}}>
                    <li>ABOUT US</li>
                </NavLink>

            </ul>
        </div>

    )
}

export default Header;