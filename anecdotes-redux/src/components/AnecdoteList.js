import { useSelector, useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteSlice";

function AnecdoteList() {
  const anecdotes = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();

  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);

  return (
    <>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}{" "}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default AnecdoteList;
