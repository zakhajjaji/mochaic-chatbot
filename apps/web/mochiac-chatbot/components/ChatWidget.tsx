"use client";
import { cn } from "@/lib/utils";
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
  const [messags, setMessages] = useState<ChatMessage[]>([]);
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
  
  return (
    <div className="fixed bottom-4 right-4 w-96 h-full bg-card rounded-lg shadow-lg">
      
    </div>
  )}; 