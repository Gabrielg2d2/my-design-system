import { Box, Container } from '@radix-ui/themes'
import type { ComponentProps } from 'react'

type GradientDirectionKey =
	| 'top'
	| 'topRight'
	| 'right'
	| 'bottomRight'
	| 'bottom'
	| 'bottomLeft'
	| 'left'
	| 'topLeft'

const gradientDirections: Record<GradientDirectionKey, string> = {
	top: 'to top',
	topRight: 'to top right',
	right: 'to right',
	bottomRight: 'to bottom right',
	bottom: 'to bottom',
	bottomLeft: 'to bottom left',
	left: 'to left',
	topLeft: 'to top left',
}

interface BackgroundGridProps extends ComponentProps<'div'> {
	opacity?: number
	spacing?: number
	color?: string
	rotation?: number
	gradientDirection?: GradientDirectionKey
	gradientColors?: string[] // Ex: ['#0F1216', 'rgb(29, 75, 135)']
}
export function BackgroundGrid({
	opacity = 0.01,
	spacing = 48,
	color = 'rgba(75, 127, 205, OPACITY)',
	rotation = 0,
	gradientDirection = 'topRight',
	gradientColors = ['#0F1216', 'rgba(40, 39, 89, 0.96)'],
	style,
	...props
}: BackgroundGridProps) {
	const direction = gradientDirections[gradientDirection || 'bottomLeft']
	const lineColor = color.replace('OPACITY', opacity.toString())
	const gradientBase = `linear-gradient(${direction}, ${gradientColors.join(', ')})`

	return (
		<Container>
			<Box
				as="div"
				style={{
					position: 'absolute',
					inset: 0,
					width: '100%',
					height: '100%',
					pointerEvents: 'none',
					background: `
						${gradientBase},
						repeating-linear-gradient(
							0deg,
							${lineColor},
							${lineColor} ${spacing}px,
							transparent ${spacing}px,
							transparent ${spacing * 2}px
						),
						repeating-linear-gradient(
							90deg,
							${lineColor},
							${lineColor} ${spacing}px,
							transparent ${spacing}px,
							transparent ${spacing * 2}px
						)
					`,
					transform: `rotate(${rotation}deg)`,
					transformOrigin: 'center',
					backgroundBlendMode: 'normal',
					...style,
				}}
				{...props}
			/>
			{props.children}
		</Container>
	)
}
