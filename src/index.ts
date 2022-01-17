// eslint-disable-next-line @typescript-eslint/no-require-imports
require('./configure');

import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import path from 'path';
import { buildSchema } from 'type-graphql';

import { PORT } from './configure';
import { FarmResolver } from './resolvers/FarmResolver';
import { logger } from './utils/logger';

(async () => {
  const schema = await buildSchema({
    emitSchemaFile: path.join(__dirname, '../schema.gql'),
    resolvers: [FarmResolver]
  });

  const server = new ApolloServer({ schema });
  const { url } = await server.listen(PORT);

  logger.info(`Server is running at ${url}`);
})();
