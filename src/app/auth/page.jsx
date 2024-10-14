"use client";

import React, { useContext, useState } from "react";
import "../../styles/auth.css";
import { useRouter } from "next/navigation";
import { Context } from "@/context";
import axios from "axios";

export default function Auth() {
  const { username, setUsername, secret, setSecret } = useContext(Context);
  const router = useRouter();
  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (!username || !secret) {
      setError("Please fill in both fields.");
      return;
    }
    // Clear error message if validation passes
    setError("");

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "2e5f13cf-f3a2-4432-8eef-951d10b15f64" } }
      )
      .then((res) => router.push("/chat"))
      .catch((err) => {
        console.error("Error on submit ", err);
        setError("Failed to login. Please check your credentials.");
      });
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={onSubmit}>
          <div className="auth-title">Chat App</div>
          {error && <div className="error-message">{error}</div>}
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
