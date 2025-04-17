import type { Meta, StoryObj } from "@storybook/react";
import { LoadingPage } from "./LoadingPage";

const meta: Meta<typeof LoadingPage> = {
  title: "Pages/LoadingPage/Default",
  component: LoadingPage,
  decorators: [
    (Story) => (
      <div className="flex h-screen w-screen">
        <Story />
      </div>
    ),
  ],
};

// eslint-disable-next-line import/no-default-export
export default meta;

type Story = StoryObj<typeof LoadingPage>;

export const Default: Story = {
  render: () => <LoadingPage />,
};
