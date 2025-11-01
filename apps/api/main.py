# main.py is the entry point for the API
# it contains the FastAPI app and the routes
# it also contains the middleware for CORS
# it also contains the pydantic models for the API
# it also contains the services for the API

from apps.api.schemas import ChatRequest, ChatResponse
from fastapi import FastAPI, HTTPException, status  # pyright: ignore[reportMissingImports]
from fastapi.middleware.cors import CORSMiddleware  # pyright: ignore[reportMissingImports]

app = FastAPI(
    title="Mochaic Chatbot API",
    description="This is the API for the Mochaic Chatbot service",
    version="1.0.0"
)

origins = [
    "http://localhost:3000",
    "https://mochaic.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/chat", response_model=ChatResponse, status_code=status.HTTP_200_OK)
async def chat(request: ChatRequest):
    # Implement the logic to handle the chat request
    return {"message": "Chat request received"}

@app.get("/")
async def root():
    """Root endpoint - API welcome message."""
    return {"message": "Welcome to the Mochaic Chatbot API"}

@app.delete("/api/chat")
async def delete_chat():
    # Implement the logic to delete chat data
    return {"message": "Chat deleted"}