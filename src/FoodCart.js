import './FoodCart.css';
import sushi from './images/sushi1.png';
import { MdAddShoppingCart } from 'react-icons/md';

const FoodCart = ({ name, image, category, price, fav,addToShoppingBag,id,setProductsNumber}) => {
	return (
		<div className='cart' onClick={() => {
			addToShoppingBag(id)
			setProductsNumber((prev) => prev+=1)
		}}>
			<img src={image} alt='' />

			<p className='name'>{name}</p>
			<p className='price'>
				$<span>{price}</span>
			</p>

			<p className='desc'>The best food you have ever eaten </p>
			<MdAddShoppingCart className='cart_icon' />
		</div>
	);
};

export default FoodCart;
