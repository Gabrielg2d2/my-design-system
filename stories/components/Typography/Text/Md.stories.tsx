import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	type TTextMdProps,
	TextMd,
} from '../../../../src/components/Typography/Text/Md'

import * as RootStories from './Root.stories'

const meta: Meta<TTextMdProps> = {
	title: 'Typography/Text/Md',
	component: (args: TTextMdProps) => {
		return <TextMd {...args}>Text Default</TextMd>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TTextMdProps>

export const Default: Story = {}

export const Color: Story = {
	args: {
		color: 'red',
	},
}
