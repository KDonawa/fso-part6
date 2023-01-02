import { useDispatch } from "react-redux";
import { newAnecdote } from "../reducers/anecdoteSlice";
import {
  setNotification,
  removeNotification,
} from "../reducers/notificationSlice";

function AnecdoteForm() {
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    const content = event.target.anecdote.value;
    dispatch(newAnecdote(content));
    dispatch(setNotification(`You added '${content}'`));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);

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
