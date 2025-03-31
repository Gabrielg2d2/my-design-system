import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	HeaderXs,
	type THeaderXsProps,
} from '../../../../src/components/Typography/Headers/Xs'
import * as RootStories from './Root.stories'

const meta: Meta<THeaderXsProps> = {
	title: 'Typography/Headers/Xs',
	component: (args: THeaderXsProps) => {
		return <HeaderXs {...args}>Text Xs</HeaderXs>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<THeaderXsProps>

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
