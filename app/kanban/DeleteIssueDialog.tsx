import { Dialog, Text } from '@components';
import { useDeleteIssue } from '@hooks';

interface Props {
  id: string;
  setId: (id: string | undefined) => void;
  onSuccess: () => void;
}

export function DeleteIssueDialog({ id, setId, onSuccess }: Props) {
  const { mutate, isPending } = useDeleteIssue({ onSuccess });

  return (
    <Dialog
      isOpen={!!id}
      onClose={() => setId(undefined)}
      onConfirm={() => mutate({ id })}
      header={`Slette ${id}`}
      confirmText="Delete"
      onCancel={() => setId(undefined)}
      cancelText="Cancel"
      isLoading={isPending}
    >
      <Text>Vil du slette issue {id}?</Text>
    </Dialog>
  );
}
