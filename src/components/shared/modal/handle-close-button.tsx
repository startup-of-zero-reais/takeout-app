import { IconButton } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import React from "react";

type HandleCloseButtonProps = { withHandle?: boolean; closeModal: () => void };
export const HandleCloseButton = ( { withHandle = false, closeModal }: HandleCloseButtonProps ) => {
	if (withHandle) {
		return (
			<button
				type={ "button" }
				onClick={ closeModal }
			/>
		)
	}

	return (
		<IconButton onClick={ closeModal }>
			<AiOutlineClose/>
		</IconButton>
	)
}