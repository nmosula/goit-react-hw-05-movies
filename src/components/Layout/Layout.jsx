import { Outlet } from "react-router-dom";
import { HeaderNav, HeaderNavLink } from "./Layout.styled";


export const Layout = () => {
    return (
        <>
            <HeaderNav>
                <HeaderNavLink to="/">Home</HeaderNavLink>
                <HeaderNavLink to="/movies">Movies</HeaderNavLink>
            </HeaderNav>
            
            <Outlet />
        </>
    )
}
export default Layout;