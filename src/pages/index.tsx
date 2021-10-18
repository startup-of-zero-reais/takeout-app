import React from 'react';
import { MainGrid, HomeHeader, SearchBar, FoodCard, FoodCategory } from "@src/components";
import { NextPageContext } from "next";

type HomeProps = {
	restaurants: Array<typeof restaurants[0]>
}

const Home = ( { restaurants }: HomeProps ) => {
	return (
		<MainGrid>
			<HomeHeader/>
			<SearchBar/>

			<FoodCategory/>

			<div style={ { padding: 16 } }>
				{ restaurants?.map( ( card ) => (
					<FoodCard
						image={card.image}
						isOnBasket={card.id === 'abcd-1234-efgh-5679'}
						key={ card.id }
						slug={card.slug}
					/>
				) ) }
			</div>
		</MainGrid>
	);
}

const restaurants = [
	{
		id: 'abcd-1234-efgh-5678',
		image: '/food-1.jpg',
		slug: 'katsuei'
	},
	{
		id: 'abcd-1234-efgh-5679',
		image: '/food-2.jpg',
		slug: 'kats-uei'
	},
	{
		id: 'abcd-1234-efgh-5610',
		image: '/food-3.jpg',
		slug: 'k-atsuei'
	},
	{
		id: 'abcd-1234-efgh-5611',
		image: '/food-4.jpg',
		slug: 'katsuei-japa'
	},
]

Home.getInitialProps = async (_: NextPageContext) => {
	return {
		restaurants
	}
}

export default Home;