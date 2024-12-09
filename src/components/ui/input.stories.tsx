import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/components/ui/input";

const meta: Meta<typeof Input> = {
	component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		className: "w-full ",
		placeholder: "Enter your email",
	},
};
