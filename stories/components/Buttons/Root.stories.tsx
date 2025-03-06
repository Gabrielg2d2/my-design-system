import { Box } from '@radix-ui/themes'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	ButtonRoot,
	type TButtonProps,
} from '../../../src/components/Buttons/Root'

const meta: Meta<TButtonProps> = {
	title: 'Buttons/Root',
	component: (args: TButtonProps) => {
		return <ButtonRoot {...args}>Text Button</ButtonRoot>
	},
}

export default meta
type Story = StoryObj<TButtonProps>

export const Default: Story = {}
