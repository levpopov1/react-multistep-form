import { Formik, Field, Form, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
import { addPerson } from "../graphql/mutations";
import { getPeople } from "../graphql/queries";
import { personSchema } from "./validation";

const MultiStepForm = () => {
  const [newPerson, { error, loading, data }] = useMutation(addPerson, {
    refetchQueries: [
      {
        query: getPeople,
      },
    ],
  });

  return (
    <Formik
      initialValues={{ firstname: "", surname: "", gender: "" }}
      validationSchema={personSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        newPerson({
          variables: {
            data: {
              ...values,
            },
          },
        });
        resetForm();
      }}
    >
      <Form>
        <div className="mb-3">
          <label htmlFor="firstname" className="mb-2 inline-block">
            First Name
          </label>
          <Field
            name="firstname"
            type="text"
            className="w-full block py-2 px-3 border-2 border-purple-300 rounded"
            placeholder="required"
          />
          <ErrorMessage name="firstname" />
        </div>
        <div className="mb-3">
          <label htmlFor="surname" className="mb-2 inline-block">
            Last Name
          </label>
          <Field
            name="surname"
            type="text"
            className="w-full block py-2 px-3 border-2 border-purple-300 rounded"
            placeholder="required"
          />
          <ErrorMessage name="surname" />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="mb-2 inline-block">
            Gender
          </label>
          <Field
            as="select"
            name="gender"
            id="gender"
            className="w-full block py-2 px-3 border-2 border-purple-300 rounded"
          >
            <option value="" disabled>
              Please select...
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
          <ErrorMessage name="gender" />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-purple-900 text-white font-semibold border rounded-xl"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default MultiStepForm;
