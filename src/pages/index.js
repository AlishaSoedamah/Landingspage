import * as React from "react"
import '../styles/styles.scss'

// Import components
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/About'
import Product from '../components/Product'

const IndexPage = () => (
  <div>
    <Layout>
      <Banner/>
      <Product/>
      <About/>
    </Layout>
  </div>
)

export default IndexPage

