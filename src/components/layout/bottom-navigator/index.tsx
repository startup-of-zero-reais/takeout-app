import { useEffect, useState } from 'react';
import _ from 'lodash';
import styles from './style.module.scss';
import { classnames } from "@src/components";
import { BottomLink } from "./bottom-link";
import { getRoutes, RouteNames } from "@src/routes";

type BottomNavigatorProps = {}

const routes: RouteNames[] = [ 'home', 'cart', 'prizes', 'profile' ];

export const BottomNavigator = ( _: BottomNavigatorProps ) => {
	const [ win, setWin ] = useState<number>( 1024 );
	const [ value, setValue ] = useState( 0 )

	const onClick = ( v: number ) => ( e: any ) => {
		e.preventDefault();
		setValue( v )
	}

	useEffect( () => {
		function listenResize( this: Window ) {
			setWin( this.window.innerWidth )
		}

		addEventListener( 'resize', listenResize )

		return () => {
			removeEventListener( 'resize', listenResize )
		}
	}, [] )

	return (
		<div className={ classnames( styles[ 'menu-wrapper' ] ) }>
			<div className={ classnames( styles[ 'menu' ] ) }>
				{ getRoutes( routes ).map( ( route, i ) => (
					<BottomLink
						key={ i.toString( 16 ) }
						onClick={ onClick( i + 1 ) }
						icon={ route.icon }
						to={ route.href }
						selected={ value === i + 1 }
					/>
				) ) }
			</div>

			<nav className={ classnames( styles[ 'bottom-menu' ] ) }>
				<div className={ classnames( styles[ 'svg-animation' ], styles[ `column-${ value }` ] ) }>
					{ genSvg( win ) }
				</div>
			</nav>
		</div>
	);
}

function genSvg( windowWidth: number = 1024 ) {
	const size = _.clamp( windowWidth / 4, 40, 115 )
	const width = windowWidth;
	const height = size > 60 ? 60 : size;
	const R = size / 4;

	function makePath() {
		const arc = ( x: number, y: number, reverse = false ) =>
			`a ${ R } ${ R } 0 0 ${ reverse ? 0 : 1 } ${ x } ${ y }`

		return [
			`M 0 0`,
			`h ${ width / 2 }`,
			arc( R, R ),
			arc( 2 * R, 0, true ),
			arc( R, -R ),
			`h ${ width / 2 }`,
			`v ${ height + R / 2 }`,
			`h ${ -width - width }`,
			`v ${ -height - R / 2 }`,
			`Z`
		].join( ' ' )
	}

	const d = makePath()

	return (
		<svg width={ width } height={ height }>
			<clipPath id="menumask">
				<path d={ d }/>
			</clipPath>
		</svg>
	)
}