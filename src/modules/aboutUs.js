import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
const AboutUs = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("This feild is required"),
      email: Yup.string().required("This feild is required"),
      number: Yup.string().matches(regex,"Invalid format").required("This feild is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      navigate("/");
    },
  });

  return (
    <div>
      <p>Name</p>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          value={formik.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name && (
          <p>{formik.errors.name}</p>
        )}
        <input
          type="email"
          name="email"
          value={formik.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <p>{formik.errors.email}</p>
        )}
        <input
          type="text"
          name="number"
          value={formik.number}
          onChange={formik.handleChange}
        />
        {formik.errors.number && formik.touched.number && (
          <p>{formik.errors.number}</p>
        )}
        <button type="submit">Submit</button>
      </form>
      <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        {toggle === true ? (
          <div className="card mt-5">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button onClick={() => navigate(-1)}>Back</button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AboutUs;
