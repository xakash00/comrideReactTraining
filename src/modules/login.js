import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShow, setpasswordShow] = useState(false);
  const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "abc@gmail.com" && password === "123456") {
      localStorage.setItem("email", email);
      setError(false);
      console.log(email, password);
      navigate("/contact");
    } else {
      setError(true);
      console.log("Invalid");
    }
  };

  return (
    <div className="container">
      <div className="card mt-5 d-flex justify-content-center">
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
              <p className="text-danger text-center">{error ? "Invalid Credentials" : null}</p>
              {/* <button onClick={()=>setpasswordShow(!passwordShow)}>show</button> */}
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
