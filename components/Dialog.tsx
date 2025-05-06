'use client';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@heroui/react';

import { Button, Text } from '.';

interface BaseProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  header: string;
  body?: string;
  confirmText: string;
  children?: React.ReactNode;
  isLoading?: boolean;
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
  body,
  confirmText,
  children,
  onCancel,
  cancelText,
  isLoading,
}: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>
          <Text>{header}</Text>
        </ModalHeader>

        <ModalBody>
          {children && children}
          {body && <p>{body}</p>}
        </ModalBody>

        <ModalFooter>
          {onCancel && <Button onClick={onCancel}>{cancelText}</Button>}

          <Button variant="solid" onClick={onConfirm} isLoading={isLoading}>
            {confirmText}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
