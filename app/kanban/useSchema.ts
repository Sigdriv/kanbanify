import { globalSchema } from '@schema';

export function useSchema() {
  const { createStringSchema } = globalSchema();

  const schema = {
    title: createStringSchema('Title', 1, 100),
    description: createStringSchema('Description', 1, 400),
  };

  return {
    schema,
  };
}
