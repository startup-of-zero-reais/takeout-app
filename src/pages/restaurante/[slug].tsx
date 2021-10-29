import React, { useCallback, useRef, useState } from 'react';
import { Button, IconButton, TextField } from "@mui/material";
import { NextPageContext } from "next";
import Image from 'next/image';
import { FaClock, FaDollarSign, FaStar } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { IoArrowBackSharp, IoClose, IoSearch } from "react-icons/io5";
import { useRouter } from "next/router";
import { classnames, MainGrid, RankingAvatar, CartHandler } from "@src/components";
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
	foodMenu: string[];
}

const RestaurantPage = ( { restaurant, customerRanking, myRanking, foodMenu }: RestaurantPageProps ) => {
	const router = useRouter()
	const searchInputRef = useRef<HTMLInputElement>()

	const [ searching, setSearching ] = useState(false)

	//const { slug } = router.query

	const handleSearchClick = useCallback(() => {
		setSearching(prevState => {
			if ( searchInputRef.current ) {
				prevState
					? searchInputRef.current.value = ''
					: searchInputRef.current.focus();
			}

			return !prevState
		});
	}, []);

	return (
		<MainGrid>
			<div className={ classnames(styles[ 'restaurant-search' ]) }>
				<IconButton onClick={ router.back }>
					<IoArrowBackSharp />
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
							? <IoSearch />
							: <IoClose /> }
					</IconButton>
				</div>
			</div>

			<div className={ classnames(styles[ 'restaurant-info' ]) }>
				<h1>{ restaurant }</h1>
				<p>
					<small>Japonesa</small>
					<small>Sushi</small>
				</p>
				<div>
					<span><FaClock /> 10-20 min</span>
					<span><FaDollarSign /> R$ 5,99</span>
					<span><FaStar /> 4.8</span>
				</div>
			</div>

			<div className={ classnames(styles[ 'restaurant-ranking' ]) }>
				<div>
					<span>Ranking do restaurante</span>
					<div className={ classnames(styles[ 'avatars-group' ]) }>
						{ customerRanking?.map(( customer ) => (
							<RankingAvatar
								key={ customer.id }
								src={ customer.avatar }
								badgeComponent={ `${ customer.position }º` }
								first={ customer.position === 1 }
								second={ customer.position === 2 }
								third={ customer.position === 3 }
							/>
						)) }
					</div>
				</div>
				<div>
					<span>Meu ranking</span>
					<div className={ classnames(styles[ 'avatars-group' ]) }>
						{ myRanking && (
							<RankingAvatar
								src={ myRanking.avatar }
								badgeComponent={ (
									<>
										<FaStar size={ 12 } />2
									</>
								) }
							/>
						) }
					</div>
				</div>
			</div>

			<div className={ classnames(styles[ 'full-ranking-btn-wrapper' ]) }>
				<Button
					endIcon={ <FiChevronRight /> }
					variant={ "contained" }
					color={ "inherit" }
				>
					Ver ranking completo
				</Button>
			</div>

			<div className={ classnames(styles[ 'popular-foods' ]) }>
				<h1>Popular</h1>

				<div className={ classnames(styles[ 'horizontal-scroll' ]) }>
					<div>
						{ [ 1, 2, 3 ].map(( _, k ) => (
							<div key={ k.toString() } className={ classnames(styles[ 'popular-food-card' ]) }>
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
						)) }
					</div>
				</div>
			</div>

			<div className={ classnames(styles[ 'food-menu' ]) }>
				<div className={ classnames(styles[ 'food-menu-horizontal-scroll' ]) }>
					<div>
						{ foodMenu.map(( category, k ) => (
							<Button
								key={ k.toString() }
								className={ classnames(
									{ [ styles[ 'active' ] ]: k === 0 }
								) }
								href={ `#${ makeIdFromCategory(category) }` }
							>
								{ category }
							</Button>
						)) }
					</div>
				</div>

				<section className={ classnames(styles[ 'menu-section' ]) }>
					{ foodMenu.map(( category, kk ) => (
						<div
							key={ kk.toString() }
							className={ classnames(styles[ 'menu-subsection' ]) }
							id={ `${ makeIdFromCategory(category) }` }
						>
							<h2>{ category }</h2>
							{ [ 1, 2, 3, 4 ].map(( _, k ) => (
								<button type={ "button" } key={ k.toString() }>
									<div className={ classnames(styles[ 'food-button-info' ]) }>
										<div>
											<Image
												src={ "/food-1.jpg" }
												layout={ "responsive" }
												objectFit={ "cover" }
												width={ 40 } height={ 40 }
												alt={ "food1" }
											/>
										</div>
										<div>
											<h3>California Roll</h3>
											<small>Smoked salmon over rice</small>
											<span>R$ 5,99</span>
										</div>
									</div>

									<div>
										<CartHandler />
									</div>
								</button>
							)) }
						</div>
					)) }
				</section>
			</div>
		</MainGrid>
	);
}


function makeIdFromCategory( category: string ) {
	return category.toLowerCase().replace(/[.\s_]+/, '-');
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
		},
		foodMenu: [ 'Sushi rolls', 'Bento boxes', 'Soups', 'Sashimis', 'Temakis', 'Combos', 'Nissin' ]
	}
}

export default RestaurantPage