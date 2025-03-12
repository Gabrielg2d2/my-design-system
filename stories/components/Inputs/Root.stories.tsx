import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	InputRoot,
	type TInputRootProps,
} from '../../../src/components/Inputs/Root'
import { getColors } from '../../functions/getColors'

const meta: Meta<TInputRootProps> = {
	title: 'Inputs/Root',
	component: (args: TInputRootProps) => {
		return <InputRoot {...args} />
	},
}

export default meta
type Story = StoryObj<TInputRootProps>

export const Default: Story = {
	argTypes: {
		value: { control: 'text' },
		placeholder: { control: 'text' },
		defaultValue: { control: 'text' },
		variant: {
			control: { type: 'radio' },
			options: [
				'soft',
				'classic',
				'surface',
			] satisfies TInputRootProps['variant'][],
		},
		color: {
			control: 'select',
			options: getColors(),
		},
		disabled: { control: 'boolean' },
		autoFocus: { control: 'boolean' },
		size: {
			control: { type: 'radio' },
			options: ['1', '2', '3'] satisfies TInputRootProps['size'][],
		},
	},
	args: {
		placeholder: 'Placeholder here...',
		variant: 'surface',
		disabled: false,
		autoFocus: false,
		size: '3',
	},
}
