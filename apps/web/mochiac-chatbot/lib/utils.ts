import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names and resolves Tailwind CSS conflicts.
 * Uses clsx for conditional classes and tailwind-merge to handle conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generates a unique ID using timestamp and optional prefix.
 */
export function generateId(prefix = ""): string {
  return `${prefix ? `${prefix}-` : ""}${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Formats a date to a localised time string.
 */
export function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

/**
 * Formats a date to a localised date and time string.
 */
export function formatDateTime(date: Date): string {
  return date.toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });    
  }

  // copy to clipboard
  export async function copyToClipboard(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Copied to clipboard:", text);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
      throw error;
    }
  }

// production read format for text output from chatgpt 
export function formtModelText(raw: string): string {
  if (!raw) return ""; 

  let text = raw.trim();

  // remove markdown code blocks and ```json
  text = text.replace(/```json\s*|\s*```/g, "");
  text = text.replace(/\*\*(.*?)\*\*/g, "$1"); // **bold**
  text = text.replace(/\*(.*?)\*/g, "$1");     // *italic*
  text = text.replace(/`(.*?)`/g, "$1");       // `code`

  // 2. Remove markdown headers (###, ##, #)
  text = text.replace(/^#{1,6}\s*/gm, "");

  // 3. Remove stray asterisks or markdown bullets at start of lines
  text = text.replace(/^\s*[-*]\s+/gm, "");

  // 4. Normalise multiple spaces or newlines
  text = text.replace(/\n{3,}/g, "\n\n"); // no more than 2 consecutive line breaks
  text = text.replace(/\s{2,}/g, " ");

  // 5. Optionally capitalise the first letter for cleaner look
  text = text.charAt(0).toUpperCase() + text.slice(1);

  return text.trim();
  // use in tsx file <p>{formtModelText(rawText)}</p>
}



