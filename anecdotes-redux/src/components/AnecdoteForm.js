import { useDispatch } from "react-redux";
import { newAnecdote } from "../reducers/anecdoteSlice";
import {
  setNotification,
  removeNotification,
} from "../reducers/notificationSlice";
import anecdoteService from "../services/anecdotes";

function AnecdoteForm() {
  const dispatch = useDispatch();

  async function addAnecdote(event) {
    event.preventDefault();

    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";

    const anecdote = await anecdoteService.create(content);

    dispatch(newAnecdote(anecdote));
    dispatch(setNotification(`You added '${anecdote.content}'`));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
}

export default AnecdoteForm;
