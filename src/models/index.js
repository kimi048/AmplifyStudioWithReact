// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ActionCard } = initSchema(schema);

export {
  ActionCard
};