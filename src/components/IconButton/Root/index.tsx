import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { IconButton, type IconButtonProps } from '@radix-ui/themes'

export type TIconButtonRootProps = IconButtonProps

export function IconButtonRoot() {
	return (
		<IconButton>
			<MagnifyingGlassIcon width="18" height="18" />
		</IconButton>
	)
}
