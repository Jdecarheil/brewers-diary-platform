FROM maven:3.8.5-openjdk-17 as base
# FROM maven:3.8.2-jdk-8 # for Java 8

FROM base as dev
WORKDIR /app
COPY . .
RUN mvn clean install
CMD mvn spring-boot:run

FROM prod as dev
