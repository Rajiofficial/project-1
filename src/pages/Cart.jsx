
import React,{useState} from 'react'
import styled from 'styled-components'
import Annoncement from '../components/Annoncement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container=styled.div`
`
const Wrapper=styled.div`
padding: 20px;
`
const Title=styled.h1`
font-weight: 300;
text-align:center;
`
const Top=styled.div`
display: flex;
/* align-items: center; */
justify-content: space-between;
padding: 20px;
`
const TopButton=styled.button`
cursor: pointer;
padding: 20px;
`
const TopTexts=styled.div`
    
`
const TopText=styled.span`
    text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`
const Button=styled.button`
`
const Bottom=styled.div`
display: flex;
justify-content: space-between;
`
const Info=styled.div`
display: flex;
flex-direction: column;
`
const Product=styled.div`
  display: flex;  
  justify-content: space-between;
  margin-right: 40px;
  
`
const ProductDetails=styled.div`
    
    display: flex;
    flex-direction: column;

`
const ProductDetailsOne=styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 100px;

`
const ProductDetailsTwo=styled.div`
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    margin-left: 100px;
`

const Image=styled.img`
  
    width: 50vh;
    height: 50vh;
`
const Details=styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    padding-bottom: 30px;
    justify-content: space-around;
`
const ProductName=styled.span`
    
`
const FilterContainer=styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`
const ProductId=styled.div`
    
`
const ProductColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
  margin: 10px;
`


const Filter=styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle=styled.span`
    font-size: 20px;
    font-weight: 200;
`


const FilterSize=styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption=styled.option`

`
const ProductAmountContainer=styled.span`
 /* display   :flex ; */
 align-items: center;
`
const ProductAmount=styled.span`
    margin: 10px;

`
const ProductPrice=styled.span`
    
`

const Add=styled.button`

`
const Remove=styled.button`

`







const Cart = () => {
  const [val,setval]=useState(0)
const increase=()=>{
  if(val>0){
    setval(val-1)
  }else{
    alert("sorry 0 limit reached")
    setval(0)
  }
}

const decrement=()=>setval(val-1)

  return (
    <Container>
        <Navbar/>
        <Annoncement/>
        <Wrapper>
            <Title>all items</Title>
            
            <Top>

            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>shapping bag(3)</TopText>
                <TopText>your wishlist</TopText>
            </TopTexts>
            
            <Button>CHECKOUT NOW</Button>
            </Top>
            <Bottom>
               <Info>
                <Product>
                    <ProductDetails>
                      <Image src="./images/nike-shoes-removebg-preview.png"/>
                      <Details>
                        <ProductName><b>product:</b>shoe</ProductName>
                        <ProductId><b>id:</b>845631053</ProductId>
                        <FilterContainer>  
                        <ProductColor color='blue'/>
                        <ProductColor color='yellow'/>
                        <ProductColor color='orange'/>
                        </FilterContainer> 
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
                   <ProductAmountContainer>
                      <Add onClick={increase}>+</Add>
                      <ProductAmount>{val}</ProductAmount>
                      <Remove onClick={decrement}>-</Remove>
                      <ProductPrice className='amount'>Rs:600</ProductPrice>
                    </ProductAmountContainer>
                        </Details>  
                    </ProductDetails>

          <ProductDetailsOne>
                    <ProductDetails>
                      <Image src="./images/t-shirt-removebg-preview.png"/>
                       
                      <Details>
                        <ProductName><b>product:</b>t-shirt</ProductName>
                        <ProductId><b>id:</b>84563477853</ProductId>
                        <FilterContainer>  
                        <ProductColor color='blue'/>
                        <ProductColor color='yellow'/>
                        <ProductColor color='orange'/>
                        </FilterContainer> 
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
                   <ProductAmountContainer>
                      <Add onClick={increase}>+</Add>
                      <ProductAmount>{val}</ProductAmount>
                      <Remove onClick={decrement}>-</Remove>
                      <ProductPrice className='amount'>Rs:600</ProductPrice>
                    </ProductAmountContainer>
                        </Details>  
                    </ProductDetails>
                    
      </ProductDetailsOne>

            <ProductDetailsTwo>
            <ProductDetails>
                      <Image src="./images/watche-removebg-preview.png"/>
                      <Details>
                        <ProductName><b>product:</b>watch</ProductName>
                        <ProductId><b>id:</b>845631053</ProductId>
                        <FilterContainer>  
                        <ProductColor color='blue'/>
                        <ProductColor color='yellow'/>
                        <ProductColor color='orange'/>
                        </FilterContainer> 
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
                   <ProductAmountContainer>
                      <Add onClick={increase}>+</Add>
                      <ProductAmount>{val}</ProductAmount>
                      <Remove onClick={decrement}>-</Remove>
                      <ProductPrice className='amount'>Rs:600</ProductPrice>
                    </ProductAmountContainer>
                        </Details>  
                    </ProductDetails>
            </ProductDetailsTwo>

            
                </Product>
               </Info>
               
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
