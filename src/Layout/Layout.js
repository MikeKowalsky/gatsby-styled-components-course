import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../utils/theme'

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
// props of theme-provider are available for every child
// so we can take colors from them
// works like ContextAPI
const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark};
  position: relative;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    {/* theme-provider can have only one child element */}
    <>
      <GlobalStyle />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  </ThemeProvider>
)

export default Layout
