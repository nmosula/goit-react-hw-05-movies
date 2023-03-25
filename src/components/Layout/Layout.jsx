import Loader from "components/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { HeaderNav, HeaderNavLink } from "./Layout.styled";


export const Layout = () => {
    return (
        <>
            <HeaderNav>
                <HeaderNavLink to="/">Home</HeaderNavLink>
                <HeaderNavLink to="/movies">Movies</HeaderNavLink>
            </HeaderNav>
            
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </>
    )
}
export default Layout;