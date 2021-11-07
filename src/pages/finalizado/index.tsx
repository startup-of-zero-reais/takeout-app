import { useEffect, useState } from "react";
import Link from 'next/link';
import { Button, LinearProgress, LinearProgressProps } from "@mui/material";
import { Avatar, classnames, MainGrid } from "@src/components";
import styles from './styles.module.scss';

type ProgressBarType = LinearProgressProps['variant'];
type OrderStates = 'pending' | 'accepted' | 'preparing' | 'delivering' | 'delivered';
type BarColors = LinearProgressProps['color'];

const orderFeedbackTitle = new Map<OrderStates, string>([
		[ 'pending', 'Seu pedido foi enviado ao restaurante!' ],
		[ 'accepted', 'Seu pedido foi aceito!' ],
		[ 'preparing', 'Seu pedido está sendo preparado, em breve sairá para entrega' ],
		[ 'delivering', 'Seu pedido está a caminho!' ],
		[ 'delivered', 'Pedido entregue!' ]
]);

const orderFeedbackMessage = new Map<OrderStates, string>([
		[ 'pending', 'O restaurante costuma aceitar pedidos em até 2min' ],
		[ 'accepted', 'Até iniciar o preparo costuma-se demorar 1min' ],
		[ 'preparing', 'Tempo médio de preparo é de 40min' ],
		[ 'delivering', 'Tempo médio de entrega até sua localidade é 15min' ],
		[ 'delivered', 'Tenha um ótimo apetite! Nos vemos em breve :)' ]
]);

const Finished = () => {
		const [ barColor, setBarColor ] = useState<BarColors>("info")
		const [ orderState, setOrderState ] = useState<OrderStates>('pending');
		const [ progressBarType, setProgressBarType ] = useState<ProgressBarType>('indeterminate')
		const [ progressValue, setProgressValue ] = useState<number | undefined>();

		useEffect(() => {
				const clean1 = executeAfter(() => {
						setProgressBarType("determinate")
						setProgressValue(10)
						setOrderState('accepted');
						setBarColor('primary')
				}, 5000)

				const clean2 = executeAfter(() => {
						setProgressValue(40);
						setOrderState('preparing')
				}, 10000)

				const clean3 = executeAfter(() => {
						setProgressValue(70);
						setOrderState('delivering')
						setBarColor('secondary')
				}, 15000)

				const clean4 = executeAfter(() => {
						setProgressValue(100);
						setOrderState('delivered')
						setBarColor('success')
				}, 20000)

				return () => {
						clearTimeout(clean1)
						clearTimeout(clean2)
						clearTimeout(clean3)
						clearTimeout(clean4)
				}
		}, [])

		return (
				<MainGrid>
						<div className={ classnames(styles.finishedHeader) }>
								<h3>{ orderFeedbackTitle.get(orderState) }</h3>
								<span>{ orderFeedbackMessage.get(orderState) }</span>
								<LinearProgress
										color={ barColor }
										variant={ progressBarType }
										value={ progressValue }
								/>
						</div>

						<div className={ classnames(styles.deliveryMan) }>
								<div className={ classnames(styles.deliveryManAvatar) }>
										<Avatar
												src={ "/avatar-1.jpg" }
												size={ 60 }
												badge={ {
														model: "custom",
														anchorPoints: { horizontal: 'left', vertical: 'top' },
												} }
										/>
								</div>

								<div className={ classnames(styles.deliveryManInfo) }>
										<span>Abdu Ali</span>
										<small>Entregador</small>
								</div>

								<div className={ classnames(styles.deliveryManContact) }>
										<Link href={ "/contato" } passHref>
												<Button>
														Falar com Abdu Ali
												</Button>
										</Link>
								</div>
						</div>

						<div className={ classnames(styles.orderInfos) }>
								<div className={ classnames(styles.info) }>
										<h2>22h40</h2>
										<span>Hora estimada de entrega</span>
								</div>

								<div className={ classnames(styles.info) }>
										<h2>Endereço</h2>
										<span>434 Broadway Floor 3<br/>New York, NY 10013</span>
								</div>

								<div className={ classnames(styles.info) }>
										<h2>Detalhes do pedido</h2>
										<ul>
												<li>1x - California Roll</li>
												<li>2x - Coke cola 300ml</li>
										</ul>
								</div>
						</div>
				</MainGrid>
		)
}

function executeAfter( callback: () => void, time: number = 100 ) {
		return setTimeout(callback, time)
}

export default Finished;
