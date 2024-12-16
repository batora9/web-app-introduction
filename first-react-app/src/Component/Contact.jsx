export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your name"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your email"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
