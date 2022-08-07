import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Annoncement from '../components/Annoncement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'


const Container=styled.div`
flex: 1;
`
const Wrapper=styled.div`
    padding: 20px;
    display: flex;
`
const ImgContainer=styled.div`
    
`
const Img=styled.img`
    object-fit: cover;
    height: 90vh;
    
`
const InfoContainer=styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title=styled.h1`
font-weight: 200;
`
const Desc=styled.p`
    margin:20px 0px;
`
const Price=styled.span`
    font-size:40px;
`
const FilterContainer=styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`
const Filter=styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle=styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 10px;
`

const FilterSize=styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption=styled.option`

`
const AddContainer=styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`
const AmountContainer=styled.div`
display: flex;
align-items: center;
font-weight:600;
`
const Amount=styled.span`
width: 20px;
height: 20px;
border: 1px solid black;
border-radius: 10px;
display: flex;
align-content: center;
justify-content: center;


`
const Box=styled.button`
 width:25px;
 height: 20px;
 align-items: center;
 display: flex;
 justify-content: center;
cursor: pointer;     
`
const Button=styled.button`
padding: 10px;
border-radius: 50px;
border:2px solid yellow;
cursor: pointer;
font-weight:500 ;
&:hover{
    background-color: pink;
    transform: scale(1.1);

}

`





const Product = () => {
  return (
  <Container>
<Navbar/>
<Annoncement/>
<Wrapper>
<ImgContainer>
        <Img src="https://cdn.shopify.com/s/files/1/2578/0910/products/Long-Slim-Girl-Sports-Pant-Teenager-Sports-Track-Pants-Letter-Print-Sports-Trousers-for-Girls-Kids_1024x1024.jpg?v=1576768841"/>
</ImgContainer>
<InfoContainer>
          <Title>pant</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Tempora libero vero, animi reprehenderit quo cupiditate 
             voluptate omnis ipsa fugit et molestias necessitatibus 
            eligendi explicabo facilis doloribus quam? Inventore,
             repellendus numquam.
          </Desc>
          <Price>RS-500 </Price>
        <FilterContainer>
            <Filter>
                <FilterTitle >color</FilterTitle>
               <FilterColor color="black"/>
               <FilterColor color="blue"/>
               <FilterColor color="gray"/>

            </Filter>
                     <Filter>
                        <FilterTitle>size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>x</FilterSizeOption>
                            <FilterSizeOption>s</FilterSizeOption>
                            <FilterSizeOption>m</FilterSizeOption>
                            <FilterSizeOption>l</FilterSizeOption>
                            <FilterSizeOption>xl</FilterSizeOption>
                            <FilterSizeOption>xxl</FilterSizeOption>
                        </FilterSize>
                        </Filter>  
                     
     </FilterContainer>  

     <AddContainer>
        <AmountContainer>
           <Box> <Add/></Box> 
            <Amount>1</Amount>
            <Box> <Remove/></Box> 

        </AmountContainer>
        <Button>add to cart</Button>
     </AddContainer>
</InfoContainer>
</Wrapper>
<Newsletter/>
<Footer/>
  </Container>
  )
}

export default Product
