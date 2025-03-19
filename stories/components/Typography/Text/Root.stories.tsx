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
		size: {
			control: {
				type: 'select',
				options: ['sm', 'md', 'lg'],
			},
		},
		highContrast: {
			control: {
				type: 'boolean',
			},
		},
		weight: {
			control: {
				type: 'select',
				options: ['regular', 'medium', 'bold'],
			},
		},
		align: {
			control: {
				type: 'select',
				options: ['left', 'center', 'right'],
			},
		},
		trim: {
			control: {
				type: 'select',
				options: ['normal', 'both'],
			},
		},
		truncate: {
			control: {
				type: 'boolean',
			},
		},
		wrap: {
			control: {
				type: 'boolean',
			},
		},
		as: {
			control: {
				type: 'select',
				options: ['p', 'span', 'div', 'label'],
			},
		},
	},
}
