import { useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("password");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const { VITE_SERVER_ADDRESS } = import.meta.env;
    if (email && password) {
      axios
        .post(`${VITE_SERVER_ADDRESS}/login`, {
          email,
          password,
        })
        .then((response) => {
          localStorage.setItem("TOKEN", response.data);
          toast("Logged successfully");
          navigate("/posts");
        })
        .catch((error) => {
          if (error?.response?.status == 401) {
            toast("Unauthorized access");
          } else {
            console.error(error);
          }
        });
    } else {
      toast("Please specify both email and password");
    }
  }

  return (
    <div className="Login">
      <Navigation />

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:&nbsp;
          <input
            type="email"
            name="email"
            id="email"
            placeholder="user@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:&nbsp;
          <input
            type="password"
            name="password"
            id="password"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
