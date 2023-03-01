import { BsArrowLeft } from 'react-icons/bs';
import verificationHeader from './images/verification.png';

import './Verification.css';

const Verification = ({SuccessRegister}) => {
	return (
		<div className='verification'>
			<BsArrowLeft className='left_arrow' />
			<img src={verificationHeader} alt='' />
			<div className='inputs'>
				<input type='text' />
				<input type='text' />
				<input type='text' />
				<input type='text' />
			</div>
			<div className='sing_in_button'>
				<p className='gray'>
                You didn't get an email?<span className='blue bold'> Send again</span>
				</p>
				<button onClick={SuccessRegister}>Login</button>
			</div>
		</div>
	);
};

export default Verification;
