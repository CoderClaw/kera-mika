import styled from "styled-components"
import {azul} from "../variables"

export const ProdContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5%;
    
` 
export const Title = styled.h3`
    color: ${azul};
    font-family: "Merryweather", serif;
    font-style: italic;
    font-size: calc(16px + 1vw);
    width: 60%;
    padding-left: 5%;

    @media (max-width:1000px){
        width: 80%;
    }
`
export const Products = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width:60%;

    @media (max-width:1000px){
        width: 80%;
    }
`
export const Product = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 40vh;
    width: 100%;
    margin-top: 20px;

    &:hover{
        cursor: pointer;
    }

    @media (max-width:600px){
        position: relative;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        height: 30vh;
        width: auto;
        aspect-ratio: 1/1;
        &.flip{
            transform: rotateY(180deg);
        }
    }
`
export const ProductImg = styled.div`
    height: 100%;
    aspect-ratio: 1/ 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    box-shadow: 5px 5px 10px #995544;
    z-index: 99;
    

    & img{
        height: 100%;        
    }

    @media (max-width:600px){
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }
`
export const ProductInfo = styled.div`
    height: 80%;
    width: 60%;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    & p{
        width: 90%;
    }
    
    @media (max-width:600px){
        position: absolute;
        width: 100%;
        height: 100%;
        transform: rotateY(180deg);
        box-shadow: 5px 5px 10px #995544;
    }
`