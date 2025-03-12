import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	IconRoot,
	type TIconRootProps,
} from '../../../src/components/Icon/Root'
import * as RootStories from './Root.stories'

const meta: Meta<TIconRootProps> = {
	title: 'Icon/Default',
	component: (args: TIconRootProps) => {
		return <IconRoot {...args} />
	},
	argTypes: {
		...RootStories.Default.argTypes,
	},
	args: {
		...RootStories.Default.args,
	},
}

export default meta
type Story = StoryObj<TIconRootProps>

export const Default: Story = {}
