"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect, useMemo, useCallback, useRef } from "react";

export type ChatMessage = { 
    role: "user" | "assistant" | "system"; 
    content: string; 
    timestamp: Date;
    id: string; 
    messageType: "text" | "image" | "audio" | "video" | "file"; 
}

const ChatMessage = ({ message}: {message: ChatMessage}) => {
  const isUser = message.role === "user"; 
  return (
    <div className={cn("flex flex-col gap-2", isUser ? "items-end" : "items-start")}>
      <h1>Chat Message</h1>
      <p>{message.content}</p>
      <p>{message.timestamp.toLocaleString()}</p>
    </div>
  )
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimised, setIsMinimised] = useState(false);
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);
  const [message, setMessage] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastAcivtityAt, setLastAcivtityAt] = useState<Date | null>(null);
  const [showSoftReset, setShowSoftReset] = useState<boolean>(false);
  const [CopiedId, setCopiedId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Record<number, "up" | "down">>({});

  // later add const for CTAs AND AI suggestions 
  
  return (
    <div className="fixed bottom-4 right-4 w-96 h-full bg-card rounded-lg shadow-lg">
      <h1>Chat Widget</h1>
    </div>
  );
}