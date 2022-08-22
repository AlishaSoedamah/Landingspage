import React from 'react'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
    return (
    <div className="lay">
        <Header/>
        <div className="content">
            { children}
        </div>
        <Footer/>
    </div>
    )
}