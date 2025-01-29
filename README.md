# **Overview**

BrewersDiaryPlatform is a web based application that provides brewers with the tools to create and manage their own homebrews. The application logs data, calculates brew metrics and persists recipes for future reference. Alongside this, the application provides a public repository of published recipes by other brewers that can be downloaded and customized for personal use.

# **Project Structure**

```
|──husky/ # pre commit checks, commit lint, static analysis of code
|
|──app/ # springboot backend code
|
|──db/ # seeding scripts for postgres and docker
|
|──scripts/ # bash scripts for developer simplicity
|
|──web/ # frontend specific code
```

# **Getting started**

Bootstrapping project - `./scripts/setup.sh` 
Running app - `./scripts/start-dev.sh`

# **Standards**

- Husky commit linting:\
  We use husky to run our pre-commit hook and run lint staged and lint our code before work can be commited. Commit messages will also need to follow a specific format which you can find the config for in .husky/commit-msg

