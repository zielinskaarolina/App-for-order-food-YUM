import { useState } from 'react';
import mini_logo from './images/yum_mini.png'

const Start1OrStart2 = ({man,h1,p,activeCard,setActiveCard}) => {

    return ( 
        <div className='start'>
        <img src={mini_logo} alt=""  width={100}/>
        <img src={man} alt="" className='man' />
        <div className='start_texts'>
            <h1>{h1}</h1>
            <p>{p}</p>
        </div>
        <div className="start_buttons">
            <button onClick={() => {
                if(activeCard === 'Start1'){
                    setActiveCard('Start2')
                }else{
                    setActiveCard('SignIn')
                }
            }} className='blue'>Continue</button>
            <button onClick={() => setActiveCard('SignIn')} className='gray'>Sign in</button>
        </div>
    </div>
     );
}
 
export default Start1OrStart2;