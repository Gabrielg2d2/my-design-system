import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	SubtitleXs,
	type TSubtitleXsProps,
} from '../../../../src/components/Typography/Subtitles/Xs'
import * as RootStories from './Root.stories'

const meta: Meta<TSubtitleXsProps> = {
	title: 'Typography/Subtitles/Xs',
	component: (args: TSubtitleXsProps) => {
		return <SubtitleXs {...args}>Subtitle Xs</SubtitleXs>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TSubtitleXsProps>

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
