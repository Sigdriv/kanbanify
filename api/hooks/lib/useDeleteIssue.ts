import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { DeleteIssueParams } from '@api';
import { deleteIssue } from '@api';
import type { TkError } from '@http';
import type { Issue } from '@types';

import { queryKeys } from '../queryKeys';

interface Params {
  onSuccess: () => void;
}

export function useDeleteIssue({ onSuccess }: Params) {
  const queryClient = useQueryClient();
  const queryKey = queryKeys.getIssues;

  return useMutation<{ message: string }, TkError, DeleteIssueParams>({
    mutationFn: deleteIssue,
    onSuccess: (_, { id }) => {
      const existingIssues = queryClient.getQueryData<Issue[]>(queryKey);

      queryClient.setQueryData<Issue[]>(queryKey, () =>
        existingIssues?.filter((issue) => issue.id !== id)
      );

      onSuccess();
    },
  });
}
