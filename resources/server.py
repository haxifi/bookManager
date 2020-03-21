#!/usr/bin/python
import json
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer

PORT_LISTENER = 8080


class myBooksServer(BaseHTTPRequestHandler):

    # Read JSON file
    def readBooks(self, books):
        with open(books) as file:
            return json.dumps(json.load(file))

    def do_it(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        # return 'books.json' content
        self.wfile.write(self.readBooks('books.json'))
        self.close_connection
        return

    # Handler for the GET requests
    def do_GET(self):
        self.do_it()

    # Handle for the POST requests
    def do_POST(self):
        self.do_it()


try:
    # Create a web server and define the handler to manage the
    # incoming request
    server = HTTPServer(('', PORT_LISTENER), myBooksServer)
    print 'Started HTTP-Server on port ', PORT_LISTENER

    # Wait forever for incoming http requests
    server.serve_forever()

except KeyboardInterrupt:
    print '^C received, shutting down the web server'
    server.socket.close()
