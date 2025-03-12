import * as Icons from '@radix-ui/react-icons'

type NamesIcon = keyof typeof Icons

export type TIconRootProps = {
	name: NamesIcon
	sizeIcon?: string | number | undefined
	color?: string
}

export function IconRoot({ name, sizeIcon = 18, color }: TIconRootProps) {
	const IconComponent = Icons[name]

	return <IconComponent width={sizeIcon} height={sizeIcon} color={color} />
}
