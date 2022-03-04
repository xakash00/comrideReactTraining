import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as loginAction from "../redux/action/loginAction";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setpasswordShow] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    setTimeout(() => {
      dispatch(loginAction.login(email, password, onSuccess, onError));
    }, 2000);
  };
  const onSuccess = (data) => {
    console.log(data);
    toast.success(data);
    navigate("/contact");
    setLoading(false);
  };
  const onError = (data) => {
    console.log(data);
    setLoading(false);
    toast.error(data);
    setError(data);
  };

  console.log(loading);

  return (
    <div className="container d-flex justify-content-center">
      <div className="card mt-5">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div>
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
                {loading ? "loading...." : "login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
