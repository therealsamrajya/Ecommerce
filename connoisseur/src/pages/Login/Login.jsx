import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { LoginSchema } from "../../schemas/LoginSchema";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div className="w-1/2 flex flex-col justify-center items-center bg-white p-8">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="loginEmail">
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
            onClick={handleSubmit}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-secondary hover:bg-blue-700 text-tertiary font-merriweather-regular font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Login
          </button>
        </div>
      </form>

      <div className="lg:mt-[-2.5rem] max-sm:py-2 max-sm:ml-[-1rem] ">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex flex-row items-center gap-1"
          type="button">
          Login with
          <FcGoogle />
        </button>
      </div>
    </div>
  );
};

export default Login;
