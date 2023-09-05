import React from 'react';
import { useSearchBox, useHits, usePagination} from 'react-instantsearch';
import { Paragraph } from 'aether-marketing';
const { v4: uuidv4 } = require('uuid');



// Custom Search Box Widget
//////////////////////////////////////////////////////////////////////////////

const SearchBox = ({ query, refine }) => (
  <div className="ais-SearchBox TESTING">
    <form noValidate action="" role="search" className="ais-SearchBox-form test">
      <input
        className="ais-SearchBox-input test"
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
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

// Custom Hits Widget
//////////////////////////////////////////////////////////////////////////////
// on page load do not display
/* eslint-disable react/no-danger */
const Hits = ({ hits }) => {

  return (
    // if parent component set is type, render, otherwise hide
    <ul className="algolia-result-style">
      {hits.map((hit) => {
        // handles develop and prod Algolia index
        const excerpt = hit._snippetResult && hit._snippetResult.excerpt.value ? hit._snippetResult.excerpt.value : hit.excerpt
        return (
          <li key={uuidv4()} className='p-2'>
            { !!hit && hit.slug && hit.title && hit.excerpt ? (
              <a href={hit.slug} className='text-decoration-none'>
                <Paragraph className="search-title strong mb-0" dangerouslySetInnerHTML={{ __html: `${hit._highlightResult.title.value} <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="#212121"><g><path d="M10.375,3.219,6,6.719l-4.375-3.5A1,1,0,1,0,.375,4.781l5,4a1,1,0,0,0,1.25,0l5-4a1,1,0,0,0-1.25-1.562Z"></path></g></svg>` }} />   
                <Paragraph className="dropdown-item-text-wrap small" dangerouslySetInnerHTML={{ __html: excerpt }} />
              </a>
            ) : (
              <Paragraph className="search-title strong mb-0">Search is currently not available.</Paragraph>
            )}
        </li>
      )})}
    </ul>
  )};
/* eslint-enable */


export function CustomHits(props) {
  const hitsApi = useHits(props);
  
  return <Hits {...hitsApi} />;
}



// Custom Pagination Widget
////////////////////////////////////////////////////////////////////////////////

function Pagination(props) {
  const {
    pages,
    currentRefinement,
    nbPages,
    isFirstPage,
    isLastPage,
    refine,
    createURL,
  } = usePagination(props);
  const firstPageIndex = 0;
  const previousPageIndex = currentRefinement - 1;
  const nextPageIndex = currentRefinement + 1;
  const lastPageIndex = nbPages - 1;

  return (
    <ul className='TESTING'>
      <PaginationItem
        isDisabled={isFirstPage}
        href={createURL(firstPageIndex)}
        onClick={() => refine(firstPageIndex)}
      >
        First
      </PaginationItem>
      <PaginationItem
        isDisabled={isFirstPage}
        href={createURL(previousPageIndex)}
        onClick={() => refine(previousPageIndex)}
      >
        Previous
      </PaginationItem>
      {pages.map((page) => {
        const label = page + 1;
        
        return (
          <PaginationItem
            key={page}
            isDisabled={false}
            aria-label={`Page ${label}`}
            href={createURL(page)}
            onClick={() => refine(page)}
          >
            {label}
          </PaginationItem>
        );
      })}
      <PaginationItem
        isDisabled={isLastPage}
        href={createURL(nextPageIndex)}
        onClick={() => refine(nextPageIndex)}
      >
        Next
      </PaginationItem>
      <PaginationItem
        isDisabled={isLastPage}
        href={createURL(lastPageIndex)}
        onClick={() => refine(lastPageIndex)}
      >
        Last
      </PaginationItem>
    </ul>
  );
}

function PaginationItem({ isDisabled, href, onClick, ...props }) {
  if (isDisabled) {
    return (
      <li className='TESTING'>
        <span {...props} />
      </li>
    );
  }

  return (
    <li>
      <a
        href={href}
        className='TESTING'
        onClick={(event) => {
          if (isModifierClick(event)) {
            return;
          }

          event.preventDefault();

          onClick(event);
        }}
        {...props}
      />
    </li>
  );
}

function isModifierClick(event) {
  const isMiddleClick = event.button === 1;

  return Boolean(
    isMiddleClick ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey
  );
}
export function CustomPagination(props) {
  const paginationApi = usePagination(props);
  
  return <Pagination {...paginationApi} />;
}