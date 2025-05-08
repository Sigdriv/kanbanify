import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postIssue } from '@api';
import type { TkError } from '@http';
import type { Issue } from '@types';

import { queryKeys } from '../queryKeys';

interface Params {
  onSuccess: (issue: Issue) => void;
}

export function useCreateIssue({ onSuccess }: Params) {
  const queryClient = useQueryClient();

  const queryKey = queryKeys.getIssues;

  return useMutation<Issue, TkError, Issue>({
    mutationFn: postIssue,
    onSuccess: (issue) => {
      const existingIssues = queryClient.getQueryData<Issue[]>(queryKey);

      queryClient.setQueryData<Issue[]>(queryKey, () => {
        return [
          ...(existingIssues || []),
          {
            ...issue,
          },
        ];
      });

      onSuccess(issue);
    },
  });
}
