'use client';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/react';

import { Button, Text, Trash } from '.';

interface BaseProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  header: string;
  confirmText: string;
  children: React.ReactNode;
  isLoading?: boolean;
  onDelete?: () => void;
}

type WithCancel = BaseProps & {
  onCancel: () => void;
  cancelText: string;
};

type WithoutCancel = BaseProps & {
  onCancel?: undefined;
  cancelText?: never;
};

type Props = WithCancel | WithoutCancel;

export function Dialog({
  isOpen,
  onClose,
  onConfirm,
  header,
  confirmText,
  children,
  onCancel,
  cancelText,
  isLoading,
  onDelete,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          <Text>{header}</Text>
        </ModalHeader>

        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          {onDelete && (
            <Button onClick={onDelete} color="danger" isIconOnly>
              <Trash />
            </Button>
          )}

          {onCancel && <Button onClick={onCancel}>{cancelText}</Button>}

          <Button
            variant="solid"
            onClick={onConfirm}
            isLoading={isLoading}
            color={confirmText === 'Delete' ? 'danger' : 'default'}
          >
            {confirmText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
