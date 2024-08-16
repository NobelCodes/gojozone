import psycopg2

# Database connection parameters
hostname = 'localhost'
database = 'postgres'
username = 'postgres'
password = 'admin'
port = 5432

# SQL INSERT statement
insert_query = """
    INSERT INTO properties (type, bedroom, bathroom, title, price, address, size, condition, furnishing, lister, description, phone, name, imgsrc1, imgsrc2, imgsrc3, imgsrc4)
    VALUES
    (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
"""

# Data to insert
imgsrc1="http://192.168.1.103:8000/20240726_163158.jpg"
imgsrc2="http://192.168.1.103:8000/20240726_163158.jpg"
imgsrc3="http://192.168.1.103:8000/20240726_163158.jpg"
imgsrc4="http://192.168.1.103:8000/20240726_163158.jpg"
data = (f'Apartment', 2, 1, 'Cozy Apartment', 150000, 'kera', 850, 'old', 'Furnished', 'Owner', 'A cozy apartment in a great location.', '251948805172', 'Nobel Tadele', imgsrc1, imgsrc2, imgsrc3, imgsrc4)


try:
    # Connect to the PostgreSQL database
    connection = psycopg2.connect(
        host=hostname,
        database=database,
        user=username,
        password=password,
        port=port
    )
    
    # Create a cursor object
    cursor = connection.cursor()
    
    # Execute the INSERT statement
    cursor.execute(insert_query, data)
    
    # Commit the transaction
    connection.commit()
    
    print("Data inserted successfully")

except Exception as error:
    print(f"Error: {error}")

finally:
    # Close the cursor and connection
    if cursor:
        cursor.close()
    if connection:
        connection.close()
