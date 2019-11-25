import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SEO from '../utils/Seo';
import GlobalStyle from '../utils/GlobalStyle';
import Footer from '../organisms/Footer';

const Layout = ({ children, title }) => {
  useEffect(() => {}, [document.readyState]);
  return (
    <>
      <SEO title={title} />
      <div style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 99999,
        background: '#fff',
        transformOrigin: 'top',
        transition: 'transform 1s linear',
        transform: `translateY(${document.readyState === 'complete' ? '-100vh' : 0})`
      }} id="loader" />
      <GlobalStyle />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default Layout
