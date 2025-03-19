import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	type TTextRootProps,
	TextRoot,
} from '../../../../src/components/Typography/Text/Root'
import { getColors } from '../../../functions/getColors'

const meta: Meta<TTextRootProps> = {
	title: 'Typography/Text/Root',
	component: (args: TTextRootProps) => {
		return <TextRoot {...args}>Text Root</TextRoot>
	},
}

export default meta
type Story = StoryObj<TTextRootProps>

export const Default: Story = {
	argTypes: {
		size: {
			control: {
				type: 'select',
				options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
			},
		},
		color: {
			control: {
				type: 'select',
				options: getColors(),
			},
		},
	},
	args: {
		size: '5',
		color: 'gray',
	},
}
