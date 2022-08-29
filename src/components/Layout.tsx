import React, {ReactNode} from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
    children: ReactNode
}

export default function Layout({ children }: Props) {
    return (
    <div className="main-layout">
        <Header/>
        <div className="content">
            { children }
        </div>
        <Footer/>
    </div>
    )
}