import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <div className="relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-accent/40 via-background to-background" />
      <main className="mx-auto max-w-5xl px-6 pt-20 pb-28">
        <section className="text-center">
          <div className="inline-flex items-center rounded-full border border-accent bg-accent px-3 py-1 text-lg font-medium text-accent-foreground">
            New • Conversational AI starter
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Give your website a helpful digital agent
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Mochaic Chatbot is a drop-in widget built with Next.js and Tailwind.
            Start chatting instantly, then wire it up to your backend or LLM when you&apos;re ready.
          </p>
        </section>

        <section id="get-started" className="mt-16">
          <div className="mx-auto max-w-4xl rounded-xl border border-border bg-card p-6 shadow-md">
            <h2 className="text-lg font-semibold text-foreground">Try it now</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Open the chat in the bottom-right corner and ask anything.
            </p>
          </div>
        </section>
      </main>

      <ChatWidget />
    </div>
  );
}
