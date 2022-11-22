import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { TwButton, ButtonProps } from "../components/TWButton";

export default {
  title: "Example/TwButton",
  component: TwButton,
} as Meta;

const Template: Story<ButtonProps> = (args) => <TwButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  intent: "primary",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  intent: "secondary",
  children: "Button",
};

export const SmallPrimary = Template.bind({});
SmallPrimary.args = {
  size: "small",
  children: "Button",
};

export const SmallSecondary = Template.bind({});
SmallSecondary.args = {
  size: "small",
  intent: "secondary",
  children: "Button",
};
