import React, { Component } from 'react'
import posed from 'react-pose'
import styled from 'styled-components'
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

const PosedH2 = posed.h2({
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: '-150%',
    opacity: 0,
  },
})

const StyledH2 = styled(PosedH2)`
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

class AboutPage extends Component {
  state = {
    visible: false,
  }

  toggleHeaders = () => {
    this.setState(prevState => ({ visible: !prevState.visible }))
  }

  render() {
    return (
      <Layout>
        <h1>{this.state.visible ? 'visible' : 'hidden'}</h1>
        <Button onClick={this.toggleHeaders}>Toggle</Button>
        <StyledWrapper>
          {data.map((item, i) => (
            <React.Fragment key={item.title}>
              <StyledH2
                order={i}
                pose={this.state.visible ? 'visible' : 'hidden'}
              >
                {item.title}
              </StyledH2>
              {/* below conditional rendering in map!!! */}
              {item.ad && <StyledAd>{item.ad}</StyledAd>}
            </React.Fragment>
          ))}
        </StyledWrapper>
      </Layout>
    )
  }
}

export default AboutPage
