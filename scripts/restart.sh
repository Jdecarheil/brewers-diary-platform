#!/bin/bash

cd app 

echo -e "... Shuting down previous containers ..."
docker compose down

echo -e "... Packaging the app ..."
./mvnw clean package

echo -e "... Building image and running in detached mode ..."
docker compose up --build -d

echo -e "... Up and running ..."