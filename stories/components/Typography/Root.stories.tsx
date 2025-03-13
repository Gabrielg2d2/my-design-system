import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	type TTextRootProps,
	TextRoot,
} from '../../../src/components/Typography/Root'

const meta: Meta<TTextRootProps> = {
	title: 'Typography/Root',
	component: (args: TTextRootProps) => {
		return <TextRoot {...args}>Text Root</TextRoot>
	},
}

export default meta
type Story = StoryObj<TTextRootProps>

export const Default: Story = {
	argTypes: {},
	args: {},
}
