import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import anecdoteService from "./services/anecdotes";
import { useEffect } from "react";
import { setAnecdotes } from "./reducers/anecdoteSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdoteService.getAll().then((data) => dispatch(setAnecdotes(data)));
  }, [dispatch]);

  return (
    <div>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
}

export default App;
