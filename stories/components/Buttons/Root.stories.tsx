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

export const Default: Story = {
	argTypes: {
		size: {
			options: ['1', '2', '3', '4'] satisfies TButtonProps['size'][],
			control: { type: 'select' },
		},
		variant: {
			options: [
				'classic',
				'solid',
				'soft',
				'surface',
				'outline',
			] satisfies TButtonProps['variant'][],
			control: { type: 'select' },
		},
		color: {
			options: [
				'gray',
				'yellow',
				'blue',
				'red',
				'green',
			] satisfies TButtonProps['color'][],
			control: { type: 'select' },
		},
		loading: {
			control: { type: 'boolean' },
		},
		disabled: {
			control: { type: 'boolean' },
		},
		radius: {
			options: [
				'none',
				'small',
				'medium',
				'large',
				'full',
			] satisfies TButtonProps['radius'][],
			control: { type: 'select' },
		},
		highContrast: {
			control: { type: 'boolean' },
		},
	},
	args: {
		size: '3',
		variant: 'classic',
		color: 'yellow',
		radius: 'none',
		loading: false,
		disabled: false,
		highContrast: false,
	},
}
