import React from 'react';
import { classnames, HeaderNavigator, MainGrid } from "@src/components";
import { IoArrowBackSharp } from "react-icons/io5";
import styles from "@src/components/pages/endereco/styles.module.scss";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { FiMic, FiSearch } from "react-icons/fi";
import { TiLocationArrow } from "react-icons/ti";
import { ImLocation } from "react-icons/im";

type EnderecoProps = {}

const Endereco = ( _: EnderecoProps ) => {
	return (
		<MainGrid>
			<HeaderNavigator
				title="Endereço"
				icon={ IoArrowBackSharp }
				action={ console.log }
			/>

			<div className={ classnames(styles[ 'search-bar' ]) }>
				<TextField
					placeholder={ "Adicionar endereço" }
					variant={ "outlined" }
					InputProps={ {
						startAdornment: (
							<InputAdornment position={ "start" }>
								<IconButton>
									<FiSearch size={ 18 } />
								</IconButton>
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position={ "end" }>
								<IconButton>
									<FiMic size={ 18 } />
								</IconButton>
							</InputAdornment>
						)
					} }
				/>
			</div>

			<div className={ classnames(styles[ 'locations' ]) }>
				{ locations.map(( location ) => (
					<button key={ location.id } className={ classnames(styles[ 'single-location' ]) }>
						<div>
							{ location.isCurrentLocation
								? <TiLocationArrow size={ 32 } />
								: <ImLocation size={ 28 } />
							}
						</div>

						<div>
							<h3>
								{ location.isCurrentLocation
									? 'Localização atual'
									: location.name
								}
							</h3>
							<span>
								{ location.location }
							</span>
						</div>
					</button>
				)) }
			</div>
		</MainGrid>
	);
}

const locations = [
	{
		id: '1234-abcd-5678-efgh',
		name: 'Casa do John',
		isCurrentLocation: true,
		default: false,
		location: '200 Eastern Pkwy, Brooklyn, NY 11238'
	},
	{
		id: '1234-abcd-5678-efgi',
		name: 'Minha casa',
		isCurrentLocation: false,
		default: true,
		location: '29 Norman Ave, Brooklyn, NY 11222'
	},
	{
		id: '1234-abcd-5678-efgj',
		name: 'Trampo',
		isCurrentLocation: false,
		default: false,
		location: '434 Broadway Floor 3, New York, NY 10013'
	},
]

export default Endereco