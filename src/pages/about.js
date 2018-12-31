import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Button from '../components/Button/Button'
import Layout from '../Layout/Layout'

const data = [
  {
    title: 'Hello Mike',
  },
  {
    title: 'Hello Jack',
    ad: 'lorem ipsum dolor sit amet',
  },
  {
    title: 'Hello Kate',
  },
  {
    title: 'Hello Tom',
    ad: 'lorem ipsum dolor sit amet',
  },
]

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const StyledH2 = styled.h2`
  font-size: 2em;
  text-align: center;
  color: white;
  grid-column-start: ${({ order }) => (order % 2 === 0 ? '2' : '1')};
`

const StyledAd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: aqua;
  border-radius: 10px;
  height: 80%;
  width: 80%;
  color: black;
`

const AboutPage = () => (
  <Layout>
    <h1>Hello people, this is about page</h1>
    <Button as={Link} to="/">
      Go back
    </Button>
    <StyledWrapper>
      {data.map((item, i) => (
        <>
          <StyledH2 order={i}>{item.title}</StyledH2>
          {/* below conditional rendering in map!!! */}
          {item.ad && <StyledAd>{item.ad}</StyledAd>}
        </>
      ))}
    </StyledWrapper>
  </Layout>
)

export default AboutPage
