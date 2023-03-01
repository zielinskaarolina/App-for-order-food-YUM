import BagItem from './BagItem';
import './ShoppingBag.css';
import { BsArrowLeft } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const ShoppingBag = ({ shoppingBag, price, setActiveCard, setShoppingBag,setPrice,setProductsNumber}) => {
	//only show no repeating bag item
	const newShopping = [...new Set(shoppingBag)];
	
	const bag = newShopping.map((item, index) => {
		return (
			<BagItem
				key={index}
				{...item}
				shoppingBag={shoppingBag}
				setShoppingBag={setShoppingBag}
				setPrice = {setPrice}
				setProductsNumber={setProductsNumber}
			/>
		);
	});

	return (
		<div className='shopping_bag'>
			<BsArrowLeft className='icon' onClick={() => setActiveCard('Home')} />
			<div className='shoppingCards'>
				<h2>Shopping cart</h2>
				<div className='cards'>{bag}</div>
				<p className='cost'>
					Shopping cost{' '}
					<span>
						{price.toFixed(2) === -0.00 ? 0 : price.toFixed(2) }
						<span>$</span>
					</span>
				</p>
				<button className='blue'>Pay</button>
			</div>
		</div>
	);
};

export default ShoppingBag;
