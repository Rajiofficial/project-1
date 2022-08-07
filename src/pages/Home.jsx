import React from 'react'
import Annoncement from '../components/Annoncement'
import Categories  from '../components/Categories'
import Navbar from '../components/Navbar'
import  Slider  from '../components/slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from 'styled-components'
// import ProductList from './ProductList'

const Container=styled.div`

`
const Home = () => {
  return (
    <Container>
    <Annoncement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>

      </Container>
      
    
  )
}

export default Home
