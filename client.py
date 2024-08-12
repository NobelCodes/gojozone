from fastapi import FastAPI
from fastapi.responses import FileResponse
from pathlib import Path

app = FastAPI()

# Ensure the downloads directory exists
downloads_path = Path("downloads")
downloads_path.mkdir(exist_ok=True)

@app.get("/get-image")
async def get_image():
    # Path to the static image file
    image_path = Path("pic.jpg")
    
    # Check if the file exists
    if not image_path.exists():
        return {"message": "File not found"}, 404

    # Serve the image file
    return FileResponse(image_path)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)@app.get("/get-image")
