'use client';

import { Input, Textarea } from '@heroui/react';

interface Props {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  isRequired?: boolean;
  errorText?: string;
  isError?: boolean;
}

export function TextInput({
  label,
  type,
  value,
  onChange,
  multiline = false,
  isRequired = false,
  errorText,
  isError,
}: Props) {
  return multiline ? (
    <Textarea
      label={label}
      type={type}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      rows={4}
      isRequired={isRequired}
      errorMessage={errorText}
      isInvalid={isError}
    />
  ) : (
    <Input
      label={label}
      type={type}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      isRequired={isRequired}
      errorMessage={errorText}
      isInvalid={isError}
    />
  );
}
