import { ReactNode } from "react";
import { FiHome, FiShoppingCart, FiUser } from 'react-icons/fi'
import { BsTrophy } from 'react-icons/bs'

export type RouteNames = 'home'
	| 'cart' | 'prizes' | 'profile';

type RouteConfig = {
	label: string
	icon: ReactNode;
	href: string;
	level: number;
}

const iconSize = 24;

export const routes: Map<RouteNames, RouteConfig> = new Map<RouteNames, RouteConfig>([
	[ 'home', {
		label: 'Inicio',
		href: '/',
		icon: <FiHome size={ iconSize } />,
		level: 0,
	} ],
	[ 'cart', {
		label: 'Carrinho',
		href: '/carrinho',
		icon: <FiShoppingCart size={ iconSize } />,
		level: 0
	} ],
	[ 'prizes', {
		label: 'Ranking',
		href: '/ranking',
		icon: <BsTrophy size={ iconSize } />,
		level: 0
	} ],
	[ 'profile', {
		label: 'Perfil',
		href: '/perfil',
		icon: <FiUser size={ iconSize } />,
		level: 0
	} ]
]);

export function getRoutes( routesnames: RouteNames[] ): RouteConfig[] {
	return routesnames.flatMap(hasRoute)
}

function hasRoute( routename: RouteNames ): RouteConfig | [] {
	if ( routes.has(routename) && routes.get(routename)?.level === 0 ) {
		return routes.get(routename)!
	}

	return []
}