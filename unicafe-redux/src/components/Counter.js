import { useDispatch } from "react-redux";
import { good, ok, bad } from "../app/counterSlice";

function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}

export default function Counter() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(good())} text="good" />
      <Button onClick={() => dispatch(ok())} text="neutral" />
      <Button onClick={() => dispatch(bad())} text="bad" />
    </div>
  );
}
