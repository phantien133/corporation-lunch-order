## Requirements

You need to have the [GraphQL CLI](https://github.com/graphql-cli/graphql-cli) installed to bootstrap your GraphQL server using `graphql create`:

```sh
npm install -g graphql-cli
```

# How to run on Local

## 1. Install (Ignore if installed)

    * Docker
    * Yarn
    * prisma
    * graphql-cli
## 2. Config dev enviroments
```sh
  cp .env.examples .env
```
    * Update `.env` with correct enviroments
## 2. Start server
 - Runs on http://localhost:4000 and open GraphQL Playground
```sh
  yarn dev
```

### Commands

* `yarn start` starts GraphQL server on `http://localhost:4000`
* `yarn dev` starts GraphQL server on `http://localhost:4000` _and_ opens GraphQL Playground
* `yarn playground` opens the GraphQL Playground for the `projects` from [`.graphqlconfig.yml`](./.graphqlconfig.yml)
* `yarn prisma <subcommand>` gives access to local version of Prisma CLI (e.g. `yarn prisma deploy`)
