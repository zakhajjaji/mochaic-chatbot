import ChatWidget from "@/components/ChatWidget";
import { MessageSquare, Plug, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/40 via-background to-background" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-72 w-72 translate-x-1/4 translate-y-1/4 rounded-full bg-accent/30 blur-2xl" />
      <main className="mx-auto max-w-5xl px-6 pt-20 pb-28">
        <section className="text-center">
          <div className="inline-flex items-center rounded-full border border-accent bg-accent px-3 py-1 text-lg font-bold text-accent-foreground animate-pulse">
            New • Conversational AI Chatbot 
          </div>
          <h1 className="mt-6 mb-4 mx-auto py-6 text-4xl font-semibold tracking-tight sm:text-5xl bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
            Give your website a helpful digital agent.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Mochaic Chatbot is a drop-in widget built with Next.js and Tailwind and Python(FastAPI).
            Start chatting instantly, then wire it up to your backend or LLM when you&apos;re ready.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#ChatWidget"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get started
            </a>
            <a
              href="https://aureyatech.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
            >
              Learn more
            </a>
          </div>
        </section>

        <section className="mt-12 mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3 mx-auto max-w-4xl">
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground">Beautiful by default</h3>
            <p className="mt-1 text-sm text-muted-foreground">Polished UI with theme tokens that adapt to light/dark.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <MessageSquare className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground">Chat that feels alive</h3>
            <p className="mt-1 text-sm text-muted-foreground">Smooth scrolling, timestamps, and instant local replies.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
              <Plug className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground">Ready to connect</h3>
            <p className="mt-1 text-sm text-muted-foreground">Swap the demo reply for your API or LLM in minutes.</p>
          </div>
        </section>

        <section id="get-started" className="mt-12">
          <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-6 shadow-md">
            <h2 className="text-lg font-semibold text-foreground">Powered by AureyaTech</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              This chatbot experience is built and powered by AureyaTech. You can purchase and deploy it through AureyaTech upon request.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://aureyatech.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Visit AureyaTech
              </a>
              <a
                href="https://aureyatech.com/contact"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
              >
                Request purchase
              </a>
            </div>
          </div>
        </section>
      </main>

      <ChatWidget />
    </div>
  );
}
