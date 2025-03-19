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
		color: {
			control: {
				type: 'select',
				options: getColors(),
			},
		},
	},
}
