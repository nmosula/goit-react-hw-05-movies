import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 10px 0;
  background-color: #3B3B7C;
  border-radius: 1px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: #3B3B7C;
  color: #fff;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &::hover {
    opacity: 1;
  }
`
export const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  color: #3B3B7C;
  padding: 4px;
  &::placeholder {
    font-size: 18px;
  }
`