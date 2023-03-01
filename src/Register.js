import './Register.css';
import registerHeader from './images/register.png'
import { BsArrowLeft } from 'react-icons/bs';

const Register = ({setActiveCard}) => {
	return (
		<div className='register'>
            <BsArrowLeft className='left_arrow'/>
            <img src={registerHeader} alt="" />
			<div className='sign_in_bottom'></div>
			<div className='sign_in_buttons'>
				<div className='input-container'>
					<p className='bold'>Name</p>
					<input type='text' className='input' />
				</div>
				<div className='input-container'>
					<p className='bold'>Email</p>
					<input type='text' className='input' />
				</div>
				<div className='input-container'>
					<p className='bold'>Password</p>
					<input type='text' className='input' />
				</div>
				<div className='sing_in_button'>
					<button onClick={() => setActiveCard('Verification')}>Continue</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
