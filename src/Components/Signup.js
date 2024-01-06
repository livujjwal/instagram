import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import userContext from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const navigate = useNavigate();
  const { name, email, password, cPassword } = user;

  const { setToken } = useContext(userContext);

  function handleInput(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!name || !email || !password || !cPassword) {
      alert("All feilds are required");
    } else if (password !== cPassword) {
      alert("Password do not match");
    } else {
      axios
        .post("https://instagram-express-app.vercel.app/api/auth/signup", {
          name,
          email,
          password,
        })
        .then((response) => {
          console.log(response.data.data.token);
          setToken(response.data.data.token);
          localStorage.setItem("token", response.data.data.token)
          navigate("/dashboard");
        });
    }
  }

  return (
    <div>
      <h1>Signup here</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={user.name}
          onChange={handleInput}
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={user.email}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={user.password}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="Enter your confirm password"
          name="cPassword"
          value={user.cPassword}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
