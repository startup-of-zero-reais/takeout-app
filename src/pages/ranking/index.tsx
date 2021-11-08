import { FaStar } from "react-icons/fa";
import { MdCreditScore } from "react-icons/md";
import { classnames, MainGrid } from "@src/components";
import styles from './styles.module.scss';

const Ranking = () => {
		return (
				<MainGrid className={ classnames(styles.mainGrid) }>
						<h1>Seu ranking</h1>

						<section className={ classnames(styles.section) }>
								<label>Total economizado</label>
								<div className={ classnames(styles.pointsAndCredits) }>
										<span>
												<i>
														<MdCreditScore/>
														<small>Créditos</small>
												</i>
												R$ 6.75
										</span>
										<span>
												<i>
														<FaStar size={ 18 }/>
														<small>Pontos</small>
												</i>
												70
										</span>
								</div>
						</section>

						<section className={ classnames(styles.section) }>
								<label>Você recebeu uma insígnia</label>
								<div className={ classnames(styles.badgeReceived) }>
										<div className={ classnames(styles.badgeIcon) }>
												<BadgeSvg/>
										</div>
										<span>3ª Águia</span>
										<small>Top 3 ranqueado nos últimos 3 pedidos</small>
								</div>
						</section>
				</MainGrid>
		);
}

const BadgeSvg = () => (
		<svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
						d="M14.9067 52.8638L3.43115 72.7559L16.8248 72.0449L22.9099 84L33.5256 65.596C25.9193 63.6283 19.3878 59.048 14.9067 52.8638Z"
						fill="#E92F48"/>
				<path
						d="M69.0107 52.7646C64.5627 58.9654 58.0312 63.5623 50.4414 65.5631L61.0902 84.0001L67.1753 72.045L80.569 72.756L69.0107 52.7646Z"
						fill="#E92F48"/>
				<path
						d="M41.9257 66.704C60.3455 66.704 75.2777 51.7718 75.2777 33.352C75.2777 14.9322 60.3455 0 41.9257 0C23.5059 0 8.57373 14.9322 8.57373 33.352C8.57373 51.7718 23.5059 66.704 41.9257 66.704Z"
						fill="#F1C2AF"/>
				<path
						d="M41.9258 57.5268C55.2772 57.5268 66.1006 46.7034 66.1006 33.352C66.1006 20.0007 55.2772 9.17725 41.9258 9.17725C28.5744 9.17725 17.751 20.0007 17.751 33.352C17.751 46.7034 28.5744 57.5268 41.9258 57.5268Z"
						fill="#D97953"/>
				<path
						d="M58.4943 30.7394C59.2384 30.0118 58.825 28.7386 57.7998 28.5898L48.2589 27.2008C47.8455 27.1346 47.4983 26.8866 47.3164 26.5063L43.0502 17.8583C42.5873 16.9157 41.2479 16.9157 40.7849 17.8583L36.5353 26.5063C36.3534 26.8701 35.9896 27.1346 35.5928 27.2008L26.0518 28.5898C25.0266 28.7386 24.6133 30.0118 25.3573 30.7394L32.2526 37.4693C32.5503 37.7669 32.6825 38.1803 32.6164 38.5772L30.9959 48.0685C30.814 49.0937 31.9054 49.8874 32.8314 49.3913L41.3636 44.9102C41.7274 44.7118 42.1739 44.7118 42.5376 44.9102L51.0699 49.3913C51.9959 49.8709 53.0707 49.0937 52.9054 48.0685L51.2683 38.5772C51.2022 38.1638 51.3345 37.7504 51.6321 37.4693L58.4943 30.7394Z"
						fill="#F1C2AF"/>
		</svg>
)

export default Ranking;
