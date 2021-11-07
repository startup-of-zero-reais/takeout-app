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
				<div className={ classnames(styles['menu-wrapper']) }>
						<div className={ classnames(styles['menu']) }>
								{ getRoutes(routes).map(( route, i ) => (
										<BottomLink
												key={ i.toString(16) }
												onClick={ onClick(i + 1) }
												icon={ route.icon }
												to={ route.href }
												selected={ value === i + 1 }
										/>
								)) }
						</div>
				</div>
		);
}
