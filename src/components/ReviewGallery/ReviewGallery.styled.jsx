import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 15px;
  padding: 0;
`;

export const ReviewItem = styled.li`
  padding: 15px;
  list-style: none;
  border: 3px solid #3B3B7C;
  border-radius: 10px;
`;

export const ReviewTitle = styled.h2`
    color: #3B3B7C;
`