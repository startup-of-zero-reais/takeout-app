import { useCallback, useState } from "react";

type UseModal = [ boolean, () => void, () => void ]

export function useModal(): UseModal {
	const [ open, setOpen ] = useState(false);

	const onOpen = useCallback(() => {
		setOpen(true)
	}, [])

	const onClose = useCallback(() => {
		setOpen(false)
	}, [])

	return [ open, onOpen, onClose ];
}