import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <section>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      {/* can be used also a path path="/quotes/:quoteId/comments" */}
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
