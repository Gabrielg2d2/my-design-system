import * as colors from '@radix-ui/colors'

export type TColors = keyof typeof colors

export function getColors() {
	return Object.keys(colors).filter(
		(color) => color === color.toLowerCase(),
	) as TColors[]
}
