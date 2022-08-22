import * as React from "react"
import '../styles/styles.scss'

//Import components
import Header from '../components/header'
import Banner from '../components/banner'
import Footer from '../components/footer'
import About from '../components/about'
import Product from '../components/product'

const IndexPage = () => (
  <div>
    <Header/>
    <Banner/>
    <Product/>
    <About/>
    <Footer/>
  </div>
)

export default IndexPage
