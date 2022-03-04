import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setLocale } from "yup";
import * as registerAction from "../redux/action/registration";
const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      dispatch(
        registerAction.registration(name, email, password, onSuccess, onError)
      );
    }, 2000);
  };
  const onSuccess = (data) => {
    console.log(data);
    toast.success(data) 
    navigate("/login")
    setLoading(false);
  };
  const onError = (data) => {
    console.log(data);
    toast.error(data)
    setError(data);
    setLoading(false);
  };
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="card mt-5">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div>
                <p>Name</p>
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="enter name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <p>Email</p>
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <p>Password</p>
                <input
                  className="form-control mb-3"
                  type="password"
                  placeholder="enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <p className="text-danger text-center">{error}</p>
                {/* <button onClick={()=>setpasswordShow(!passwordShow)}>show</button> */}
                <button type="submit" className="btn btn-success">
                  {loading ? "Loading..." : "Registration"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
