import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteSlice";
import { setNotification } from "../reducers/notificationSlice";

function AnecdoteForm(props) {
  async function addAnecdote(event) {
    event.preventDefault();

    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";
    props.createAnecdote(content);
    props.setNotification(`You added '${content}'`, 5);
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

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
};

export default connect(null, mapDispatchToProps)(AnecdoteForm);
