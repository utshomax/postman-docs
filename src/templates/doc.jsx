/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ContextualLinks from '../components/ContextualLinks/ContextualLinks';
import EditDoc from '../components/Shared/EditDoc';
import { leftNavItems } from '../components/LeftNav/LeftNavItems';
import LeftNav from '../components/LeftNav/LeftNav';
import SEO from '../components/seo';
import './doc.scss';
import 'prismjs/themes/prism-tomorrow.css';
import pose from '../assets/pose-learning-center.svg';
import { useModal } from '../components/Docs/Modal/useModal.js';
// import { useTextBlocks } from '../components/Docs/TextBlocks/useTextBlocks';

const { v4: uuidv4 } = require('uuid');

class CreateDoc extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      data
    };
  }

  componentDidMount() {
    let { data } = this.state;
    const { html } = data.markdownRemark;
    let parser = new DOMParser();
    let htmlDocument = parser.parseFromString(html, 'text/html');
    
    console.log(htmlDocument)
    /* Import JS scripts to render components on the doc page which returns htmlDocument /*
    /* Enables functionality for images to display as modal on click */
    useModal(htmlDocument);
    /* Enables reusable pieces of text */
    // useTextBlocks(htmlDocument);

    this.setState({
      htmlDocument: htmlDocument.body.innerHTML
    });
  }

  render() {
    const { htmlDocument } = this.state;
    return (
      <span dangerouslySetInnerHTML={{ __html: htmlDocument }} />
    );
  }
}

// Layout for Doc Page
const DocPage = ({ data }) => {
  const post = data.markdownRemark;
  let contextualLinks;
  if (post.frontmatter.contextual_links) {
    contextualLinks = <ContextualLinks key={uuidv4()} links={post.frontmatter.contextual_links} />;
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} slug={post.fields.slug} />
      <div className="container-fluid">
        <div className="row row-eq-height">
          <nav className="col-sm-12 col-md-4 col-lg-3 left-nav-re">
            <LeftNav LeftNavItems={leftNavItems} />
          </nav>
          <div className="col">
            <div className="row row-eq-height">
              <main className="col-sm-12 col-md-12 col-lg-9 offset-lg-0 col-xl-7 doc-page ml-xl-5">
                <h1>{post.frontmatter.title}</h1>
                <CreateDoc data={data}/>
              </main>
              <aside className="col-sm-12 col-md-12 col-lg-3 offset-lg-0 col-xl-3 offset-xl-1 right-column">
                <hr className="d-block d-lg-none" />
                <div className="edit-button">
                  <EditDoc className="btn btn__small btn__secondary-light edit-button-styles" />
                </div>
                {contextualLinks}
                <figure className="sticky posmanaut-dab">
                  <img src={pose} alt="pose" className="img-fluid" />
                </figure>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        contextual_links {
          type
          name
          url
          blog_tag
        }
      }
      fields {
        slug
      }
    }
  }
`;
export default DocPage;
/* eslint-enable */
