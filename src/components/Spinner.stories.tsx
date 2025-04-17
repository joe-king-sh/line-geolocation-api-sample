import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
};

// eslint-disable-next-line import/no-default-export
export default meta;

type Story = StoryObj<typeof Spinner>;

export const DefaultSpinner: Story = {
  render: () => <Spinner />,
};
