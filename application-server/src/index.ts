import { GraphQLServer } from 'graphql-yoga'
import { database, permissions } from './utils'
import resolvers from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  context: req => ({
    ...req,
    db: database,
  }),
  middlewares: [permissions],
})

server.start(
  {
    cacheControl: true,
    port: (process.env.DEV_NODE_PORT || 4000),
  },
  ({ port }) => console.log(`Server is running on http://localhost:${port}`),
)
