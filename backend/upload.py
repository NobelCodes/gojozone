from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from starlette.responses import StreamingResponse
from zipfile import ZipFile
import io
import os
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins. For production, specify only the necessary origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods. For production, specify only the necessary methods
    allow_headers=["*"],  # Allows all headers. For production, specify only the necessary headers
)

UPLOAD_FOLDER = './upload'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    # Create a buffer to read the file
    file_content = await file.read()

    # Create a BytesIO stream
    zip_stream = io.BytesIO(file_content)
    image_sources = []

    with ZipFile(zip_stream, 'r') as zip_file:
        # Extract all files in the zip archive
        zip_file.extractall(UPLOAD_FOLDER)

        # Loop through extracted files and get their paths
        for filename in zip_file.namelist():
            file_path = os.path.join(UPLOAD_FOLDER, filename)
            image_sources.append(file_path)
    
    # Create a JSON response with the image sources
    response_content = {
        "message": "Files uploaded and extracted successfully",
        "imgsrc1": image_sources[0] if len(image_sources) > 0 else None,
        "imgsrc2": image_sources[1] if len(image_sources) > 1 else None,
        "imgsrc3": image_sources[2] if len(image_sources) > 2 else None,
        "imgsrc4": image_sources[3] if len(image_sources) > 3 else None,
    }

    return JSONResponse(content=response_content, status_code=200)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="192.168.1.103", port=8000)
