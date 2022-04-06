import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  border: 3px solid red;
  background: #e1f1dd;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0 0 10px 10px;
  font-size: 2rem;
  height: 80px;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  padding: 1rem 0;
  color: black;
  font-size: 2rem;

  font-family: "Girassol", sans-serif;

  &:hover {
    font-weight: bold;
    color: aqua;
  }

  span {
    font-weight: bold;
  }
`;

export const NavbarRight = styled.div`
    font-family: 'Girassol', sans-serif;
    display:flex;
    justify-content: center;
    align-items: center;
    position:relative;


    @media (max-width: 768px) {
      overflow: hidden; 
      flex-direction: column;
      width: 100%;
      transition: max-height 0.3s ease-in-out;
      border: 1px solid red;
      background-color: #e1f1dd;
      margin-top:5px;
      border-radius:0px 0px 15px 15px;
      max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")}
        

`;

export const NavbarRightLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  color: black;
  text-align: center;
  transition: all 0.2s ease-in-out;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    color: aqua;
    font-weight: bold;
  }
`;

export const NavbarRightIcon = styled.div`
  cursor: pointer;
  display: none;
  flex-direction: column;

  span {
    height: 5px;
    width: 35px;
    background: #00adb5;
    margin: 3px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
