import * as Icons from '@radix-ui/react-icons'
import { IconButton, type IconButtonProps } from '@radix-ui/themes'

type NamesIcon = keyof typeof Icons

export type TIconButtonRootProps = IconButtonProps & {
	name: NamesIcon
}

export function IconButtonRoot({ name, ...props }: TIconButtonRootProps) {
	const IconComponent = Icons[name]

	return (
		<IconButton {...props}>
			{IconComponent ? <IconComponent width="18" height="18" /> : null}
		</IconButton>
	)
}
