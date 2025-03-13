import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	type TTextDefaultProps,
	TextDefault,
} from '../../../src/components/Typography/Default'

import * as RootStories from './Root.stories'

const meta: Meta<TTextDefaultProps> = {
	title: 'Typography/Default',
	component: (args: TTextDefaultProps) => {
		return <TextDefault {...args}>Text Default</TextDefault>
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TTextDefaultProps>

export const Default: Story = {}
