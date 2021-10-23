import React, { useCallback, useRef, useState } from 'react';
import { Avatar, AvatarGroup, Button, IconButton, TextField } from "@material-ui/core";
import { IoArrowBackSharp, IoClose, IoSearch } from "react-icons/io5";
import { classnames, MainGrid } from "@src/components";
import styles from './styles.module.scss'
import { NextPageContext } from "next";
import { FaClock, FaDollarSign, FaStar } from "react-icons/fa";
import { FiChevronRight } from "react-icons/all";
import { useRouter } from "next/router";

type RestaurantPageProps = {
	restaurant: string;
}

const RestaurantPage = ( { restaurant }: RestaurantPageProps ) => {
	const router = useRouter()
	const searchInputRef = useRef<HTMLInputElement>()

	const [ searching, setSearching ] = useState( false )

	//const { slug } = router.query

	const handleSearchClick = useCallback( () => {
		setSearching( prevState => {
			if ( searchInputRef.current ) {
				prevState
					? searchInputRef.current.value = ''
					: searchInputRef.current.focus();
			}

			return !prevState
		} );
	}, [] );

	return (
		<MainGrid>
			<div className={ classnames( styles[ 'restaurant-search' ] ) }>
				<IconButton onClick={ router.back }>
					<IoArrowBackSharp/>
				</IconButton>

				<div>
					<div className={ classnames(
						styles[ 'search-field' ],
						{ [ styles[ 'active' ] ]: searching }
					) }
					>
						<TextField
							inputRef={ searchInputRef }
							size={ "small" }
							placeholder={ 'Busque o prato' }
						/>
					</div>
					<IconButton onClick={ handleSearchClick }>
						{ !searching
							? <IoSearch/>
							: <IoClose/> }
					</IconButton>
				</div>
			</div>

			<div className={ classnames( styles[ 'restaurant-info' ] ) }>
				<h1>{ restaurant }</h1>
				<p>
					<small>Japonesa</small>
					<small>Sushi</small>
				</p>
				<div>
					<span><FaClock/> 10-20 min</span>
					<span><FaDollarSign/> R$ 5,99</span>
					<span><FaStar/> 4.8</span>
				</div>
			</div>

			<div className={ classnames( styles[ 'restaurant-ranking' ] ) }>
				<div>
					<span>Ranking do restaurante</span>
					<div className={ classnames( styles[ 'avatars-group' ] ) }>
						<AvatarGroup>
							<Avatar src={ "/avatar-1.jpg" }/>
							<Avatar src={ "/avatar-2.jpg" }/>
							<Avatar src={ "/avatar-3.jpg" }/>
						</AvatarGroup>
					</div>
				</div>
				<div>
					<span>Meu ranking</span>
					<div>
						<Avatar src={ "/avatar-4.jpg" }/>
					</div>
				</div>
			</div>

			<div className={ classnames( styles[ 'full-ranking-btn-wrapper' ] ) }>
				<Button
					endIcon={ <FiChevronRight/> }
					variant={ "contained" }
					color={ "inherit" }
				>
					Ver ranking completo
				</Button>
			</div>
		</MainGrid>
	);
}

RestaurantPage.getInitialProps = async ( _: NextPageContext ) => {

	return {
		restaurant: 'Katsuei'
	}
}

export default RestaurantPage