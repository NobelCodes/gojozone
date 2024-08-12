from fastapi import FastAPI, File, UploadFile
import os
from pathlib import Path

app = FastAPI()

# Ensure the downloads directory exists
downloads_path = Path("downloads")
downloads_path.mkdir(exist_ok=True)

@app.post("/upload-image")
async def upload_image(image: UploadFile = File(...)):
    image_path = downloads_path / image.filename
    
    # Save the image to the downloads directory
    with open(image_path, "wb") as buffer:
        buffer.write(await .read())
image
    return {"message": "Image uploaded successfully", "path": str(image_path)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
