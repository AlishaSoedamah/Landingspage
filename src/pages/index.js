import * as React from "react"
import '../styles/styles.scss'

// Import components
import Layout from '../components/Layout'
import Banner from '../components/banner'
import About from '../components/about'
import Product from '../components/product'

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

