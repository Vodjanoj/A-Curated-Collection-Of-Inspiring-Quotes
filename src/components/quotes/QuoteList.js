import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  // URLSearchParams is a default JavaScript constructor function, a default JavaScript class so to say, which we can use in the browser.
  // Now to this constructor we can pass location.search(search: "?sort=asc" (for example)), and that will then give us a nice queryParams object,
  // where we can then extract our query parameters by key, so here for example search: "?sort=asc" we have a sort key with a value of asc
  // and because I'm using URLSearchParams, therefore queryParams object will now have a sort key, which will hold this asc value.
  // And that's simply a more convenient way of extracting data from the query parameters.

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  console.log("first " + isSortingAscending);

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    console.log("second " + isSortingAscending);
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
     
    // the same, but above is more readable
    // history.push(
    //   `${location.pathname}?sort=${isSortingAscending ? "desc" : "asc"}`
    // );
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
