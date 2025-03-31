import { Box, Container } from '@radix-ui/themes'
import type { ComponentProps } from 'react'

interface BackgroundGridProps extends ComponentProps<'div'> {
	opacity?: number
	spacing?: number
	color?: string
	rotation?: number
}

export function BackgroundGrid({
	opacity = 0.01,
	spacing = 48,
	color = 'rgba(75, 127, 205, OPACITY)',
	rotation = 0,
	style,
	...props
}: BackgroundGridProps) {
	const lineColor = color.replace('OPACITY', opacity.toString())

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
					linear-gradient(#0F1216,rgb(29, 75, 135)),
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
