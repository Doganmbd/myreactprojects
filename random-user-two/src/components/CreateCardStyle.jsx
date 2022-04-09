import styled from "styled-components";

export const CardContainer=styled.div`
    width:700px;
    margin:1rem auto;

`;

export const CardImage=styled.img`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    width: 100%;
    

`;

.flexbox button{
    width:150px;
    margin:1rem auto;
    display:block;
    background-color: #a0239e;
    border: none;
    color: rgb(255, 255, 255);
    padding: 1rem   ;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}



img{
    width:150px;
    height:150px;
    border-radius:50%;
    border:3px solid white;
    object-fit: cover;
    box-shadow: 0 0 4px 2px grey;
    padding: 5px;

}

.flexbox img {
    width: 50px;
    height: 50px;
    cursor: pointer;
    
}