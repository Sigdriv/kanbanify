import type { TkError } from '@http';

import { useQuery } from '@tanstack/react-query';

import { getIssues } from '@api';
import type { Issue } from '@types';

import { queryKeys } from '../queryKeys';

export function useIssues() {
  const queryKey = queryKeys.getIssues;

  return useQuery<Issue[], TkError>({
    queryKey,
    queryFn: getIssues,
  });
}
