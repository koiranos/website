import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../components/Seo';
import GlobalStyle from '../components/GlobalStyle';
import Footer from '../components/Footer';

const Layout = ({ children, title }) => {
  return (
    <>
      <SEO title={title} />
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
