import { Box } from '@radix-ui/themes'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	ButtonDefault,
	type TButtonDefaultProps,
} from '../../../src/components/Buttons/Default'

import * as RootStories from './Root.stories'

const meta: Meta<TButtonDefaultProps> = {
	title: 'Buttons/Default',
	component: (args: TButtonDefaultProps) => {
		return <ButtonDefault {...args}>Text Button</ButtonDefault>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TButtonDefaultProps>

export const Default: Story = {}

export const Solid: Story = {
	args: {
		variant: 'solid',
	},
}

export const Soft: Story = {
	args: {
		variant: 'soft',
	},
}

export const Surface: Story = {
	args: {
		variant: 'surface',
	},
}

export const Outline: Story = {
	args: {
		variant: 'outline',
	},
}

export const Loading: Story = {
    args: {
        size: "3",
        variant: "outline",
        color: "yellow",
        radius: "small",
        loading: true,
        disabled: false,
        highContrast: false
    }
};
