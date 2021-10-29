import React from 'react';
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { FiMic, FiSearch } from "react-icons/fi";
import { HiOutlineAdjustments } from "react-icons/hi";
import { classnames, RenderIf } from "@src/components";
import { RecentSearches } from "./recent-searches";
import { FiltersConfig } from "./filters-config";
import styles from './styles.module.scss';
import { filtersHandlers, searchHandlers } from "./handlers";

export const SearchBar = () => {
	const {
		focused,
		hasDisplay,
		handleDisplayOn,
		handleDisplayOff,
		handleFocusOut
	} = searchHandlers()

	const {
		opened,
		handleCloseFilters,
		hasFiltersDisplay,
		handleCloseFiltersDisplay,
		handleShowFiltersDisplay
	} = filtersHandlers()


	return (
		<div className={ classnames(styles[ 'search-wrapper' ]) }>
			<div className={ classnames(styles[ 'search-bar' ]) }>
				<TextField
					placeholder={ "Busque por restaurante ou prato" }
					variant={ "outlined" }
					onFocus={ handleDisplayOn }
					InputProps={ {
						startAdornment: (
							<InputAdornment position={ "start" }>
								<IconButton>
									<FiSearch size={ 18 } />
								</IconButton>
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position={ "end" }>
								<IconButton>
									<FiMic size={ 18 } />
								</IconButton>
							</InputAdornment>
						)
					} }
				/>

				<div>
					<IconButton onClick={ handleShowFiltersDisplay }>
						<HiOutlineAdjustments />
					</IconButton>
				</div>
			</div>

			{ RenderIf(hasDisplay, (
				<RecentSearches
					handleDisplayOff={ handleDisplayOff }
					focused={ focused }
					setFocusOut={ handleFocusOut }
				/>
			)) }

			{ RenderIf(hasFiltersDisplay, (
				<FiltersConfig
					opened={ opened }
					close={ handleCloseFilters }
					onClose={ handleCloseFiltersDisplay }
				/>
			)) }
		</div>
	);
}



