"use client";

import React, { useContext } from "react";
import "../../styles/auth.css";
import { useRouter } from "next/navigation";
import { Context } from "@/context";
import axios from "axios";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);

  const Router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (!username || !secret) return;

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "private-key": "90561c93-a7f1-4b77-a4bf-ab52fdf6fb53" } }
      )
      .then((res) => Router.push("/chat"))
      .catch((err) => console.error("Error on submit ", err));
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form " onSubmit={(e) => onSubmit}>
          <div className="auth-title">Chat App</div>
          <div className="input-container">
            <input
              className="text-input"
              placeholder="Email"
              type="email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              className="text-input"
              placeholder="Password"
              type="password"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <h3>Use Your Email and Password for Login</h3>
      </div>
    </div>
  );
}
