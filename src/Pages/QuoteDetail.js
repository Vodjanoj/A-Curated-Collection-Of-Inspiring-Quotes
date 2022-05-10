import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
 
  // includes path path="/quotes/:quoteId" , as specified in Route in App.js
  console.log(match );

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  // we might wanna check if quote is undefined, so if not quote, if we didn't find a quote
  // for the ID we had in the URL, because of course a user can enter anything in that URL

  if (!quote) {
    return <p>No quote found!</p>;
  }
  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* this is a trick how to hide Load Comments link when a specific comment is loaded */}
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      {/* can be used also a path path="/quotes/:quoteId/comments" */}
      {/* <Route path={`/quotes/${params.quoteId}/comments`}>  alternative with match is below*/}
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
