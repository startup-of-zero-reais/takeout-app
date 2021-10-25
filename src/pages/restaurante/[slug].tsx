import React, { useCallback, useRef, useState } from 'react';
import { Button, IconButton, TextField } from "@material-ui/core";
import { IoArrowBackSharp, IoClose, IoSearch } from "react-icons/io5";
import { NextPageContext } from "next";
import { FaClock, FaDollarSign, FaStar } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/router";
import Image from "next/image";
import { classnames, MainGrid, RankingAvatar } from "@src/components";
import styles from './styles.module.scss'

type RankingModel = {
	id: string;
	avatar: string;
	position: number;
}

type RestaurantPageProps = {
	restaurant: string;
	customerRanking: RankingModel[];
	myRanking: RankingModel;
}

const RestaurantPage = ( { restaurant, customerRanking, myRanking }: RestaurantPageProps ) => {
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
						{ customerRanking?.map( ( customer ) => (
							<RankingAvatar
								key={ customer.id }
								src={ customer.avatar }
								badgeComponent={ `${ customer.position }º` }
								first={ customer.position === 1 }
								second={ customer.position === 2 }
								third={ customer.position === 3 }
							/>
						) ) }
					</div>
				</div>
				<div>
					<span>Meu ranking</span>
					<div className={ classnames( styles[ 'avatars-group' ] ) }>
						{ myRanking && (
							<RankingAvatar
								src={ myRanking.avatar }
								badgeComponent={ (
									<>
										<FaStar size={ 12 }/>2
									</>
								) }
							/>
						) }
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

			<div className={ classnames( styles[ 'popular-foods' ] ) }>
				<h1>Popular</h1>

				<div className={ classnames( styles[ 'horizontal-scroll' ] ) }>
					<div>
						{ [ 1, 2, 3 ].map( ( _, k ) => (
							<div key={ k.toString() } className={ classnames( styles[ 'popular-food-card' ] ) }>
								<Image
									src={ "/food-1.jpg" }
									alt={ "Image" }
									layout={ "responsive" }
									width={ 335 }
									height={ 150 }
									objectFit={ "cover" }
								/>

								<h2>Salmon sushi</h2>
								<p>Smoked salmon over rice</p>
								<span>
								R$ 5,99
							</span>
							</div>
						) ) }
					</div>
				</div>
			</div>
		</MainGrid>
	);
}

RestaurantPage.getInitialProps = async ( _: NextPageContext ) => {

	return {
		restaurant: 'Katsuei',
		customerRanking: [
			{
				id: '123456',
				avatar: '/avatar-1.jpg',
				position: 1
			},
			{
				id: '123457',
				avatar: '/avatar-2.jpg',
				position: 2
			},
			{
				id: '123458',
				avatar: '/avatar-3.jpg',
				position: 3
			},
		],
		myRanking: {
			id: '123459',
			avatar: '/avatar-4.jpg',
			position: 7
		}
	}
}

export default RestaurantPage