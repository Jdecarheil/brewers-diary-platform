#!/bin/bash

cd app 
./mvnw clean package
docker compose up -d