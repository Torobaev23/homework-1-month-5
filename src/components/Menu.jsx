import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">TITLE</NavLink></li>
                <li><NavLink to="/about">CREATE</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu

