"use client";

import { contactUs } from "@/utils/firebase";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <main className="mx-auto max-w-2xl p-8">
      <div className="p-8">
        <h1 className="mb-6 text-center text-3xl font-semibold text-primary-1-500">
          The Georgia High School Voter Project is excited to work with your
          school or community!
        </h1>
        <ul className="text-gray-700 space-y-4">
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
      <form className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="name"
            className="text-gray-700 block text-lg font-medium"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-gray-300 mt-1 block w-full border p-3 focus:border-primary-1-500 focus:ring-primary-1-500"
            required
            onChange={(e) =>
              setFormState({ ...formState, name: e.target.value })
            }
            value={formState.name}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-gray-700 block text-lg font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border-gray-300 mt-1 block w-full border p-3 focus:border-primary-1-500 focus:ring-primary-1-500"
            required
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            value={formState.email}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="text-gray-700 block text-lg font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="border-gray-300 mt-1 block w-full border p-3 focus:border-primary-1-500 focus:ring-primary-1-500"
            required
            onChange={(e) =>
              setFormState({ ...formState, message: e.target.value })
            }
            value={formState.message}
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="border-transparent inline-flex justify-center border bg-primary-1-500 px-6 py-3 text-lg font-medium text-white shadow-sm hover:bg-primary-1-600 focus:outline-none focus:ring-2 focus:ring-primary-1-500 focus:ring-offset-2"
            onClick={async (e) => {
              e.preventDefault();
              try {
                await contactUs(JSON.stringify(formState));
                alert("Your message has been sent. Thank you for reaching out!");
              } catch (error) {
                alert("An error occurred. Please try again later.");
              }
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
