import React from 'react'
import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import H1 from '../components/H1/H1'
import Button from '../components/Button/Button'
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

const IndexPage = () => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      <H1>Hello, people</H1>

      <Button width="250px" as={Link} to="/about">
        About page
      </Button>
    </StyledWrapper>
  </>
)

export default IndexPage
