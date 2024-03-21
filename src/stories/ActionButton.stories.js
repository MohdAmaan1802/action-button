import React from "react";
import ActionButton from "../components/ActionButton";
import { action } from "@storybook/addon-actions";
import { FaRegUserCircle } from "react-icons/fa";

export default {
  title: "Components/ActionButton",
  component: ActionButton,
  argTypes: {
    type: { control: "select", options: ["default", "neutral", "reverse"] },
    status: { control: "select", options: ["default", "hover", "disabled"] },
    size: { control: "select", options: ["small", "medium", "large"] },
    text: { control: "text" },
    onClick: { action: "clicked" },
    displayType: {
      control: "select",
      options: ["Text Only", "Icon With Text", "Icon Only"],
    },
  },
  decorators: [
    (Story) => (
      <div className="container">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <ActionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "Default",
  status: "default",
  size: "medium",
  text: "Action",
  onClick: action("Button clicked"),
};
export const TextOnly = Template.bind({});
TextOnly.args = {
  type: "Default",
  status: "default",
  size: "large",
  displayType: "Text Only",
  text: "Action",
  onClick: action("Button clicked"),
};

export const IconWithText = Template.bind({});
IconWithText.args = {
  ...TextOnly.args,
  displayType: "Icon With Text",
  icon: <FaRegUserCircle />,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  ...TextOnly.args,
  displayType: "Icon Only",
  icon: <FaRegUserCircle />,
  text: "",
};
