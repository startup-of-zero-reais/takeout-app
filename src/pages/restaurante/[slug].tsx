import React from 'react';
import { useRouter } from "next/router";

type RestaurantPageProps = {}

const RestaurantPage = ( _: RestaurantPageProps ) => {
    const router = useRouter()

	const { slug } = router.query

	return (
		<h1>RestaurantPage {slug}</h1>
	);
}

export default RestaurantPage