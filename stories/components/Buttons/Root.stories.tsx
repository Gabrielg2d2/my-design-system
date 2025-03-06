import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import {
	ButtonRoot,
	type TButtonRootProps,
} from '../../../src/components/Buttons/Root'

const meta: Meta<TButtonRootProps> = {
	title: 'Buttons/Root',
	component: (args: TButtonRootProps) => {
		return <ButtonRoot {...args}>Text Button</ButtonRoot>
	},
}

export default meta
type Story = StoryObj<TButtonRootProps>

export const Default: Story = {
	argTypes: {
		size: {
			options: ['1', '2', '3', '4'] satisfies TButtonRootProps['size'][],
			control: { type: 'select' },
		},
		variant: {
			options: [
				'classic',
				'solid',
				'soft',
				'surface',
				'outline',
			] satisfies TButtonRootProps['variant'][],
			control: { type: 'select' },
		},
		color: {
			options: [
				'gray',
				'yellow',
				'blue',
				'red',
				'green',
			] satisfies TButtonRootProps['color'][],
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
			] satisfies TButtonRootProps['radius'][],
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
		radius: 'small',
		loading: false,
		disabled: false,
		highContrast: false,
	},
}
