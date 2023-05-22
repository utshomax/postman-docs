// The queries allow you to grab the data you want Algolia to index directly from
// Gatsby’s GraphQL layer by exporting from src/utils/algolia.js an array of objects,
// each containing a required GraphQL query and an optional index name,
// transformer function and settings object.

//  the query property is a GraphQL query string.
// The transformer is a function that takes the data retrieved by the query and
// transforms it into the array of objects that will become your Algolia index records.

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const algoliaIndex = (process.env.NODE_ENV === 'development') ? 'docs-testing' : 'docs-testing';

const pageQuery = `{
  allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/docs/" },
    }
  ) {
    edges {
      node {
        id
        headings(depth: h2) {
          value
        }
        frontmatter {
          title
          search_keyword
        }
        fields {
          slug
        }
        rawMarkdownBody
        internal {
          contentDigest
        }
      }
    }
  }
}`;

// manipulate the raw body into many more records
const handleRawBody = (node) => { 
  const {id, rawMarkdownBody, ...rest} = node; // split internal.content from node
  const sections = rawMarkdownBody.split('\n\n##'); // split records into paragraph
  
  // returns an object with specific content on that key, results stay associated with correct post
  const records = sections.map(section => ({ 
    objectID: id,
    ...rest,
    content: section,
  }))

  return records; // returns array of correctly split objects
}

// function pageToAlgoliaRecord({ node: { id, frontmatter, ...rest } }) {
//   return {
//     objectID: id,
//     ...frontmatter,
//     ...rest,
//   };
// }
const pageToAlgoliaRecord = node => {
  const { id, frontmatter, ...rest } = node;
  return {
    objectID: id,
    ...frontmatter,
    ...rest,
  };
}

// const queries = [
//   {
//     query: pageQuery,
//     transformer: ({ data }) => 
//       data.allMarkdownRemark.edges
//         .map(edge => edge.node)
//         .map(pageToAlgoliaRecord)
//         .map(handleRawBody)
//         .flatMap((x) => [x], []),
//         // .reduce((acc, cur) => [...acc, ...cur], []),
//     indexName: algoliaIndex,
//     settings: {
//       attributesToSnippet: ['excerpt:20'],
//       attributeForDistinct: 'slug',
//       distinct: true,
//     },
//   },
// ];

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => {
      // data.allMarkdownRemark.edges
      //   .map(edge => edge.node)
      //   .map(pageToAlgoliaRecord)
      //   .map(handleRawBody)
        // .reduce((acc, cur) => [...acc, ...cur], []),
       return data.allMarkdownRemark.edges.map(edge => edge.node).reduce((acc, post) => {
          // console.log('post ', post)
          const pChunks = post.rawMarkdownBody.split('##');
          
          const chunks = pChunks.map(chnk => ({
            objectID: post.id,
            headings: post.headings,
            fields: post.fields.slug,
            title: post.frontmatter.title,
            internal: post.internal,
            content: chnk
          }));

          // const filtered = chunks.filter(chnk => !!chnk.content);
          return [...acc, ...chunks]
        }, [])
    },
    indexName: algoliaIndex,
    // settings: {
      // attributesToSnippet: ['excerpt:20'],
      // attributeForDistinct: 'slug',
      // distinct: true,
    // },
  },
];

module.exports = queries;
