export default function Contact() {
  return (
    <section id="contact" className="py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              placeholder="Your email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
