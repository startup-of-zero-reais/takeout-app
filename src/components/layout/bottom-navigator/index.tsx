import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { FiHome, FiShoppingCart, FiUser } from 'react-icons/fi';
import { BsTrophy } from 'react-icons/bs';
import styles from './style.module.scss';
import { classnames } from "@src/components";
import { BottomLink } from "./bottom-link";

type BottomNavigatorProps = {}

export const BottomNavigator = ( _: BottomNavigatorProps ) => {
	const [ win, setWin ] = useState<number>( 1024 );
	const [ value, setValue ] = useState( 1 )

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
		<nav className={ classnames( styles[ 'bottom-menu' ] ) }>
			<div className={ classnames( styles[ 'menu' ] ) }>
				<BottomLink
					onClick={ onClick( 1 ) }
					icon={ <FiHome size={ 24 }/> }
					to={ "#" }
					selected={ value === 1 }
				/>

				<BottomLink
					onClick={ onClick( 2 ) }
					icon={ <FiShoppingCart size={ 24 }/> }
					to={ "#" }
					selected={ value === 2 }
				/>

				<BottomLink
					onClick={ onClick( 3 ) }
					icon={ <BsTrophy size={ 24 }/> }
					to={ "#" }
					selected={ value === 3 }
				/>

				<BottomLink
					onClick={ onClick( 4 ) }
					icon={ <FiUser size={ 24 }/> }
					to={ "#" }
					selected={ value === 4 }
				/>

				<div className={ classnames( styles[ 'svg-animation' ], styles[ `column-${ value }` ] ) }>
					{ genSvg( win ) }
				</div>
			</div>
		</nav>
	);
}

function genSvg( windowWidth: number = 1024 ) {
	const size = _.clamp( windowWidth / 4, 40, 115 )
	const width = size;
	const height = size > 60 ? 60 : size;
	const R = size / 4;

	function makePath() {
		const arc = ( x: number, y: number, reverse = false ) =>
			`a ${ R } ${ R } 0 0 ${ reverse ? 0 : 1 } ${ x } ${ y }`

		return [
			`M 0 0`,
			arc( R, R ),
			arc( 2 * R, 0, true ),
			arc( R, -R ),
			`Z`
		].join( ' ' )
	}

	const d = makePath()

	return (
		<svg width={ width } height={ height }>
			<path d={ d } fill="white"/>
		</svg>
	)
}