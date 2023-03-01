import './BagItem.css';
import { IoIosRemoveCircle } from 'react-icons/io';
import { useEffect, useState } from 'react';

const BagItem = ({
	name,
	price,
	image,
	shoppingBag,
	setShoppingBag,
	setPrice,
	setProductsNumber
}) => {
	const [count, setCount] = useState([]);

	useEffect(() => {
		const amount = shoppingBag.filter((el) => {
			return el.name === name;
		});
		setCount(amount);
	}, []);

	const handleRemove = (name) => {
		if (count.length === 1) {
			setProductsNumber((prev) => prev-=1)
			const amount = shoppingBag.filter((el) => {
				return el.name !== name;
			});
			setShoppingBag(amount);
			return;
		}
		let newCount = count.slice(0, -1);
		setPrice((prev) => (prev -= price));
		setCount(newCount);
		const pos = shoppingBag.map(el => el.name).indexOf(name)
		shoppingBag.splice(pos,1)
		setShoppingBag(shoppingBag)
		setProductsNumber((prev => (prev -= 1)))
	};

	return (
		<div className='bag_item'>
			<img src={image} alt='' width='100px' />
			<h3>{name}</h3>
			<p>{price}$</p>
			<IoIosRemoveCircle
				className='icon_remove'
				onClick={() => handleRemove(name)}
			/>
			<p className='amount'>{count.length}</p>
		</div>
	);
};

export default BagItem;
