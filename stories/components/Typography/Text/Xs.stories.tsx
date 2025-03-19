import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	type TTextXsProps,
	TextXs,
} from '../../../../src/components/Typography/Text/Xs'

import * as RootStories from './Root.stories'

const meta: Meta<TTextXsProps> = {
	title: 'Typography/Text/Xs',
	component: (args: TTextXsProps) => {
		return <TextXs {...args}>Text Default</TextXs>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TTextXsProps>

export const Default: Story = {}

export const Color: Story = {
	args: {
		color: 'blue',
	},
}
