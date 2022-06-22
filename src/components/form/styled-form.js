import styled from "styled-components"
import {azul,durazno} from "../variables"
import backAzul from "../../assets/landing/keramika-azul.png"


export const FormContainer = styled.div`

    background-image: url(${backAzul});
    background-size:100% 102%;
    background-repeat:no-repeat;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

export const Form = styled.form`
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    font-size: calc(10px + 1vw);


    & label{
        display: flex;
        width: 100%;
        margin-bottom: 6%;
        color: ${durazno};
    }

    

    & input{
        padding-left: 5%;
        height: 2em;
        width: 100%;
        border-style:none;
        font-family: "Merryweather", serif;
        font-style: italic;
        font-weight: 800;
        font-size: 1em;
        &:focus{
        border-style: none;
        box-shadow: 2px 2px 8px #05092a;
    }
    }
    & .message{
        height: 40vh;
    }

    & textarea{
        width: 100%;
        height:100%;
        font-family: "Merryweather", serif;
        font-style: italic;
        font-weight: 800;
        font-size: 1em;
        text-align: center;
        padding-top: 10%;
        margin-bottom: 5%;
        resize: none;
        box-shadow: 2px 2px 8px #05092a;
    }
    
    & button{
        width: 20%;
        height:2em;
        border-radius:20px;
        border-style:none;
        background:${durazno};
        font-family: "Merriweather",serif;
        font-size: 0.8em;
        font-style:italic;
        font-weight: 800;
        color: ${azul};
    }

    @media (max-width:1000px){
        width: 60%;

        & button{
            width: 40%;
            font-size: 1em;
        }
    }

    @media (max-width:500px){
        width: 80%;

        & button{
            width: 50%;
            font-size: 1.2em;
        }
    }
`