import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { OrderBlock } from './order-block/order-block';

import styles from './orders.module.css';

export const Orders = () => {
	const location = useLocation();
	const {orders} = useSelector(store => store.wsFeed);
	

	return (
		<div className={`${styles.scroller}`}>
			{orders && orders.map((order, index) => {
				return (
					<Link
						to={{ pathname: `/feed/${order._id}`, state: { background: location } }}
						className={`${styles.link}`} key={order._id}
					>
						<OrderBlock order={order} status={false}/>
					</Link>
				)
			})}
		</div >
	)
} 