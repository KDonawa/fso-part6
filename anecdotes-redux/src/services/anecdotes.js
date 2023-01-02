import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

async function getAll() {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function create(content) {
  const response = await axios.post(baseUrl, {
    content,
    votes: 0,
    id: (100000 * Math.random()).toFixed(0),
  });
  return response.data;
}

const anecdoteService = { getAll, create };
export default anecdoteService;
