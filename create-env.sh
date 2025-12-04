#!/bin/bash

# Check if the $1 arg is good
if [[ -z "$1" || ("$1" != "development" && "$1" != "production") ]]; then
  echo "Please provide a name for the environment"
  echo "Usage: ./create-env.sh [development|production]"
  exit 1
fi

# Create or update .env file
if [ ! -f .env ]; then
  touch .env
  echo "NODE_ENV='$1'" > .env
  echo "#========================== The above line is auto generated" >> .env
  echo "#========================== Do not edit manually" >> .env
  echo "#========================== Add your additional variables below" >> .env
else
  sed -i "s/NODE_ENV='.*'/NODE_ENV='$1'/" .env
fi

echo "Created/Updated .env file"