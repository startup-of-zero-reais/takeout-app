/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useState } from "react";

export function searchHandlers() {
	const [ hasDisplay, setHasDisplay ] = useState(false)
	const [ focused, setFocused ] = useState(false);

	const handleDisplayOn = useCallback(() => {
		setHasDisplay(true)
		setTimeout(() => setFocused(true))
	}, [])

	const handleDisplayOff = useCallback(() => {
		if ( !focused ) {
			setHasDisplay(false)
		}
	}, [ focused ])

	const handleFocusOut = useCallback(() => {
		setFocused(false)
	}, [])

	return {
		focused,
		hasDisplay,
		handleDisplayOn,
		handleDisplayOff,
		handleFocusOut
	}
}

export function filtersHandlers() {
	const [ hasFiltersDisplay, setFiltersDisplay ] = useState(false);
	const [ opened, setOpened ] = useState(false);

	const handleShowFiltersDisplay = useCallback(() => {
		setFiltersDisplay(true)
		setTimeout(() => setOpened(true))
	}, [])

	const handleCloseFilters = useCallback(() => {
		setOpened(false)
	}, [])

	const handleCloseFiltersDisplay = useCallback(() => {
		if ( !opened ) {
			setFiltersDisplay(false)
		}
	}, [ opened ])

	return {
		opened,
		hasFiltersDisplay,
		handleShowFiltersDisplay,
		handleCloseFiltersDisplay,
		handleCloseFilters
	}
}