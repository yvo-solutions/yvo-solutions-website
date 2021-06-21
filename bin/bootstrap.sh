#!/bin/bash

# Check if npm is installed
npm --version >/dev/null 2>&1
if [ $? -ne 0 ]
then
    echo "Installing npm..."
    
    # Check if the nvm is installed
    nvm --version >/dev/null 2>&1
    if [ $? -ne 0 ]
    then
        echo "Error: nvm is not installed"
        echo "Try: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash"
        echo "Search for the latest nvm instead of 0.38.0"
        exit 1
    fi

    # Install the latest npm LTS with the nvm
    nvm install --lts
fi

# Install Gulp
gulp --version >/dev/null 2>&1
if [ $? -ne 0 ]
then
    echo "Installing Gulp..."
    npm install gulp -g
fi

# Install Netlify and its CLI
netlify --version >/dev/null 2>&1
if [ $? -ne 0 ]
then
    echo "Installing Netlify..."
    npm install netlify-cli -g
fi

# Install Eleventy
eleventy --version >/dev/null 2>&1
if [ $? -ne 0 ]
then
    echo "Installing Eleventy..."
    npm install @11ty/eleventy -g
fi

# Install the local dependencies
echo "Installing dependencies..."
npm install

# Compile a first time the website (to make sure all dependencies are fine)
echo "Compiling..."
gulp compile
if [ $? -ne 0 ]
then
    echo "Error: failed to build the website (check dependencies)"
    exit 1
fi

# Deploy to the Netlify dev environment (to setup the Netlify app and authorization token)
echo "Deploying..."
netlify deploy