import { Route, Switch } from "react-router-dom";
import AllQuotes from "./Pages/AllQuotes";
import QuoteDetail from "./Pages/QuoteDetail";
import NewQuote from "./Pages/NewQuote";

function App() {
  return (
    <Switch>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      {/* for rendering a detailed quote */}
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </Switch>
  );
}

export default App;


