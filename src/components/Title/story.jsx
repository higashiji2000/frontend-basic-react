import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Title",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Title = (args) => <Component {...args} />;

export const Default = Title.bind({});
