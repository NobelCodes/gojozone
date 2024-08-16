from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Define the Pydantic model
class PropertyData(BaseModel):
    id: str
    name: str
    listedBy: str
    furnishing: str
    condition: str
    type: str
    propertySize: str
    bedrooms: str
    bathrooms: str
    phoneNumber: str
    description: str
    price: str

# Define the endpoint to receive the data
@app.post("/submit")
async def receive_data(data: PropertyData):
    # Extract data from the Pydantic model
    property_id = data.id
    name = data.name
    listed_by = data.listedBy
    furnishing = data.furnishing
    condition = data.condition
    property_type = data.type
    property_size = data.propertySize
    bedrooms = data.bedrooms
    bathrooms = data.bathrooms
    phone_number = data.phoneNumber
    description = data.description
    price = data.price

    # Process or use the extracted variables as needed
    return {
        "property_id": property_id,
        "name": name,
        "listed_by": listed_by,
        "furnishing": furnishing,
        "condition": condition,
        "property_type": property_type,
        "property_size": property_size,
        "bedrooms": bedrooms,
        "bathrooms": bathrooms,
        "phone_number": phone_number,
        "description": description,
        "price": price
    }

# To run the FastAPI app, use the command below:
# uvicorn your_script_name:app --reload

if __name__ == "__main__":
    # Use import string to enable 'reload' option
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)