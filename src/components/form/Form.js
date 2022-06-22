import React from 'react'
import * as S from "./styled-form"

function Form() {
  return (
    <S.FormContainer className='formContainer'>
        <S.Form onSumbit="">
          <label for="name">
            <input 
                type="text"
                name='name'
                placeholder='Name'
                />&nbsp;&nbsp;(*)</label>
            <label for="email">    
            <input
            name='email' 
            type="email"
            placeholder='Email'
            />&nbsp;&nbsp;(*)</label>
            <label for="message" className='message'>
            <textarea 
                name="message" 
                id="message" 
                cols="30" 
                rows="10"
                placeholder='Déjanos tu mensaje...'
                ></textarea>&nbsp;&nbsp;(*)</label>
                <button type='submit'>Submit</button>
        </S.Form>
    </S.FormContainer>
  )
}

export default Form