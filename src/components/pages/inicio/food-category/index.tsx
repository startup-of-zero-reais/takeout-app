import React from 'react';
import styles from './styles.module.scss';
import { classnames } from "@src/components";

export const FoodCategory = () => {
	return (
		<div className={ classnames( styles[ 'category-bullets-wrapper' ] ) }>
			<h1>Explore</h1>

			<div className={ classnames( styles[ 'category-bullets' ] ) }>
				<div className={ classnames( styles[ 'bullets-inner-scroll' ] ) }>
					{ [ 'Italiana', 'Chinesa', 'Japonesa', 'Mexicana', 'Express', 'Fast food', 'Doceria', 'Padaria' ].map( ( category, k ) => (
						<button key={ k.toString() } className={ classnames( { [ styles[ 'active' ] ]: k === 1 } ) }>
							{ category }
						</button>
					) ) }
				</div>
			</div>
		</div>
	);
}