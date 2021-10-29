import { useState } from 'react';
import { classnames } from "@src/components";
import { getRoutes, RouteNames } from "@src/routes";
import { BottomLink } from "./bottom-link";
import styles from './style.module.scss';

type BottomNavigatorProps = {}

const routes: RouteNames[] = [ 'home', 'cart', 'prizes', 'profile' ];

export const BottomNavigator = ( _: BottomNavigatorProps ) => {
	const [ value, setValue ] = useState(0)

	const onClick = ( v: number ) => ( e: any ) => {
		e.preventDefault();
		setValue(v)
	}

	return (
		<div className={ classnames(styles[ 'menu-wrapper' ]) }>
			<div className={ classnames(styles[ 'menu' ]) }>
				{ getRoutes(routes).map(( route, i ) => (
					<BottomLink
						key={ i.toString(16) }
						onClick={ onClick(i + 1) }
						icon={ route.icon }
						to={ route.href }
						selected={ value === i + 1 }
					/>
				)) }
				<div className={ classnames(styles[ 'svg-animation' ], styles[ `column-${ value }` ]) }>
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width={ 0 } height={ 0 }>
							<defs>
								<clipPath id="menuMask" clipPathUnits="objectBoundingBox">
									<path
										d="M0 1V0C0 0 0.125 0 0.125 0.375C0.125 0.75 0.5 0.75 0.5 0.75C0.5 0.75 0.875 0.75 0.875 0.375C0.875 0 1 0 1 0V1H1Z"
										fill="white">
									</path>
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}
