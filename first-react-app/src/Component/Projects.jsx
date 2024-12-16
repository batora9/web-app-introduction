import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section id="projects" className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl font-bold">Project 1</h5>
              <p className="mt-2 text-gray-600">
                A brief description of the project.
              </p>
              <Link
                href="#"
                className="mt-4 inline-block text-indigo-500 hover:underline"
              >
                View Project
              </Link>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl font-bold">Project 2</h5>
              <p className="mt-2 text-gray-600">
                A brief description of the project.
              </p>
              <Link
                href="#"
                className="mt-4 inline-block text-indigo-500 hover:underline"
              >
                View Project
              </Link>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/150"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h5 className="text-xl font-bold">Project 3</h5>
              <p className="mt-2 text-gray-600">
                A brief description of the project.
              </p>
              <Link
                href="#"
                className="mt-4 inline-block text-indigo-500 hover:underline"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
