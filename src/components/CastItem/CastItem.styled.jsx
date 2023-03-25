import styled from 'styled-components';

export const ItemCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
  height: auto;
  width: calc((100% - 20px) / 2);
  border-radius: 10px;
  background-color: #3B3B7C;
  transition: color 250ms linear, background-color 250ms linear;
  @media screen and (min-width: 768px) {
    width: calc((100% - 60px) / 4);
  }
  @media screen and (min-width: 1280px) {
    width: calc((100% - 100px) / 6);
  }

  &:hover {
    background-color: #4AB51A;
    cursor: pointer;
  }
`;
export const ItemPhoto = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
`;

export const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
`;

export const ItemInfoText = styled.p`
  margin: 0;
  color: #ebebeb;
  font-size: 16px;
`;

export const ItemSpanText = styled.span`
  font-weight: 700;
`