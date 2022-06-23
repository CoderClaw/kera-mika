import React from 'react'
import logoImg from "../../assets/landing/logo.png"
import facebookIcon from "../../assets/landing/facebook-icon.png"
import instaIcon from "../../assets/landing/insta-icon.png"
import { useState, useEffect } from 'react'
import * as S from "./styled-landing"


function Landing() {

    const [image, setImage] = useState(1)
    
    useEffect(()=>{
        
    },[])
    
  return (
    <S.LandingContainer className="landingContainer">
        <S.Header>
            <div className='logo'><S.Logo src={logoImg} alt="logo"/></div>
            <div className="socials">
                <img className="facebook" src={facebookIcon} alt="facebook"/>
                <img className="instagram" src={instaIcon} alt="instagram"/>
            </div>
        </S.Header>
        <S.Banner className='banner'>
            <S.BannerInfo className='bannerInfo'>
                <S.BannerInfoText>
                    <h1>Ceramicas Artesanales</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil omnis at voluptatem quisquam quod nobis error beatae voluptates illum pariatur delectus debitis, tempora hic. Inventore laudantium cumque adipisci molestias iste.</p>
                </S.BannerInfoText>
                <S.BannerInfoButton>contact us</S.BannerInfoButton>
            </S.BannerInfo>
            <S.BannerCarousel className='bannerCarousel'>
                <S.CarouselImages className='carouselImages'>
                    <S.Carousel position={image}>
                    <S.CarouselImg src="https://img.freepik.com/foto-gratis/talla-mano-mujer-tazon-pintura_23-2148155240.jpg?t=st=1655474242~exp=1655474842~hmac=e54e02e449ecd876d496ce8a2671bf6bfe79d960824f9aaa9b7c855c6d20a07d&w=900" alt="lol" />
                    <S.CarouselImg src="https://img.freepik.com/foto-gratis/modelado-alta-vista-arcilla-torno-alfarero_23-2148679108.jpg?w=900&t=st=1655474330~exp=1655474930~hmac=e61cdd8aef0691ceb6dd7159fa0617bc77448d827c19c66170570d6fc7a54eaf" alt="lol" />
                    <S.CarouselImg src="https://img.freepik.com/foto-gratis/persona-que-trabaja-taller-alfareria_23-2148970761.jpg?w=900&t=st=1655474354~exp=1655474954~hmac=af5c4773391d3a1c0cd76525eb8d6940da51132e01d0475f34a73f4c1b3f3180" alt="lol" />                 
                    </S.Carousel>
                    <S.PointerCarousel className='pointerCarousel'>
                        <S.LeftPointer position={image} className="leftPointer"> </S.LeftPointer>
                        <S.MiddlePointer position={image} className="middlePointer"> </S.MiddlePointer>
                        <S.RightPointer position={image} className="rightPointer"> </S.RightPointer>
                    </S.PointerCarousel>                
                </S.CarouselImages>
            </S.BannerCarousel>
        </S.Banner>
        <S.Discount className='discount'>
            <div><p>ONLINE SHOPPING</p></div>
            <S.NumberDiscount>50%</S.NumberDiscount>
            <S.TextDiscount>Lorem ipsum dolor sit amet.</S.TextDiscount>
        </S.Discount>
    </S.LandingContainer>
  )
}



export default Landing