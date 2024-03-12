import {Outlet} from "react-router-dom";

import NavBar from "./NavBar.jsx";

const Layout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <footer>HOMEWORK-1</footer>
        </div>
    )
}

export default Layout

