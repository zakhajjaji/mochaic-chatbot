"use client";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
  id: string;
  messageType: "text" | "image" | "audio" | "video" | "file";
};

const MessageBubble = ({ message }: { message: ChatMessage }) => {
  const isUser = message.role === "user";
  return (
    <div className={cn("flex flex-col gap-1 max-w-[80%]", isUser ? "self-end items-end" : "self-start items-start")}>
      <div className={cn("rounded-lg px-3 py-2 text-sm", isUser ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900")}>
        {message.content}
      </div>
      <span className="text-[10px] text-gray-500">{message.timestamp.toLocaleTimeString()}</span>
    </div>
  );
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimised, setIsMinimised] = useState(false);
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([  {
    id: "Greet-1",
    role: "assistant",
    content: "Hi! Ask me anything.",
    timestamp: new Date(),
    messageType: "text",
  }]);

  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastActivityAt, setLastActivityAt] = useState<Date | null>(null);
  const [showSoftReset, setShowSoftReset] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<Record<number, "up" | "down">>({});
  const [ctas, setCtas] = useState<string[]>([]);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  

  const listRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
   }, [messages, isOpen, isMinimised]);
   if (listRef.current) {
     listRef.current.scrollTo({
       top: listRef.current.scrollHeight,
       behavior: "smooth",
     });
   }

   const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: ChatMessage = {
      id: `${Date.now()}-user`,
      role: "user",
      content: trimmed,
      timestamp: new Date(),
      messageType: "text",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const reply: ChatMessage = {
        id: `${Date.now()}-assistant`,
        role: "assistant",
        content: "Thinking ...", 
        timestamp: new Date(),
        messageType: "text",
      };
      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 h-half bg-card rounded-lg shadow-lg">

    </div>
  )}; 