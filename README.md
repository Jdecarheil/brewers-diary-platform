# **Overview**

## Static analysis

- _Typescript._
- _Biome linting_
Formatting and rule checking to lint code, configured to run on commits

- _Husky commit linting_
- _prettier_

# **Project Structure**

src
|
+-- app # application layer containing:
| | # this folder might differ based on the meta framework used
| +-- routes # application routes / can also be pages
| +-- app.tsx # main application component
| +-- provider.tsx # application provider that wraps the entire application with different global providers - this might also differ based on meta framework used
| +-- router.tsx # application router configuration
+-- assets # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components # shared components used across the entire application
|
+-- config # global configurations, exported env variables etc.
|
+-- features # feature based modules
|
+-- hooks # shared hooks used across the entire application
|
+-- lib # reusable libraries preconfigured for the application
|
+-- stores # global state stores
|
+-- testing # test utilities and mocks
|
+-- types # shared types used across the application
|
+-- utils # shared utility functions

# project setup

Pre-Requisite:

- node 18

Run `./scripts/setup.sh` from the root directory to install dependencies globally

# **Coding Standards**

- _File names and folders to use kebab-case._
- _Functional components to use upper camel._

# **TailwindCSS**

# **Husky**

# **project standards**

- \*dependencies not referenced in code to be installed globally via shell setup script
- \*depdencies that are referenced in code to be installed locally and referenced in package json, pay attention to dependency/dev-dependency

# StoryBook

We use story book in our project to build out our components in isolation. We can avoid running the whole app and bringing in other components when we need to focus on a specific component to test and develop.

Some components will have multiple stories so we can test and view components in different states.

`yarn run storybook` to view the storybook development server at http://localhost:6006/

# Testing

**E2E testing**

**Integration testing**

**Unit testing**

Project uses vitest for easier integration with vite and works out of the box. In some cases vitest has proven to be faster. Combined with vitest is React Test Library for our component testing.

# Component Library

Shadcn is used for our component library. This works a little different to standard component libraries that come from a registry such as npm
