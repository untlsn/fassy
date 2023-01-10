import type { FastifyInstance } from 'fastify';

export default async (app: FastifyInstance) => {
  app.get('/api', () => (
    'Hello World!'
  ));
};
