import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
    return (
        <>
            <div>
                <ul >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
                <Outlet />
            </div>
        </>
    )
}; export default Layout;

