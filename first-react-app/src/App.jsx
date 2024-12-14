import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Maximum</h1>
      <Link to="/about">About</Link>
      <div>
        今後の予定
        <ul>
          <li>12/10 入門講習会</li>
          <li>12/16 Web研</li>
          <li>12/23 忘年会</li>
        </ul>
        気になる方は是非参加してみてください！
      </div>
    </div>
  );
}

export default App;

