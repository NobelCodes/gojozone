from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
import psycopg2
from psycopg2.extras import RealDictCursor
from starlette.middleware.cors import CORSMiddleware
from zipfile import ZipFile
import io
import os
from pydantic import BaseModel
from psycopg2 import sql
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
conn = psycopg2.connect(database="postgres", user="postgres", password="admin", host="localhost", port="5432")
cursor = conn.cursor()
@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    # Debugging: Print the filename
    print(f"Received file: {file.filename}")

    # Check if file is a ZIP file
    if not file.filename.endswith('.zip'):
        raise HTTPException(status_code=400, detail="Only ZIP files are allowed")

    try:
        # Create a buffer to read the file
        file_content = await file.read()

        # Create a BytesIO stream
        zip_stream = io.BytesIO(file_content)
        image_sources = []

        with ZipFile(zip_stream, 'r') as zip_file:
            print("Files in zip:", zip_file.namelist())
            zip_file.extractall(UPLOAD_FOLDER)

            # Loop through extracted files and get their paths
            for filename in zip_file.namelist():
                image_sources.append(f"http://192.168.1.103:8000/{filename}")

        # Extract image sources
        imgsrc1 = image_sources[0] if len(image_sources) > 0 else ""
        imgsrc2 = image_sources[1] if len(image_sources) > 0 else ""
        imgsrc3 = image_sources[2] if len(image_sources) > 0 else ""
        imgsrc4 = image_sources[3] if len(image_sources) > 0 else ""

        # Insert into the database
        insert_query = """
        INSERT INTO properties (imgsrc1, imgsrc2, imgsrc3, imgsrc4)
        VALUES (%s, %s, %s, %s) RETURNING id;
        """
        values = (imgsrc1, imgsrc2, imgsrc3, imgsrc4)

        cursor.execute(insert_query, values)
        inserted_id = cursor.fetchone()[0]

        # Commit the transaction
        conn.commit()

        # Create a JSON response with the image sources and the inserted ID
        response_content = {
            "message": "Files uploaded, extracted, and inserted into the database successfully",
            "imgsrc1": imgsrc1,
            "imgsrc2": imgsrc2,
            "imgsrc3": imgsrc3,
            "imgsrc4": imgsrc4,
            "uuv": inserted_id
        }

        return JSONResponse(content=response_content, status_code=200)

    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))
DATABASE_PARAMS = {
    'dbname': 'postgres',
    'user': 'postgres',
    'password': 'admin',
    'host': 'localhost',  # or your database host
    'port': '5432'  # or your database port
}

class Property(BaseModel):
    id: int
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
    address: str
    title: str

@app.post("/submit")
async def submit_property(property: Property):
    conn = None
    try:
        # Connect to the PostgreSQL database
        conn = psycopg2.connect(**DATABASE_PARAMS)
        cur = conn.cursor()

        # Update the property record in the database
        update_query = sql.SQL("""
            UPDATE properties
            SET name = %s,
                lister = %s,
                furnishing = %s,
                condition = %s,
                type = %s,
                size = %s,
                bedroom = %s,
                bathroom = %s,
                phone = %s,
                description = %s,
                price = %s,
                address = %s,
                title = %s
            WHERE id = %s
        """)
        values = (
            property.name,
            property.listedBy,
            property.furnishing,
            property.condition,
            property.type,
            property.propertySize,
            property.bedrooms,
            property.bathrooms,
            property.phoneNumber,
            property.description,
            property.price,
            property.address,
            property.title,
            property.id

        )
        cur.execute(update_query, values)
        conn.commit()

        # Check if the update was successful
        if cur.rowcount == 0:
            raise HTTPException(status_code=404, detail="Property not found")
        
        return {"message": "Property updated successfully", "updated_property": property.id}
    
    except psycopg2.Error as e:
        # Handle any database errors
        raise HTTPException(status_code=500, detail=str(e))
    
    finally:
        # Close the database connection
        if conn:
            conn.close()
#a
DB_HOST = "localhost"
DB_PORT = "5432"
DB_NAME = "postgres"
DB_USER = "postgres"
DB_PASSWORD = "admin"

def get_db_connection():
    try:
        conn = psycopg2.connect(
            host=DB_HOST,
            port=DB_PORT,
            dbname=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD
        )
        return conn
    except Exception as e:
        print(f"Error connecting to the database: {e}")
        return None
# Route to get properties (assuming you have a function `fetch_properties` to fetch data)
@app.get("/properties")
async def get_properties():
    conn = get_db_connection()
    if conn is None:
        raise HTTPException(status_code=500, detail="Could not connect to the database")

    try:
        with conn.cursor(cursor_factory=RealDictCursor) as cursor:
            cursor.execute("SELECT * FROM properties")
            properties = cursor.fetchall()
            return JSONResponse(content=properties, status_code=200)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database query failed: {str(e)}")
    finally:
        conn.close()