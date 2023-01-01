import { useDispatch } from "react-redux";
import { newAnecdote } from "../reducers/anecdoteSlice";

function AnecdoteForm() {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(newAnecdote(event.target.anecdote.value));
    event.target.anecdote.value = "";
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
}

export default AnecdoteForm;
