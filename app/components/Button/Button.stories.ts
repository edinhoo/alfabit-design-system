import { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    children: { type: 'string' },
    disabled: { type: 'boolean' },
    className: { type: 'string' },
  },
};

export default meta;

const args: ButtonProps = { children: 'Botão' };
const argsDisabled: ButtonProps = { ...args, disabled: true };
const argsSecondary: ButtonProps = { ...args, variant: 'secondary' };
const argsTertiary: ButtonProps = { ...args, variant: 'tertiary' };
const argsViolet: ButtonProps = { ...args, className: 'theme-violet' };

export const Primary: StoryObj<ButtonProps> = { args };

export const Disabled: StoryObj<ButtonProps> = { args: argsDisabled };

export const Secondary: StoryObj<ButtonProps> = { args: argsSecondary };

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: { ...argsSecondary, ...argsDisabled }
};

export const Tertiary: StoryObj<ButtonProps> = { args: argsTertiary };

export const TertiaryDisabled: StoryObj<ButtonProps> = {
  args: { ...argsTertiary, ...argsSecondary },
};

export const Violet: StoryObj<ButtonProps> = { args: argsViolet };

export const VioletDisabled: StoryObj<ButtonProps> = {
  args: { ...argsViolet, ...argsDisabled },
};

export const VioletSecondary: StoryObj<ButtonProps> = {
  args: { ...argsViolet, ...argsSecondary },
};

export const VioletSecondaryDisabled: StoryObj<ButtonProps> = {
  args: { ...argsViolet, ...argsSecondary, ...argsDisabled },
};

export const VioletTertiary: StoryObj<ButtonProps> = {
  args: { ...argsViolet, ...argsTertiary },
};

export const VioletTertiaryDisabled: StoryObj<ButtonProps> = {
  args: { ...argsViolet, ...argsTertiary, ...argsDisabled },
};
