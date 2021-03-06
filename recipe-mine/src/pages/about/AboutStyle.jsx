import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: auto;
  margin: auto;
  background-color: rgba(50, 150, 200, 0.5);
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
  line-height: 2;

  span {
    color: white;
    font-family: "Girassol", cursive;
    font-size: 3rem;
    font-style: italic;
  }
`;

export const SvgImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-top: 50px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
`;

export const InfoContainer = styled.div`
  flex-wrap: wrap;
  border: 1px solid white;
  text-align: left;
  margin: auto;
  text-indent: 2rem;
  padding: 0 1rem;

  a {
    font-size: 20px;
    text-decoration: none;
    color: blue;
    font-weight: bold;
  }
  span {
    font-size: 20px;
    font-weight: bold;
  }
`;
