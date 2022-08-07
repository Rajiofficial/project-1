import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
    height:30px;
    background-color: #405e5e;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 500;
    position: sticky;
        /* z-index: 999; */
        top: 0px;
    
`
const Annoncement = () => {
  return (
   <Container>
    super deal
   </Container>
  )
}

export default Annoncement
