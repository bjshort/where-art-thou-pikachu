import React from 'react';
import styled from 'styled-components';

const Error = styled.div`
  display: block;
  background-color: #ff6b6b;
  border: 2px solid #ff6b6b;
  font-weight: 300;
  padding: 10px;
  border-radius: 5px;
`;

const ErrorComponent = ({ message }) => {
  return <Error>{message}</Error>;
};
export default ErrorComponent;
