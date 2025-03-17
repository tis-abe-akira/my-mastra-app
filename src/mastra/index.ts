
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { weatherWorkflow } from './workflows';
import { weatherAgent } from './agents';
import { chefAgent } from './agents/chefAgent';

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { chefAgent, weatherAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
