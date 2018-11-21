import sys, os
from http.server import *
from functools import partial


         

if __name__ == '__main__':

    handler_class = SimpleHTTPRequestHandler
    handler_class.extensions_map.update({ ".wasm" : "application/wasm" })
    handler_class = partial(handler_class, directory=os.getcwd())    
    
    server_address = ("", 8000)
    with ThreadingHTTPServer(server_address, handler_class) as httpd:
        sa = httpd.socket.getsockname()
        serve_message = "Serving HTTP on {host} port {port} (http://{host}:{port}/) ..."
        print(serve_message.format(host=sa[0], port=sa[1]))
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nKeyboard interrupt received, exiting.")
    