# main.py is the entry point for the API
# it contains the FastAPI app and the routes
# it also contains the middleware for CORS
# it also contains the pydantic models for the API
# it also contains the services for the API

from apps.api.schemas import ChatRequest
from fastapi import FastAPI  # pyright: ignore[reportMissingImports]
from fastapi.middleware.cors import CORSMiddleware  # pyright: ignore[reportMissingImports]
from pydantic import BaseModel  # pyright: ignore[reportMissingImports]

app = FastAPI()

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

@app.post("/api/chat")
async def chat(request: ChatRequest):
    # Implement the logic to handle the chat request
    return {"message": "Chat request received"}

@app.get("/")
async def root():
    return {"message": "Welcome to theMochaic Chatbot API"}

@app.delete("/api/chat")
async def delete_chat():
    # Implement the logic to delete chat data
    return {"message": "Chat deleted"}