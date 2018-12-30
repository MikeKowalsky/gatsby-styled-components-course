import React from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import { colors } from '../utils/colors'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: white;
  }

  *, *::before, *:after {
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.dark};
  position: relative;
`

const H1 = styled.h1`
  font-size: ${({ isBig }) => (isBig ? '5em' : '3em')};
  color: ${({ isBlue }) => (isBlue ? 'blue' : 'white')};
`
// font-size: ${props => (props.isBig ? '5em' : '3em')}; //object destructuring

//another component - using all styles from H1 and something more
//we can even use isBig props on it
const BlueH1 = styled(H1)`
  color: blue;
`

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: white;
//   font-size: 2em;
//   font-weight: 700;
// `

// //only Button
// const Button = styled.button`
//   width: 200px;
//   height: 40px;
//   background: white;
//   border-radius: 50px;
//   border: none;
//   color: pink;
//   font-size: 1em;
//   font-weight: 800;
//   transition: box-shadow 0.3s ease;

//   :hover {
//     box-shadow: 0 10px 20px -15px red;
//   }
// `

// with Link
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: ${({ width }) => width};
  height: 40px;
  background: ${colors.primary};
  border-radius: 50px;
  border: none;
  color: ${colors.white};
  font-size: 1em;
  font-weight: 800;
  transition: box-shadow 0.3s ease;

  :hover {
    box-shadow: 0 10px 20px -15px red;
  }
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      {/* <H1 isBig={true}>Hi people</H1> */}
      <H1 isBig>Hi people</H1>

      {/* <H1 isBlue>Hi people</H1> // instead many props we can 
      // add some properties to particular component, in this case to H1 */}
      <BlueH1 isBig>Hi people</BlueH1>

      {/* <StyledLink>About page</StyledLink> */}

      <Button width="250px" as={Link} to="/about">
        About page
      </Button>
    </StyledWrapper>
  </>
)

export default IndexPage
