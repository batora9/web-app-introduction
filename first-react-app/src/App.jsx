import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Link to="/About" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default App;