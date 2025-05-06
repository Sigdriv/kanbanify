import type { Issue } from '@types';

export const issuesMock: Issue[] = [
  {
    id: 'UTV-2',
    title: 'Task 1',
    status: 'backlog',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    variant: 'bug',
    createdAt: '2023-10-01T12:00:00Z',
    updatedAt: '2023-10-01T12:00:00Z',
  },
  {
    id: 'UTV-3',
    title: 'Task 2',
    status: 'inProgress',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    variant: 'chore',
    createdAt: '2023-10-01T12:00:00Z',
    updatedAt: '2023-10-01T12:00:00Z',
  },
  {
    id: 'UTV-5',
    title: 'Task 3',
    status: 'done',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    variant: 'task',
    createdAt: '2023-10-01T12:00:00Z',
    updatedAt: '2023-10-01T12:00:00Z',
  },
  {
    id: 'UTV-1',
    title: 'Task 4',
    status: 'backlog',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    variant: 'chore',
  },
  {
    id: 'UTV-4',
    title: 'Task 5',
    status: 'inProgress',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    variant: 'bug',
  },
];
