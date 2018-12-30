import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

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
  justify-content: center;
  align-items: center;
  background: pink;
  position: relative;
`

const H1 = styled.h1`
  font-size: ${({ isBig }) => (isBig ? '5em' : '3em')};
`
// font-size: ${props => (props.isBig ? '5em' : '3em')};

const IndexPage = () => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      <H1 isBig>Hi people</H1>
    </StyledWrapper>
  </>
)

export default IndexPage
