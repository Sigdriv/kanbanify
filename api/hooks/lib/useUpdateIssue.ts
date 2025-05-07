import { useMutation, useQueryClient } from '@tanstack/react-query';

import { patchIssue } from '@api';
import type { TkError } from '@http';
import type { Issue } from '@types';

import { queryKeys } from '../queryKeys';

interface Params {
  onSuccess: () => void;
}

export function useUpdateIssue({ onSuccess }: Params) {
  const queryClient = useQueryClient();
  const queryKey = queryKeys.getIssues;

  return useMutation<{ message: string }, TkError, Issue>({
    mutationFn: patchIssue,
    onSuccess: (_, updatedIssue) => {
      const existingIssues = queryClient.getQueryData<Issue[]>(queryKey);

      queryClient.setQueryData<Issue[]>(queryKey, () => {
        return existingIssues?.map((issue) => {
          if (issue.id === updatedIssue.id) {
            return {
              ...updatedIssue,
              status: updatedIssue.status,
              title: updatedIssue.title,
              description: updatedIssue.description,
              variant: updatedIssue.variant,
            };
          }
          return issue;
        });
      });
      onSuccess();
    },
  });
}
