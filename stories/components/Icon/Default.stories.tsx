import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	IconRoot,
	type TIconRootProps,
} from '../../../src/components/Icon/Root'
import * as RootStories from './Root.stories'

const meta: Meta<TIconRootProps> = {
	title: 'Icon/Default',
	component: (args: TIconRootProps) => {
		return <IconRoot {...args} />
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TIconRootProps>

export const Default: Story = {}

export const Icon: Story = {
	args: {
		name: 'CubeIcon',
		sizeIcon: 20,
		color: 'yellow',
	},
}

export const Size: Story = {
	args: {
		name: 'BackpackIcon',
		sizeIcon: 67,
		color: 'yellow',
	},
}

export const Color: Story = {
	args: {
		name: 'BackpackIcon',
		sizeIcon: 20,
		color: 'lime',
	},
}
