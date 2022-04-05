
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #02475e;
  transition: all 0.3s ease-in;
  font-size: 2rem;
  font-family: 'Girassol', sans-serif;
  &:hover {
    color: #00adb5;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    background-color: #e1f1dd;
    border: 1px solid #00adb5;
    border-radius: 10px;
    width: 100%;
  }
`;