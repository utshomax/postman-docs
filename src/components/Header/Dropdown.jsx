import React from 'react';
import { useEffect, useRef, useState } from "react";

/* Algolia Imports */
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  Pagination,
} from 'react-instantsearch-dom';
import { SearchWrapperStyling } from '../Search/searchStyles.jsx';
import { CustomHits } from '../Search/searchPreview.jsx';

import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

  const searchOnlyKey = process.env.NODE_ENV === 'development' ? '003daeb8de202d4a917c2395628d75a8' : '69f2c5376f1a90912c6c3b6b772c25bc';
  const algoliaIndex = process.env.NODE_ENV === 'development' ? 'dev_docs' : 'docs';


  /* Algolia Search Bar */
  const algoliaClient = algoliasearch(
    '4A5N71XYH0',
    searchOnlyKey
  );

  

  // removes empty query searches from analytics
  const searchClient = {
    search(requests) {
      const newRequests = requests.map((request) => {
        // test for empty string and change request parameter: analytics
        if (!request.params.query || request.params.query.length === 0) {
          request.params.analytics = false;
        }
        return request;
      });
      return algoliaClient.search(newRequests);
    },
  };

const Dropdown = () => {
  const ref = useRef();
  const [refresh, setRefresh] = useState(false);
  const [hasInput, setHasInput] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If clicked target is outside the open dropdown, close the dropdown
      if (hasInput && ref.current && !ref.current.contains(e.target)) {
        setHasInput(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [hasInput]);

  return (
    <SearchWrapperStyling className="form-inline header__search">
      <div className="wrapper" ref={ref}>
      <DocSearch
          appId="ZTQZHUI64N"
          indexName="learning-postman"
          apiKey="43f8c0ab6b866ec14cbdf61f458d4c30"
        />
      </div>
    </SearchWrapperStyling>
  );
}

export default Dropdown;
