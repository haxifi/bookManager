#!/usr/bin/python
import time
import json, ast
from jose import jwt
from datetime import datetime
from datetime import timedelta
from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer

PORT_LISTENER = 8080


class myBooksServer(BaseHTTPRequestHandler):
    SECRET_JWT_KEY = "XZqfmmw"

    DEFAULT_USER_LOGIN = "admin"
    DEFAULT_PASS_LOGIN = "password"


    def setHeader(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST')
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With")
        self.send_header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
        self.end_headers()


    # Read JSON file
    def readBooks(self, books):
        with open(books) as file:
            return json.dumps(json.load(file))

    #return current timestamp + N day
    def exp_date(self, day):
        data = datetime.now() + timedelta(days=day)
        return int(time.mktime(data.timetuple()))

    #read and get books
    def print_book(self):
        self.setHeader()
        # return 'books.json' content
        self.wfile.write(self.readBooks('books.json'))
        self.close_connection
        return

    def expired_token(self, message):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.end_headers()
        self.wfile.write(json.dumps({"message" : message}))
        self.close_connection
        return


    #Handler for the GET requests
    def do_GET(self):
        try:
            print "Get all Books"
            content_authorization = self.headers['Authorization'].split(' ') # Remove Bearer from token
            # ast.literal_eval  remove `u` from json
            param = ast.literal_eval(json.dumps(jwt.decode(content_authorization[1], self.SECRET_JWT_KEY, algorithms=['HS256'])))

            #if you check id or another param
            print param

            self.print_book()
        except:
            self.expired_token("Token expired")


    def do_OPTIONS(self):
        self.setHeader()
        self.close_connection


    # Handle for the POST requests
    def do_POST(self):
        token_param = {
            "user_id": 6, # Random id
            "exp": self.exp_date(1)
        }



        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        param = json.loads(post_data.decode('utf-8'))

        # To Debug
        print param

        self.setHeader()
        if param["username"] == self.DEFAULT_USER_LOGIN and param["password"] == self.DEFAULT_PASS_LOGIN:
            self.wfile.write(json.dumps({
                "success": 1,
                "user": "Turboli S.",
                "token": jwt.encode(token_param, self.SECRET_JWT_KEY, algorithm='HS256'),
                "message": "login success"
            }))
        else:
            self.wfile.write(json.dumps({
                "success": 0,
                "message": "login failed"
            }))

        #self.processRequest()
        self.close_connection


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
