import React from 'react';
import { useSearchBox, useHits } from 'react-instantsearch';
const { v4: uuidv4 } = require('uuid');



const SearchBox = ({ query, refine }) => (
  <div className="ais-SearchBox">
    <form noValidate action="" role="search" className="ais-SearchBox-form">
      <input
        className="ais-SearchBox-input"
        type="search"
        value={query}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </form>
  </div>
);

export function CustomSearchBox(props) {
  const searchBoxApi = useSearchBox(props);
  
  return <SearchBox {...searchBoxApi} />;
}

// on page load do not display
/* eslint-disable react/no-danger */
const Hits = ({ hits }) => {

  return (
  // if parent component set is type, render, otherwise hide
  <ul className="style">
    {hits.length < 1 ? <li><p className='pl-4 pr-4'>No search results found</p></li> : ''}
    {hits.map((hit) => {
      // handles develop and prod Algolia index
      const excerpt = hit._snippetResult && hit._snippetResult.excerpt.value ? hit._snippetResult.excerpt.value : hit.excerpt
      return (
        <li key={uuidv4()}>
          {console.log(hit)}
          { !!hit && hit.slug && hit.title && hit.excerpt ? (
            <a href={hit.slug}>
              <span className="search-title" dangerouslySetInnerHTML={{ __html: hit._highlightResult.title.value }} />
              <p dangerouslySetInnerHTML={{ __html: excerpt }} />
            </a>
          ) : (
            <p>Search is currently not available.</p>
          )}
      </li>
    )})}
  </ul>
)};
/* eslint-enable */

// export const CustomHits = connectHits(Hits);
export function CustomHits(props) {
  const hitsApi = useHits(props);
  
  return <Hits {...hitsApi} />;
}
