import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = "upload"
IP_ADDRESS = "192.168.1.103"  # Change this to your desired IP address

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        # Translate the path to the 'upload' directory
        path = super().translate_path(path)
        return os.path.join(DIRECTORY, os.path.basename(path))

def run(server_class=http.server.HTTPServer, handler_class=CustomHandler):
    server_address = (IP_ADDRESS, PORT)
    httpd = server_class(server_address, handler_class)
    print(f"Serving files from '{DIRECTORY}' on {IP_ADDRESS}:{PORT}")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
