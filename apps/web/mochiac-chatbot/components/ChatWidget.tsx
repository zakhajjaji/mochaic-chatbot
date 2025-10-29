"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";

type chatMessage = {
    role: "user" | "assistant" | "system";
    content: string;
    timestamp: Date;
    id: string;
    messageType: "text" | "image" | "audio" | "video" | "file";
}

type chatMessageProps = {
    message: chatMessage;
    isUser: boolean;
}

const ChatMessage = ({ message, isUser }: chatMessageProps) => {
    return (
        <div className={cn("flex flex-col gap-2", isUser ? "items-end" : "items-start")}>
            <h1>Chat Message</h1>
        </div>
    );
}


export default function ChatWidget() {
  return (
    <div className="fixed bottom-4 right-4 w-96 h-full bg-white rounded-lg shadow-lg">
      <h1>Chat Widget</h1>
    </div>
  );
}