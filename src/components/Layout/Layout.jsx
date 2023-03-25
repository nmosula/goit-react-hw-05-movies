import Loader from "components/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, HeaderNav, HeaderNavLink } from "./Layout.styled";


export const Layout = () => {
    return (
        <Container>
            <HeaderNav>
                <HeaderNavLink to="/">Home</HeaderNavLink>
                <HeaderNavLink to="/movies">Movies</HeaderNavLink>
            </HeaderNav>
            
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </Container>
    )
}
export default Layout;