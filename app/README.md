# **Overview**

Brewers Diary Backend responsible for serving and authenticating resources related to the application. Although not an absolute best use-case for the springboot framework, it has been chosen her to demonstrate knowledge.


# **Project Structure**

```
|──app/
|──────src/
|──────────main/ # main Code for app
|──────────────config/ # springboot config for security, routes, app security and jwt auth
|──────────────controller/ # all rest api and graphql endpoints specified in controllers
|──────────────dto/ # dto used with jackson for mapping json to pojo
|──────────────exception/ # genera;l global exceptions and graphql specific exceptions
|──────────────model/ # entities for hibernate
|──────────────repository/ # jpa repoisitory interfaces, abstracted function for our objects
|──────────────service/ # business logic specific functionality
|──────────test/ # all unit / integration tests for back end service

```

# **Standards**

-Hibernate not to be responsible for setup and data / table / db creation. All this is setup through bash scripts and db seed scripts when running docker compose.
-Standard project and file naming to apply as typical for most springboot apps
-Application uses REST for auth, however data will be handled with graphql


# Testing

### E2E testing


### Integration testing

### Unit testing