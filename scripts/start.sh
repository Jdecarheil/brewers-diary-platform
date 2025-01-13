#!/bin/bash

cd app 

docker-compose rm -f -v #[TODO] - fix anonymous volumes, short term hack here

echo -e "... Shuting down previous containers ..."
docker compose down -v

echo -e "... Packaging the app ..."
./mvnw clean package

echo -e "... Building image and running in detached mode ..."
docker compose up --build -d

echo -e "... Up and running ..."