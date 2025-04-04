import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	SubtitleCustom,
	type TSubtitleCustomProps,
} from '../../../../src/components/Typography/Subtitles/Custom'
import * as RootStories from './Root.stories'

const meta: Meta<TSubtitleCustomProps> = {
	title: 'Typography/Subtitles/Custom',
	component: (args: TSubtitleCustomProps) => {
		return <SubtitleCustom {...args}>Subtitle Custom</SubtitleCustom>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TSubtitleCustomProps>

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
