import type { Meta, StoryObj } from "@storybook/react";
import ChevronLeftIcon from "../assets/chevron_left.svg";
import { Button } from "./Button";
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

// eslint-disable-next-line import/no-default-export
export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  render: (args) => <Button {...args} />,
  args: {
    property: "primary",
    variant: "contained",
    children: "ボタン内要素",
  },
};

export const ErrorOutlinedButton: Story = {
  render: (args) => <Button {...args} />,
  args: {
    property: "error",
    variant: "outlined",
    children: "ボタン内要素",
    icon: <img src={ChevronLeftIcon} alt="左" />,
  },
};

export const ErrorDisabledButton: Story = {
  render: (args) => <Button {...args} />,
  args: {
    property: "error",
    variant: "contained",
    children: "ボタン内要素",
    disabled: true,
  },
};
