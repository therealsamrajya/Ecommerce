import React from "react";
import { form1 } from "../../assets/assets";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};
const SignUp = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return (
    <div className="flex h-screen font-merriweather-light">
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8">
        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-error">{errors.name}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-error">{errors.email}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-error">{errors.password}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="cpassword">
              Confirm your password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cpassword"
              type="password"
              placeholder="Re-Enter your password"
              value={values.cpassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.cpassword && touched.cpassword ? (
              <p className="form-error">{errors.cpassword}</p>
            ) : null}
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-secondary hover:bg-blue-700 text-tertiary font-merriweather-regular font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <div className="w-1/2">
        <img src={form1} alt="Signup" className="h-full w-full object-fit" />
      </div>
    </div>
  );
};

export default SignUp;
