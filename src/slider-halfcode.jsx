



import React from 'react'
import styled from 'styled-components'
import{ArrowRightOutlined,ArrowLeftOutlined} from '@mui/icons-material'
const Container=styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color:white;
padding-bottom: 60px;
`
const Arrow=styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50px;
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=>props.direction==="left"&&"10px"};
    right: ${props=>props.direction==="right"&&"10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.6;
`
const Wrapper=styled.div`
height: 100%;
display: flex;
transform: translateX(-100hv);
`
const Slide=styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100%;

`
const ImgContainer=styled.div`
    flex: 1;
    height: 100vh;
`
const Image=styled.img`
    height:80%;
   
`
const InfoContainer=styled.div`
    flex: 1;
    padding: 20px;
    display:flex;
    align-items: baseline;
    background-color: red;
    height: 74vh;
    margin-bottom: 130px;
`


const Title=styled.h1`
    font-size: 70px;
`
const Desc=styled.p`
margin:50px;
font-size: 20px;
font-weight:500;

`
const Button=styled.button`
margin-top: 200px;
background-color: green;
background-position: 20px;
border-radius:40px;
width: 100px;
`


export const Slider = () => {

    const handleClick=(direction)=>{

    }
  return (

<Container>
<Arrow direction="left">
<ArrowLeftOutlined/>
</Arrow>
<Wrapper>
    <Slide>
    <ImgContainer>
  <Image src="https://images.ctfassets.net/rxqefefl3t5b/6I2vL9f0IVsDQ8qFgdrxH7/7660c4bab3116a4a04025d5c4802efa5/Virgin-Red-online-shopping-offers.jpg?fl=progressive&q=80"/>        
    </ImgContainer>
    <InfoContainer>

        <Title>aadi sale</Title>
        <Desc>get flat 30% offer</Desc>
        <Button>buy now</Button>
    </InfoContainer>
    </Slide>
    <Slide>
    <ImgContainer>
  <Image src="https://images.ctfassets.net/rxqefefl3t5b/6I2vL9f0IVsDQ8qFgdrxH7/7660c4bab3116a4a04025d5c4802efa5/Virgin-Red-online-shopping-offers.jpg?fl=progressive&q=80"/>        
    </ImgContainer>
    <InfoContainer>

        <Title>winter sale</Title>
        <Desc>get flat 30% offer</Desc>
        <Button>buy now</Button>
    </InfoContainer>
    </Slide>
</Wrapper>

<Arrow direction="right">
< ArrowRightOutlined/>
</Arrow>

</Container>
  )}
  export default Slider;

