import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../utils/Seo';
import GlobalStyle from '../utils/GlobalStyle';
import Footer from '../organisms/Footer';

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
