import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarGroup, Badge } from "@material-ui/core";
import { RiMotorbikeFill } from "react-icons/ri";
import { FiStar } from "react-icons/fi";
import { FaCheckCircle, FaShoppingBasket } from "react-icons/fa";
import { classnames, RenderIf } from "@src/components";
import styles from './styles.module.scss';
import { blurDataURL } from "./shimmer";

type FoodCardProps = {
	slug: string;
	image: string;
	isOnBasket?: boolean
}

export const FoodCard = ( { slug, image, isOnBasket = false }: FoodCardProps ) => {
	return (
		<div className={ classnames(styles[ 'food-card' ]) }>
			<Link href={ `/restaurante/${ encodeURIComponent(slug) }` } passHref>
				<a>
					<div className={ classnames(styles[ 'food-image-wrapper' ]) }>
						<Image
							src={ image }
							alt={ "food-1" }
							width={ 350 }
							height={ 150 }
							objectFit={ "cover" }
							layout={ "responsive" }
							loading={ "lazy" }
							placeholder="blur"
							blurDataURL={ blurDataURL() }
						/>
					</div>

					<div className={ classnames(styles[ 'food-info' ]) }>
						<div className={ classnames(styles[ 'food-info-restaurant' ]) }>
							<h2>Katsuei { RenderIf(isOnBasket, (
								<div className={ classnames(styles[ 'food-info-on-basket' ]) }>
									<FaShoppingBasket />
									<span>
								<FaCheckCircle size={ 14 } />
							</span>
								</div>
							)) }</h2>
							<h3>
								<span>Japanese</span>
								<span>Sushi</span>
							</h3>
							<section>
								<span>10-15 min</span>
								<span><RiMotorbikeFill /> R$ 5,99</span>
								<span><FiStar /> 4.8</span>
							</section>
						</div>

						{ RenderIf('/food-2.jpg' === image, (
							<div className={ classnames(styles[ 'food-info-ranking' ]) }>
								<AvatarGroup max={ 3 }>
									<AvatarWithBadge position={ 1 } />
									<AvatarWithBadge position={ 2 } />
									<AvatarWithBadge position={ 3 } />
								</AvatarGroup>
							</div>
						)) }
					</div>
				</a>
			</Link>
		</div>
	);
}

type AvatarWithBadgeProps = {
	position: 1 | 2 | 3;
}

const AvatarWithBadge = ( { position }: AvatarWithBadgeProps ) => {
	return (
		<Badge
			overlap={ "circular" }
			variant={ "dot" }
			anchorOrigin={ { vertical: "bottom", horizontal: "right" } }
			badgeContent={ (
				<span style={ { width: 16, height: 16 } }>1o</span>
			) }
			className={ classnames(
				styles.ranking,
				{ [ styles.first ]: position === 1 },
				{ [ styles.second ]: position === 2 },
				{ [ styles.third ]: position === 3 },
			) }
		>
			<Avatar src={ `/avatar-${ position }.jpg` } sx={ { width: 48, height: 48 } } />
		</Badge>
	)
}