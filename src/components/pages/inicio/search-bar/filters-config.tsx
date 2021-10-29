import React, { useCallback, useState } from "react";
import { Button, IconButton } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import { classnames } from "@src/components";
import { TabButton } from "./tab-button";
import styles from "./styles.module.scss";

type Tabs = 1 | 2 | 3;

type FiltersConfigProps = {
	opened?: boolean
	onClose?: () => void;
	close: () => void;
}

export const FiltersConfig = ( { opened = false, onClose, close }: FiltersConfigProps ) => {
	const [ tab, setTab ] = useState<Tabs>(1)

	const selectTab = useCallback(( tab: Tabs ) => {
		return () => setTab(tab)
	}, [])

	const isActive = useCallback(( currentTab: Tabs ) => {
		return currentTab === tab
	}, [ tab ])

	return (
		<div className={ classnames(
			styles.overlay,
			{ [ styles[ 'overlay-active' ] ]: opened }
		) }
		>
			<div className={ classnames(
				styles.box,
				{ [ styles[ 'box-active' ] ]: opened }
			) }
			     onAnimationEnd={ onClose }
			>
				<div className={ classnames(styles[ 'close-icon' ]) }>
					<IconButton onClick={ close }>
						<AiOutlineClose />
					</IconButton>
				</div>

				<div className={ classnames(styles.buttons) }>
					<TabButton
						isActive={ isActive(1) }
						onClick={ selectTab(1) }
					>
						Sort
					</TabButton>
					<TabButton
						isActive={ isActive(2) }
						onClick={ selectTab(2) }
					>
						Delivery
					</TabButton>
					<TabButton
						isActive={ isActive(3) }
						onClick={ selectTab(3) }
					>
						Dietary
					</TabButton>
				</div>

				<div
					className={ classnames(
						styles[ 'tabs-wrapper' ]
					) }
				>
					<div
						className={ classnames(
							styles[ 'tabs-scroll' ],
							styles[ `col-${ tab }` ],
						) }
					>
						<div>
							<Button>
								Recomendado
							</Button>
							<Button>
								Express
							</Button>
						</div>

						<div>
							<Button>
								Recomendado 2
							</Button>
							<Button>
								Express 2
							</Button>
							<Button>
								Trivia
							</Button>
						</div>

						<div>
							<Button>
								Recomendado 3
							</Button>
							<Button>
								Express 3
							</Button>
						</div>
					</div>
				</div>

				<Button className={ classnames(styles.done) }>
					Done
				</Button>
			</div>
		</div>
	)
}