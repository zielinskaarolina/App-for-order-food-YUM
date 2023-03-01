import './Home.css';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import FoodCart from './FoodCart';
import { useState } from 'react';

const Home = ({
	categories,
	filterFoods,
	foods,
	addToShoppingBag,
	setActiveCard,
	handlePrice,
	productsNumber,
	setProductsNumber,
}) => {
	const allCategories = categories.map((category, index) => {
		return (
			<li key={index} onClick={() => filterFoods(category)}>
				{category}
			</li>
		);
	});

	const allFoods = foods.map((food) => {
		return (
			<FoodCart
				key={food.id}
				{...food}
				addToShoppingBag={addToShoppingBag}
				setProductsNumber={setProductsNumber}
			/>
		);
	});

	return (
		<div className='home'>
			<div className='icon_container'>
				<div className='icon'>
					<AiOutlineShopping
						className='shop_icon'
						onClick={() => setActiveCard('ShoppingBag')}
					/>
					<div className='circle_icon'>{productsNumber}</div>
				</div>
			</div>

			<div className='main'>
				<h1>Home</h1>

				<div className='input'>
					<AiOutlineSearch className='search_icon' />
					<input type='text' placeholder='Search products' />
				</div>

				<div className='filter'>
					<ul>{allCategories}</ul>
				</div>

				<div className='food'>{allFoods}</div>
			</div>
		</div>
	);
};

export default Home;
