import styled from '@emotion/styled'
import { Facebook, Instagram, LinkedIn, LocationOn, Mail, Phone, Twitter } from '@mui/icons-material'
import React from 'react'


const Container=styled.div`
flex: 1;
display: flex;
flex-direction: row;
background-color: white;
`

const Left=styled.div`
flex: 1;
padding: 20px;
display: flex;
flex-direction: column;
padding:20px;

`
const Logo=styled.h1`
`
const Desc=styled.div`
margin: 20px 0px;
`
const SocialAccount=styled.div`
display:flex;
`
const Icons=styled.div`
width: 40px;
height: 40px;
border-radius: 70%;
background-color:#${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`


const Center=styled.div`
flex:1;
padding: 20px;


`
const Title=styled.h1`
margin-bottom:30px;

`
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem=styled.li`
width: 30%;
`
const Right=styled.div`
flex:1;
padding: 20px;
`

const ContactItem=styled.div`

`
const Payment=styled.img`
width: 50vh;
/* display: flex; */
align-content: center;

`
const Footer = () => {
  return (
    <Container>
<Left>
<Logo>shop</Logo>  
<Desc>Lorem, ipsum dolor sit amet consectetur 
    adipisicing elit. Ipsum beatae libero quasiiure 
    incidunt optio numquam corrupti temporibus nesciunt 
    quam.
    
    </Desc>
    <SocialAccount>
<Icons color='212db0'>
<Facebook />
</Icons>

<Icons color='c70e0e'>
<Instagram/>
</Icons>

<Icons color='03a2ad'>
<Twitter/>
</Icons>

<Icons color='0c3885'>
<LinkedIn/>
</Icons>
</SocialAccount>  
</Left>

<Center>
    <Title> usefull links </Title>
    <List>
        <ListItem>home </ListItem>
        <ListItem>man fashion</ListItem>
        <ListItem>accessories </ListItem>
        <ListItem>order tracking </ListItem>
        <ListItem>whishlist </ListItem>
        <ListItem>cart </ListItem>
        <ListItem>women fashion </ListItem>
        <ListItem>my account </ListItem>
        <ListItem>whishlist</ListItem>
        <ListItem>terms </ListItem>
    </List>
</Center>

<Right>
<Title>Contact</Title>
<ContactItem><LocationOn/>4/262 meenaver colony middle street poompuhar</ContactItem>

<ContactItem> <Phone/>help line number:+1 234 345 756</ContactItem>

<ContactItem><Mail/> contact@shop.com</ContactItem>
<Payment src="https://cdn.cssauthor.com/wp-content/uploads/2019/11/Vector-Credit-Card-Icons.jpg?strip=all&lossy=1&resize=1000%2C500&ssl=1g"/>
</Right>
</Container>
  )
}

export default Footer
