import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;

    border-bottom: 1px solid #3B3B7C;
`;

export const HeaderNavLink = styled(NavLink)`
    padding: 12px;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: #3B3B7C;
    transition: color 250ms linear, background-color 250ms linear;

    &:hover,
    &:focus-visible {
        color: #4AB51A;
    }
`