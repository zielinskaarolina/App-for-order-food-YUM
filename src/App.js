import { useEffect, useState } from 'react';

import Intro from './Intro';
import Start1OrStart2 from './Start1OrStart2';
import './Start.css';
import SignIn from './SignIn';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Home from './Home';
import Verification from './Verification';
import Success from './Success';
import ShoppingBag from './ShoppingBag';

import man1 from './images/man1.png';
import man2 from './images/man2.png';

import data from './data/foods';

const allCategories = ['All', ...new Set(data.map((item) => item.category))];

function App() {
	const [activeCard, setActiveCard] = useState('Intro');
	const [foods, setFoods] = useState(data);
	const [categories, setCategories] = useState(allCategories);
	const [shoppingBag, setShoppingBag] = useState([]);
	const [price, setPrice] = useState(0);
	const [productsNumber,setProductsNumber] = useState(0)
	

	useEffect(() => {
		setPrice(0)
		shoppingBag.map((item) => {
			setPrice((prev) => (prev += (item.price)));
		});
	},[shoppingBag])


	 useEffect(() => {
		setTimeout(() => {
			setActiveCard('Start1');
		}, 3000);
	}, []); 


	const addToShoppingBag = (id) => {
		
		let shopItem = data.filter((item) => item.id === id);
		setShoppingBag(shoppingBag.concat(shopItem));

	
	};

	const filterFoods = (category) => {
		if (category === 'All') {
			setFoods(data);
			return;
		}
		const newItems = data.filter((item) => item.category === category);
		setFoods(newItems);
	};

	const SuccessRegister = () => {
		setTimeout(() => {
			setActiveCard('Success');
			setTimeout(() => {
				setActiveCard('Home');
			}, 3000);
		}, 100);
	};
	return (
		<div className='App'>
			{activeCard === 'Intro' && <Intro />}
			{activeCard === 'Start1' && (
				<Start1OrStart2
					man={man1}
					h1={'All foods in one place'}
					p={'Order favourite food and we will deliver it to your door'}
					setActiveCard={setActiveCard}
					activeCard={activeCard}
				/>
			)}
			{activeCard === 'Start2' && (
				<Start1OrStart2
					man={man2}
					h1={'Happy customers is our priority'}
					p={'The best price and the highest quality'}
					setActiveCard={setActiveCard}
					activeCard={setActiveCard}
				/>
			)}
			{activeCard === 'SignIn' && <SignIn setActiveCard={setActiveCard} />}
			{activeCard === 'Register' && <Register setActiveCard={setActiveCard} />}
			{activeCard === 'ForgotPassword' && <ForgotPassword />}
			{activeCard === 'Home' && (
				<Home
					filterFoods={filterFoods}
					categories={categories}
					foods={foods}
					addToShoppingBag={addToShoppingBag}
					shoppingBag={shoppingBag}
					setActiveCard={setActiveCard}
					productsNumber={productsNumber}
					setProductsNumber={setProductsNumber}
				/>
			)}
			{activeCard === 'Verification' && (
				<Verification
					setActiveCard={setActiveCard}
					SuccessRegister={SuccessRegister}
				/>
			)}
			{activeCard === 'Success' && <Success />}
			{activeCard === 'ShoppingBag' && (
				<ShoppingBag shoppingBag={shoppingBag} price={price} setActiveCard= {setActiveCard} setShoppingBag={setShoppingBag} setPrice = {setPrice} setProductsNumber={setProductsNumber}
				/>
			)}
		</div>
	);
}

export default App;
