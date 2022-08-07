
  
  import React,{useState} from 'react'
  import styled from 'styled-components'
  import {sliderItems} from '../data'
  
  import{ArrowRightOutlined,ArrowLeftOutlined} from '@mui/icons-material'
  const Container=styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  @media screen and(min-width:500px){
  
  }
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
  transform: translateX(${props=>props.slideIndex*-100}vw);
  `
  const Slide=styled.div`
      display: flex;
      align-items: center;
      width: 100vw;
      height: 100%;
      background-color:#${props=>props.bg} ;
  
  `
  const ImgContainer=styled.div`
      flex: 1;
      height: 100%;
  `
  const Image=styled.img`
      height:100%;
      width: 100%;
     
  `
  const InfoContainer=styled.div`
      flex: 1;
      padding: 20px;

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
  background-color:#99c9c3;
  background-position: 20px;
  border-radius:40px;
  width: 200px;
  height: 40px;
  color:maroon;
  font-weight: bold;
  align-content: center;
  margin-top: 120px;
  margin-right: 30px;
  :hover{
    color:#d676ab;
    position: static;
    box-shadow:8px 10px 15px 8px rgba(12,34,22,31);
    position: relative;
    cursor: pointer;
    }
  `
  
   const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };
    return (
      <Container>
          <Arrow direction="left" onClick={()=>handleClick("left")}>
          <ArrowLeftOutlined/>
          </Arrow>
        
          <Wrapper slideIndex={slideIndex}>
              {sliderItems.map((item)=>(
  
              <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
            <Image src={item.image}/>
                        </ImgContainer>
              <InfoContainer>
  
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Button>shop now</Button>
              </InfoContainer>
              </Slide>
           ))}
            
          </Wrapper>
         
          <Arrow direction="right" onClick={()=>handleClick("right")}>
          < ArrowRightOutlined/>
          </Arrow>
  
      </Container>
    )
  }
  
  
  export default Slider;