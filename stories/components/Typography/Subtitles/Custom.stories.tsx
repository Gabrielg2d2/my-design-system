import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	SubtitlesCustom,
	type TSubtitlesCustomProps,
} from '../../../../src/components/Typography/Subtitles/Custom'
import * as RootStories from './Root.stories'

const meta: Meta<TSubtitlesCustomProps> = {
	title: 'Typography/Subtitles/Custom',
	component: (args: TSubtitlesCustomProps) => {
		return <SubtitlesCustom {...args}>Subtitle Custom</SubtitlesCustom>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TSubtitlesCustomProps>

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
