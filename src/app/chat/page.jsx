"use client";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "@/context";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import "@/styles/chats.css";
import "@/styles/auth.css";

const ChatEngine = dynamic(
  () => import("react-chat-engine").then((module) => module.ChatEngine),
  { ssr: false }
);

const MessageFromSocial = dynamic(
  () => import("react-chat-engine").then((module) => module.MessageFromSocial),
  { ssr: false }
);


export default function Chats() {
  const { username, secret } = useContext(Context);
  const router = useRouter();
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  }, []);

  if (!showChat) return <div>Loading...</div>;

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 200px)"
          projectID="e42e0a66-77f1-45f4-abf4-3f1a6cb0873e"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => {<MessageFromSocial />} }
        />
      </div>
    </div>
  );
}
