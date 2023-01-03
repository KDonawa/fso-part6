import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

async function getAll() {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function create(content) {
  const response = await axios.post(baseUrl, {
    id: (100000 * Math.random()).toFixed(0),
    content,
    votes: 0,
  });
  return response.data;
}

async function update(id, data) {
  const response = await axios.put(`${baseUrl}/${id}`, data);
  return response.data;
}

const anecdoteService = { getAll, create, update };
export default anecdoteService;
