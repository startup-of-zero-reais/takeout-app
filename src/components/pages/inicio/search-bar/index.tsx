import React, { useCallback, useState } from 'react';
import { TextField, InputAdornment, IconButton, Button } from "@material-ui/core";
import { FiMic, FiSearch } from "react-icons/fi";
import { HiOutlineAdjustments } from "react-icons/hi";
import { AiOutlineClockCircle, AiOutlineClose } from "react-icons/ai";
import { classnames, RenderIf } from "@src/components";
import styles from './styles.module.scss';

export const SearchBar = () => {
	const [ hasDisplay, setHasDisplay ] = useState( false )
	const [ focused, setFocused ] = useState( false );

	const handleDisplayOn = useCallback( () => {
		setHasDisplay( true )
		setTimeout( () => setFocused( true ) )
	}, [] )

	const handleDisplayOff = useCallback( () => {
		if ( !focused ) {
			setHasDisplay( false )
		}
	}, [ focused ] )

	return (
		<div className={ classnames( styles[ 'search-wrapper' ] ) }>
			<div className={ classnames( styles[ 'search-bar' ] ) }>
				<TextField
					placeholder={ "Busque por restaurante ou prato" }
					variant={ "outlined" }
					onFocus={ handleDisplayOn }
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

			{ RenderIf( hasDisplay, (
				<div
					className={ classnames(
						styles[ 'search-suggest' ],
						{ [ styles[ 'active' ] ]: focused }
					) }
					onAnimationEnd={ handleDisplayOff }
				>
					<h2>
						Buscas recentes
						<IconButton onClick={ () => setFocused( false ) }>
							<AiOutlineClose/>
						</IconButton>
					</h2>

					<ul className={ classnames( styles[ 'recent-searches' ] ) }>
						<li>
							<Button href={ "#" }>
								Sushi
								<AiOutlineClockCircle/>
							</Button>
						</li>
						<li>
							<Button href={ "#" }>
								Pizza
								<AiOutlineClockCircle/>
							</Button>
						</li>
						<li>
							<Button href={ "#" }>
								Lanche
								<AiOutlineClockCircle/>
							</Button>
						</li>
					</ul>
				</div>
			) ) }
		</div>
	);
}