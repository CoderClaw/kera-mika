import styled from 'styled-components'
import {azul,durazno,rosa} from "../variables"
import backDurazno from "../../assets/landing/keramika-durazno.png"

export const LandingContainer = styled.div`

background-image: url(${backDurazno});
background-size:100% 98%;
background-repeat:no-repeat;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media (max-width:600px) {
    height: 70vh;
}
`

export const Header = styled.header`
width:60%;
height:60px;
display:flex;
justify-content:space-between;
align-items:center;
position:absolute;
top:5vh;

& .logo{
    height: 100%;
    width: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
}

& .socials{
    height: 100%;
    width: 10%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

}
& .socials img{
    width: 30%;
    margin-bottom: 10%;
    &:hover{
    transform: scale(1.2);
    cursor: pointer;
}
}

@media (max-width:1000px){
    top:2vh;
    width:70%;
    
    & .socials{
        width: 80px;
        justify-content: center;
    }
    
    & .socials img{
    margin-left: 5%;
    }

    & .logo{
    position: relative;
    left: 5%;
    }
}

@media (max-width:600px){
    top:2vh;
    width:100%;
    
    & .socials{
        width: 80px;
        justify-content: left;
    }
    
    & .socials img{
    margin-left: 5%;
    }

    & .logo{
    position: relative;
    left: 20%;
    }
}


`
export const Logo = styled.img`
height:20vh;
`
export const Banner =styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
height:55vh;
width:60%;
background:whitesmoke;
box-shadow:2px 2px 8px #444444;
margin-top: 5vh;
font-family: "Merriweather",serif;
font-style: italic;
font-size: calc(5px + 1vw);
overflow: hidden;
transition: 0.3s;

@media (max-width:1000px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width:70%;
    position: relative;
}

@media (max-width:600px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width:70%;
    height: min-content;
}
`
export const BannerInfo = styled.div`
width:40%;
height:70%;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-left:5%;

@media (max-width:1000px) {
    width: 100%;
    margin-left:0%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

@media (max-width:600px){
    min-width: 80%;
    max-width: 80%;
    position: absolute;
    bottom: 2%;
    left: 5%;
    z-index: 99;
}
`
export const BannerInfoText = styled.div`
text-align:left;
height:80%;
font-size: 1em;
color: ${azul};
display: flex;
justify-content: space-between;
align-items: flex-start;
flex-direction: column;

& h1{
    font-size: 1.5em;
    @media (max-width:600px) {
        display: none;
    }
}

& p{
    @media (max-width:1000px) {
        display: none;
    }
}
@media (max-width:1000px) {
        justify-content: center;
        align-items: center;
    }
`
export const BannerInfoButton = styled.button`
min-width: max-content;
max-width: 50%;
height:1.8em;
border-radius:15px;
border-style:none;
background:${durazno};
font-family: "Merriweather",serif;
font-size: 1.2em;
font-weight: 600;
color: ${azul};

&:hover{
    box-shadow: 0px 0px 5px ${azul};
    cursor: pointer;
}


@media (max-width:1000px) {
    min-width: 30%;
    max-width: 30%;
    box-shadow: 0px 0px 5px ${azul};
    height:2em;
}

@media (max-width:600px){
    display: none;
}
`
export const BannerCarousel = styled.div`
margin-right: 5%;
width:40%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
transition: 0.3s;

@media (max-width:1000px) {
    width:auto;
    max-width: 80%;
    height: 80%;
    margin-right: 0%;
    margin-top: 2%;
}

@media (max-width:600px) {
    width: auto;
    max-width: 150%;
    height: 100%;
    margin-right: 0%;
    margin-top: 0%;
}
`
export const CarouselImages = styled.div`
height:90%;
overflow:hidden;
display: flex;
align-items: center;
position: relative;
transition: 0.3s;
@media (max-width:1000px) {
    height:100%;
}
`
export const Carousel = styled.div`
display:flex;
position:relative;
right:${p=>{if(p.position === 1){return "0%"}else if(p.position === 2){return "150%"}else{return"270%"}}};
`
export const CarouselImg = styled.img`
width:130%;
height:auto;
`
export const PointerCarousel = styled.div`
position: absolute;
display:flex;
justify-content:space-around;
align-items: center;
width:14%;
bottom:10%;
left: 43%;
`
export const LeftPointer = styled.div`
height:${p=> p.position===1 ? "8px" : "5px"};
opacity: ${p=> p.position===1 ? 1 : 0.6};
aspect-ratio:1/1;
border-radius:5px;
background:white;
`
export const MiddlePointer = styled.div`
height:${p=> p.position===2 ? "8px" : "5px"};
opacity: ${p=> p.position===2 ? 1 : 0.6};
aspect-ratio:1/1;
border-radius:5px;
background:white;
`
export const RightPointer = styled.div`
height:${p=> p.position===3 ? "8px" : "5px"};
opacity: ${p=> p.position===3 ? 1 : 0.6};
aspect-ratio:1/1;
border-radius:5px;
background:white;
`
export const Discount = styled.div`
font-family: lora, serif;
background:${azul};
color:${rosa};
width:60%;
margin-top:15px;
height:13%;
display:flex;
justify-content:flex-start; 
align-items:center;
box-shadow:2px 2px 8px #444444;
font-size: calc(10px + 1vw);

&:hover{
    transform:scale(1.01); 
    cursor: pointer;
}

& div {
    width:20%;
    height: 90%;
    border-right:1px solid ${rosa};
    display: flex;
    align-items: center;
}
& div p {
    color: ${durazno};
    font-size: 1.1em;
    text-align: center;
    font-style: italic;
}

@media (max-width:1000px) {
    width: 70%;

    & div p {
        font-size: 1em;
    }
}
@media (max-width:600px) {
    width: 70%;

    & div {
    width:40%;
}

    & div p {
        font-size: 0.6em;
    }
}
`
export const NumberDiscount = styled.p`
font-size:2em;
margin-left:10%;
`
export const TextDiscount = styled.p`
font-size:1.2em;
margin-left:0.5em;
`
