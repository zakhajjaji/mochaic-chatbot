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


// central place for re-usable helper functions
// The place to store small, re-usable helper functions 
// buttons, inputs, navbars, cards, modals, forms etc 
