'use client';

import {
  CardBody,
  CardFooter,
  CardHeader,
  Card as HeroCard,
} from '@heroui/react';

import type { Status, Variant } from '@types';

import { Bug, Chore, Task } from './icons';
import { Text } from './typography';

interface Props {
  title: string;
  id: string;
  status: Status;
  onClick: () => void;
  description: string;
  variant: Variant;
  onDrag: () => void;
}

export function Card({
  title,
  id,
  onClick,
  status,
  description,
  variant,
  onDrag,
}: Props) {
  return (
    <HeroCard draggable onDragStart={onDrag} isPressable onClick={onClick}>
      <CardHeader>
        <Text>{title}</Text>
      </CardHeader>

      <CardBody>
        <p>{description}</p>
      </CardBody>

      <CardFooter>
        <div className="flex justify-between w-full items-center">
          {/* TODO: Skall det være noe mer her?? */}
          {/* <p>Something</p> */}

          <div className="w-full flex gap-2 items-center justify-end">
            {variant === 'bug' && <Bug size={24} />}
            {variant === 'chore' && <Chore size={24} />}
            {variant === 'task' && <Task size={30} />}

            <p className={status === 'done' ? ' line-through' : ''}>{id}</p>
          </div>
        </div>
      </CardFooter>
    </HeroCard>
  );
}
