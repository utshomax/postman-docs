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

const algoliaIndex = (process.env.NODE_ENV === 'development') ? 'dev_docs' : 'dev_docs';

const pageQuery = `{
  allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/docs/" },
    }
  ) {
    edges {
      node {
        headings(depth: h2) {
          value
        }
        id
        frontmatter {
          title
          search_keyword
        }
        fields {
          slug
        }
        html
        rawMarkdownBody
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
      //   .flatMap((x) => [x], []),
        // .reduce((acc, cur) => [...acc, ...cur], []),
        return data.allMarkdownRemark.edges.map(edge => edge.node).reduce((indeces, post) => {
          
          const pChunks = post.rawMarkdownBody.split('\n\n##');
          
          const chunks = pChunks.map(chnk => ({
            objectID: post.id,
            headings: post.headings,
            fields: post.fields.slug,
            title: post.frontmatter.title,
            content: chnk
          }));

    console.log('chunks -------------------------------------------------------', chunks)
          const filtered = chunks.filter(chnk => !!chnk.content);
          
          return [...indeces, ...filtered]
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
