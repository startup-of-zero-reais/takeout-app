import { Avatar, classnames } from "@src/components";
import { Podium } from "./podium";
import styles from './styles.module.scss';

export const FriendsRanking = () => {
		return (
				<section className={ classnames(styles.section) }>
						<div className={ classnames(styles.podium) }>
								<div>
										<div>
												<Avatar noBadge src={ "/avatar-1.jpg" } size={ 48 }/>
												<small>Nome</small>
												<label>140</label>
										</div>
										<div>
												<Avatar noBadge src={ "/avatar-2.jpg" } size={ 60 }/>
												<small>Nome</small>
												<label>150</label>
										</div>
										<div>
												<Avatar noBadge src={ "/avatar-3.jpg" } size={ 40 }/>
												<small>Nome</small>
												<label>130</label>
										</div>
								</div>

								<div><Podium/></div>
						</div>

						<div className={ classnames(styles.friendsList) }>
								{ [ 4, 5, 6, 7, 8, 9, 10 ].map(( v, k ) => (
										<div className={ classnames(styles.friend) } key={ k.toString() }>
												<small>{ v }</small>
												<div>
														<Avatar src={ "/avatar-1.jpg" } noBadge/>
														<span>Nome</span>
												</div>
												<span>{ (-v * 50) + 600 - (v * k) }</span>
										</div>
								)) }
						</div>
				</section>
		)
}
