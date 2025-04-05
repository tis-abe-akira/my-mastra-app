
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { weatherWorkflow } from './workflows';
import { weatherAgent } from './agents';
import { chefAgent } from './agents/chefAgent';
import { clineRulesAgent } from './agents/clineRulesAgent';
import { webSearchAgent } from './agents/webSearchAgent';

export const mastra = new Mastra({
  workflows: { weatherWorkflow },
  agents: { chefAgent, weatherAgent, clineRulesAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
});
