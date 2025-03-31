import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	HeaderCustom,
	type THeaderCustomProps,
} from '../../../../src/components/Typography/Headers/Custom'
import * as RootStories from './Root.stories'

const meta: Meta<THeaderCustomProps> = {
	title: 'Typography/Headers/Custom',
	component: (args: THeaderCustomProps) => {
		return <HeaderCustom {...args}>Text Custom</HeaderCustom>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<THeaderCustomProps>

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
