from fastapi import FastAPI
app = FastAPI()

data = [
{
    "title": "Luxury Apartment in Bole",
    "address": "Bole",
    "size": "100 m²",
    "condition": "New",
    "furnishing": "Partially Furnished",
    "lister": "Owner",
    "description": "This is descaription 2",
    "type": "Apartment",
    "bed": "2 Bedroom",
    "bathroom": "1 Bathroom",
    "price": "1000 ETB"
  },
  {
    "title": "Luxury Apartment in Bole",
    "address": "Bole",
    "size": "70 m²",
    "condition": "New",
    "furnishing": "Partially Furnished",
    "lister": "Owner",
    "description": "This is description 2",
    "type": "Apartment",
    "bed": "2 Bedroom",
    "bathroom": "1 Bathroom",
    "price": "1000 ETB"
  },
  {
    "title": "Luxury Apartment in kera",
    "address": "Kera",
    "size": "60 m²",
    "condition": "New",
    "furnishing": "Partially Furnished",
    "lister": "Owner",
    "description": "This is description 2",
    "type": "Apartment",
    "bed": "2 Bedroom",
    "bathroom": "1 Bathroom",
    "price": "1000 ETB"
  },

  ]


@app.get("/item/{item_id}")
async def main(item_id):
	return data[2]