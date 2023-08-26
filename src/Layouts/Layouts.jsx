import React from 'react'
import Footer from './Footer/Footer';
import Header from './Header/Header';

function Layouts({ children }) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layouts;