import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Thumb = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query thumb{
      allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fixed(width: 80, height: 80, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  const match = useMemo(() => (
    data.allFile.edges.find(({ node }) => src === node.relativePath)
  ), [ data, src ]);

  return (
    <Img
      fixed={match.node.childImageSharp.fixed}
      style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', boxShadow: '.1rem .2rem .5rem .2rem rgba(0, 0, 0, .2)', borderRadius: 'var(--round-radius-1)' }}
      {...props}
    />
  );
};

export default Thumb;