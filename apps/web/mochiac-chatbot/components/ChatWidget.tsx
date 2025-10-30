"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { MessageSquareMore } from "lucide-react";

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
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);
  

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
    <div className="fixed bottom-4 right-4">
    {!isOpen ? (
      <button
        className="w-20 h-20 rounded-full bg-primary text-white px-4 py-2 shadow-lg"
        onClick={() => setIsOpen(true)
        }
        id="ChatWidget"
      >
        <MessageSquareMore className="w-6 h-6 mt-2 mx-auto" />
        <span className="text-sm font-medium">Chat</span>
      </button>
    ) : (
      <div className="w-96 h-[28rem] bg-card rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200">
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 bg-accent">
          <span className="text-sm font-medium">Chat</span>
          <div className="flex items-center gap-2">
            <button
              className="text-xs text-foreground hover:text-foreground/60"
              onClick={() => setIsMinimised((v) => !v)}
            >
              {isMinimised ? "Expand" : "Minimize"}
            </button>
            <button
              className="text-xs text-foreground hover:text-foreground/60"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>

        {!isMinimised && (
          <>
            <div ref={listRef} className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
              {messages.map((m) => (
                <MessageBubble key={m.id} message={m} />
              ))}
            </div>
            <div className="p-3 border-t border-gray-200 bg-accent flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Type a message"
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={send}
                className="bg-primary text-white text-sm px-3 py-2 rounded-md disabled:opacity-50"
                disabled={!input.trim()}
              >
                Send
              </button>
            </div>
          </>
        )}

        {isMinimised && (
          <div className="p-3 text-xs text-foreground">Minimised</div>
        )}
      </div>
    )}
  </div>
);
} 