import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../src/index.css";
import { HelmetProvider } from "react-helmet-async";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone12",
    },
  },
  decorators: [
    (Story) => (
      <HelmetProvider>
        <Story />
      </HelmetProvider>
    ),
  ],
};

export default preview;
