import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./App.css";

function App() {
  return (
    <div className="App container mx-auto">
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <div className="mb-3">
            <label htmlFor="firstName" className="mb-2 inline-block">
              First Name
            </label>
            <Field
              name="firstName"
              type="text"
              className="w-full block py-2 px-3 border-2 border-purple-300 rounded"
              placeholder="required"
            />
            <ErrorMessage name="firstName" />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="mb-2 inline-block">
              Last Name
            </label>
            <Field
              name="lastName"
              type="text"
              className="w-full block py-2 px-3 border-2 border-purple-300 rounded"
              placeholder="required"
            />
            <ErrorMessage name="lastName" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="mb-2 inline-block">
              Email Address
            </label>
            <Field
              name="email"
              type="email"
              className="w-full block py-2 px-3 border-2 border-purple-300 rounded"
              placeholder="required"
            />
            <ErrorMessage name="email" />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-900 text-white font-semibold border rounded-xl"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
