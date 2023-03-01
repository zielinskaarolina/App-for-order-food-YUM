import SuccessHeader from './images/Success.png'
import './Success.css'
import {BsArrowRight} from '../node_modules/react-icons/bs'

const Success = () => {
    return ( 
        <div className="success">
            <BsArrowRight className='arrow_right'/>
            <img src={SuccessHeader} alt="" />
        </div>
     );
}
 
export default Success;