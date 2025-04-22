import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { PageConnectCount } from '../../../src/pages/ConnectCount'

const meta: Meta<typeof PageConnectCount> = {
	title: 'Pages/Connect/Count',
}

export default meta
type Story = StoryObj<typeof PageConnectCount>

export const Default: Story = {
	args: {},

	render: (args) => {
		return <PageConnectCount {...args} />
	},
}
