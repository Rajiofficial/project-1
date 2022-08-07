import React from 'react'
import styled from 'styled-components'


const Container=styled.div`
width: 230vh;
height: 100vh;
background-repeat:no-repeat ;
background-size: cover;
background-image: url("https://as1.ftcdn.net/v2/jpg/02/95/45/50/1000_F_295455087_9xhbFyFVp2YAQ90G2rNN1p45EmLQ34y3.jpg");
display: flex;
align-items: center;
justify-content: center;
@media screen and(max-width:375px){

}
`
const Wrapper=styled.div`
    width: 200px;
    padding: 20px;
    background-color: purple;
    margin-right: 500px;
`
const Title=styled.h1`
    font-size: 30px;
`
const Form=styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input=styled.input`
 flex   :1 ;
 min-width: 60px;
 margin: 10px 10px 10px 0px;
`
const Agrement=styled.span`
font-size: 20px;
`
const Button=styled.button`
background-color: green;
cursor: pointer;
`
const Register = () => {
  return (
    <Container>
        <Wrapper>
            
            <Title>create account</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="user name"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="comfirm password"/>
                  <Agrement>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptates similique animi fugiat,
                     doloremque hic expedita quidem ex voluptas labore dolore nesciunt sunt tempore id corrupti maxime 
                     h
                  </Agrement>
                  <Button>create</Button>
                </Form>
            
        </Wrapper>
    </Container>
  )
}

export default Register
