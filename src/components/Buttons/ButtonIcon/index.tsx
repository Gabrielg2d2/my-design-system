import * as Icons from '@radix-ui/react-icons'
import { Spinner } from '@radix-ui/themes'
import { ButtonRoot, type TButtonRootProps } from '../Root'

type NamesIcon = keyof typeof Icons

export type TButtonIconProps = TButtonRootProps & {
	iconLeftName?: NamesIcon
	iconRightName?: NamesIcon
	loadingIcon?: boolean
}

export function ButtonIcon({
	loadingIcon = false,
	...props
}: TButtonIconProps) {
	if (!props.iconLeftName && !props.iconRightName) {
		throw new Error('You must provide either iconLeftName or iconRightName')
	}

	const IconComponentLeft = props.iconLeftName
		? Icons[props.iconLeftName]
		: null
	const IconComponentRight = props.iconRightName
		? Icons[props.iconRightName]
		: null

	return (
		<ButtonRoot size="3" variant="classic" {...props}>
			{props.iconLeftName && (
				<Spinner loading={loadingIcon}>
					{IconComponentLeft && <IconComponentLeft />}
				</Spinner>
			)}
			{props.children}
			{props.iconRightName && (
				<Spinner loading={loadingIcon}>
					{IconComponentRight && <IconComponentRight />}
				</Spinner>
			)}
		</ButtonRoot>
	)
}
