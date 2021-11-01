import { useCallback, useState } from "react";

type UseModal = [ boolean, () => void, () => void ]

export function useModal(): UseModal {
	const [ open, setOpen ] = useState(false);

	const onOpen = useCallback(() => {
		setOpen(true)
		console.log("OPEN")
	}, [])
	
	const onClose = useCallback(() => {
		setOpen(false)
		console.log("Close")
	}, [])

	return [ open, onOpen, onClose ];
}