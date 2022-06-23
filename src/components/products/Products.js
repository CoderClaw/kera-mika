import React, {useEffect, useRef} from 'react'
import * as S from "./styled-products"

function Products() {

    const prod1 = useRef()
    const prod2 = useRef()
    const prod3 = useRef()

    useEffect(()=>{

        prod1.current.addEventListener("click",()=>{
            prod1.current.classList.toggle("flip")  
        })
        prod2.current.addEventListener("click",()=>{
            prod2.current.classList.toggle("flip")
        })
        prod3.current.addEventListener("click",()=>{
            prod3.current.classList.toggle("flip")
        })

    },[])


  return (
    <S.ProdContainer className="ProductsContainer">
        <S.Title className='title'>Nuestros Productos</S.Title>
        <S.Products className="products">
            <S.Product className='product' ref={prod1}>
                <S.ProductImg className='productImg'>
                    <img src="https://img.freepik.com/foto-gratis/foto-cerca-tetera-azul-hecha-mano-estudio-ceramica-aislado_574295-1057.jpg?t=st=1655474449~exp=1655475049~hmac=7e6d2456beee568bfa5489efc99e7f5b2672a9b3b09e2cb7ce6b19fb8353929f&w=900" alt="lol" />
                </S.ProductImg>
                <S.ProductInfo className='productDescription'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, possimus!</p>
                </S.ProductInfo>
            </S.Product>

            <S.Product className='product' ref={prod2}>
                <S.ProductImg className='productImg'>
                    <img src="https://img.freepik.com/foto-gratis/foto-cerca-tetera-azul-hecha-mano-estudio-ceramica-aislado_574295-1057.jpg?t=st=1655474449~exp=1655475049~hmac=7e6d2456beee568bfa5489efc99e7f5b2672a9b3b09e2cb7ce6b19fb8353929f&w=900" alt="lol" />
                </S.ProductImg>
                <S.ProductInfo className='productDescription'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, possimus!</p>
                </S.ProductInfo>
            </S.Product>

            <S.Product className='product' ref={prod3}>
                <S.ProductImg className='productImg'>
                    <img src="https://img.freepik.com/foto-gratis/foto-cerca-tetera-azul-hecha-mano-estudio-ceramica-aislado_574295-1057.jpg?t=st=1655474449~exp=1655475049~hmac=7e6d2456beee568bfa5489efc99e7f5b2672a9b3b09e2cb7ce6b19fb8353929f&w=900" alt="lol" />
                </S.ProductImg>
                <S.ProductInfo className='productDescription'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, possimus!</p>
                </S.ProductInfo>
            </S.Product>
            
        </S.Products>
    </S.ProdContainer>
  )
}

export default Products