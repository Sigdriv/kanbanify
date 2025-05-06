'use client';

import { Input, Textarea } from '@heroui/react';

interface Props {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}

export function TextInput({
  label,
  type,
  value,
  onChange,
  multiline = false,
}: Props) {
  return multiline ? (
    <Textarea
      label={label}
      type={type}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      rows={4}
    />
  ) : (
    <Input
      label={label}
      type={type}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
    />
  );
}
