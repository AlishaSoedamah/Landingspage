import * as React from "react"
import '../styles/styles.scss'

//Import components
import Header from '../components/header'
import Banner from '../components/banner'
import Footer from '../components/footer'
import About from './about'
import Product from './product'

const IndexPage = () => (
  <div>
    <Header/>
    <Banner/>
    <About/>
    <Product/>
    <Footer/>
  </div>
)

export default IndexPage
