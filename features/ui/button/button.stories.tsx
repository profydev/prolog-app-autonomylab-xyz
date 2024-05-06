import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonSize, ButtonColor } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({
  size,
  color,
  text,
  disabled,
  onClick,
  iconSrc,
  iconPosition,
}) => (
  <div style={{ padding: 10 }}>
    <Button
      color={color}
      size={size}
      disabled={disabled}
      text={text}
      onClick={onClick}
      iconSrc={iconSrc}
      iconPosition={iconPosition}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.small,
  color: ButtonColor.primary,
  text: "Button CTA",
  iconSrc: "/icons/circle.svg",
};
Default.parameters = {
  viewMode: "docs",
};
