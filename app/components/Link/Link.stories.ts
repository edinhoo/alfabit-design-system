import { Meta, StoryObj } from '@storybook/react';

import Link, { LinkProps } from './Link';

const meta: Meta<LinkProps> = {
  title: 'Molecules/Link',
  component: Link,
  argTypes: {
    children: { type: 'string' },
    className: { type: 'string' },
    href: { type: 'string' },
    disabled: { type: 'boolean' },
  },
};

export default meta;

const args = { children: 'Link', href: '/' };
const argsDisabled = { ...args, disabled: true };
const argsViolet = { ...args, className: 'theme-violet' };

export const Primary: StoryObj<LinkProps> = { args };

export const Disabled: StoryObj<LinkProps> = { args: argsDisabled };

export const Violet: StoryObj<LinkProps> = { args: argsViolet };

export const VioletDisabled: StoryObj<LinkProps> = {
  args: { ...argsViolet, ...argsDisabled },
};
