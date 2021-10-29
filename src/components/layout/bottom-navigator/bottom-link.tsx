import React, { MouseEvent, ReactNode, useCallback, useEffect, useState } from 'react';
import Link from 'next/link'
import { classnames } from "@src/components";
import styles from "./style.module.scss";
import { useRouter } from "next/router";

type BottomLinkProps = {
	to: string;
	onClick?: ( e: MouseEvent ) => void;
	icon: ReactNode;
	selected?: boolean
}

export const BottomLink = ( { to, onClick: onPropsClick, icon, selected = false }: BottomLinkProps ) => {
	const router = useRouter();
	const { pathname } = router;

	const [ currentPage, setCurrentPage ] = useState(false);

	const onClick = useCallback(async ( e: MouseEvent ) => {
		e.preventDefault();
		await router.push(to)

		onPropsClick?.(e)
	}, [ onPropsClick, router, to ])

	useEffect(() => {
		setCurrentPage(selected || pathname === to)
	}, [ pathname, to, selected ])

	return (
		<Link href={ to }>
			<a
				className={ classnames({ [ styles[ 'active' ] ]: currentPage }) }
				onClick={ onClick }
			>
				{ icon }
			</a>
		</Link>
	);
}