"use client";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "@/context";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "@/styles/chats.css";
import "@/styles/auth.css";
import { ChatEngine ,MessageFormSocial } from "react-chat-engine";


function TestChatEngine() {
   const { username, secret } = useContext(Context);
   const router = useRouter();
   const [showChat, setShowChat] = useState(false);
    useEffect(() => {
      if (typeof window !== "undefined") {
        setShowChat(true);
      }
    }, []);

    // Redirect to / if username or secret is missing
    useEffect(() => {
      if (!username || !secret) {
        router.push("/auth");
      }
    }, [username, secret, router]);
  return (
    <div className="background">
       <div className="shadow"></div>
      <ChatEngine
      height="calc(100vh - 200px)"
      projectID="2f131094-a299-42ab-af4b-867da94399f5"
      userName={username}
      userSecret={secret}
      renderNewMessageForm={() => <MessageFormSocial />}  />
     </div>
  )
}

export default TestChatEngine;
