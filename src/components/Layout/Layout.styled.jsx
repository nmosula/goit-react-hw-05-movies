import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const HeaderNavLink = styled(NavLink)`
    padding: 12px;
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    color: #000;

    &:hover,
    &:focus-visible {
        color: red;
    }
`