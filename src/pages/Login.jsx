import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const Container=styled.div`
width: 230vh;
height: 100vh;
background-repeat:no-repeat ;
background-size: cover;
background-image: url("https://as2.ftcdn.net/v2/jpg/05/17/72/25/1000_F_517722538_IqHgYk5NIf3nWhf6f3N0Cn0zqpW1k6gf.jpg");
display: flex;
align-items: center;
justify-content: center;


`
const Wrapper=styled.div`
    width: 200px;
    padding: 20px;
    background-color: yellow;
    margin-right: 500px;
`
const Title=styled.h1`
    font-size: 30px;
`
const Form=styled.form`
    display: flex;
    flex-direction: column;
`
const Input=styled.input`
 flex   :1 ;
 min-width: 60px;
 margin: 10px 10px 10px 0px;
`

const Button=styled.button`
background-color: green;
cursor: pointer;
width: 60px;
`

const Link=styled.a`
    margin: 5px;
    text-decoration: underline;
    cursor: pointer;
    &:hover{
        color: red;
    }
`
const Login = () => {

  return (
    <Container>
    <Wrapper>
        
        <Title>sign in</Title>
            <Form>
                <Input placeholder="user name"/>
                <Input placeholder="password"/>
              <Button>log in</Button>
              <Link>DO NOT REMEMBER THE PASSWORD</Link>
              <NavLink to="register">CREATE NEW ACCOUNT</NavLink>
            </Form>
        
    </Wrapper>
</Container>

  )
}

export default Login
