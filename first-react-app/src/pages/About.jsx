import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About us</h1>
      <Link to="/">Homeに戻る</Link>
      <p>Maximumは埼玉大学で活動しているサークルです。</p>
    </div>
  );
}

