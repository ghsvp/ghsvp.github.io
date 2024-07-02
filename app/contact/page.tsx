export default function Contact() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <div className="p-8">
        <h1 className="text-3xl font-semibold text-primary-1-500 mb-6 text-center">
          The Georgia High School Voter Project is excited to work with your
          school or community!
        </h1>
        <ul className="space-y-4 text-gray-700">
          <li>
            If you are a school administrator, deputy registrar, faculty member,
            or student looking to collaborate with GHSVP, please contact us
            about how we can organize a voter drive at <strong>YOUR</strong>{" "}
            school!
          </li>
          <li>
            If you are a part of a media team or outside organization, please
            contact us about how we can work with you!
          </li>
          <li>
            Please reach out at{" "}
            <a
              href="mailto:georgiahighschoolvoterproject@gmail.com"
              className="text-primary-1-500 underline"
            >
              georgiahighschoolvoterproject@gmail.com
            </a>
            . Responses can be expected within 2-3 business days.
          </li>
        </ul>
      </div>
      <form className="space-y-6 mt-8">
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
            name="name"
            className="mt-1 block w-full p-3 border border-gray-300 focus:ring-primary-1-500 focus:border-primary-1-500"
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
            name="email"
            className="mt-1 block w-full p-3 border border-gray-300 focus:ring-primary-1-500 focus:border-primary-1-500"
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
            name="message"
            rows={4}
            className="mt-1 block w-full p-3 border border-gray-300 focus:ring-primary-1-500 focus:border-primary-1-500"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium text-white bg-primary-1-500 hover:bg-primary-1-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-1-500"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
