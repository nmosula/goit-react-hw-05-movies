import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  height: 24px;
  width: 130px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  background-color: #3B3B7C;
  color: #FFF;
  border-radius: 10px;
  transition: color 250ms linear, background-color 250ms linear;
  &:hover,
  &:focus-visible {
    background-color: #4AB51A;
    color: #ebebeb;
  }
`;

export const Main = styled.main`
  padding-top: 40px;
  padding-bottom: 40px;
  flex-grow: 1;
`;

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

export const MovieInfo = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 250px;
  }
  @media screen and (min-width: 1280px) {
    width: 300px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: left;
  gap: 30px;
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Rate = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  background-color: #3B3B7C;
  color: #ebebeb;
  font-size: 18px;
  border-radius: 5px;
`;