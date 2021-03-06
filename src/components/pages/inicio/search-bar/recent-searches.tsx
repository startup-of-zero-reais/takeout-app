import React from 'react';
import { classnames } from "@src/components";
import { Button, IconButton } from "@mui/material";
import { AiOutlineClockCircle, AiOutlineClose } from "react-icons/ai";
import styles from "./styles.module.scss";

type RecentSearchesProps = {
	focused: boolean;
	handleDisplayOff(): void
	setFocusOut(): void
}

export const RecentSearches = ( { focused, handleDisplayOff, setFocusOut }: RecentSearchesProps ) => {
	return (
		<div
			className={ classnames(
				styles[ 'search-suggest' ],
				{ [ styles[ 'active' ] ]: focused }
			) }
			onAnimationEnd={ handleDisplayOff }
		>
			<h2>
				Buscas recentes
				<IconButton onClick={ setFocusOut }>
					<AiOutlineClose />
				</IconButton>
			</h2>

			<ul className={ classnames(styles[ 'recent-searches' ]) }>
				<li>
					<Button href={ "#" }>
						Sushi
						<AiOutlineClockCircle />
					</Button>
				</li>
				<li>
					<Button href={ "#" }>
						Pizza
						<AiOutlineClockCircle />
					</Button>
				</li>
				<li>
					<Button href={ "#" }>
						Lanche
						<AiOutlineClockCircle />
					</Button>
				</li>
			</ul>
		</div>
	);
}