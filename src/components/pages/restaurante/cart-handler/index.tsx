import React, { useCallback, useMemo, useState } from 'react';
import { IconButton } from "@mui/material";
import { MdAdd, MdRemove } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { classnames } from "@src/components";
import styles from "./styles.module.scss";

type CartHandlerProps = {
    isOnCart?: boolean
}

export const CartHandler = ( { isOnCart = false }: CartHandlerProps ) => {
    const id = useMemo(() =>
            ( Math.random() * 0x100000 )
                .toString(16)
                .replace(/\./, '-'),
        []
    )

    const [ onCart, setOnCart ] = useState(isOnCart);
    const [ qtd, setQtd ] = useState(1);

    const handleAddToCart = useCallback(() => setOnCart(true), [])
    const handleRemoveFromCart = useCallback(() => setOnCart(false), [])

    const handleChangeQtd = useCallback(( newQtd: number ) => {
        if ( newQtd <= 0 ) {
            handleRemoveFromCart()
            return;
        }

        setQtd(newQtd)
    }, [ handleRemoveFromCart ])

    const handleIncrement = useCallback(
        () => handleChangeQtd(qtd + 1),
        [ handleChangeQtd, qtd ]
    );

    const handleDecrement = useCallback(
        () => handleChangeQtd(qtd - 1),
        [ handleChangeQtd, qtd ]
    );

    if ( onCart ) {
        return (
            <div className={ classnames(styles[ 'is-on-cart' ]) }>
                <IconButton onClick={ handleDecrement }>
                    <MdRemove />
                </IconButton>
                <label htmlFor={ `quantity-${ id }` }>{ qtd }</label>
                <IconButton onClick={ handleIncrement }>
                    <MdAdd />
                </IconButton>
            </div>
        )
    }

    return (
        <IconButton onClick={ handleAddToCart }>
            <GiShoppingBag size={ 24 } />
        </IconButton>
    )
}