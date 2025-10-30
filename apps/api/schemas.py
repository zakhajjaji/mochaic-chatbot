# Define pydantic models for the api 

# Edit this file when we need structured inputs, outputs like chatrequest and/or chatresponse 

# this file will also contain the main api route and the logic for the api

from dataclasses import Field
from datetime import datetime
from pydantic import BaseModel  # pyright: ignore[reportMissingImports]
from typing import List, Optional

class ChatMessage(BaseModel): 
    role: str 
    content: str
    timestamp: Optional[datetime.datetime] = None
    message_type: Optional[str] = None

class ChatRequest(BaseModel):
    messages: List[ChatMessage]
    model: str = "gpt-4o-mini"
    temperature: float = 0.7
    max_tokens: int = 1000
    top_p: float = 1.0
    frequency_penalty: float = 0.0
    presence_penalty: float = 0.0
    n: int = 1
    stop: Optional[List[str]] = None
    stream: bool = False
    response_format: Optional[dict] = None

class ChatResponse(BaseModel):
    messages: List[ChatMessage]
    model: str = "gpt-4o-mini"
    temperature: float = 0.7
    max_tokens: int = 1000
    top_p: float = 1.0
    frequency_penalty: float = 0.0
    presence_penalty: float = 0.0
    n: int = 1
    stop: Optional[List[str]] = None
    stream: bool = False
    response_format: Optional[dict] = None

 
