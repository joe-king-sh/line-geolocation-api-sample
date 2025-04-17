import type { Meta, StoryObj } from "@storybook/react";
import { TopPageView } from "./TopPage";

const meta: Meta<typeof TopPageView> = {
  title: "Pages/TopPage",
  component: TopPageView,
};

// eslint-disable-next-line import/no-default-export
export default meta;

type Story = StoryObj<typeof TopPageView>;

export const Default: Story = {
  render: () => <TopPageView />,
};
