#!/bin/bash

# Install dependencies for client and server
cd client && npm install
cd ../server && npm install

# Start the server in the background
cd ../server && npm run dev &

# Start the client development server
cd ../client && npm run dev