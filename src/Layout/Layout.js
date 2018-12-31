import React from 'react'
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

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <StyledWrapper>{children}</StyledWrapper>
  </>
)

export default Layout
