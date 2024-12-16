import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Project 1"
              />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">A brief description of the project.</p>
                <Link href="#" className="btn btn-primary">
                  View Project
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Project 2"
              />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">A brief description of the project.</p>
                <Link href="#" className="btn btn-primary">
                  View Project
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="Project 3"
              />
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">A brief description of the project.</p>
                <Link href="#" className="btn btn-primary">
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
