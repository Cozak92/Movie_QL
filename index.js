import { GraphQLServer } from 'graphql-yoga'
import resolvers from "./GraphQL/resolvers"

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("GraphQL server is running"))