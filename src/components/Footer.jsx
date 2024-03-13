import {Outlet} from "react-router-dom";

import Menu from "./Menu.jsx";

const Footer = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
            <footer>HOMEWORK-1</footer>
        </div>
    )
}

export default Footer

