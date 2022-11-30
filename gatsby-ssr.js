const React = require('react');
const bff = require('./bff.json');

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents, getPostBodyComponents, replacePostBodyComponents }) => {
  const headComponents = getHeadComponents();
  const modifiedComponents = [...headComponents];

  modifiedComponents.push(
    React.createElement('script', {
      key: 'pm',
      dangerouslySetInnerHTML: {
        __html: bff.script,
      },
    }),
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3"/>
  );

  replaceHeadComponents(modifiedComponents);

  // const bodyComponents = [
  //   <script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>,
  //   <script type="text/javascript">
  //      docsearch({
  //        appId: ZTQZHUI64N,
  //        apiKey: 43f8c0ab6b866ec14cbdf61f458d4c30,
  //        indexName: learning-postman,
  //        container: '<div></div>',
  //        debug: true  //Set debug to true if you want to inspect the modal
  //      });
  //    </script>
  // ]


  const bodyComponents = getPostBodyComponents();
  const modifiedBodyComponents = [...bodyComponents];

  modifiedBodyComponents.push(
    <script src="https://cdn.jsdelivr.net/npm/@docsearch/react@3"></script>
  //   <script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>,
  //   React.createElement('script', docsearch({
  //     appId: 'ZTQZHUI64N',
  //     apiKey: '43f8c0ab6b866ec14cbdf61f458d4c30',
  //     indexName: 'learning-postman',
  //     container: '<div></div>',
  //     debug: false // Set debug to true if you want to inspect the modal
  //   })),
  //   // <script type="text/javascript">
  //   //   docsearch({
  //   //     appId: ZTQZHUI64N,
  //   //     apiKey: 43f8c0ab6b866ec14cbdf61f458d4c30,
  //   //     indexName: learning-postman,
  //   //     container: '<div></div>',
  //   //     debug: true // Set debug to true if you want to inspect the modal
  //   //   });
  //   // </script>
  );

  replacePostBodyComponents(modifiedBodyComponents);


};

// export const onRenderBody = ({ setPostBodyComponents }) => {
//   setPostBodyComponents([
//     <script src="https://cdn.jsdelivr.net/npm/@docsearch/react@3"></script>
//   ])
// }