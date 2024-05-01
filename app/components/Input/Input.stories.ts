import { Meta, StoryObj } from "@storybook/react";
import Input, { InputProps } from "./Input";

const meta: Meta<InputProps> = {
  title: 'Molecules/Input',
  component: Input,
  argTypes: {
    label: { type: 'string' },
    className: { type: 'string' },
    multiline: { type: 'boolean' },
    disabled: { type: 'boolean' },
  },
};

export default meta;

const args = { value: 'Texto' };
const argsDisabled = { ...args, disabled: true };
const argsLabel = { ...args, label: 'Label' };
const argsMultiline = { ...args, multiline: true };

export const Primary: StoryObj<InputProps> = { args };

export const PrimaryDisabled: StoryObj<InputProps> = { args: argsDisabled };

export const PrimaryLabel: StoryObj<InputProps> = { args: argsLabel };

export const PrimaryLabelDisabled: StoryObj<InputProps> = {
  args: { ...argsLabel, ...argsDisabled },
};

export const Multiline: StoryObj<InputProps> = { args: argsMultiline };

export const MultilineDisabled: StoryObj<InputProps> = {
  args: { ...argsMultiline, ...argsDisabled },
};

export const MultilineLabel: StoryObj<InputProps> = {
  args: { ...argsMultiline, ...argsLabel },
};

export const MultilineLabelDisabled: StoryObj<InputProps> = {
  args: { ...argsMultiline, ...argsLabel, ...argsDisabled },
};
