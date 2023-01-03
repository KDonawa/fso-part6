import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import { useEffect } from "react";
import { initializeAnecdotes } from "./reducers/anecdoteSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <div>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
}

export default App;
