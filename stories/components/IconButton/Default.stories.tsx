import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	IconButtonDefault,
	type TIconButtonDefaultProps,
} from '../../../src/components/IconButton/Default'
import * as RootStories from './Root.stories'

const meta: Meta<TIconButtonDefaultProps> = {
	title: 'IconButton/Default',
	component: (args: TIconButtonDefaultProps) => {
		return <IconButtonDefault {...args} />
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TIconButtonDefaultProps>

export const Default: Story = {}

export const Color: Story = {
	args: {
		name: 'BackpackIcon',
		sizeIcon: 20,
		color: 'pink',
	},
}

export const Icon: Story = {
	args: {
		name: 'AlignBottomIcon',
		sizeIcon: 20,
		color: 'yellow',
	},
}

export const Size: Story = {
	args: {
		name: 'BorderTopIcon',
		sizeIcon: 30,
		color: 'yellow',
	},
}
