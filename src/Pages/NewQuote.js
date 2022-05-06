import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  // useHistory  allows us to change the browser history. So the history of pages we visited
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    
    // A history object we can use to trigger certain history changing actions. And what changes the history of pages,
    // well, for example if we add a new page  if we go to a new page.
    // we can navigate around with  the push method here, which pushes a new page on the stack of pages, so a new page on our history of pages
    // or we can navigate with the replace method that replaces the current page.
    // The difference is that with push, we can go back with the back button to the page we're coming from, with replace we can't, so replace is like a redirect.
    history.push('/quotes') 
    
     
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
