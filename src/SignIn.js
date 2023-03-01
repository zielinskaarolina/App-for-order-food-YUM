import './SignIn.css'

import header from './images/login.png'

const SignIn = ({setActiveCard}) => {
    return ( 
    <div className="sign_in">
        <img src={header} alt="" className="header_img"/>
        <div className="sign_in_bottom"></div>
        <div className="sign_in_buttons">
            <div className="input-container">
                <p className="bold">Email</p>
                <input type="text" className="input" />
            </div>
            <div className="input-container">
                <p className="bold">Password</p>
                <input type="text" className="input" />
            </div>
            <div className="sing_in_button">
                <span className="bold blue" onClick={() => setActiveCard('ForgotPassword')}>Forgot Password?</span>
                <button onClick={() => setActiveCard('Home')}>Login</button>
                <p className="gray" >Don't have an account? <span className="blue bold" onClick={() => setActiveCard('Register')}> Signs Up</span></p>
            </div>
        </div>
    </div> 
    );
}
 
export default SignIn;