import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/Button/Button'
import Layout from '../Layout/Layout'

const AboutPage = () => (
  <Layout>
    <h1>Hello people, this is about page</h1>
    <Button as={Link} to="/">
      Go back
    </Button>
  </Layout>
)

export default AboutPage
