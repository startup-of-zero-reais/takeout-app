import React from 'react';
import { FaStar } from "react-icons/fa";
import { Avatar, classnames, MainGrid } from "@src/components";
import styles from './styles.module.scss';
import { Button } from "@mui/material";

type RankingProps = {}

const Index = ( _p: RankingProps ) => {
		return (
				<MainGrid className={ classnames(styles.mainGrid) }>
						<div className={ classnames(styles.info) }>
								<div className={ classnames(styles.avatar) }>
										<Avatar
												src={ "/avatar-2.jpg" }
												size={ 160 }
												badge={ {
														model: "custom",
														anchorPoints: { horizontal: "center", vertical: "bottom" },
														customComponent: <AvatarBadge/>,
														className: classnames(styles.badge)
												} }
										/>
								</div>

								<div className={ classnames(styles.profileInfo) }>
										<h2>John Doe</h2>
										<span>
												434 Broadway Floor 3, New York, NY 10013
										</span>
								</div>

								<div className={ classnames(styles.saveButton) }>
										<Button
												variant={ "contained" }
												size={ "large" }
												fullWidth
										>
												Salvar
										</Button>
								</div>
						</div>
				</MainGrid>
		);
}

const AvatarBadge = () => {
		return (
				<div>
						<FaStar size={ 12 }/>
						<span>2</span>
				</div>
		)
}

export default Index
