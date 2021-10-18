import React from 'react';
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { FiMic, FiSearch } from "react-icons/fi";
import { HiOutlineAdjustments } from "react-icons/hi";
import { classnames } from "@src/components";
import styles from './styles.module.scss';

export const SearchBar = () => {
	return (
		<div className={ classnames( styles[ 'search-bar' ] ) }>
			<TextField
				placeholder={ "Busque por restaurante ou prato" }
				variant={ "outlined" }
				InputProps={ {
					startAdornment: (
						<InputAdornment position={ "start" }>
							<IconButton>
								<FiSearch size={ 18 }/>
							</IconButton>
						</InputAdornment>
					),
					endAdornment: (
						<InputAdornment position={ "end" }>
							<IconButton>
								<FiMic size={ 18 }/>
							</IconButton>
						</InputAdornment>
					)
				} }
			/>

			<div>
				<IconButton>
					<HiOutlineAdjustments/>
				</IconButton>
			</div>
		</div>
	);
}