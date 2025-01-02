# **Overview**

BrewersDiary is a web based application that provides brewers with the tools to create and manage their own homebrews. The application logs data, calculates brew metrics and persists recipes for future reference. Alongside this, the application provides a public repository of published recipes by other brewers that can be downloaded and customized for personal use.

# **Getting started**

#### _Pre-Requisite:_

- node 20
- yarn 1.22+

#### _Commands to run_

```
git clone https://github.com/Jdecarheil/brewers-diary-web.git
cd BrewersDiaryWeb
cp .env.example .env
./scripts/setup.sh
yarn
```

# **Project Structure**

```

src
│
|──app/
|─────routes/
|─────index.tsx
|─────provider.tsx
|─────router.tsx
|
|──assets # all static content such as images reside here.
|
|──components # shared components used across the entire application.
|───────────*/ # all other components are developer defined and generall are re-usable
|───────────ui/ # Shadcn installed components, not to be modified
|
|──config # global app wide configurations
|
|──constants # enums and constant values to reside here
|
|──features/ # feature based modules
|──────────<feature>  # specific feature
|───────────────────api/  # api specific functionality for the feature
|───────────────────components/ # components specific to this feature
|
|──hooks # shared hooks used across the entire application
|
|──lib # reusable functions and libraries that can be used accross the app and dont target any specific functionality
|
|──schemas # zod schemas for api data response/request and form validation
|
|──styles # tailwind input / output sources
|
|──types # types to be shared accross the application
|
|──utils # utility classes and functions that can be useds anywhere
```

## Static analysis

- Typescript\
  A standard nowadays in javascript projects to ensure type safety and get mroe assurance as our app scales.

- Biome linting:\
  Formatting and rule checking to lint code, configured to run on commits

- Husky commit linting:\
  We use husky to run our pre-commit hook and run lint staged and lint our code before work can be commited. Commit messages will also need to follow a specific format which you can find the config for in .husky/commit-msg

- Prettier:\
  Is not yet ran through our pre-commit hook, however the default config file is found at the root of this application and it is suggested to use the prettier plugin for vscode and format on save

- Zod:\
  Whilst not static, zod is used for schema declaration and validation with our input form data as well as network request/response data. As typescript checks types at compile time, we cannot guarantee safe types at runtime.

# **Coding Standards**

- _File names and folders to use kebab-case._
- _Functional components to use upper camel._
- _Where code can be reused, it should be included at the highest "relevant" directory_
- _Unit tests accross the logic and accross all components_
- _dependencies not referenced in code to be installed globally via shell setup script_
- _types to be used over interfaces where it makes sense_

# Testing

### E2E testing

We use playwright to simulate a typical user journey using headless.

### Integration testing

### Unit testing

This project aims to unit test every piece of functionality where possible. This allows us to not only have assurance in the code we write, but also helps us to rethink how we wrote our code the first time in lieue of TDD. Lastly, future developers may change existing functionality without being cognizant, therefore our unit testing coverage should provide another level of feedback to the developer.

Project uses vitest for easier integration with vite and works out of the box. In some cases vitest has proven to be faster and easier to set up. Combined with vitest is React Test Library for our component testing.

# Design

### Component Library

Shadcn is used for our component library. This works a little different to standard component libraries that come from a registry such as npm

### StoryBook

We use story book in our project to build out our components in isolation. We can avoid running the whole app and bringing in other components when we need to focus on a specific component to test and develop.

Some components will have multiple stories so we can test and view components in different states.

`yarn run storybook` to view the storybook development server at http://localhost:6006/

### TailwindCSS

For added customizability where shadcn cannot support the desired design out of the box, we use tailwindcss. A popular utility class based css framework that provides atomic classes that we write embedded into our components. This supports much faster development accross this app.

### Image Assets

Aim for avif or webpg

# Notes

### Code Splitting

This project uses code splitting for all routes and sub routes. The size of the application is small and does not generally warrant lazy loading anything due to the small bundle size. However, as this serves as a portfolio project, it has been used for demonstration purposes and may be changed if app goes live.
