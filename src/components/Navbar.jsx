import { Badge } from "@mui/material"
import{Search,ShoppingCartOutlined
}from "@mui/icons-material"
import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

import {mobile} from '../Responsive'
const Container= styled.div`
        height: 60px;
        padding-bottom: 55px;
        background-color:#a8a4a3;
        position: sticky;
        z-index: 999;
        top: 0px;
        ${mobile()}
   `


        const Wrapper=styled.div`
              padding: 10px 20px;
              display: flex;
              justify-content: space-between;
              ${mobile({padding:'15px 0px'})}            
              `
          
     const Left=styled.div`
  
      margin-top: 10px;
      display: flex;
      align-items: center;
      padding-bottom: 80px;
      flex-direction: column;

     `       
     
     const Language=styled.span`
      font-size: 14px;
      cursor: pointer;
      ${mobile({marginright:'10px'})}
     `
     const SearchContainer=styled.div`
      border: 0.5px solid lightgray;
      display: flex;
      align-items: center;
      margin-left:25px;
      padding: 5px;
     `
     const Input=styled.input`
      border: none;
      
      ${mobile({width:'50px'})}
     `
       const Center=styled.div`
       flex: 1; 
       text-align:center;
       padding-bottom:80px;
       ${mobile()}
      `  
       const Logo=styled.h1`
       font-weight: bold;
       color: blue;
       ${mobile()}
       `
      const Right=styled.div `
       flex: 1;
       display: flex;
       justify-content: flex-end;
       ${mobile()}
      `  
      const MenuItem=styled.div`
      font-size: 14px;
      cursor:pointer;
      margin-left:25px;
      ${mobile()}
      `
const Nav=styled.div`
margin: 10px;
padding-left:10px;
display: flex;
justify-items: center;
gap: 15px;
${mobile()}
`
const Navbar = () => {
  return (
  
   
  <Container>
    <Wrapper> 
  <Left>  

        <SearchContainer>
        <Language>search</Language>
          <Input/>
      <Search/>
        </SearchContainer>
        <Nav>
        <NavLink to="/home">home</NavLink>
    <NavLink to="/cart">cart</NavLink>
     <NavLink to="/slider">slider</NavLink>
    <NavLink to="/productlist">productlist</NavLink>
    <NavLink to="/register">register</NavLink>
    <NavLink to="/login">login</NavLink>
    </Nav>
 </Left>

  <Center>
       <Logo>shop</Logo>
 </Center>

  <Right>
      <MenuItem>REGISTER</MenuItem> 
        <MenuItem>SIGNIN</MenuItem> 
        <MenuItem><Badge badgeContent={5}><ShoppingCartOutlined/></Badge></MenuItem>          
  </Right>
    </Wrapper>
  </Container>

  )
}


export default Navbar