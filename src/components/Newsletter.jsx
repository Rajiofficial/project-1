import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title=styled.h1`
font-size: 80px;
margin-bottom: 30px;
`
const Discription=styled.div`
font-size: 20px;
font-weight: 300;
color: maroon;
margin-bottom: 20px;
`
const InputContainer=styled.div`
background-color: white;
width: 300px;
height: 30px;
display: flex;
justify-content: space-between;
border: 1px solid blue;
`
const Button=styled.button`
border: none;
background-color: purple;
`
const Input=styled.input`
border: none;
flex: 8;
padding-left: 20px;
`


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Discription>timely update your product</Discription>
        <InputContainer>
        <Input placeholder='email'/>
        <Button>
        <Send/>
        </Button>
        
        </InputContainer>

    </Container>
  )
}

export default Newsletter
