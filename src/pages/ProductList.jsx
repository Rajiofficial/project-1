import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoncement from '../components/Annoncement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container=styled.div`

`
const Title=styled.h1`
margin: 20px;
`
const FilterContainer=styled.div`
display:flex;
justify-content: space-between;
`
const Filter=styled.div`
margin: 22px;

`
const FilterText=styled.span`
  font-size: 20px;
  font-weight: 600;

`
const Select=styled.select`
  padding: 10px;
  margin: 20px;
  
  `
const Option=styled.option`
  
`
const ProductList = () => {
  return (
   <Container>
    <Navbar/>
    <Annoncement/>
    <Title>dresses</Title>
    <FilterContainer>
     <Filter><FilterText>Filter Product:</FilterText>
     <Select>
     <Option disabled selected>color</Option> 
      <Option>yellow</Option>    
      <Option>blue</Option> 
      <Option>red</Option>  
      <Option>green</Option> 
      </Select>
      <Select>
     <Option disabled selected>size</Option> 
      <Option>xl</Option>    
      <Option>s</Option> 
      <Option>m</Option>  
      <Option>l</Option> 
      <Option>xs</Option> 
      </Select>
      </Filter>
     <Filter><FilterText>Sort Product:</FilterText>
     <Select>
     <Option disabled selected>newest</Option> 
      <Option>Price(increse)</Option>    
      <Option>price(decrese)</Option> 
      </Select>
     </Filter>
    </FilterContainer>

    <Products/>
    <Newsletter/>
    <Footer/>
   </Container>
  )
}

export default ProductList
