import React from "react";
import "./style.css";

function SearchResults(props) {
  // console.log(props);
  const { results } = props

  const styles = {
    ul: {
      listStyle: 'none'
    }
  }
  return (
    <ul style={styles.ul} className="list-group search-results">
      {results &&
        <li  className="list-group-item">
          {results}
        </li>
      }
    </ul>
  );
}

export default SearchResults;
