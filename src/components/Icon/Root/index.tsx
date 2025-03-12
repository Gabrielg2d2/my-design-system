import * as Icons from '@radix-ui/react-icons'

type NamesIcon = keyof typeof Icons

export type TIconRootProps = {
	name: NamesIcon
	sizeIcon?: string | number | undefined
}

export function IconRoot({ name, sizeIcon = 18, ...props }: TIconRootProps) {
	const IconComponent = Icons[name]

	return <IconComponent width={sizeIcon} height={sizeIcon} {...props} />
}
