import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import NavbarComponent from './Navbar';
import useSiteMetadata from './SiteMetadata';

import { useStaticQuery, Link, graphql } from 'gatsby';

// import { GlobalStyles } from '../styles/GlobalStyles';

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      {/* <GlobalStyles /> */}
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" href="/img/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Martel|Open+Sans"
          rel="stylesheet"
        />

        {/* <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        /> */}

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <NavbarComponent />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
