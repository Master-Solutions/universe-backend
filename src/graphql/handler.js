import { ApolloServer } from 'apollo-server-lambda';
import typeDefs from './lib/typeDefs';
import resolvers from './lib/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => {
    console.log(error);
    return error;
  },
  formatResponse: response => {
    console.log(response);
    return response;
  },
  context: ({ event, context }) => {
    console.log('Event:', event);
    return {
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
    };
  },
  // playground: {
  //   endpoint: process.env.PLAYGROUND_ENDPOINT
  //     ? process.env.PLAYGROUND_ENDPOINT
  //     : '/production/graphql',
  // },
  tracing: true,
});

export default server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
    // methods: 'POST',
    allowedHeaders: ['Content-Type', 'Authorization'],
  },
});
