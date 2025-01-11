const ContactUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6 text-lg">
        Welcome! We&apos;re here to help and answer any questions you might
        have. We look forward to hearing from you!
      </p>

      <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>

      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Your Email"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-lg font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
