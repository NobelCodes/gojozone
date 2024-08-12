# main.py
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
    with ZipFile(zip_stream, 'r') as zip_file:
        zip_file.extractall(UPLOAD_FOLDER)

    return JSONResponse(content={"message": "Files uploaded and extracted successfully"}, status_code=200)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="192.168.1.103", port=8000)
