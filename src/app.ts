import { join } from 'path';
import type { AutoloadPluginOptions } from '@fastify/autoload';
import AutoLoad from '@fastify/autoload';
import type { FastifyPluginAsync } from 'fastify';

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;


// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {
};

const app: FastifyPluginAsync<AppOptions> = async (fastify, opts) => {
  ['plugins', 'routes'].forEach((dir) => {
    fastify.register(AutoLoad, {
      dir: join(__dirname, dir),
      options: opts,
    });
  });
};

export default app;
export { app, options };
