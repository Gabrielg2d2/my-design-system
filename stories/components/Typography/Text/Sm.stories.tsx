import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	type TTextSmProps,
	TextSm,
} from '../../../../src/components/Typography/Text/Sm'

import * as RootStories from './Root.stories'

const meta: Meta<TTextSmProps> = {
	title: 'Typography/Sm',
	component: (args: TTextSmProps) => {
		return <TextSm {...args}>Text Default</TextSm>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TTextSmProps>

export const Default: Story = {}
