import * as Icons from '@radix-ui/react-icons'
import { IconButton, type IconButtonProps } from '@radix-ui/themes'

type NamesIcon = keyof typeof Icons

export type TIconButtonRootProps = IconButtonProps & {
	name: NamesIcon
	sizeIcon?: string | number | undefined
}

export function IconButtonRoot({
	name,
	sizeIcon = 18,
	...props
}: TIconButtonRootProps) {
	const IconComponent = Icons[name]

	return (
		<IconButton {...props}>
			{IconComponent ? (
				<IconComponent width={sizeIcon} height={sizeIcon} />
			) : null}
		</IconButton>
	)
}
