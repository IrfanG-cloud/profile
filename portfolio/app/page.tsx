
import React from 'react'
import Header from './components/header'
import Carousel from './components/carousel'
import PortfolioArea from './components/portArea'
import Footer from './components/footer'
import ContactUs from './components/contact'
import Portfolio from './components/portfolio'


export default function Home() {
  return (
    <>
    <Header />
    <Carousel />
    <PortfolioArea />
    <Portfolio />
    <ContactUs />
    <Footer />
    </>
  )
}
