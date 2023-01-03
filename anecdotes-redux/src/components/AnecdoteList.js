import Notification from "./Notification";
import Filter from "./Filter";
import { useSelector, useDispatch } from "react-redux";
import { upvoteAnecdote } from "../reducers/anecdoteSlice";
import { setNotification } from "../reducers/notificationSlice";

function AnecdoteList() {
  const dispatch = useDispatch();
  const anecdotes = useSelector((state) => state.anecdotes);
  const filterValue = useSelector((state) => state.filter.value);

  function submitVote(anecdote) {
    dispatch(upvoteAnecdote(anecdote));
    dispatch(setNotification(`You voted '${anecdote.content}'`, 5));
  }

  const sortedAnecdotes = anecdotes
    .filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filterValue.toLowerCase())
    )
    .sort((a, b) => b.votes - a.votes);

  return (
    <>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}{" "}
            <button onClick={() => submitVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default AnecdoteList;
