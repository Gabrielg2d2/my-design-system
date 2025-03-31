import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	HeaderSm,
	type THeaderSmProps,
} from '../../../../src/components/Typography/Headers/Sm'
import * as RootStories from './Root.stories'

const meta: Meta<THeaderSmProps> = {
	title: 'Typography/Headers/Sm',
	component: (args: THeaderSmProps) => {
		return <HeaderSm {...args}>Text Sm</HeaderSm>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<THeaderSmProps>

export const Default: Story = {}

export const Size: Story = {
	args: {
		size: '5',
	},
}

export const Color: Story = {
	args: {
		color: 'lime',
	},
}

export const HighContrast: Story = {
	args: {
		highContrast: true,
	},
}
