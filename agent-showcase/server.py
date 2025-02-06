from flask import Flask, send_from_directory
import os

app = Flask(__name__)

# Serve static files from the current directory
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

# Serve CSS files
@app.route('/css/<path:path>')
def serve_css(path):
    return send_from_directory('css', path)

# Serve JavaScript files
@app.route('/js/<path:path>')
def serve_js(path):
    return send_from_directory('js', path)

# Add API endpoints here if needed
@app.route('/api/health')
def health_check():
    return {'status': 'ok'}

if __name__ == '__main__':
    # Enable debug mode for development
    app.debug = True
    # Run the server on port 5000
    app.run(host='0.0.0.0', port=5000)