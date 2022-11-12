import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
function App() {
  const [form, setForm] = useState({
    phone: "",
    password: "",
  });
  const changePhone = (e) => {
    const newPhone = e.target.value;
    setForm((formBefore) => ({
      phone: newPhone,
      password: formBefore.password,
    }));
  };
  const changePassword = (e) => {
    const newPassword = e.target.value;
    setForm((formBefore) => ({
      phone: formBefore.phone,
      password: newPassword,
    }));
  };

  const handleClick = () => {
    const data = {
      phone: form.phone,
      password: form.password,
    };
    <Alert  variant={"success"}>
      This is a {data} alert with{" "}
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
      like.
    </Alert>;
  };
  return (
    <div className="login-fb">
      <div className="info">
        <div class="image">
          <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
        </div>
        <form action="#">
          <input
            class="email"
            placeholder="Email or phone number"
            onChange={changePhone}
            name="phone"
            type="phone"
          />
          <p class="text"></p>
          <input
            class="password"
            type="password"
            name="password"
            onChange={changePassword}
            placeholder="Password"
            required
          />
          <input
            class="subm"
            type="submit"
            value="Log in"
            onClick={handleClick}
          />
          <a href="" class="forgot">
            forgotten password?
          </a>
          <div class="new">
            <p>create new account</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
