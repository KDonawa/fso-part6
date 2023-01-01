import { useSelector } from "react-redux";

function Statistics() {
  const { good, ok, bad } = useSelector((state) => state.counter);

  function calcAverage() {
    const denom = good + ok + bad;
    return denom === 0 ? 0 : (good * 1 - bad * 1) / denom;
  }
  function calcPositive() {
    const denom = good + ok + bad;
    return denom === 0 ? 0 : (good * 100) / denom;
  }
  function haveFeedback() {
    return good + ok + bad !== 0;
  }
  function showFeedback() {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="ok" value={ok} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={good + ok + bad} />
            <StatisticLine text="average" value={calcAverage()} />
            <StatisticLine text="positive" value={`${calcPositive()} %`} />
          </tbody>
        </table>
      </>
    );
  }

  return haveFeedback() ? showFeedback() : <div>No feedback given</div>;
}

function StatisticLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

export default Statistics;
