## Mochaic Chatbot (Web)

A lightweight Next.js app that renders a floating chat widget for your site. It ships with a clean UI, sensible defaults, and a client-side demo loop so you can see the interactions immediately. Intended as a starter you can connect to your own backend or LLM service.

### Features
- **Floating Chat Widget**: Toggle open/close, minimise/expand, smooth scroll to latest message
- **Message UI**: Distinct user/assistant bubbles with timestamps
- **Keyboard Support**: Send with Enter
- **Tailwind v4 styling** with utility helpers
- **Next.js 16 / React 19** baseline

### Tech Stack
- **Framework**: Next.js 16 (App Router) | TypeScript
- **UI**: React 19, Tailwind CSS v4
- **Icons**: `lucide-react`
- **Styling utils**: `clsx`, `tailwind-merge`

### Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

No environment variables are required for the demo. The widget currently simulates a response client-side.

### Available Scripts
- `npm run dev`: Start Next.js in development mode
- `npm run build`: Create a production build
- `npm run start`: Start the production server (after build)
- `npm run lint`: Run ESLint

### Project Structure
```text
apps/web/mochiac-chatbot/
  app/
    layout.tsx          # Global HTML, fonts, metadata
    page.tsx            # Renders the ChatWidget
    globals.css         # Global styles (Tailwind)
  components/
    ChatWidget.tsx      # Floating chat widget component
  lib/
    utils.ts            # cn() className helper
  next.config.ts        # Next.js config
  package.json          # Scripts and dependencies
  README.md             # This file
```

### How It Works
- `app/page.tsx` mounts the `ChatWidget`.
- `components/ChatWidget.tsx` manages widget open/minimize state, message list, input, and a simple simulated assistant reply.
- `lib/utils.ts` provides a `cn()` helper for safe class merging.

### Customisation Guide
- **Branding**: Update colors and tokens in `globals.css` and classes inside `ChatWidget.tsx`.
- **Copy/Texts**: Adjust the initial greeting and labels in `ChatWidget.tsx`.
- **Behavior**: Replace the simulated reply with your API call in the `send()` function. For example, swap the `setTimeout` block with a `fetch('/api/chat')` call and stream or append messages.
- **Placement**: The widget is positioned bottom-right via `fixed bottom-4 right-4`. Change these classes to move it.

### Production Build
```bash
npm run build
npm run start
```
Deploy as a standard Next.js app to your platform of choice (Vercel, Netlify, Render, etc.).

### Accessibility Notes
- Buttons and inputs use semantic HTML.
- Keyboard sending via Enter is supported. Consider adding labels/ARIA where needed for your brand copy.

### Troubleshooting
- Port already in use: stop the existing process or change the port via `PORT=3001 npm run dev`.
- Type issues: ensure your Node, TypeScript, and `@types/*` versions match the ones in `package.json`.

### License
Copyright © Mochaic. All rights reserved.
