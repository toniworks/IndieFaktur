# IndieFaktur Backend (FastAPI)

from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

class Invoice(BaseModel):
    id: int
    customer: str
    amount: float
    status: str

invoices = []

@app.get("/invoices", response_model=List[Invoice])
def get_invoices():
    return invoices

@app.post("/invoices")
def create_invoice(invoice: Invoice):
    invoices.append(invoice)
    return {"message": "Invoice created successfully"}

@app.get("/")
def home():
    return {"message": "IndieFaktur Backend Running"}
